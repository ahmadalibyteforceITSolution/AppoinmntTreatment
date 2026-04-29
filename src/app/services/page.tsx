import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Services from "@/components/Services";
import BookingListing from "@/components/BookingListing";

export default function ServicesPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Medical Specialties</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive healthcare solutions provided by experienced specialists using state-of-the-art medical technology.
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
