"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartItem } from "@/components/CartItem";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CartPage() {
    const { cartItems, totalPrice, clearCart } = useCart();

    return (
        <div className="min-h-screen flex flex-col bg-indigo-50 dark:bg-[#020617] dark:bg-dark-gradient selection:bg-blue-500 selection:text-white transition-colors duration-500">
            <Header />

            <main className="flex-grow w-full max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Shopping Cart
                    </h1>
                    {cartItems.length > 0 && (
                        <Button
                            variant="outline"
                            onClick={clearCart}
                            className="text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 border-red-200 dark:border-red-900/30"
                        >
                            Clear Cart
                        </Button>
                    )}
                </div>

                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                                <circle cx="8" cy="21" r="1" />
                                <circle cx="19" cy="21" r="1" />
                                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                            Your cart is empty
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm">
                            Looks like you haven't added anything to your cart yet. Browse our products and find something you love.
                        </p>
                        <Link href="/">
                            <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20">
                                Start Shopping
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Cart Items List */}
                        <div className="flex-1 space-y-4">
                            {cartItems.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-[380px] shrink-0">
                            <div className="sticky top-24 p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-lg shadow-slate-200/50 dark:shadow-none backdrop-blur-md">
                                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Order Summary</h2>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-slate-500 dark:text-slate-400">
                                        <span>Subtotal</span>
                                        <span className="font-medium text-slate-900 dark:text-slate-200">${totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-500 dark:text-slate-400">
                                        <span>Shipping</span>
                                        <span className="font-medium text-green-500">Free</span>
                                    </div>
                                    <div className="flex justify-between text-slate-500 dark:text-slate-400">
                                        <span>Tax</span>
                                        <span className="font-medium text-slate-900 dark:text-slate-200">$0.00</span>
                                    </div>
                                    <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex justify-between items-end">
                                        <span className="text-slate-900 dark:text-white font-bold">Total</span>
                                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-500">${totalPrice.toFixed(2)}</span>
                                    </div>
                                </div>

                                <Button size="lg" className="w-full rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-lg font-bold">
                                    Checkout Now
                                </Button>

                                <p className="text-xs text-center text-slate-400 mt-4">
                                    Secure Checkout - SSL Encrypted
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
