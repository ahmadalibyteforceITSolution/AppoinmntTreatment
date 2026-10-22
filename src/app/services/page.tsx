import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Services from "@/components/Services";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import { ArrowRight, Calendar, Phone, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Gynecology, Obstetrics & Fertility Services | Dr. Faiza Hafeez Lahore",
  description: "Specialized gynecology services in Lahore: High-risk pregnancy care, infertility & IVF, PCOS management, 3D/4D ultrasound, laparoscopic surgery, and cervical screening.",
  alternates: {
    canonical: "https://faizahafeez-bytely-team.vercel.app/services",
  },
  openGraph: {
    title: "Gynecology & Obstetrics Services | Dr. Faiza Hafeez Lahore",
    description: "Expert women's healthcare services, pregnancy ultrasound, PCOS, and fertility care in Lahore.",
    url: "https://faizahafeez-bytely-team.vercel.app/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* ClinicMaster Style Page Banner */}
      <PageBanner
        badge="Consultant Medical Disciplines"
        title="Gynecology & Obstetrics Specialties"
        description="Personalized, evidence-based medical treatments for pregnancy, reproductive wellness, PCOS, 3D/4D ultrasound diagnostics, and minimally invasive surgery in Lahore."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" }
        ]}
      />

      {/* Services Grid Component */}
      <Services />

      {/* Internal Linking Banner */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A3366] rounded-[36px] p-8 sm:p-14 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00BDE0]/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00BDE0]/20 text-[#00BDE0] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={14} />
              Book Confidential Consultation
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold max-w-2xl mx-auto">
              Need Personalized Guidance on Which Treatment is Right for You?
            </h2>

            <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed">
              Dr. Faiza Hafeez provides empathetic, individual evaluations at Ittefaq Hospital Trust Lahore. Schedule your consultation online or connect directly via WhatsApp.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/appointments"
                className="btn btn-primary btn-lg flex items-center gap-2 shadow-xl"
              >
                <Calendar size={18} />
                <span>Book Clinic Appointment</span>
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/923344280522"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-emerald-500 hover:bg-emerald-600 text-white btn-lg flex items-center gap-2"
              >
                <Phone size={18} />
                <span>WhatsApp: +92 334 4280522</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
