import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import FullHeader from "../components/FullHeader";

const SeriesPage = () => {
    const { series } = useParams(); // Get series from the URL
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data/products.json") // Load JSON from public/
            .then((response) => response.json())
            .then((data) => {
                console.log("Raw Series Param:", series); // Debugging log
                console.log("Raw Product Data:", data); // Debugging log

                // Normalize series name for filtering
                const formattedSeries = series.replace("Series", "").trim(); // Converts "NeptuneSeries" → "Neptune"

                console.log("Formatted Series Name:", formattedSeries); // Debugging log

                const filtered = data.filter(product => product.series.toLowerCase() === formattedSeries.toLowerCase());
                setProducts(filtered);
            })
            .catch((error) => console.error("Error loading products:", error));
    }, [series]);

    return (
        <div>
            <FullHeader />
            <div className="bg-[#F5F4EE] text-[#262522] min-h-screen">
                <div className="max-w-6xl mx-auto py-12">
                    
                    {/* 🌟 Page Title */}
                    <h1 className="text-4xl font-bold text-center capitalize">{series.replace("Series", "").trim()} Series</h1>
                    <p className="text-center text-gray-600 mt-2 max-w-3xl mx-auto">
                        Discover our premium {series.replace("Series", "").trim()} collection, blending style and durability for every adventure.
                    </p>

                    {/* 📦 Product Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-6">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <div key={product.id} className="p-6 bg-white rounded-lg shadow-lg">
                                    <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-md"/>
                                    <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
                                    <p className="text-gray-600">{product.description}</p>
                                    <p className="text-lg font-bold text-gray-800 mt-2">${product.price}</p>
                                    {/* ✅ FIXED: All products now link to `/shop/item/:productId` */}
                                    <Link to={`/shop/item/${product.id}`} className="mt-4 block bg-[#F1DBCE] hover:bg-[#e5c1b0] text-[#262522] px-6 py-3 rounded-md text-center">
                                        View Details
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 text-lg mt-10">No products found for this series.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeriesPage;
