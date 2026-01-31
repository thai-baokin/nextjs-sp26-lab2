import Link from "next/link";

export function Footer() {
    return (
        <footer className="glass-panel border-t border-slate-200 dark:border-white/10 mt-auto backdrop-blur-xl">
            <div className="max-w-[1400px] mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="size-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                                    <path d="M2 7h20" />
                                    <path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" />
                                </svg>
                            </div>
                            <h3 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">MarketLab</h3>
                        </Link>
                        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs text-center md:text-left">
                            Your destination for curated tech essentials. Quality products, fast shipping, and premium support.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        <a className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-white transition-colors text-sm font-medium" href="#">About Us</a>
                        <a className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-white transition-colors text-sm font-medium" href="#">Contact Support</a>
                        <a className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-white transition-colors text-sm font-medium" href="#">Privacy Policy</a>
                        <a className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-white transition-colors text-sm font-medium" href="#">Terms of Service</a>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-slate-200/50 dark:border-white/5 mt-10 pt-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 dark:text-slate-500 text-xs">© 2026 MarketLab Inc. All rights reserved.</p>
                    <div className="flex gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer transition-colors">
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer transition-colors">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                            <path d="M2 12h20" />
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    );
}
