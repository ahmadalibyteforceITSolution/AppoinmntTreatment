import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import { Calendar, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:row justify-between items-end gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Health Insights</h2>
            <p className="text-4xl md:text-5xl font-serif font-bold text-slate-950">Latest Medical Blogs</p>
          </div>
          <Link href="/blogs" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All 50+ Articles
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredBlogs.map((blog) => (
            <article key={blog.id} className="group">
              <Link href={`/blogs/${blog.slug}`} className="block">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 shadow-lg">
                  <Image 
                    src={blog.image} 
                    alt={blog.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                    {blog.category}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <Calendar size={14} />
                    {blog.date}
                    <span className="w-1 h-1 rounded-full bg-slate-300 mx-1" />
                    {blog.readTime}
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-primary transition-colors leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
