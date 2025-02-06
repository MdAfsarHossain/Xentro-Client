import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from 'react-hot-toast';
import LoadingSpinner from "../components/LoadingSpinner";
import Product from "../components/Product";

const Products = () => {

    const [searchText, setSearchText] = useState("");
    const [sortType, setSortType] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    // List of Sorting types
    const sortingType = [
        "ALL",
        "ASC",
        "DESC",
    ]

    // const { data: products = [], isLoading, refetch } = useQuery({
    //     queryKey: ['products'],
    //     queryFn: async () => {
    //         const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products?search=${searchText}&sort=${sortType}`);
    //         return data;
    //     }
    // })

    const [displayProduct, setDisplayedProduct] = useState([]);
    // console.log(displayProduct);

    useEffect(() => {
        // setDisplayedProduct(products);
        // refetch();
        setIsLoading(true);
        const getProductData = async () => {
            setIsLoading(true);
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products?search=${searchText}&sort=${sortType}`);
            setDisplayedProduct(data);
            setIsLoading(false);
        }
        getProductData()
    }, [searchText, sortType])

    // Handle Search Button
    const handleSearchBtn = async () => {
        refetch();
    }

    // Handle change event
    const handleChange = (event) => {
        setSortType(event.target.value);
    };

    // Handle Delete Product
    const handleDeleteProduct = async (id) => {

        try {
            // await axios.delete(`${import.meta.env.VITE_API_URL}/product/${id}`)
            const productFilter = displayProduct.filter((product) => product.id !== id);
            // setProducts(productFilter);
            setDisplayedProduct(productFilter)
            // console.log(productFilter)
            toast.success("Product deleted successfully");

        } catch (err) {
            toast.error("Error deleting product: " + err.message)
        }
    }

    if (isLoading) return <LoadingSpinner />;

    return (
        <div>

            <Helmet>
                <title>Xentro | All Products</title>
            </Helmet>

            <div className=" flex justify-center items-center">
                <h1 className="uppercase text-4xl font-bold">All <span className="text-green-500">Products</span></h1>
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
                <div className="flex-1 hidden lg:block">
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
                </div>
            </div>

            {
                displayProduct?.length === 0 && (
                    <div className="text-center flex flex-col h-52 justify-center items-center text-5xl text-red-500 capitalize">
                        <p>No product found.</p>
                    </div>
                )
            }

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 mt-7 mb-16">
                {displayProduct?.map((product) => (
                    <Product
                        key={product?.id}
                        product={product}
                        handleDeleteProduct={handleDeleteProduct}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;