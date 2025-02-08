import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // ✅ Import Cart Provider
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ShopAll from "./pages/ShopAll";
import SeriesPage from "./pages/SeriesPage";
import ProductPage from "./pages/ProductPage";
import SupportUs from "./pages/SupportUs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CartPage from "./pages/CartPage";

function App() {
    return (
        <CartProvider>  {/* ✅ Wrap everything inside CartProvider */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<ShopAll />} />
                <Route path="/shop/:series" element={<SeriesPage />} />
                <Route path="/shop/item/:productId" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/support" element={<SupportUs />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </CartProvider>
    );
}

export default App;
