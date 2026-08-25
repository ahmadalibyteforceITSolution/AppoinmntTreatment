import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AppointmentScheduler from "@/components/AppointmentScheduler";
import BookingListing from "@/components/BookingListing";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Image from "next/image";
import AdUnit from "@/components/AdUnit";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      
      {/* About Section Preview */}
      <section className="py-24 bg-gradient-to-b from-white via-pink-50/20 to-white overflow-hidden border-y border-pink-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-pink-200/30 rounded-full blur-3xl -z-10" />
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white aspect-video relative bg-pink-100">
                <Image 
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800" 
                  alt="Dr. Faiza Hafeez Gynecology Clinic Consultation Room"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Heart size={16} className="fill-pink-600 text-pink-600" />
                  <span className="text-pink-600 font-bold tracking-widest uppercase text-xs">About Our Clinic</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-950 leading-tight">
                  Premier Women's Healthcare in the Heart of Lahore
                </h2>
                <p className="text-slate-600 leading-relaxed text-base">
                  Dr. Faiza Hafeez — Gynae and Obs Resident at <strong className="text-pink-700 font-semibold">Ittefaq Hospital Lahore (Trust)</strong>. Dedicated to providing compassionate, confidential, and comprehensive maternal healthcare, pregnancy ultrasound diagnostics, and pelvic health consultations for women of all ages.
                </p>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "FCPS Certified Consultant",
                  "3D/4D Fetal Anomaly Ultrasound",
                  "High-Risk Pregnancy Unit",
                  "Infertility & PCOS Clinic",
                  "Laparoscopic Surgery Specialist",
                  "24/7 Emergency Delivery Support"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-semibold text-slate-800 text-sm">
                    <div className="w-5 h-5 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-pink-600 rounded-full" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/about" 
                className="inline-block px-8 py-4 bg-pink-600 text-white rounded-full font-bold text-sm hover:bg-pink-700 transition-all shadow-lg shadow-pink-600/25"
              >
                Learn More About Dr. Faiza
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AdUnit slot="0987654321" />

      <BookingListing />
      <AppointmentScheduler />
      <BlogSection />
      
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

