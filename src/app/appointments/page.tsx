import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AppointmentScheduler from "@/components/AppointmentScheduler";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
export default function AppointmentsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <section className="py-20 bg-primary text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Book Your Appointment</h1>
            <p className="text-white/80">Schedule a visit with Dr. Faiza Hafeez. Your health is our priority.</p>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <BookingForm />
          </div>
        </section>

        <AppointmentScheduler />

        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
            <h2 className="text-3xl font-serif font-bold text-slate-950">Need Help?</h2>
            <p className="text-slate-600">
              If you have trouble booking online or have an emergency, please contact
              our reception immediately at <strong>0334 4280522</strong>.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="tel:03344280522"
                className="px-8 py-4 bg-slate-950 text-white rounded-full font-bold hover:bg-slate-800 transition-all"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/923344280522"
                target="_blank"
                className="px-8 py-4 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition-all"
              >
                WhatsApp Us
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
