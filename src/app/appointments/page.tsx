import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AppointmentScheduler from "@/components/AppointmentScheduler";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

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
      <div className="pt-20">
        <section className="py-20 bg-slate-950 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-900/60 text-pink-300 text-xs font-bold uppercase tracking-widest border border-pink-700/50">
              Online Appointment Portal
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Book Your Gynecology Consultation</h1>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Schedule your visit with Dr. Faiza Hafeez (FCPS Gynecology & Obstetrics). Confidential, expert maternal care in Lahore.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-rose-50/30 to-white">
          <div className="max-w-4xl mx-auto px-4">
            <BookingForm />
          </div>
        </section>

        <AppointmentScheduler />

        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center space-y-6 bg-rose-50/50 border border-pink-100 p-10 rounded-[36px]">
            <h2 className="text-3xl font-serif font-bold text-slate-950">Urgent Pregnancy Assistance?</h2>
            <p className="text-slate-600 text-sm max-w-lg mx-auto">
              If you require emergency delivery support or immediate obstetrics guidance, please call our emergency hotline directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <a
                href="tel:03344280522"
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-slate-800 transition-all shadow-md"
              >
                Call +92 334 4280522
              </a>
              <a
                href="https://wa.me/923344280522"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-sm hover:bg-emerald-500 transition-all shadow-md"
              >
                WhatsApp Emergency Chat
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

