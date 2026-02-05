"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setQuantity(1); // Reset quantity after adding
    };

    const incrementQuantity = (e: React.MouseEvent) => {
        e.preventDefault();
        setQuantity(prev => prev + 1);
    };

    const decrementQuantity = (e: React.MouseEvent) => {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <div className="group relative flex flex-col glass-card rounded-2xl overflow-hidden hover:shadow-hover-lift transition-all duration-500 ease-out hover:-translate-y-1 ring-1 ring-white/5 hover:ring-blue-500/30">
            {/* Product Image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800/50">
                <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    style={{ backgroundImage: `url("${product.image}")` }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <Button variant="secondary" size="sm" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white/90 dark:bg-slate-950/90 text-slate-900 dark:text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-md border border-white/20 dark:border-white/10 hover:bg-white dark:hover:bg-slate-900 h-auto">
                        Quick View
                    </Button>
                </div>

                {/* Badge */}
                {product.badge && (
                    <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-white text-[10px] font-bold uppercase tracking-wider shadow-md ${product.badge === "New"
                        ? "bg-blue-500 shadow-blue-500/20"
                        : "bg-red-500 shadow-red-500/20"
                        }`}>
                        {product.badge}
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col p-5 gap-3 flex-1 relative z-20">
                <div>
                    <h3 className="text-slate-900 dark:text-slate-100 text-base font-semibold leading-tight group-hover:text-blue-500 transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-normal mt-1.5 line-clamp-2 leading-relaxed">
                        {product.description}
                    </p>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            {product.originalPrice ? (
                                <>
                                    <span className="text-xs text-slate-400 font-medium line-through mb-0.5">
                                        ${product.originalPrice.toFixed(2)}
                                    </span>
                                    <span className="text-red-500 dark:text-red-400 text-lg font-bold">
                                        ${product.price.toFixed(2)}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span className="text-xs text-slate-400 font-medium mb-0.5">Price</span>
                                    <span className="text-slate-900 dark:text-blue-400 text-lg font-bold">
                                        ${product.price.toFixed(2)}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="flex bg-slate-100 dark:bg-white/5 rounded-full p-1 border border-transparent dark:border-white/10">
                        <div className="flex items-center bg-white dark:bg-slate-900 rounded-full px-2 mr-2 border border-slate-200 dark:border-white/10">
                            <button
                                onClick={decrementQuantity}
                                className="size-6 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                                type="button"
                            >
                                -
                            </button>
                            <span className="w-8 text-center text-xs font-bold text-slate-900 dark:text-white">{quantity}</span>
                            <button
                                onClick={incrementQuantity}
                                className="size-6 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                                type="button"
                            >
                                +
                            </button>
                        </div>
                        <Button
                            onClick={handleAddToCart}
                            size="sm"
                            className="flex-1 rounded-full text-xs font-bold bg-slate-900 dark:bg-blue-600 text-white hover:bg-slate-800 dark:hover:bg-blue-500 shadow-sm"
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
