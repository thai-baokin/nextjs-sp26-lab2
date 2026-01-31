"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, Github } from "lucide-react";

export default function RegisterPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: { name?: string; email?: string; password?: string } = {};

        if (!name.trim()) newErrors.name = "Full name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email address";

        if (!password.trim()) newErrors.password = "Password is required";
        else if (password.length < 8) newErrors.password = "Must be at least 8 characters long";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));
            alert("Registration successful! Redirecting to Login...");
            router.push("/login");
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[#020617] min-h-screen flex flex-col font-sans antialiased text-slate-50 relative overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
            {/* Dynamic Background Blobs */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-600/10 blur-[100px] opacity-40 animate-pulse"></div>
                <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[100px] opacity-40"></div>
                <div className="absolute bottom-0 left-[20%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[100px] opacity-30"></div>
            </div>

            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-white/5 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50 px-6 py-4 lg:px-10">
                <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                    <div className="size-9 flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 12h20" />
                            <path d="M12 2v20" />
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 7a5 5 0 0 1 5 5" />
                        </svg>
                    </div>
                    <h2 className="text-slate-50 text-lg font-bold tracking-tight group-hover:text-blue-500 transition-colors">Lab App</h2>
                </Link>
                <div className="flex flex-1 justify-end gap-6 items-center">
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Home</Link>
                        <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Products</a>
                    </nav>
                    <Link href="/login" className="inline-flex h-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-white/10 hover:border-white/20">
                        Login
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 relative z-10">
                <div className="w-full max-w-[460px] animate-in fade-in zoom-in duration-500">

                    {/* Progress Steps Mockup */}
                    <div className="flex justify-center mb-10 gap-3">
                        <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]"></div>
                        <div className="h-1.5 w-12 rounded-full bg-slate-800"></div>
                        <div className="h-1.5 w-12 rounded-full bg-slate-800"></div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="glass-card bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

                            <div className="p-8 sm:p-10">
                                <div className="mb-8 text-center space-y-2">
                                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">Create an account</h1>
                                    <p className="text-slate-400 text-sm">Enter your details below to create your account and get started.</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:text-white h-11 px-4 py-2 text-slate-200">
                                        <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                        </svg>
                                        Google
                                    </button>
                                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:text-white h-11 px-4 py-2 text-slate-200">
                                        <Github className="mr-2 w-5 h-5" />
                                        GitHub
                                    </button>
                                </div>

                                <div className="relative mb-8">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t border-white/10"></span>
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-slate-900 px-3 text-slate-500 rounded-full border border-white/5">Or continue with</span>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Name */}
                                    <div className="space-y-2 group">
                                        <label className="text-xs font-medium uppercase tracking-wider text-slate-400 group-focus-within:text-blue-500 transition-colors ml-1" htmlFor="name">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-3 text-slate-500 transition-colors group-focus-within:text-blue-500 pointer-events-none">
                                                <User className="w-5 h-5" />
                                            </span>
                                            <input
                                                className={`flex h-11 w-full rounded-lg bg-slate-950/50 border border-white/10 text-slate-100 placeholder:text-slate-500 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50 pl-10 focus:border-blue-500/50 focus:bg-slate-900/80 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 ${errors.name ? 'border-red-500/50 focus:ring-red-500/20' : ''}`}
                                                id="name"
                                                placeholder="John Doe"
                                                type="text"
                                                value={name}
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                    if (errors.name) setErrors({ ...errors, name: undefined });
                                                }}
                                            />
                                        </div>
                                        {errors.name && <p className="text-xs text-red-500 ml-1">{errors.name}</p>}
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2 group">
                                        <label className="text-xs font-medium uppercase tracking-wider text-slate-400 group-focus-within:text-blue-500 transition-colors ml-1" htmlFor="email">
                                            Email
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-3 text-slate-500 transition-colors group-focus-within:text-blue-500 pointer-events-none">
                                                <Mail className="w-5 h-5" />
                                            </span>
                                            <input
                                                className={`flex h-11 w-full rounded-lg bg-slate-950/50 border border-white/10 text-slate-100 placeholder:text-slate-500 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50 pl-10 focus:border-blue-500/50 focus:bg-slate-900/80 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 ${errors.email ? 'border-red-500/50 focus:ring-red-500/20' : ''}`}
                                                id="email"
                                                placeholder="m@example.com"
                                                type="email"
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                    if (errors.email) setErrors({ ...errors, email: undefined });
                                                }}
                                            />
                                        </div>
                                        {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email}</p>}
                                    </div>

                                    {/* Password */}
                                    <div className="space-y-2 group">
                                        <div className="flex items-center justify-between">
                                            <label className="text-xs font-medium uppercase tracking-wider text-slate-400 group-focus-within:text-blue-500 transition-colors ml-1" htmlFor="password">
                                                Password
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <span className="absolute left-3 top-3 text-slate-500 transition-colors group-focus-within:text-blue-500 pointer-events-none">
                                                <Lock className="w-5 h-5" />
                                            </span>
                                            <input
                                                className={`flex h-11 w-full rounded-lg bg-slate-950/50 border border-white/10 text-slate-100 placeholder:text-slate-500 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50 pl-10 pr-10 focus:border-blue-500/50 focus:bg-slate-900/80 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 ${errors.password ? 'border-red-500/50 focus:ring-red-500/20' : ''}`}
                                                id="password"
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
                                                className="absolute right-3 top-3 text-slate-500 hover:text-slate-300 transition-colors focus:outline-none"
                                            >
                                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                        <div className="flex items-center gap-1.5 mt-2 ml-1">
                                            <span className={`h-1 w-1 rounded-full ${errors.password ? 'bg-red-500' : 'bg-slate-500'}`}></span>
                                            <p className={`text-[11px] font-medium tracking-wide ${errors.password ? 'text-red-500' : 'text-slate-400'}`}>
                                                {errors.password ? errors.password : "Must be at least 8 characters long"}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group relative w-full inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-500 h-11 px-4 py-2 mt-6 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center">
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Creating Account...
                                                </>
                                            ) : (
                                                <>
                                                    Create Account
                                                    <ArrowRight className="w-[18px] h-[18px] ml-2 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </span>
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                    </button>
                                </form>

                                <div className="mt-8 text-center text-sm text-slate-400">
                                    Already have an account?{" "}
                                    <Link className="font-medium text-blue-500 hover:text-blue-400 hover:underline underline-offset-4 transition-colors" href="/login">
                                        Sign in
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="mt-8 text-center text-xs text-slate-500 px-8 leading-relaxed">
                        By clicking continue, you agree to our <a className="underline underline-offset-4 hover:text-slate-300 transition-colors" href="#">Terms of Service</a> and <a className="underline underline-offset-4 hover:text-slate-300 transition-colors" href="#">Privacy Policy</a>.
                    </p>
                </div>
            </main>
        </div>
    );
}
