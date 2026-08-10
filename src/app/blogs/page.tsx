"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Search, ArrowRight, Loader2, ImageOff, Heart } from "lucide-react";

const BlogImage = ({ src, alt, category }: { src: string, alt: string, category: string }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 bg-pink-50 flex flex-col items-center justify-center text-pink-400 group-hover:scale-105 transition-transform duration-500">
        <ImageOff size={32} className="mb-2 opacity-60" />
        <span className="text-xs font-bold uppercase tracking-widest">{category}</span>
      </div>
    );
  }

  return (
    <Image 
      src={src} 
      alt={alt} 
      fill 
      className="object-cover group-hover:scale-105 transition-transform duration-500"
      onError={() => setError(true)}
    />
  );
};

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleItems, setVisibleItems] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const categories = ["All", "Gynecology"];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const displayedBlogs = filteredBlogs.slice(0, visibleItems);
  const hasMore = visibleItems < filteredBlogs.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleItems(prev => prev + 6);
      setIsLoading(false);
    }, 600);
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      
      <section className="pt-36 pb-20 bg-white border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Heart size={14} className="fill-pink-600 text-pink-600" />
            Women's Medical Journal
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 mb-4">Gynecology & Health Advice</h1>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-base leading-relaxed">
            Medical insights, pregnancy tips, PCOS treatment guides, and reproductive health advice from Dr. Faiza Hafeez.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center max-w-2xl mx-auto bg-slate-100/80 p-2 rounded-2xl border border-pink-100">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-500" size={18} />
              <input 
                type="text" 
                placeholder="Search articles (PCOS, Pregnancy, Fertility...)"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border-none focus:ring-2 focus:ring-pink-500/20 outline-none text-sm font-medium"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setVisibleItems(6);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedBlogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-pink-100/80 hover:shadow-xl hover:shadow-pink-900/5 hover:border-pink-200 transition-all group flex flex-col">
                <Link href={`/blogs/${blog.slug}`} className="flex-1 flex flex-col">
                  <div className="relative aspect-video overflow-hidden bg-rose-50">
                    <BlogImage src={blog.image} alt={blog.title} category={blog.category} />
                    <div className="absolute top-4 left-4 bg-pink-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md z-10">
                      {blog.category}
                    </div>
                  </div>
                  <div className="p-7 space-y-3 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                      <Calendar size={13} className="text-pink-500" />
                      {blog.date}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-pink-600 transition-colors leading-snug font-serif">
                      {blog.title}
                    </h3>
                    <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed flex-1">
                      {blog.excerpt}
                    </p>
                    <div className="pt-4 flex items-center text-pink-600 font-bold text-xs gap-1.5 mt-auto border-t border-pink-50">
                      Read Full Guide
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          
          {filteredBlogs.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-pink-100">
              <p className="text-slate-500 text-base font-medium">No articles found matching your query.</p>
            </div>
          )}

          {hasMore && (
            <div className="mt-16 text-center">
              <button 
                onClick={handleLoadMore}
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-pink-600 text-pink-600 rounded-full font-bold hover:bg-pink-600 hover:text-white transition-all shadow-sm text-sm disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Loading Articles...
                  </>
                ) : (
                  "Load More Articles"
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

