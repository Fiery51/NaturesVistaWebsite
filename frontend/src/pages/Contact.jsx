import FullHeader from "../components/FullHeader";

const Contact = () => {
    return (
        <div>
            <FullHeader />
            <div className="bg-[#F5F4EE] min-h-screen flex flex-col items-center py-12 text-center">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="text-lg text-gray-700 mt-4 max-w-3xl">
                    Have questions or feedback? We'd love to hear from you!  
                    Reach out via the form below, or email us at: 
                    <strong> contact@naturesvista.com</strong>
                </p>

                {/* Simple Contact Form */}
                <form className="mt-6 bg-white shadow-md rounded-lg p-6 w-96">
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full p-3 border rounded-md mb-4"
                    />
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full p-3 border rounded-md mb-4"
                    />
                    <textarea 
                        placeholder="Your Message" 
                        className="w-full p-3 border rounded-md mb-4 h-24"
                    ></textarea>
                    <button type="submit" className="bg-[#F1DBCE] hover:bg-[#e5c1b0] text-[#262522] px-6 py-3 text-lg rounded-md transition w-full">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
