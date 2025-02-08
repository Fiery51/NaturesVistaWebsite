import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react"; // Icons

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-[#F5F4EE] shadow-md relative z-50">
            <div className="container mx-auto px-6 flex items-center justify-between h-16">
                
                {/* Left Side - Navigation Links */}
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
        </nav>
    );
};

export default Navbar;
