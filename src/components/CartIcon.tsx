"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export function CartIcon() {
    const { totalItems } = useCart();

    return (
        <Link href="/cart">
            <Button
                variant="ghost"
                size="icon"
                className="relative rounded-full text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
                aria-label="Open cart"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white shadow-sm ring-1 ring-white dark:ring-slate-900">
                        {totalItems}
                    </span>
                )}
            </Button>
        </Link>
    );
}
