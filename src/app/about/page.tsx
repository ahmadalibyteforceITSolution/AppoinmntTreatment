import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Award, Users, Heart, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-36 pb-20 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl -z-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-900/60 text-pink-300 text-xs font-bold uppercase tracking-widest border border-pink-700/50">
            About Consultant Gynecologist
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
            Dedicated to Women's Health & Safe Motherhood
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Dr. Faiza Hafeez (FCPS Gynecology & Obstetrics) provides world-class maternal, reproductive, and gynecological care in Lahore.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-pink-600 font-bold uppercase tracking-widest text-xs">Medical Background & Excellence</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                  15+ Years of Clinical Leadership in Obstetrics & Gynecology
                </h2>
              </div>
              
              <p className="text-slate-600 leading-relaxed text-base">
                Having served as a Senior Specialist at renowned institutions such as <strong className="text-slate-900">Hameed Latif Hospital</strong> and <strong className="text-slate-900">Ittefaq Hospital</strong> in Lahore, Dr. Faiza Hafeez brings extensive experience in handling high-risk deliveries, complex laparoscopic surgeries, and advanced fertility management.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                Our clinic was established to provide women with a comforting, highly private environment equipped with modern 3D/4D ultrasound diagnostics and personalized treatment protocols.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-pink-100">
                <div className="space-y-1">
                  <div className="text-3xl font-extrabold text-pink-600">12,000+</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Successful Deliveries</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-extrabold text-pink-600">99.8%</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Patient Satisfaction</div>
                </div>
              </div>

              <div className="pt-2">
                <Link 
                  href="/appointments"
                  className="px-8 py-4 bg-pink-600 text-white rounded-full font-bold text-sm hover:bg-pink-700 transition-all shadow-lg shadow-pink-600/25 inline-block"
                >
                  Book Consultation with Dr. Faiza
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-white bg-pink-50">
                <Image 
                  src="/faiza.jpg" 
                  alt="Dr. Faiza Hafeez - Consultant Gynecologist Lahore"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-rose-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-pink-600 font-bold uppercase tracking-widest text-xs">Our Commitment</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Core Principles of Our Practice</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Compassionate Care", desc: "Empathetic listening and tailored support for every patient." },
              { icon: ShieldCheck, title: "Clinical Rigor", desc: "Adhering to strict international gynecological guidelines." },
              { icon: Award, title: "FCPS Expertise", desc: "Postgraduate fellowship training in advanced obstetrics." },
              { icon: Sparkles, title: "Patient Privacy", desc: "Confidential consultations in a respectful setting." }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl text-center space-y-4 shadow-xl shadow-pink-900/5 border border-pink-100/70">
                <div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                  <value.icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{value.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

