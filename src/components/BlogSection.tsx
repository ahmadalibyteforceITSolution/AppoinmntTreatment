"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { blogs } from "@/data/blogs";
import { Calendar, ArrowRight, ImageOff, Heart } from "lucide-react";

const BlogCard = ({ blog }: { blog: any }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group bg-white rounded-[32px] overflow-hidden border border-pink-100/80 shadow-sm hover:shadow-xl hover:shadow-pink-900/5 hover:border-pink-200 transition-all duration-300 flex flex-col">
      <Link href={`/blogs/${blog.slug}`} className="block flex-1">
        <div className="relative aspect-[16/10] overflow-hidden bg-rose-50 flex items-center justify-center">
          {!imgError ? (
            <Image 
              src={blog.image} 
              alt={blog.title} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-pink-400 gap-2">
              <ImageOff size={28} />
              <span className="text-xs font-bold uppercase tracking-widest">{blog.category}</span>
            </div>
          )}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-pink-600 shadow-sm">
            {blog.category}
          </div>
        </div>
        
        <div className="p-7 space-y-3">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
            <Calendar size={13} className="text-pink-500" />
            {blog.date}
            <span className="w-1 h-1 rounded-full bg-pink-300 mx-1" />
            {blog.readTime}
          </div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-pink-600 transition-colors leading-tight font-serif">
            {blog.title}
          </h3>
          <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
            {blog.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
};

const BlogSection = () => {
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Heart size={16} className="fill-pink-600 text-pink-600" />
              <span className="text-pink-600 font-bold tracking-widest uppercase text-xs">Medical Insights</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-950">Women's Health & Fertility Journal</h2>
          </div>
          <Link 
            href="/blogs" 
            className="text-pink-600 font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm group"
          >
            Explore All 50+ Articles
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

