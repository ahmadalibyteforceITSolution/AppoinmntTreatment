import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Terms of Service | Dr. Faiza Hafeez Clinic Lahore",
  description: "Terms and conditions for clinical consultations and services with Dr. Faiza Hafeez in Lahore.",
  alternates: {
    canonical: "https://faizahafeez-bytely-team.vercel.app/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <PageBanner
        badge="Legal & Terms"
        title="Terms of Service"
        description="Clinical consultation guidelines and appointment terms for patients of Dr. Faiza Hafeez Clinic."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Service" },
        ]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 text-[#566593] text-sm sm:text-base leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#031B4E]">1. Medical Disclaimers & Advice</h2>
            <p>Content published on this website is for educational and appointment-booking purposes only and does not replace individualized clinical examination by a qualified physician. Always consult directly with Dr. Faiza Hafeez or emergency hospital personnel for personal medical symptoms.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#031B4E]">2. Consultation Scheduling</h2>
            <p>Submitting an online appointment request indicates your preferred date and time. Our clinical reception will contact you to confirm the exact consultation slot at Ittefaq Hospital Trust Lahore.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#031B4E]">3. Emergency Situations</h2>
            <p>In cases of sudden labor onset, acute severe abdominal pain, heavy bleeding, or fluid leakage, patients must immediately report directly to the Ittefaq Hospital Trust Emergency Labor Room or call +92 334 4280522.</p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
