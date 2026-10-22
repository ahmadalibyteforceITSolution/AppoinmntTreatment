"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { blogs } from "@/data/blogs";
import { Calendar, ArrowRight, ImageOff, Heart, BookOpen } from "lucide-react";
import GsapAnimation from "@/components/GsapAnimation";

interface BlogItem {
  id: string | number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

const BlogCard = ({ blog }: { blog: BlogItem }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group bg-white rounded-[32px] overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-[#00BDE0]/40 transition-all duration-300 flex flex-col">
      <Link href={`/blogs/${blog.slug}`} className="block flex-1">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#ecf5fb] flex items-center justify-center">
          {!imgError ? (
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-[#00a1be] gap-2">
              <ImageOff size={28} />
              <span className="text-xs font-bold uppercase tracking-widest">{blog.category}</span>
            </div>
          )}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#00a1be] shadow-sm">
            {blog.category}
          </div>
        </div>

        <div className="p-7 space-y-3">
          <div className="flex items-center gap-2 text-[#566593] text-xs font-medium">
            <Calendar size={13} className="text-[#00BDE0]" />
            <span>{blog.date}</span>
            <span className="w-1 h-1 rounded-full bg-[#00BDE0] mx-1" />
            <span>{blog.readTime}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#031B4E] group-hover:text-[#00BDE0] transition-colors leading-snug">
            {blog.title}
          </h3>
          <p className="text-[#566593] text-xs sm:text-sm line-clamp-2 leading-relaxed">
            {blog.excerpt}
          </p>

          <div className="pt-3 flex items-center text-xs font-bold text-[#00BDE0] group-hover:text-[#00a1be]">
            <span>Read Full Article</span>
            <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </div>
      </Link>
    </article>
  );
};

const BlogSection = () => {
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section className="pt-8 sm:pt-10 pb-16 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 sm:mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ccf2f9] text-[#00a1be] text-xs font-bold uppercase tracking-wider">
              <BookOpen size={14} className="text-[#00BDE0]" />
              Medical Insights & Education
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#031B4E]">
              Women's Health & <span className="text-[#00BDE0]">Maternity Journal</span>
            </h2>
          </div>
          <Link
            href="/blogs"
            className="btn btn-outline-primary btn-md inline-flex items-center gap-2 group"
          >
            <span>Explore All 50+ Articles</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <GsapAnimation animation="staggerUp" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </GsapAnimation>
      </div>
    </section>
  );
};

export default BlogSection;
