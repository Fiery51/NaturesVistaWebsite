import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FullHeader from "../components/FullHeader";

const ProductPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate(); // Used to redirect users
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch("/data/products.json")
            .then((response) => response.json())
            .then((data) => {
                const foundProduct = data.find((p) => p.id === productId);
                setProduct(foundProduct);
            })
            .catch((error) => console.error("Error loading product:", error));
    }, [productId]);

    const handleJoinWaitlist = () => {
        navigate(`/waitlist?product=${encodeURIComponent(product.name)}`); 
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <FullHeader />
            <div className="bg-[#F5F4EE] min-h-screen flex flex-col items-center py-12">
                <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-10 px-6">
                    {/* Image on the left */}
                    <img src={product.image} alt={product.name} className="w-96 h-auto object-contain rounded-md shadow-lg" />

                    {/* Product Details on the right */}
                    <div className="flex flex-col justify-center md:items-start text-center md:text-left">
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <p className="text-lg text-gray-600 mt-2 max-w-2xl">{product.description}</p>

                        {/* Features Section */}
                        <h2 className="text-xl font-semibold text-gray-800 mt-6">Features</h2>
                        <ul className="mt-2 text-gray-700 list-disc list-inside space-y-2">
                            {product.features?.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>

                        <p className="text-2xl font-bold mt-4">${product.price}</p>

                        {/* Add to Waitlist Button */}
                        <button 
                            onClick={handleJoinWaitlist} 
                            className="mt-6 bg-[#F1DBCE] hover:bg-[#e5c1b0] text-[#262522] px-6 py-3 text-lg rounded-md transition">
                            Join the Waitlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
