import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import FullHeader from "../components/FullHeader";

const ShopAll = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data/products.json") // This works when products.json is in public/
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error loading products:", error));
    }, []);

    return (
        <div>
            <FullHeader />
            <div className="bg-[#F5F4EE] min-h-screen p-8">
            <h1 className="text-3xl font-bold text-center mb-6">Shop All Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
        </div>
    );
};

export default ShopAll;
    