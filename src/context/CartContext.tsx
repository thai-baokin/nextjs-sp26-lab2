"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Product, products } from "@/data/products";

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product, quantity: number) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from Local Storage on mount
    useEffect(() => {
        if (typeof window === "undefined") return;

        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);

                // Hydrate cart items by matching IDs with source data
                // This handles both legacy (full object) and optimized (id only) storage formats
                const hydratedCart: CartItem[] = [];

                if (Array.isArray(parsedCart)) {
                    parsedCart.forEach((item: any) => {
                        const product = products.find(p => p.id === item.id);
                        if (product) {
                            hydratedCart.push({
                                ...product,
                                quantity: item.quantity
                            });
                        }
                    });
                }

                setCartItems(hydratedCart);
            } catch (error) {
                console.error("Failed to parse cart from local storage", error);
                // Optionally start fresh if data is corrupt
            }
        }
        setIsLoaded(true);
    }, []);

    // Save to Local Storage whenever cart changes
    useEffect(() => {
        if (isLoaded) {
            try {
                // Store only ID and quantity to save space and avoid QuotaExceededError
                const minimizedCart = cartItems.map(item => ({
                    id: item.id,
                    quantity: item.quantity
                }));
                localStorage.setItem("cart", JSON.stringify(minimizedCart));
            } catch (error) {
                console.error("Failed to save cart to local storage", error);
            }
        }
    }, [cartItems, isLoaded]);

    const addToCart = (product: Product, quantity: number) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity }];
            }
        });
    };

    const removeFromCart = (productId: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
