import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Terms of Service</h1>
          <p className="text-slate-600">Last updated: April 29, 2026</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 prose prose-slate">
          <h2>1. Agreement to Terms</h2>
          <p>By accessing our website and booking an appointment, you agree to be bound by these Terms of Service.</p>
          
          <h2>2. Medical Disclaimer</h2>
          <p>The content on this website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician.</p>
          
          <h2>3. Appointments and Cancellations</h2>
          <p>Please provide at least 24 hours notice if you need to cancel or reschedule your appointment. Late cancellations may be subject to a fee.</p>
          
          <h2>4. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at contact@drfaizahafeez.com.</p>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
