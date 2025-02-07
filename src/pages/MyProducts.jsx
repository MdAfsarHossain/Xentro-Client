import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../components/LoadingSpinner";
import MyProduct from "../components/MyProduct";

const MyProducts = () => {

    const [searchText, setSearchText] = useState("");
    // const [sortType, setSortType] = useState("");
    // const [isLoading, setIsLoading] = useState(true);


    // const [displayProduct, setDisplayedProduct] = useState([]);
    // console.log(displayProduct);

    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/my-products?search=${searchText}`);
            return data;
        }
    })

    // Handle Search Btn
    const handleSearchBtn = async () => {
        refetch();
    }

    useEffect(() => {
        // setDisplayedProduct(products);
        refetch();
        // setIsLoading(true);
        // const getProductData = async () => {
        //     setIsLoading(true);
        //     const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/my-products?search=${searchText}`);
        //     setDisplayedProduct(data);
        //     setIsLoading(false);
        // }
        // getProductData()
    }, [searchText])

    if (isLoading) return <LoadingSpinner />


    return (
        <div>
            {/* <h1>My Products: {myProducts?.length}</h1> */}
            <Helmet>
                <title>Xentro | My Products</title>
            </Helmet>

            <div className=" flex justify-center items-center">
                <h1 className="uppercase text-4xl font-bold">My <span className="text-green-500">Products</span></h1>
            </div>


            {/* Search and Sorting */}
            <div className="border-0 flex flex-row gap-5 justify-between mt-8 px-5 md:px-10">
                {/* Search By Product Name */}
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

                {/* Sorting By Price */}
                {/* <div className="flex-1 hidden lg:block">
                    <div className="flex flex-row gap-3 justify-center items-center">
                        <label htmlFor="artifactType" className="block mb-2 text-lg">
                            Filter:
                        </label>
                        <div className="artifact-dropdown">
                            <select
                                id="artifacteType"
                                value={sortType}
                                onChange={handleChange}
                                className="w-full p-2 border border-green-500 rounded-lg"
                            >
                                <option value="" disabled>
                                    -- Choose Sorting --
                                </option>
                                {sortingType?.map((type, index) => (
                                    <option
                                        key={index} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div> */}
            </div>

            {
                myProducts?.length === 0 && (
                    <div className="text-center flex flex-col h-52 justify-center items-center text-5xl text-red-500 capitalize">
                        <p>No product found.</p>
                    </div>
                )
            }

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 mt-7 mb-16">
                {myProducts?.map((product) => (
                    <MyProduct
                        key={product?.id}
                        product={product}
                    // handleDeleteProduct={handleDeleteProduct}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyProducts;