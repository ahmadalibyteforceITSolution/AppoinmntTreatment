import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// In Next.js 15, params is a Promise
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="bg-white">
      <Navbar />
      
      <article className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-12 transition-colors font-medium">
            <ArrowLeft size={18} />
            Back to Blogs
          </Link>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-3">
              <span className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                {blog.category}
              </span>
              <span className="text-slate-400 text-sm">{blog.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-950 leading-tight">
              {blog.title}
            </h1>
            <div className="flex items-center gap-6 text-slate-500 border-y border-slate-100 py-6">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>Dr. Faiza Hafeez</span>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-video rounded-[40px] overflow-hidden mb-16 shadow-2xl">
            <Image 
              src={blog.image} 
              alt={blog.title} 
              fill 
              className="object-cover"
            />
          </div>
          
          <div className="prose prose-lg max-w-none prose-slate">
            <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed italic">
              {blog.excerpt}
            </p>
            <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
              <p>
                In today's fast-paced world, maintaining optimal health is more critical than ever. 
                As a specialist focusing on {blog.category.toLowerCase()}, I often see patients who 
                could have prevented serious complications with early diagnosis and simple lifestyle changes.
              </p>
              <h2 className="text-3xl font-serif font-bold text-slate-950 mt-12 mb-6">Key Insights</h2>
              <p>
                This article explores the fundamental aspects of {blog.title.toLowerCase()}. 
                Whether you are seeking preventative advice or looking to understand a recent diagnosis, 
                it is essential to rely on evidence-based medical information.
              </p>
              <ul className="list-disc pl-6 space-y-3 my-8">
                <li>Early detection is the key to successful treatment.</li>
                <li>Lifestyle modifications can reduce risk factors by up to 80%.</li>
                <li>Regular check-ups at Dr. Faiza Hafeez Clinic ensure your health is monitored.</li>
                <li>Modern diagnostic tools provide precise insights into your condition.</li>
              </ul>
              <p>
                If you or a loved one is experiencing symptoms related to this topic, 
                do not hesitate to reach out. Our clinic in Lahore is equipped with 
                advanced technology to provide you with the best possible care.
              </p>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 my-12">
                <h3 className="text-2xl font-serif font-bold text-slate-950 mb-4 italic">Dr. Faiza's Recommendation</h3>
                <p className="text-slate-600">
                  "Health is not merely the absence of disease, but a state of complete physical, mental, and social wellbeing. 
                  Start prioritizing your heart and reproductive health today."
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-12 border-t border-slate-100">
            <div className="flex flex-col md:row justify-between items-center gap-8 bg-slate-950 p-10 rounded-[40px] text-white">
              <div className="space-y-4">
                <h4 className="text-2xl font-serif font-bold">Book a Consultation</h4>
                <p className="text-slate-400">Discuss your health concerns with Dr. Faiza Hafeez today.</p>
              </div>
              <Link href="/appointments" className="px-10 py-5 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
