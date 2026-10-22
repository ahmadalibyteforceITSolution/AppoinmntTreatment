import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageBanner from "@/components/PageBanner";

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

      <PageBanner
        badge="Legal & Confidentiality"
        title="Privacy Policy"
        description="Patient confidentiality, data protection, and medical privacy standards at Dr. Faiza Hafeez Clinic."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 text-[#566593] text-sm sm:text-base leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#031B4E]">1. Information We Collect</h2>
            <p>We collect clinical and contact information you provide directly to us when you request an appointment, fill out a consultation form, or communicate with our staff via WhatsApp or telephone.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#031B4E]">2. How We Use Your Information</h2>
            <p>We use this information exclusively to process consultation requests, maintain medical records, coordinate hospital appointments at Ittefaq Hospital Trust, and communicate with you about your healthcare.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#031B4E]">3. Medical Privacy & Patient Confidentiality</h2>
            <p>Your diagnostic records, ultrasound scans, and personal health disclosures are strictly confidential under PMDC medical ethics and healthcare privacy laws. We never share or sell personal health information to third-party advertisers.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#031B4E]">4. Contact Us</h2>
            <p>If you have any questions regarding our confidentiality practices, contact our clinical office at <a href="mailto:faizahafeez28@gmail.com" className="text-[#00BDE0] underline font-semibold">faizahafeez28@gmail.com</a>.</p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
