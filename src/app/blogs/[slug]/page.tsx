import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import { Calendar, User, ArrowLeft, Heart, ShieldCheck, ExternalLink, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdUnit from "@/components/AdUnit";

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
      
      {/* Top Banner with Breadcrumbs */}
      <section className="pt-40 pb-12 bg-[#ecf5fb] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#566593] mb-6">
            <Link href="/" className="hover:text-[#00BDE0] transition-colors">Home</Link>
            <ChevronRight size={13} className="text-[#00BDE0]" />
            <Link href="/blogs" className="hover:text-[#00BDE0] transition-colors">Health Blog</Link>
            <ChevronRight size={13} className="text-[#00BDE0]" />
            <span className="text-[#031B4E] truncate max-w-xs">{blog.title}</span>
          </nav>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-[#ccf2f9] text-[#00a1be] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-[#00BDE0]/20">
                {blog.category}
              </span>
              <span className="text-xs font-semibold text-[#566593]">{blog.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#031B4E] leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-[#566593] pt-2 text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#00BDE0]" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User size={14} className="text-[#00BDE0]" />
                <span>Dr. Faiza Hafeez (FCPS Resident • Ittefaq Hospital Trust)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Article */}
      <article className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative aspect-video rounded-3xl overflow-hidden mb-10 shadow-xl border border-slate-100 bg-[#ecf5fb]">
            <Image 
              src={blog.image} 
              alt={blog.title} 
              fill 
              priority
              className="object-cover"
            />
          </div>
          
          <div className="space-y-6 text-[#566593] leading-relaxed text-base">
            <p className="text-base sm:text-lg text-[#0A3366] font-semibold p-6 rounded-2xl bg-[#ecf5fb] border border-[#00BDE0]/20 leading-relaxed italic">
              {blog.excerpt}
            </p>

            <p>
              Women's healthcare requires specialized, empathetic guidance at every distinct stage of life. 
              As a resident specializing in obstetrics and gynecology at Ittefaq Hospital (Trust), Dr. Faiza Hafeez routinely counsels patients who benefit immensely from early diagnosis, proper ultrasound screening, and personalized medical adjustments.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#031B4E] pt-4">
              Clinical Insights & Evidence-Based Guidance
            </h2>
            <p>
              Understanding {blog.title.toLowerCase()} is essential for safeguarding your maternal and reproductive wellbeing. Key clinical takeaways include:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-sm text-[#031B4E] font-medium">
              <li>Early screening and routine checkups prevent major gynecological complications.</li>
              <li>Hormonal balance and balanced nutrition play a pivotal role in menstrual and reproductive wellness.</li>
              <li>High-resolution 3D/4D ultrasound monitoring ensures accurate fetal development tracking.</li>
              <li>Consulting a qualified FCPS Gynecologist provides individualized and confidential treatment protocols.</li>
            </ul>
            
            {/* Doctor Note */}
            <div className="p-7 rounded-3xl bg-[#0A3366] text-white my-8 space-y-2">
              <div className="flex items-center gap-2 text-[#00BDE0] font-bold text-lg">
                <Heart size={20} className="fill-[#00BDE0] text-[#00BDE0]" />
                Dr. Faiza Hafeez's Clinical Note
              </div>
              <p className="text-slate-200 text-sm leading-relaxed italic">
                "Prioritizing your maternal and pelvic health today ensures a safer, happier tomorrow for you and your newborn family."
              </p>
            </div>

            {/* Authoritative E-E-A-T Medical Literature */}
            <div className="my-8 p-6 rounded-3xl bg-[#ecf5fb] border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-[#031B4E] font-bold text-sm">
                <ShieldCheck size={18} className="text-[#00BDE0]" />
                Evidence-Based Medical Literature & Authority References (E-E-A-T)
              </div>
              <p className="text-xs text-[#566593]">
                This article is verified by Dr. Faiza Hafeez (FCPS) and referenced against peer-reviewed clinical guidelines:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#0A3366] hover:text-[#00BDE0] font-semibold transition-colors"
                >
                  <ExternalLink size={12} className="text-[#00BDE0]" />
                  <span>PubMed / National Library of Medicine</span>
                </a>
                <a
                  href="https://www.who.int/health-topics/maternal-health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#0A3366] hover:text-[#00BDE0] font-semibold transition-colors"
                >
                  <ExternalLink size={12} className="text-[#00BDE0]" />
                  <span>WHO Maternal & Child Health</span>
                </a>
                <a
                  href="https://www.acog.org/womens-health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#0A3366] hover:text-[#00BDE0] font-semibold transition-colors"
                >
                  <ExternalLink size={12} className="text-[#00BDE0]" />
                  <span>ACOG Clinical Practice Guidelines</span>
                </a>
                <a
                  href="https://www.rcog.org.uk/for-the-public"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#0A3366] hover:text-[#00BDE0] font-semibold transition-colors"
                >
                  <ExternalLink size={12} className="text-[#00BDE0]" />
                  <span>RCOG Patient Information</span>
                </a>
              </div>
            </div>

            {/* Internal Linking to Services */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3 my-8">
              <h4 className="text-sm font-bold text-[#031B4E]">
                Explore Related Clinical Services
              </h4>
              <div className="flex flex-wrap gap-2 pt-1">
                <Link href="/services/high-risk-pregnancy" className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#ecf5fb] text-[#0A3366] hover:bg-[#00BDE0] hover:text-white transition-colors">
                  High-Risk Pregnancy
                </Link>
                <Link href="/services/infertility-treatment" className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#ecf5fb] text-[#0A3366] hover:bg-[#00BDE0] hover:text-white transition-colors">
                  Infertility Treatment
                </Link>
                <Link href="/services/pcos-management" className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#ecf5fb] text-[#0A3366] hover:bg-[#00BDE0] hover:text-white transition-colors">
                  PCOS Management
                </Link>
                <Link href="/services/3d-4d-ultrasound" className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#ecf5fb] text-[#0A3366] hover:bg-[#00BDE0] hover:text-white transition-colors">
                  3D/4D Ultrasound
                </Link>
                <Link href="/services/laparoscopic-surgery" className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#ecf5fb] text-[#0A3366] hover:bg-[#00BDE0] hover:text-white transition-colors">
                  Laparoscopic Surgery
                </Link>
              </div>
            </div>

            <AdUnit slot="1234567890" />
          </div>

          {/* Consultation CTA Banner */}
          <div className="mt-12 bg-[#0A3366] p-8 sm:p-12 rounded-[36px] text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-2xl font-bold">Have Questions About Your Health?</h4>
              <p className="text-slate-300 text-sm">Schedule a direct clinical consultation with Dr. Faiza Hafeez at Ittefaq Hospital Lahore.</p>
            </div>
            <Link 
              href="/appointments" 
              className="btn btn-primary btn-lg whitespace-nowrap shadow-xl"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </article>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
