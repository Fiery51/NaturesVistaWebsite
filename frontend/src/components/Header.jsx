import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 bg-[#F5F4EE]">
      <Link to="/" className="flex justify-center items-center h-16">
        <img src="/LogoWithName.png" alt="Brand Logo" className="h-25 w-auto"/>
      </Link>
    </header>
  );
};

export default Header;
