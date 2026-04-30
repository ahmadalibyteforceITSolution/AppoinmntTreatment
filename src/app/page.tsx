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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      
      {/* About Section Preview */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-slate-50 aspect-video relative">
                 <Image 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Hospital Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm">About Our Clinic</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-950">World Class Healthcare in the Heart of Lahore</h3>
                <p className="text-slate-600 leading-relaxed">
                  Inspired by the excellence of Hameed Latif and Ittefaq Hospital, our clinic 
                  brings premium medical services to your doorstep. Dr. Faiza Hafeez leads a 
                  team dedicated to providing patient-centric care with modern diagnostics and 
                  compassionate treatment plans.
                </p>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Certified Specialists",
                  "Advanced Diagnostics",
                  "Personalized Care Plans",
                  "Emergency Support"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-bold text-slate-800">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all">
                Learn More About Us
              </button>
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
