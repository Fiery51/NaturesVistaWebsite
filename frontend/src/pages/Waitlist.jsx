import { useState } from "react";
import { useLocation } from "react-router-dom";
import FullHeader from "../components/FullHeader";

const Waitlist = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const productInterest = params.get("product") || "aboutPage"; // Default to 'aboutPage' instead of 'Unknown'

    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Simulate sending data to backend
        console.log("Submitting to backend:", { email, productInterest });
        // TODO: Replace with actual backend request when ready
        
        setSubmitted(true);
    };

    return (
        <div>
            <FullHeader />
            <div className="bg-[#F5F4EE] min-h-screen flex flex-col items-center py-12 px-6">
                <h1 className="text-4xl font-bold text-center">Join the Waitlist</h1>
                <p className="text-lg text-gray-700 mt-4 max-w-3xl text-center">
                    Be the first to know when we launch! Enter your email below to stay updated.
                </p>

                {/* Email Form */}
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="mt-6 flex flex-col items-center">
                        <input 
                            type="email" 
                            required 
                            placeholder="Enter your email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-2 border border-gray-400 rounded-md w-72 text-lg"
                        />
                        <button 
                            type="submit" 
                            className="mt-4 bg-[#F1DBCE] hover:bg-[#e5c1b0] text-[#262522] px-6 py-3 text-lg rounded-md transition">
                            Sign Up
                        </button>
                    </form>
                ) : (
                    <p className="mt-6 text-green-600 font-semibold text-lg">✅ You're on the list!</p>
                )}
            </div>
        </div>
    );
};

export default Waitlist;
