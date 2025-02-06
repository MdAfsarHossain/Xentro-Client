import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MdProductionQuantityLimits } from "react-icons/md";
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const SingleProduct = () => {
    const { id } = useParams();

    const { data: product = [], isLoading, } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/product/${id}`);
            return data;
        }
    })

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className='mt-8'>

            <Helmet>
                <title>Xentro | {product?.name}</title>
            </Helmet>
            <div className="flex flex-row justify-start items-center gap-3 text-2xl font-bold border-2 p-3 rounded-2xl border-green-500 w-fit">
                <MdProductionQuantityLimits />
                <h1>{product?.name}</h1>
            </div>

            <div className='mt-3 border-2 p-3 border-green-500 rounded-2xl w-fit'>
                {
                    Object.entries(product?.data || {}).map(([key, value]) => (
                        <div className="flex flex-row justify-start items-center gap-3" key={key}>
                            <p className='text-xl capitalize font-semibold'>{`${key}`}</p>
                            <p className='text-xl'>{`: ${value}`}</p>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default SingleProduct;