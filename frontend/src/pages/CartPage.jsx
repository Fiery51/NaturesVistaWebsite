import { useCart } from "../context/CartContext";
import FullHeader from "../components/FullHeader";

const CartPage = () => {
    const { cart, removeFromCart, updateCartQuantity } = useCart();

    return (
        <div>
            <FullHeader />
            <div className="bg-[#F5F4EE] min-h-screen flex flex-col items-center py-12">
                <h1 className="text-3xl font-bold">Your Shopping Cart</h1>

                {cart.length === 0 ? (
                    <p className="text-gray-600 mt-6">Your cart is empty.</p>
                ) : (
                    <div className="max-w-3xl w-full mt-6">
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center justify-between bg-white shadow-md p-4 mb-4 rounded-lg">
                                <img src={item.image} alt={item.name} className="w-20 h-20 object-contain rounded-md" />
                                <div className="flex-1 px-4">
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">${item.price}</p>
                                    <div className="flex items-center">
                                        <button 
                                            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                                            className="text-red-500 hover:text-red-700 transition px-2"
                                        >
                                            ➖
                                        </button>
                                        <p className="text-gray-600 mx-2">Qty: {item.quantity}</p>
                                        <button 
                                            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                                            className="text-green-500 hover:text-green-700 transition px-2"
                                        >
                                            ➕
                                        </button>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700 transition"
                                >
                                    ❌ Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <button 
                    className="mt-6 bg-[#F1DBCE] hover:bg-[#e5c1b0] text-[#262522] px-6 py-3 text-lg rounded-md transition"
                    disabled
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default CartPage;
