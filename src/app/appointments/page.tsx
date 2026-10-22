import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BookingForm from "@/components/BookingForm";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { Phone, MessageCircle, Clock, MapPin, ShieldCheck, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Gynecology Appointment Online | Dr. Faiza Hafeez Lahore Clinic",
  description: "Schedule your consultation with top female gynecologist Dr. Faiza Hafeez in Lahore. Fast online booking for pregnancy care, PCOS, ultrasound, and fertility consultations.",
  alternates: {
    canonical: "https://faizahafeez-bytely-team.vercel.app/appointments",
  },
  openGraph: {
    title: "Book Gynecology Consultation | Dr. Faiza Hafeez Lahore",
    description: "Online appointment booking for Dr. Faiza Hafeez (FCPS Gynecologist & Obstetrician Lahore).",
    url: "https://faizahafeez-bytely-team.vercel.app/appointments",
  },
};

export default function AppointmentsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* ClinicMaster Page Banner */}
      <PageBanner
        badge="Online Consultation Portal"
        title="Book Your Gynecology Consultation"
        description="Schedule your clinical visit with Dr. Faiza Hafeez (FCPS Gynecologist & Obstetrician) at Ittefaq Hospital Trust Lahore. Confidential, compassionate maternal healthcare."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Appointments" },
        ]}
      />

      {/* Main Booking Form Section */}
      <section className="py-16 sm:py-20 bg-[#ecf5fb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <BookingForm />
        </div>
      </section>

      {/* Urgent Hospital Care Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-[#0A3366] rounded-[36px] p-8 sm:p-12 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00BDE0]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00BDE0]/20 text-[#00BDE0] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={14} />
              24/7 Labor & Emergency Support
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold max-w-xl mx-auto">
              Urgent Pregnancy Symptoms or Immediate Delivery Assistance?
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 max-w-lg mx-auto leading-relaxed">
              If you require emergency delivery support, labor triage, or urgent obstetrics guidance, please call our 24/7 hospital direct line or WhatsApp immediately.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href="tel:+923344280522"
                className="btn btn-primary btn-lg flex items-center gap-2 shadow-xl"
              >
                <Phone size={18} />
                <span>Call Emergency: 0334 4280522</span>
              </a>
              <a
                href="https://wa.me/923344280522"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-emerald-500 hover:bg-emerald-600 text-white btn-lg flex items-center gap-2 shadow-lg"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Urgent Chat</span>
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
