import axios from "axios";
import toast from 'react-hot-toast';
import { BiDollar } from "react-icons/bi";
import { MdOutlineColorLens, MdProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = ({ product }) => {

    const handleDeleteProduct = async (id) => {

        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/product/${id}`)
            toast.success("Product deleted successfully");

        } catch (err) {
            toast.error("Error deleting product: " + err.message)
        }
    }

    return (
        <div className="p-4 bg-white shadow-md rounded-md flex flex-col justify-between">
            <div className="">
                <div className="flex flex-row justify-start items-center gap-3 text-xl">
                    <MdProductionQuantityLimits />
                    <h1>{product?.name}</h1>
                </div>

                {
                    product?.data?.price && <div className="flex flex-row justify-start items-center gap-3 text-xl">
                        <BiDollar />
                        <p>{product?.data?.price}</p>
                    </div>
                }

                {
                    product?.data?.color && <div className="flex flex-row justify-start items-center gap-3 text-xl">
                        <MdOutlineColorLens />
                        <p>{product?.data?.color}</p>
                    </div>
                }
            </div>

            <div className="mt-3 flex flex-row justify-between items-center">
                {/* View Details Button */}
                <Link
                    to={`/product/${product?.id}`}
                >
                    <button

                        className="bg-green-500 text-white rounded-2xl px-5 py-2 font-bold border-2 border-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500 transition-all cursor-pointer"
                    >View Details</button>
                </Link>

                {/* Delete Product */}
                <button
                    onClick={() => handleDeleteProduct(product?.id)}
                    className="mt-3 bg-red-500 text-white rounded-2xl px-5 py-2 font-bold border-2 border-red-500 hover:bg-transparent hover:border-red-500 hover:text-red-500 transition-all cursor-pointer"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Product;