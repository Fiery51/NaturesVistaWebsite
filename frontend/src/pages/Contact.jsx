import { useState } from "react";
import FullHeader from "../components/FullHeader";

const Contact = () => {
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
        
        console.log("Adding to waitlist:", { email, source: "contactPage" });
        // TODO: Replace with actual backend request when ready
        
        setSubmitted(true);
    };

    return (
        <div>
            <FullHeader />
            <div className="bg-[#F5F4EE] min-h-screen flex flex-col items-center py-12 text-center">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="text-lg text-gray-700 mt-4 max-w-3xl">
                    We're not up and running yet, but we'd love to keep in touch! 
                    Submit your email below to be added to our waitlist.
                </p>

                {/* Email Form */}
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="mt-6 bg-white shadow-md rounded-lg p-6 w-96">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border rounded-md mb-4"
                        />
                        <button type="submit" className="bg-[#F1DBCE] hover:bg-[#e5c1b0] text-[#262522] px-6 py-3 text-lg rounded-md transition w-full">
                            Join Waitlist
                        </button>
                    </form>
                ) : (
                    <p className="mt-6 text-green-600 font-semibold text-lg">✅ You're on the waitlist!</p>
                )}
            </div>
        </div>
    );
};

export default Contact;
