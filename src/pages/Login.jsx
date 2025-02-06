import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {

    const { logInUser } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;

        try {
            await logInUser(email, password)
            toast.success("Successfully logged in!");
            navigate(location?.state ? location.state : "/");
        } catch (error) {
            toast.error("Failed to log in. Please try again later.");
        }

    }

    return (
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 border-2 justify-center w-full mx-auto mt-8 border-green-500">

            <Helmet>
                <title>Xentro | Login</title>
            </Helmet>

            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Login</h1>
                <p className="text-sm text-gray-400">Log in to access your account</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="example@gmail.com" className="w-full px-4 py-3 border rounded-md border-green-300"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <span className="text-red-500">This field is required</span>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-4 py-3 border rounded-md border-green-300"
                            {...register("password", { required: true })}
                        />
                        {errors.password && (
                            <span className="text-red-500 text-base">
                                This field is required
                            </span>
                        )}
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3  rounded-md bg-green-500 text-white font-bold text-xl border-2 border-green-500 cursor-pointer hover:bg-transparent hover:text-green-500 transition-all uppercase">Login</button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-400">Don't have an account yet?
                        <Link
                            to={'/register'}
                            rel="noopener noreferrer" href="#" className="ml-3 underline">Register</Link>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;