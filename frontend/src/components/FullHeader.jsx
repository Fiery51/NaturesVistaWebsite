import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header"

const FullHeader = () => {
  return (
    <header className="shadow-black">
        <Header />
        <Navbar />
    </header>
    
  );
};

export default FullHeader;
