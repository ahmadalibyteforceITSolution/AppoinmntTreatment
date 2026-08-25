import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-rose-50/60 via-white to-pink-50/40">
      {/* Background Glow & Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-pink-100/40 rounded-l-[120px] -z-10 hidden lg:block blur-xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100/80 text-pink-700 text-xs font-bold tracking-wider uppercase border border-pink-200 shadow-sm">
            <Star size={14} className="fill-pink-600 text-pink-600" />
            Gynae & Obs Resident | Ittefaq Hospital (Trust) Lahore 👩‍⚕️
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight">
            Compassionate Care for <span className="text-pink-600 italic">Women's Health</span> & Motherhood.
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
            Welcome to the medical portal of <strong className="text-slate-900 font-semibold">Dr. Faiza Hafeez</strong> — Gynae and Obs Resident at <strong className="text-pink-700 font-semibold">Ittefaq Hospital Lahore (Trust)</strong>. Dedicated to high-risk pregnancy care, infertility treatment, PCOS management, 3D ultrasound scans, and obstetrics healthcare in Lahore.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link 
              href="/appointments" 
              className="px-7 py-4 bg-pink-600 text-white rounded-full font-bold text-base hover:bg-pink-700 transition-all shadow-xl shadow-pink-600/30 flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              Book Appointment
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="tel:+923344280522" 
              className="px-7 py-4 bg-slate-900 text-white rounded-full font-bold text-base hover:bg-slate-800 transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <PhoneCall size={18} className="text-pink-400" />
              Call Now: 0334 4280522
            </a>
            <Link 
              href="/services" 
              className="px-7 py-4 bg-white text-slate-900 border border-pink-200 rounded-full font-bold text-base hover:bg-pink-50/50 transition-all shadow-sm flex items-center justify-center whitespace-nowrap"
            >
              Treatments
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-pink-100">
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold text-pink-700">Ittefaq Hospital</div>
              <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Trust Lahore</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold text-pink-700">12,000+</div>
              <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Safe Deliveries</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold text-pink-700">99.8%</div>
              <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Patient Trust</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-pink-50">
            <Image 
              src="/faiza.jpg" 
              alt="Dr. Faiza Hafeez - Gynae and Obs Resident at Ittefaq Hospital Lahore Trust"
              fill
              className="object-cover scale-[1.05] origin-bottom"
              priority
            />
          </div>
          
          {/* Floating Badges */}
          <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-pink-100">
            <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Ittefaq Hospital (Trust)</div>
              <div className="text-xs text-slate-500 font-medium">Gynae & Obs Resident 👩‍⚕️</div>
            </div>
          </div>
          
          <div className="absolute top-8 -right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-pink-100 hidden sm:flex">
            <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Sparkles size={22} />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">High-Risk Care</div>
              <div className="text-xs text-slate-500 font-medium">Expert Obstetrics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
