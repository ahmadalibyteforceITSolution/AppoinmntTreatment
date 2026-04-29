"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Search, ArrowRight, Loader2, ImageOff } from "lucide-react";

// A small sub-component to handle image errors gracefully
const BlogImage = ({ src, alt, category }: { src: string, alt: string, category: string }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
        <ImageOff size={32} className="mb-2 opacity-50" />
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

  const categories = ["All", "Cardiology", "Gynecology"];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
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
    }, 600); // simulate network delay for better UX
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-slate-950 mb-6">Health & Wellness Blog</h1>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">
            Expert medical advice, health tips, and the latest research in Cardiology and Gynecology 
            to help you lead a healthier life.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-3xl mx-auto bg-slate-100 p-2 rounded-2xl">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-primary/20 outline-none"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setVisibleItems(6); // Reset limit on search
                }}
              />
            </div>
            <div className="flex gap-2 p-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleItems(6); // Reset limit on filter change
                  }}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${
                    activeCategory === cat 
                    ? "bg-primary text-white shadow-lg" 
                    : "bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayedBlogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100 flex flex-col">
                <Link href={`/blogs/${blog.slug}`} className="flex-1 flex flex-col">
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <BlogImage src={blog.image} alt={blog.title} category={blog.category} />
                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10">
                      {blog.category}
                    </div>
                  </div>
                  <div className="p-8 space-y-4 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-slate-400 text-xs">
                      <Calendar size={14} />
                      {blog.date}
                    </div>
                    <h3 className="text-xl font-bold text-slate-950 group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed flex-1">
                      {blog.excerpt}
                    </p>
                    <div className="pt-4 flex items-center text-primary font-bold text-sm gap-2 mt-auto border-t border-slate-100">
                      Read Full Article
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          
          {filteredBlogs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No articles found matching your criteria.</p>
            </div>
          )}

          {hasMore && (
            <div className="mt-16 text-center">
              <button 
                onClick={handleLoadMore}
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Loading...
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
