"use client";

import { Button } from "@/components/ui/button";
import { CartItem as CartItemType, useCart } from "@/context/CartContext";

interface CartItemProps {
    item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm transition-all hover:shadow-md">
            {/* Image */}
            <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white truncate">
                        {item.name}
                    </h3>
                    <p className="text-sm text-blue-500 font-bold mt-1">
                        ${item.price.toFixed(2)}
                    </p>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-4 justify-between sm:justify-end w-full sm:w-auto">
                    {/* Quantity */}
                    <div className="flex items-center rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-1">
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="size-8 flex items-center justify-center rounded-full bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 shadow-sm hover:bg-slate-50 dark:hover:bg-white/20 transition-colors"
                            aria-label="Decrease quantity"
                        >
                            -
                        </button>
                        <span className="w-10 text-center text-sm font-semibold text-slate-900 dark:text-white">
                            {item.quantity}
                        </span>
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="size-8 flex items-center justify-center rounded-full bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 shadow-sm hover:bg-slate-50 dark:hover:bg-white/20 transition-colors"
                            aria-label="Increase quantity"
                        >
                            +
                        </button>
                    </div>

                    {/* Subtotal */}
                    <div className="text-right min-w-[80px]">
                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                            ${(item.price * item.quantity).toFixed(2)}
                        </p>
                    </div>

                    {/* Remove */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            <line x1="10" x2="10" y1="11" y2="17" />
                            <line x1="14" x2="14" y1="11" y2="17" />
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    );
}
