import FullHeader from "../components/FullHeader";
import { useNavigate } from "react-router-dom";

const SupportUs = () => {
    const navigate = useNavigate();

    return (
        <div>
            <FullHeader />
            <div className="bg-[#F5F4EE] min-h-screen flex flex-col items-center py-12 px-6">
                <h1 className="text-4xl font-bold text-center">Support Nature's Vista</h1>
                <p className="text-lg text-gray-700 mt-4 max-w-3xl text-center">
                    We appreciate your support in making Nature's Vista a reality!  
                    Every share, purchase, and contribution helps us continue creating  
                    high-quality sunglasses inspired by nature.
                </p>

                <div className="max-w-4xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                    
                    {/* Spread the Word */}
                    <div className="p-6 bg-white rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-semibold">📢 Spread the Word</h2>
                        <p className="text-lg text-gray-700 mt-2">
                            Follow us on social media, share our products, and help spread the word!  
                            The more people that discover <strong>Nature's Vista</strong>, the bigger our impact.
                        </p>
                    </div>

                    {/* Email List Section */}
                    <div className="p-6 bg-white rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-semibold">📩 Stay Updated</h2>
                        <p className="text-lg text-gray-700 mt-2">
                            Join our email list to get exclusive updates and be the first to know about launches.
                        </p>
                    </div>
                </div>

                {/* Email Signup Button */}
                <button 
                    onClick={() => navigate("/waitlist")} 
                    className="mt-10 bg-[#F1DBCE] hover:bg-[#e5c1b0] text-[#262522] px-6 py-3 text-lg rounded-md transition">
                    Sign Up for Updates
                </button>
            </div>
        </div>
    );
};

export default SupportUs;
