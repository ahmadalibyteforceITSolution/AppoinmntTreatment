import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Privacy Policy | Dr. Faiza Hafeez Clinic Lahore",
  description: "Privacy policy and medical patient confidentiality guidelines for Dr. Faiza Hafeez Clinic.",
  alternates: {
    canonical: "https://faizahafeez-bytely-team.vercel.app/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Privacy Policy</h1>
          <p className="text-slate-600">Last updated: April 29, 2026</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 prose prose-slate">
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you request an appointment, fill out a form, or communicate with us via WhatsApp.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information to schedule appointments, provide medical services, and communicate with you about your healthcare.</p>

          <h2>3. Medical Privacy (Patient Confidentiality)</h2>
          <p>Your medical records and consultation details are strictly confidential and are protected under medical privacy laws. We do not share your health information without your explicit consent.</p>

          <h2>4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at faizahafeez28@gmail.com.</p>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
