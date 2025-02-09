import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react"; // Icons

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-[#F5F4EE] shadow-md relative z-50">
            <div className="container mx-auto px-6 flex items-center justify-between h-16">

                {/* Hamburger Menu for Mobile */}
                <button 
                    className="md:hidden text-gray-800" 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Left Side - Navigation Links (Desktop) */}
                <div className="hidden md:flex space-x-8 text-lg font-medium text-gray-800">
                    
                    {/* Shop Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center focus:outline-none">
                            Shop <ChevronDown size={16} className="ml-1" />
                        </button>
                        <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                            <Link to="/shop" className="block px-4 py-2 hover:bg-gray-200">All Products</Link>
                            <Link to="/shop/NeptuneSeries" className="block px-4 py-2 hover:bg-gray-200">Neptune Series</Link>
                            <Link to="/shop/AlpineSeries" className="block px-4 py-2 hover:bg-gray-200">Alpine Series</Link>
                            <Link to="/shop/SaharaSeries" className="block px-4 py-2 hover:bg-gray-200">Sahara Series</Link>
                        </div>
                    </div>

                    {/* Static Pages */}
                    <Link to="/support" className="hover:text-gray-500">Support Us</Link>
                    <Link to="/about" className="hover:text-gray-500">About Us</Link>
                    <Link to="/contact" className="hover:text-gray-500">Contact</Link>
                </div>

                {/* Right Side - Cart Icon */}
                <Link to="/cart" className="hidden md:flex items-center text-gray-800">
                    <ShoppingCart size={22} className="mr-2" />
                </Link>
            </div>

            {/* Mobile Menu (Sliding in from Left) */}
            <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-md transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:hidden z-50`}>
                <button 
                    className="absolute top-4 right-4 text-gray-800" 
                    onClick={() => setMenuOpen(false)}
                >
                    <X size={28} />
                </button>

                <div className="flex flex-col items-start p-6 space-y-6 text-lg font-medium text-gray-800">
                    <Link to="/" className="hover:text-gray-500" onClick={() => setMenuOpen(false)}>Home</Link>
                    
                    {/* Mobile Shop Dropdown */}
                    <div className="w-full">
                        <button className="flex items-center w-full focus:outline-none">
                            Shop <ChevronDown size={16} className="ml-1" />
                        </button>
                        <div className="mt-2 pl-4 space-y-2">
                            <Link to="/shop" className="block hover:text-gray-500" onClick={() => setMenuOpen(false)}>All Products</Link>
                            <Link to="/shop/NeptuneSeries" className="block hover:text-gray-500" onClick={() => setMenuOpen(false)}>Neptune Series</Link>
                            <Link to="/shop/AlpineSeries" className="block hover:text-gray-500" onClick={() => setMenuOpen(false)}>Alpine Series</Link>
                            <Link to="/shop/SaharaSeries" className="block hover:text-gray-500" onClick={() => setMenuOpen(false)}>Sahara Series</Link>
                        </div>
                    </div>

                    <Link to="/support" className="hover:text-gray-500" onClick={() => setMenuOpen(false)}>Support Us</Link>
                    <Link to="/about" className="hover:text-gray-500" onClick={() => setMenuOpen(false)}>About Us</Link>
                    <Link to="/contact" className="hover:text-gray-500" onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
