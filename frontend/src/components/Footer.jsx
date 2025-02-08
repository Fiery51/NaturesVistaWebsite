import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">
        Nature's Vista
      </Link>
      <div className="flex gap-4">
        <p>&copy; NaturesVista 2025</p>
      </div>
    </nav>
  );
};

export default Footer;
