import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data/products.json") // Fetch from local JSON instead of backend
            .then((res) => res.json())
            .then((data) => {
                // 🔹 Filter only Neptune Series products
                const filteredProducts = data.filter(product => product.series.toLowerCase() === "neptune");
                setFeaturedProducts(filteredProducts.slice(0, 3)); // Only show 3 items
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching featured products:", error);
                setLoading(false);
            });
    }, []);

    return (
        <section className="py-16 bg-[#F1DBCE] text-center">
            <h2 className="text-4xl font-bold text-gray-900">Featured Collection</h2>
            <p className="text-lg text-gray-700 mt-2">Discover our Neptune Series sunglasses designed for every adventure.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 px-6 max-w-6xl mx-auto">
                {loading ? (
                    // 🔹 Show loading skeletons while fetching data
                    [1, 2, 3].map((_, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg animate-pulse">
                            <div className="w-full h-64 bg-gray-300"></div>
                            <div className="p-6">
                                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                            </div>
                        </div>
                    ))
                ) : (
                    featuredProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition">
                            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-semibold text-gray-900">{product.name}</h3>
                                <p className="text-gray-600 mt-2">${product.price}</p>
                                <Link
                                    to={`/shop/item/${product.id}`}
                                    className="mt-4 inline-block bg-[#262522] text-white px-6 py-2 rounded-lg transition hover:bg-gray-800"
                                >
                                    View Product
                                </Link>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default FeaturedProducts;
