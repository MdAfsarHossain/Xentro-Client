import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {

    const { createUser, user, setUser, updateUserProfile, setLoading } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userName = data.username;
        const email = data.email;
        const password = data.password;
        try {

            // 1. User Registration
            const result = await createUser(email, password);
            const image_url = "https://i.ibb.co.com/VHmsdPH/boy.png";

            // 2. Save username and photo in firebase
            await updateUserProfile(userName, image_url);

            // save user info in db if the user is new
            toast.success("User Registered successfully!!");
            setUser({ ...user, displayName: userName, photoURL: image_url });
            setLoading(false);
            navigate("/profile");
        } catch (error) {
            toast.error("Error Registering: " + error.message);
        }
        // finally {
        // setLoading(true);
        // setError("");
        // }
    };


    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 justify-center mx-auto mt-8 border-green-500">

            <Helmet>
                <title>Xentro | Register</title>
            </Helmet>

            <h1 className="text-2xl font-bold text-center">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* User Name */}
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block text-gray-400">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-green-300 focus:border-violet-400" data-shuddhi="true"
                        {...register("username", { required: true })}
                    />
                    {errors.username && (
                        <span className="text-red-500">This field is required</span>
                    )}
                </div>

                {/* Email */}
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-400">Email address</label>
                    <input type="email" name="email" id="email" placeholder="example@gmail.com" className="w-full px-4 py-3 border rounded-md border-green-300"
                        {...register("email", { required: true })}
                    />
                    {errors.email && (
                        <span className="text-red-500">This field is required</span>
                    )}
                </div>

                {/* Password */}
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block text-gray-400">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md  border-green-300"

                        {...register("password", { required: true })}
                    />
                    {errors.password && (
                        <span className="text-red-500 text-base">
                            This field is required
                        </span>
                    )}
                    <div className="flex justify-end text-xs text-gray-400">
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type='submit'
                    className="block w-full p-3 text-center rounded-sm  bg-green-500 text-white font-bold text-xl border-2 border-green-500 cursor-pointer hover:bg-transparent hover:text-green-500 transition-all uppercase">Register</button>
            </form>

            <p className="text-xs text-center sm:px-6 text-gray-400">Already have an account?
                <Link
                    to={'/login'}
                    rel="noopener noreferrer" href="#" className="underline ml-2">Login</Link>
            </p>
        </div>
    );
};

export default Register;