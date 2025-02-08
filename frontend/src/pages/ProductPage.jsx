import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import Cart Context
import FullHeader from "../components/FullHeader";

const ProductPage = () => {
    const { productId } = useParams();
    const { addToCart, cart } = useCart(); // Get Add to Cart Function & Cart
    const [product, setProduct] = useState(null);
    const [addedToCart, setAddedToCart] = useState(false); // Track if added to cart

    useEffect(() => {
        fetch("/data/products.json")
            .then((response) => response.json())
            .then((data) => {
                const foundProduct = data.find((p) => p.id === productId);
                setProduct(foundProduct);
            })
            .catch((error) => console.error("Error loading product:", error));
    }, [productId]);

    const handleAddToCart = () => {
        addToCart(product);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000); // Hide message after 2 seconds
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <FullHeader />
            <div className="bg-[#F5F4EE] min-h-screen flex flex-col items-center py-12 relative">
                <img src={product.image} alt={product.name} className="w-96 h-auto object-contain rounded-md shadow-lg" />
                <h1 className="text-3xl font-bold mt-6">{product.name}</h1>
                <p className="text-lg text-gray-600 mt-2 max-w-2xl text-center">{product.description}</p>
                <p className="text-2xl font-bold mt-4">${product.price}</p>

                <button 
                    onClick={handleAddToCart}
                    className="mt-6 bg-[#F1DBCE] hover:bg-[#e5c1b0] text-[#262522] px-6 py-3 text-lg rounded-md transition"
                >
                    Add to Cart
                </button>

                {/* Fade-in Added to Cart Message (Floating Over Page) */}
                {addedToCart && (
                    <div className="absolute top-10 right-10 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-500">
                        ✅ Added to Cart!
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductPage;
