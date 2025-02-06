import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const productName = data.productName;
        const productColor = data.productColor;
        const price = data.price;

        const newProduct = {
            name: productName,
            color: productColor,
            price: price,
        }

        try {
            const result = await axios.post(`${import.meta.env.VITE_API_URL}/add-product`, newProduct);
            toast.success("Product created successfully");
            navigate('/my-products');
        } catch (err) {
            toast.error("Failed to create product. Please try again.");
        }
    }
    

    return (
        <div>

            <Helmet>
                <title>Xentro | Add Product</title>
            </Helmet>

            <div className=" flex justify-center items-center">
                <h1 className="uppercase text-4xl font-bold">Add <span className="text-green-500">Product</span></h1>
            </div>

            {/* Add Product Form */}
            <section className="w-96 p-6 mx-auto rounded-md border-2 border-green-400 mt-10">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
                        <div>
                            <label className="" >Product Name</label>
                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md  dark:border-green-600 focus:border-green-500 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                {...register("productName", { required: true })}
                            />
                            {errors.productName && (
                                <span className="text-red-500">This field is required</span>
                            )}
                        </div>

                        <div>
                            <label className="" >Product Color</label>
                            <input id="emailAddress" type="text" className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md  dark:border-green-600 focus:border-green-500 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                {...register("productColor", { required: true })}
                            />
                            {errors.productColor && (
                                <span className="text-red-500">This field is required</span>
                            )}
                        </div>

                        <div>
                            <label className="" >Price</label>
                            <input id="passwordConfirmation" type="number" className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md  dark:border-green-600 focus:border-green-500 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                {...register("price", { required: true })}
                            />
                            {errors.price && (
                                <span className="text-red-500">This field is required</span>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button
                            type='submit'
                            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 cursor-pointer">ADD</button>
                    </div>
                </form>
            </section>
            {/* End of Add Product Form */}
        </div>
    );
};

export default AddProducts;