
import { BiDollar } from "react-icons/bi";
import { MdOutlineColorLens, MdProductionQuantityLimits } from "react-icons/md";

const MyProduct = ({ product }) => {
    return (
        <div className="border-2 border-green-400 p-5 rounded-2xl">
            {/* Product Name */}
            <div className="flex flex-row justify-start items-center gap-3 text-xl">
                <MdProductionQuantityLimits />
                <h1>{product?.name}</h1>
            </div>

            {/* Product Color */}
            <div className="flex flex-row justify-start items-center gap-3 text-xl">
                <MdOutlineColorLens />
                <p>{product?.color}</p>
            </div>

            {/* Product Price */}
            <div className="flex flex-row justify-start items-center gap-3 text-xl">
                <BiDollar />
                <p>{product?.price}</p>
            </div>
        </div>
    );
};

export default MyProduct;