import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import Icons
import FullHeader from "../components/FullHeader";

// ✅ Correct Image Paths (No "public/" in paths)
const heroImages = [
    "/photo1.png",
    "/photo2.png",
];

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);

    // ✅ Auto-Slideshow: Changes image every 15 seconds
    useEffect(() => {const interval = setInterval(() => {setCurrentImage((prev) => (prev + 1) % heroImages.length);}, 15000);return () => clearInterval(interval); }, []);

    // ✅ Manual Navigation Functions
    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    };

    return (
        <div className="bg-[#F5F4EE] text-[#262522]">
            <FullHeader />

            {/* 🌄 Hero Section with Image Carousel */}
            <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 transition-all duration-1000 ease-in-out bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImages[currentImage]})` }}>
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Hero Text */}
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-extrabold">See the World Differently</h1>
                    <p className="mt-4 text-lg md:text-xl">
                        Experience sunglasses inspired by nature’s beauty.
                    </p>
                    <Link to="/shop" className="mt-6 inline-block bg-[#F1DBCE] hover:bg-[#e5c1b0] text-[#262522] px-6 py-3 text-lg rounded-md transition">
                        Shop Now
                    </Link>
                </div>

                {/* Left Navigation Button */}
                <button
                    onClick={prevImage}
                    className="absolute left-5 z-20 bg-black/30 hover:bg-black/50 p-3 rounded-full text-white"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Right Navigation Button */}
                <button
                    onClick={nextImage}
                    className="absolute right-5 z-20 bg-black/30 hover:bg-black/50 p-3 rounded-full text-white"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Pagination Dots */}
                <div className="absolute bottom-6 flex space-x-2 z-20">
                    {heroImages.map((_, index) => (
                        <div key={index} className={`h-3 w-3 rounded-full ${index === currentImage ? "bg-white" : "bg-gray-500"}`}></div>
                    ))}
                </div>
            </div>

            {/* 🌟 Featured Products */}
            <section className="py-16 bg-[#F1DBCE] text-center">
                <h2 className="text-3xl font-bold">Featured Collection</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 px-6 max-w-6xl mx-auto">
                    {/* Placeholder Products */}
                    <div className="p-4 bg-white rounded-lg shadow-md">Product 1</div>
                    <div className="p-4 bg-white rounded-lg shadow-md">Product 2</div>
                    <div className="p-4 bg-white rounded-lg shadow-md">Product 3</div>
                </div>
            </section>

            {/* 🌿 Footer */}
            <footer className="bg-[#262522] text-white py-8 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Nature's Vista. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
