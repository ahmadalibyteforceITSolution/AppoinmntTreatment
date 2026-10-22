"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageBanner from "@/components/PageBanner";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Search, ArrowRight, Loader2, ImageOff, Heart } from "lucide-react";

interface BlogCardItem {
  id: string | number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

const BlogImage = ({ src, alt, category }: { src: string; alt: string; category: string }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 bg-[#ecf5fb] flex flex-col items-center justify-center text-[#00a1be] group-hover:scale-105 transition-transform duration-500">
        <ImageOff size={32} className="mb-2 opacity-60" />
        <span className="text-xs font-bold uppercase tracking-wider">{category}</span>
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

  const filteredBlogs = (blogs as BlogCardItem[]).filter(blog => {
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
    }, 500);
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* ClinicMaster Style Page Banner */}
      <PageBanner
        badge="Medical Insights & Patient Education"
        title="Women's Health & Maternity Journal"
        description="Evidence-based medical articles, pregnancy care guides, PCOS solutions, and reproductive wellness advice by Dr. Faiza Hafeez in Lahore."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Health Blog" }
        ]}
      />

      {/* Search Bar Section */}
      <section className="py-10 bg-[#ecf5fb] border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00BDE0]" size={20} />
            <input 
              type="text" 
              placeholder="Search health articles (e.g. PCOS, Anomaly Scan, Normal Delivery, C-Section)..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 focus:border-[#00BDE0] outline-none text-sm font-medium text-[#031B4E] shadow-sm transition-all"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleItems(6);
              }}
            />
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedBlogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-2xl hover:border-[#00BDE0]/40 transition-all group flex flex-col">
                <Link href={`/blogs/${blog.slug}`} className="flex-1 flex flex-col">
                  <div className="relative aspect-video overflow-hidden bg-[#ecf5fb]">
                    <BlogImage src={blog.image} alt={blog.title} category={blog.category} />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#00a1be] shadow-sm">
                      {blog.category}
                    </div>
                  </div>
                  
                  <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[#566593] text-xs font-medium">
                        <Calendar size={13} className="text-[#00BDE0]" />
                        <span>{blog.date}</span>
                        <span className="w-1 h-1 rounded-full bg-[#00BDE0] mx-1" />
                        <span>{blog.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#031B4E] group-hover:text-[#00BDE0] transition-colors leading-snug">
                        {blog.title}
                      </h3>
                      <p className="text-[#566593] text-xs sm:text-sm line-clamp-3 leading-relaxed">
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center text-xs font-bold text-[#00BDE0] group-hover:text-[#00a1be] pt-3 border-t border-slate-100">
                      <span>Read Full Medical Guide</span>
                      <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-14">
              <button
                onClick={handleLoadMore}
                disabled={isLoading}
                className="btn btn-primary btn-lg inline-flex items-center gap-2 shadow-xl cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Loading More Articles...</span>
                  </>
                ) : (
                  <>
                    <span>Load More Health Articles</span>
                    <ArrowRight size={18} />
                  </>
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
