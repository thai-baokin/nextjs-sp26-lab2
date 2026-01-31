"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
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

                {/* Favorite Button */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-black/60 text-slate-400 hover:text-red-500 hover:bg-white dark:hover:bg-slate-800 cursor-pointer transition-all duration-300 shadow-sm backdrop-blur-md z-10 border border-transparent hover:border-red-100 dark:hover:border-red-900/30">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
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

                <div className="mt-auto flex items-end justify-between pt-4 border-t border-slate-100 dark:border-white/5">
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

                    <Button variant="secondary" size="icon" className="rounded-full size-10 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:text-slate-200 transition-all duration-300 shadow-sm group/btn border border-transparent dark:border-white/10 dark:bg-white/5 bg-slate-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:scale-110 transition-transform">
                            <circle cx="8" cy="21" r="1" />
                            <circle cx="19" cy="21" r="1" />
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                            <path d="M9 11h6" />
                            <path d="M12 8v6" />
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    );
}
