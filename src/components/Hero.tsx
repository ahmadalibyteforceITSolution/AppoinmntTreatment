import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px] -z-10 hidden lg:block" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
            <Star size={14} fill="currentColor" />
            Top Rated Specialist in Lahore
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-950 leading-tight">
            Your Health is Our <span className="text-primary italic">Highest</span> Priority.
          </h1>
          
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            Experience premium medical care with Dr. Faiza Hafeez. Specializing in cardiology and gynecology with a commitment to excellence and compassionate patient care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/appointments" 
              className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
            >
              Book Appointment
              <ArrowRight size={20} />
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
            >
              Explore Services
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-slate-950">15+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-slate-950">10k+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Happy Patients</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-slate-950">24/7</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Emergency Care</div>
            </div>
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right duration-1000 delay-200">
          <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            {/* Using a placeholder for now, but will suggest generating an image */}
            <div className="w-full h-full bg-slate-200 flex items-center justify-center relative overflow-hidden rounded-[32px]">
              <Image 
                src="/faiza.jpg" 
                alt="Dr. Faiza Hafeez"
                fill
                className="object-cover scale-[1.15] origin-bottom"
                priority
              />
            </div>
          </div>
          
          {/* Floating Cards */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
              <ShieldCheck size={28} />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-950">Verified Expert</div>
              <div className="text-xs text-slate-500">PMC Certified</div>
            </div>
          </div>
          
          <div className="absolute top-1/4 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
              <Clock size={28} />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-950">Fast Booking</div>
              <div className="text-xs text-slate-500">Under 2 Mins</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
