import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import { Calendar, User, ArrowLeft, Heart, ShieldCheck, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdUnit from "../../../components/AdUnit";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return {};

  const url = `https://faizahafeez-bytely-team.vercel.app/blogs/${slug}`;
  return {
    title: `${blog.title} | Dr. Faiza Hafeez (FCPS Gynecologist Lahore)`,
    description: blog.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${blog.title} | Dr. Faiza Hafeez`,
      description: blog.excerpt,
      url,
      type: "article",
      images: [
        {
          url: blog.image.startsWith("http") ? blog.image : `https://faizahafeez-bytely-team.vercel.app${blog.image}`,
          alt: blog.title,
        },
      ],
    },
    keywords: [
      blog.title,
      blog.category,
      "Dr Faiza Hafeez",
      "Gynecologist Lahore",
      "Obstetrician Lahore",
      "Women Health Specialist",
      "Pregnancy care Lahore"
    ].join(", "),
  };
}

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
    <main className="bg-white min-h-screen">
      <Navbar />
      
      <article className="pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-10 transition-colors font-bold text-sm">
            <ArrowLeft size={18} />
            Back to All Articles
          </Link>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-3">
              <span className="bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-pink-200">
                {blog.category}
              </span>
              <span className="text-slate-400 text-sm font-medium">{blog.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-950 leading-tight">
              {blog.title}
            </h1>
            <div className="flex items-center gap-6 text-slate-500 border-y border-pink-100 py-4 text-xs font-medium">
              <div className="flex items-center gap-2">
                <Calendar size={15} className="text-pink-500" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={15} className="text-pink-500" />
                <span>Dr. Faiza Hafeez (FCPS Gynecologist)</span>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-video rounded-[36px] overflow-hidden mb-12 shadow-2xl border-4 border-white bg-pink-50">
            <Image 
              src={blog.image} 
              alt={blog.title} 
              fill 
              className="object-cover"
            />
          </div>
          
          <div className="prose prose-lg max-w-none prose-pink text-slate-700">
            <p className="text-lg md:text-xl text-pink-900 font-semibold mb-8 leading-relaxed italic bg-rose-50/60 p-6 rounded-2xl border border-pink-100">
              {blog.excerpt}
            </p>
            <div className="space-y-6 text-slate-700 leading-relaxed text-base">
              <p>
                Women's health requires specialized, empathetic care at every stage of life. 
                As a consultant specializing in {blog.category.toLowerCase()}, I frequently treat patients who benefit immensely from early diagnosis, proper screening, and personalized lifestyle adjustments.
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-950 mt-10 mb-4">Clinical Guidance & Key Steps</h2>
              <p>
                Understanding {blog.title.toLowerCase()} is vital for maintaining optimal reproductive and overall physical wellbeing.
              </p>
              <ul className="list-disc pl-6 space-y-2.5 my-6 text-sm font-medium">
                <li>Early screening and routine checkups prevent major gynecological complications.</li>
                <li>Hormonal balance and nutrition play a pivotal role in menstrual and reproductive wellness.</li>
                <li>Continuous 3D/4D ultrasound monitoring ensures accurate fetal development tracking.</li>
                <li>Consulting a qualified FCPS Gynecologist provides personalized treatment plans.</li>
              </ul>
              
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-8 rounded-3xl border border-pink-200 my-10 space-y-2">
                <div className="flex items-center gap-2 text-pink-700 font-serif font-bold text-xl">
                  <Heart size={20} className="fill-pink-600 text-pink-600" />
                  Dr. Faiza Hafeez's Medical Note
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "Prioritizing your maternal and pelvic health today ensures a safer, happier tomorrow for you and your family."
                </p>
              </div>

              {/* Authoritative Medical Sources / External Backlink References */}
              <div className="my-10 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                  <ShieldCheck size={18} className="text-pink-600" />
                  Medical Literature & Authority References (E-E-A-T)
                </div>
                <p className="text-xs text-slate-500">
                  This article is reviewed by Dr. Faiza Hafeez (FCPS) and referenced against peer-reviewed clinical guidelines:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-pink-700 hover:text-pink-900 font-medium transition-colors"
                  >
                    <ExternalLink size={12} className="text-pink-500" />
                    <span>PubMed / National Library of Medicine</span>
                  </a>
                  <a
                    href="https://www.who.int/health-topics/maternal-health"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-pink-700 hover:text-pink-900 font-medium transition-colors"
                  >
                    <ExternalLink size={12} className="text-pink-500" />
                    <span>WHO Maternal & Child Health</span>
                  </a>
                  <a
                    href="https://www.acog.org/womens-health"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-pink-700 hover:text-pink-900 font-medium transition-colors"
                  >
                    <ExternalLink size={12} className="text-pink-500" />
                    <span>ACOG Clinical Practice Guidelines</span>
                  </a>
                  <a
                    href="https://www.rcog.org.uk/for-the-public"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-pink-700 hover:text-pink-900 font-medium transition-colors"
                  >
                    <ExternalLink size={12} className="text-pink-500" />
                    <span>RCOG Patient Information</span>
                  </a>
                </div>
              </div>

              {/* Ad Unit after content */}
              <AdUnit slot="1234567890" />
              
              {/* Multiplex Ad Unit */}
              <div className="mt-12 pt-8 border-t border-pink-100">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">Recommended Health Guides</h4>
                <AdUnit slot="1788948754" format="autorelaxed" />
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-10 border-t border-pink-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-slate-900 p-8 md:p-12 rounded-[36px] text-white shadow-2xl relative overflow-hidden">
              <div className="space-y-2 text-center md:text-left">
                <h4 className="text-2xl font-serif font-bold">Have Questions About Your Health?</h4>
                <p className="text-slate-300 text-sm">Schedule a direct consultation with Dr. Faiza Hafeez in Lahore.</p>
              </div>
              <Link href="/appointments" className="px-8 py-4 bg-pink-600 text-white rounded-full font-bold text-sm hover:bg-pink-500 transition-all shadow-xl shadow-pink-600/30 whitespace-nowrap">
                Book Consultation
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

