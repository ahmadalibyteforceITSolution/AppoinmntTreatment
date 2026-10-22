import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageBanner from "@/components/PageBanner";
import { Award, Users, Heart, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GsapAnimation from "@/components/GsapAnimation";

export const metadata: Metadata = {
  title: "About Dr. Faiza Hafeez | Consultant Gynecologist & Obstetrician FCPS Lahore",
  description: "Learn about Dr. Faiza Hafeez (FCPS), leading Consultant Gynecologist & Obstetrician in Lahore with 5+ years experience in high-risk pregnancy, PCOS, fertility, and laparoscopic surgery.",
  alternates: {
    canonical: "https://faizahafeez-bytely-team.vercel.app/about",
  },
  openGraph: {
    title: "About Dr. Faiza Hafeez | Consultant Gynecologist & Obstetrician Lahore",
    description: "5+ years clinical excellence in maternal care, high-risk pregnancy, PCOS, and fertility treatments in Lahore.",
    url: "https://faizahafeez-bytely-team.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* ClinicMaster Style Hero Banner with Background Image */}
      <PageBanner
        badge="Gynae & Obs Resident | Ittefaq Hospital Trust"
        title="Dedicated to Women's Health & Safe Motherhood"
        description="Dr. Faiza Hafeez provides compassionate maternal, reproductive, and gynecological healthcare with state-of-the-art diagnostic facilities in Lahore."
        bgImage="/template/images/hero-banner/banner-1.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Clinic" }
        ]}
      />

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-7">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00a1be] bg-[#ccf2f9] px-3.5 py-1 rounded-full">
                  Medical Background & Hospital Practice
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#031B4E] leading-tight">
                  Gynae & Obs Resident at Ittefaq Hospital (Trust), Lahore
                </h2>
              </div>
              
              <p className="text-[#566593] text-base sm:text-lg leading-relaxed">
                Serving as a <strong className="text-[#031B4E]">Gynae and Obs Resident at Ittefaq Hospital Lahore (Trust)</strong>, Dr. Faiza Hafeez brings rigorous clinical training and compassionate dedication to handling high-risk deliveries, comprehensive prenatal care, laparoscopic procedures, and maternal-fetal wellness.
              </p>
              <p className="text-[#566593] text-base leading-relaxed">
                Our practice is committed to providing women with a comforting, highly private environment equipped with modern 3D/4D ultrasound diagnostics and personalized treatment protocols.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-200/80">
                <div className="space-y-1">
                  <div className="text-3xl font-extrabold text-[#00BDE0]">12,000+</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#566593]">Successful Deliveries</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-extrabold text-[#0A3366]">99.8%</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#566593]">Patient Satisfaction</div>
                </div>
              </div>

              <div className="pt-2">
                <Link 
                  href="/appointments"
                  className="btn btn-primary btn-lg flex items-center gap-2 group inline-flex"
                >
                  <span>Book Consultation with Dr. Faiza</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative mx-auto w-full max-w-[440px]">
                {/* Main Clinic Visual */}
                <div className="rounded-[36px] overflow-hidden shadow-2xl border-8 border-[#ecf5fb] bg-[#ecf5fb] aspect-[4/3] relative">
                  <Image 
                    src="/template/images/about/img1.webp" 
                    alt="Dr. Faiza Hafeez - Consultant Gynecologist Lahore"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Secondary Visual Accent */}
                <div className="absolute -bottom-8 -right-4 sm:-right-6 w-40 sm:w-48 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#ccf2f9] hidden sm:block">
                  <Image 
                    src="/template/images/about/main.webp" 
                    alt="Dr. Faiza Hafeez Maternal Care"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* 5+ Years Experience Floating Badge */}
                <div className="absolute -top-6 -left-4 sm:-left-6 bg-[#00BDE0] text-white p-4 sm:p-5 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center max-w-[130px] border-4 border-white">
                  <span className="text-3xl font-extrabold leading-none">5+</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Years Clinical Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Core Principles */}
      <section className="py-20 lg:py-24 bg-[#ecf5fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00a1be] bg-white px-3.5 py-1 rounded-full border border-slate-200/60 shadow-sm">
              Our Commitment
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#031B4E]">
              Core Principles of Our Practice
            </h2>
          </div>
          <GsapAnimation animation="staggerUp" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Compassionate Care", desc: "Empathetic listening and tailored support for every patient." },
              { icon: ShieldCheck, title: "Clinical Rigor", desc: "Adhering to strict international gynecological guidelines." },
              { icon: Award, title: "FCPS Expertise", desc: "Postgraduate fellowship training in advanced obstetrics." },
              { icon: Sparkles, title: "Patient Privacy", desc: "Confidential consultations in a respectful setting." }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl text-center space-y-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="w-14 h-14 bg-[#ccf2f9] text-[#00BDE0] rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                  <value.icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-[#031B4E]">{value.title}</h3>
                <p className="text-[#566593] text-xs leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </GsapAnimation>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
