import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const CartContext = createContext();

// Custom Hook to Use Cart
export const useCart = () => {
    return useContext(CartContext);
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Load Cart from Local Storage on Startup
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save Cart to Local Storage on Changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Function to Add Item to Cart (Update Quantity Instead of Duplicating)
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    // Function to Update Quantity
    const updateCartQuantity = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    // Function to Remove One Item from Cart
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateCartQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
