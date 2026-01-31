"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FlaskConical, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: { email?: string; password?: string } = {};

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));
            alert("Login successful! Redirecting to Home...");
            router.push("/");
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[#020617] min-h-screen flex flex-col font-sans antialiased text-white transition-colors duration-200 relative overflow-hidden selection:bg-purple-500/30 selection:text-purple-200">
            {/* Dynamic Background Blobs */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-blob"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-fuchsia-500/20 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-blob animation-delay-4000"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)"></div>
            </div>

            {/* Header */}
            <header className="w-full fixed top-0 left-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md border-b border-white/5 bg-black/20">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="size-9 rounded-lg bg-purple-500/20 backdrop-blur-md border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-500">
                        <FlaskConical className="w-5 h-5" />
                    </div>
                    <h2 className="text-lg font-bold tracking-tight text-white group-hover:text-purple-200 transition-colors">Lab App</h2>
                </Link>
                <Link
                    href="/register"
                    className="hidden sm:flex items-center justify-center rounded-md h-9 px-4 border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-slate-200 text-sm font-medium transition-all shadow-sm hover:border-white/20"
                >
                    Register
                </Link>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8 relative z-10 pt-20">
                <div className="w-full max-w-[400px] bg-slate-950/40 backdrop-blur-2xl rounded-2xl shadow-[0_0_40px_-10px_rgba(139,92,246,0.15)] border border-white/10 p-8 sm:p-10 relative overflow-hidden ring-1 ring-white/5">
                    {/* Top Gradient Line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                    <div className="mb-8 text-center space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight text-white">Login</h1>
                        <p className="text-slate-400 text-sm">Sign in to access your lab dashboard.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none text-slate-300" htmlFor="email">Email Address</label>
                            <div className="relative group">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-purple-400 transition-colors pointer-events-none">
                                    <Mail className="w-5 h-5" />
                                </span>
                                <input
                                    className={`flex h-10 w-full rounded-md border bg-slate-950/50 px-3 py-2 text-sm text-white ring-offset-slate-950 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 transition-all hover:border-slate-700 hover:bg-slate-900/60 ${errors.email ? 'border-red-500/50 focus-visible:ring-red-500' : 'border-slate-800'}`}
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (errors.email) setErrors({ ...errors, email: undefined });
                                    }}
                                />
                            </div>
                            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium leading-none text-slate-300" htmlFor="password">Password</label>
                                <a className="text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors" href="#">Forgot password?</a>
                            </div>
                            <div className="relative group">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-purple-400 transition-colors pointer-events-none">
                                    <Lock className="w-5 h-5" />
                                </span>
                                <input
                                    className={`flex h-10 w-full rounded-md border bg-slate-950/50 px-3 py-2 text-sm text-white ring-offset-slate-950 placeholder:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 pl-10 pr-10 transition-all hover:border-slate-700 hover:bg-slate-900/60 ${errors.password ? 'border-red-500/50 focus-visible:ring-red-500' : 'border-slate-800'}`}
                                    id="password"
                                    name="password"
                                    placeholder="••••••••"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        if (errors.password) setErrors({ ...errors, password: undefined });
                                    }}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 cursor-pointer hover:text-slate-300 transition-colors focus:outline-none"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            {errors.password && <p className="text-xs text-red-400 mt-1">{errors.password}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            className="mt-2 w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] active:scale-[0.98]"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Logging in...
                                </span>
                            ) : "Login"}
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-6 pt-6 border-t border-white/10 text-center">
                        <p className="text-sm text-slate-400">
                            Don't have an account?{" "}
                            <Link href="/register" className="font-medium text-purple-400 hover:text-purple-300 transition-colors underline-offset-4 hover:underline">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </main>

            <footer className="py-6 text-center text-xs text-slate-500 relative z-10">
                © 2026 Lab App Inc. All rights reserved.
            </footer>
        </div>
    );
}
