import { Link } from "react-router-dom";
import FullHeader from "../components/FullHeader";

const About = () => {
    return (
        <div>
            <FullHeader />
            <div className="bg-[#F5F4EE] min-h-screen flex flex-col items-center py-12 px-6">
                <h1 className="text-4xl font-bold text-center">About Nature's Vista</h1>
                <p className="text-lg text-gray-700 mt-4 max-w-3xl text-center">
                    At Nature's Vista, we believe that adventure and sustainability go hand in hand.  
                    Our mission is to craft high-quality sunglasses inspired by nature's landscapes, ensuring that  
                    <strong> style, durability, and eco-conscious materials</strong> come together in every pair.
                </p>

                {/* Two-Column Layout */}
                <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="w-full">
                        <img 
                            src="/AboutPage.png" 
                            alt="Nature Adventure" 
                            className="w-full h-80 object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="text-left">
                        <h2 className="text-3xl font-semibold">Inspired by the Great Outdoors</h2>
                        <p className="text-lg text-gray-700 mt-4">
                            Every great adventure begins with a vision. <strong>Nature's Vista</strong> was born from the desire to 
                            <strong> bring the essence of nature into everyday life</strong>—whether you're walking through towering forests,  
                            conquering sunlit peaks, or soaking in the endless expanse of the ocean.
                        </p>
                        <p className="text-lg text-gray-700 mt-4">
                            Each collection is more than just sunglasses—it's a tribute to the landscapes that inspire us.
                            We capture the raw beauty of the world and translate it into functional, <strong>elegantly designed eyewear</strong> that speaks to the explorer in you.
                        </p>

                        <h2 className="text-2xl font-semibold mt-6">A Collection for Every Landscape</h2>
                        <p className="text-lg text-gray-700 mt-2">
                            The <strong>Neptune Series</strong> is for the dreamers drawn to the ocean—the ones who chase waves,  
                            breathe in the salty air, and find freedom in the open sea.
                        </p>
                        <p className="text-lg text-gray-700 mt-2">
                            The <strong>Alpine Series</strong> captures the crisp air of mountain summits, designed for those  
                            who seek the thrill of the climb and the serenity of untouched peaks.
                        </p>
                        <p className="text-lg text-gray-700 mt-2">
                            The <strong>Sahara Series</strong> embodies the untamed beauty of the desert,  
                            reflecting golden dunes, warm horizons, and the adventurous spirit of those who roam freely.
                        </p>

                        <h2 className="text-2xl font-semibold mt-6">Sustainability Meets Craftsmanship</h2>
                        <p className="text-lg text-gray-700 mt-2">
                            Inspired by nature, our designs are built <strong>to protect it</strong>. We are committed to sustainability,  
                            using <strong>eco-friendly materials</strong> like responsibly sourced wood, lightweight metals, and durable,  
                            long-lasting lenses.  
                        </p>
                        <p className="text-lg text-gray-700 mt-2">
                            Every pair is <strong>crafted for adventure</strong>—whether you're traveling the world or embracing  
                            the beauty of your own backyard.
                        </p>

                        {/* Explore Button */}
                        <Link to="/shop" className="mt-6 inline-block bg-[#F1DBCE] hover:bg-[#e5c1b0] text-[#262522] px-6 py-3 text-lg rounded-md transition">
                            Explore Our Collections
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
