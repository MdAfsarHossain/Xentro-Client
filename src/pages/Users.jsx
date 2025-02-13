import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../components/LoadingSpinner";
import User from "../components/User";

const Users = () => {

    const [searchText, setSearchText] = useState("");
    const [cityFilter, setCityFilter] = useState("");


    // List of City types
    const cityType = [
        "All City",
        "Gwenborough",
        "Wisokyburgh",
        "McKenziehaven",
        "South Elvis",
        "Roscoeview",
        "South Christy",
        "Howemouth",
        "Aliyaview",
        "Bartholomebury",
        "Lebsackbury",
    ]

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/users?search=${searchText}&city=${cityFilter}`);
            return data;
        }
    })

    useEffect(() => {
        refetch();
    }, [searchText, cityFilter])


    // Handle Search Btn
    const handleSearchBtn = async () => {
        refetch();
    }

    // Handle change event
    const handleChange = (event) => {
        setCityFilter(event.target.value);
    };

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className="lg:px-5">

            <Helmet>
                <title>Xentro | All Users</title>
            </Helmet>

            <div className=" flex justify-center items-center">
                <h1 className="uppercase text-4xl font-bold">All <span className="text-green-500">Users</span></h1>
            </div>


            {/* Search and Sorting */}
            <div className="border-0 flex flex-row gap-5 justify-between mt-8 px-5 md:px-10">
                {/* Search */}
                <div className="flex-1 flex flex-row gap-5 justify-center">
                    <input
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                        type="text"
                        value={searchText}
                        placeholder="Enter user name for search...."
                        className="input input-bordered outline-green-500  border-green-500 lg:w-[350px]"
                    />
                    <button
                        onClick={handleSearchBtn}
                        className="bg-green-500
                        cursor-pointer font-bold px-5 rounded-lg text-white border-2 border-green-500 hover:bg-transparent hover:text-green-500 hover:border-green-500 transition-all outline-lime-700"
                    >
                        Search
                    </button>
                </div>

                {/* Sorting By City Types */}
                <div className="flex-1 hidden lg:block">
                    <div className="flex flex-row gap-3 justify-center items-center">
                        <label htmlFor="artifactType" className="block mb-2 text-lg">
                            Filter:
                        </label>
                        <div className="artifact-dropdown">
                            <select
                                id="artifacteType"
                                value={cityFilter}
                                onChange={handleChange}
                                className="w-full p-2 border border-[#0AB99D] rounded-lg"
                            >
                                <option value="" disabled>
                                    -- Choose City --
                                </option>
                                {cityType?.map((type, index) => (
                                    <option
                                        key={index} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {
                users?.length === 0 && (
                    <div className="text-center flex flex-col h-52 justify-center items-center text-5xl text-red-500 capitalize">
                        <p>No user found.</p>
                    </div>
                )
            }

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 mt-7 mb-16">
                {users?.map((user) => (
                    <User
                        key={user?.id}
                        user={user}
                    />
                ))}
            </div>
        </div>
    );
};

export default Users;