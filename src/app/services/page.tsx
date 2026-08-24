import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Services from "@/components/Services";
import BookingListing from "@/components/BookingListing";

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
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      
      <section className="pt-36 pb-20 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-900/60 text-pink-300 text-xs font-bold uppercase tracking-widest border border-pink-700/50">
            Consultant Medical Disciplines
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
            Gynecology & Obstetrics Specialties
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Personalized, evidence-based treatments for pregnancy, fertility, PCOS, ultrasound diagnostics, and surgical gynecology.
          </p>
        </div>
      </section>

      <Services />
      <BookingListing />
      
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

