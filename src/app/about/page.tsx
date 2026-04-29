import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Award, Users, Heart, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Dedicated to Your Wellbeing</h1>
          <p className="text-xl text-slate-400">Dr. Faiza Hafeez's mission is to provide the highest standard of medical care in Lahore.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-slate-950">A Legacy of Medical Excellence</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                With years of experience at leading institutions like Hameed Latif and Ittefaq Hospital, 
                Dr. Faiza Hafeez has established a clinic that mirrors the quality and professionalism 
                of Pakistan's top medical centers.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                We believe that premium healthcare should be accessible and compassionate. 
                Our clinic is equipped with modern diagnostic tools and a staff that treats 
                every patient like family.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-slate-400">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">100%</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-slate-400">Patient Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative">
                 <Image 
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800" 
                  alt="Doctor at Work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-950">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Compassion", desc: "Treating every patient with empathy and respect." },
              { icon: ShieldCheck, title: "Excellence", desc: "Maintaining the highest medical standards." },
              { icon: Award, title: "Integrity", desc: "Honesty and transparency in all treatments." },
              { icon: Users, title: "Community", desc: "Building a healthier community for all." }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl text-center space-y-4 shadow-lg shadow-slate-200/50">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-950">{value.title}</h3>
                <p className="text-slate-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
