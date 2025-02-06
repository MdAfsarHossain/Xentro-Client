import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { SlPeople } from 'react-icons/sl';
import { TfiWorld } from "react-icons/tfi";
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const SingleUser = () => {
    const { id } = useParams();

    const { data: user = [], isLoading, } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/user/${id}`);
            return data;
        }
    })

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className='flex flex-col gap-8 mt-10 lg:px-5'>

            <Helmet>
                <title>Xentro | {user?.name}</title>
            </Helmet>

            <div className="flex flex-col gap-2 border-2 border-green-300 p-5 rounded-2xl">
                <div className="flex flex-row justify-start items-center gap-4 text-xl">
                    <SlPeople />
                    <h2>{user?.name}</h2>
                </div>

                <div className="flex flex-row justify-start items-center gap-4 text-xl">
                    {/* <SlPeople /> */}
                    <p>@</p>
                    <h2>{user?.username}</h2>
                </div>
            </div>

            <div className="flex flex-row justify-start items-center gap-4 text-xl p-5 border-2 border-green-300 rounded-2xl">
                <IoLocationOutline />
                <p>{user?.address.street} ,</p>
                <h2>{user?.address.city}</h2>
            </div>

            <div className="flex flex-row justify-start items-center gap-4 text-xl p-5 border-2 border-green-300 rounded-2xl">
                <IoCallOutline />
                <p>{user?.phone}</p>
            </div>

            <div className="flex flex-col gap-2 border-2 border-green-300 p-5 rounded-2xl">
                <div className="flex flex-row justify-start items-center gap-4 text-xl">
                    <MdOutlineMailOutline />
                    <h2>{user?.email}</h2>
                </div>

                <div className="flex flex-row justify-start items-center gap-4 text-xl">
                    <TfiWorld />
                    <p>{user?.website}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;

// {
//     "id": 2,
//     "address": {
//       "suite": "Suite 879",
//       "zipcode": "90566-7771",
//       "geo": {
//         "lat": "-43.9509",
//         "lng": "-34.4618"
//       }
//     },
//     "company": {
//       "name": "Deckow-Crist",
//       "catchPhrase": "Proactive didactic contingency",
//       "bs": "synergize scalable supply-chains"
//     }
//   }