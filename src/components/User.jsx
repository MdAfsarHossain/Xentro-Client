import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { SlPeople } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-md">
            <div className="flex flex-row justify-start items-center gap-3 text-xl">
                <SlPeople />
                <h2 className="text-xl font-bold">{user?.name}</h2>
            </div>

            <div className="flex flex-row justify-start items-center gap-3 text-xl">
                <MdOutlineMailOutline />
                <p>{user?.email}</p>
            </div>


            <div className="flex flex-row justify-start items-center gap-3 text-xl">
                <IoLocationOutline />
                <p>{user?.address?.city}</p>
            </div>

            <div className="mt-5">
                <Link
                to={`/user/${user?.id}`}
                >
                    <button

                        className="bg-green-500 text-white rounded-2xl px-5 py-2 font-bold border-2 border-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500 transition-all cursor-pointer"
                    >View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default User;