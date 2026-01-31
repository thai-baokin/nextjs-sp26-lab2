import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-indigo-50 dark:bg-[#020617] dark:bg-dark-gradient selection:bg-blue-500 selection:text-white transition-colors duration-500">
      <Header />

      <main className="flex-grow w-full max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-slate-200/60 dark:border-white/10 mb-8 gap-4">
          <div>
            <span className="text-blue-500 text-sm font-bold uppercase tracking-wider mb-1 block">Fall Collection</span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">Latest Arrivals</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-balance max-w-md font-medium">
              Discover our premium selection of tech gadgets and lifestyle essentials tailored for the modern creative.
            </p>
          </div>

          {/* Filter & Sort */}
          <div className="flex gap-3">
            <Button variant="outline" className="rounded-full bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-500 dark:hover:text-blue-500 shadow-sm backdrop-blur-sm h-10 px-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              Filter
            </Button>
            <Button variant="outline" className="rounded-full bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-500 dark:hover:text-blue-500 shadow-sm backdrop-blur-sm h-10 px-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="m3 16 4 4 4-4" />
                <path d="M7 20V4" />
                <path d="m21 8-4-4-4 4" />
                <path d="M17 4v16" />
              </svg>
              Sort
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center py-12 mt-4">
          <nav className="flex items-center gap-1 p-1 bg-white dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
            <a className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </a>
            <a className="flex size-10 items-center justify-center rounded-full bg-slate-900 dark:bg-blue-500 text-white dark:text-white text-sm font-bold shadow-md" href="#">1</a>
            <a className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-300 text-sm font-medium" href="#">2</a>
            <a className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-300 text-sm font-medium" href="#">3</a>
            <span className="flex size-10 items-center justify-center text-slate-400 dark:text-slate-500 text-sm font-medium">...</span>
            <a className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-300 text-sm font-medium" href="#">10</a>
            <a className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  );
}
