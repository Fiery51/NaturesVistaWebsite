import { Link } from "react-router-dom";

const ProductCard = ({ id, name, image, price, edition }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 hover:scale-105">
            {/* Product Image */}
            <div className="w-full h-60 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Product Details */}
            <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-gray-600 text-sm">{edition}</p>
                <p className="text-lg font-bold text-[#262522] mt-2">${price}</p>

                {/* Shop Button - Uses Universal Route */}
                <Link to={`/shop/item/${id}`} 
                    className="mt-3 inline-block bg-[#F1DBCE] hover:bg-[#e5c1b0] text-[#262522] px-4 py-2 text-md rounded-md transition">
                    View Product
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
