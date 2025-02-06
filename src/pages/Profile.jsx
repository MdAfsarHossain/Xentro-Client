import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../hooks/useAuth';

const Profile = () => {

    const { user } = useAuth();

    return (
        <div>

            <Helmet>
                <title>Xentro | Profile</title>
            </Helmet>

            <div className=" flex justify-center items-center">
                <h1 className="uppercase text-4xl font-bold"> <span className="text-green-500">Profiles</span></h1>
            </div>


            {/* Profile Header */}
            <div className="bg-white shadow-md rounded-lg w-full p-6 flex flex-col items-center">
                {/* User Image */}
                <div className="avatar">
                    <div className="w-24 h-24 rounded-full ring text-[#0AB99D] ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt={user?.displayName} />
                    </div>
                </div>

                {/* User Name */}
                <h1 className="mt-4 text-2xl font-bold text-gray-800">{user?.displayName}</h1>
            </div>

            {/* Additional User Info */}
            <div className="mt-6 bg-white shadow-md rounded-lg w-full p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Account Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Email */}
                    <p className="text-gray-600">
                        <span className="font-medium">Email:</span>
                        {user?.email}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;