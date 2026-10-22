"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Heart, PhoneCall, CheckCircle2, Calendar } from "lucide-react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".gsap-badge", {
        opacity: 0,
        y: -25,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".gsap-title", {
        opacity: 0,
        y: 35,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".gsap-desc", {
        opacity: 0,
        y: 25,
        duration: 0.9,
        delay: 0.4,
        ease: "power3.out",
      });

      gsap.from(".gsap-features > div", {
        opacity: 0,
        x: -20,
        duration: 0.7,
        stagger: 0.1,
        delay: 0.6,
        ease: "power3.out",
      });

      gsap.from(".gsap-buttons > *", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.8,
        ease: "power3.out",
      });

      gsap.from(".gsap-stats > div", {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        delay: 1,
        ease: "back.out(1.4)",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 overflow-hidden bg-cover bg-right sm:bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('/template/images/hero-banner/banner-1.webp')" }}
    >
      {/* Soft gradient overlay ensuring text legibility while showing the mother & baby visual */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 lg:via-white/80 to-transparent z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-7">
          {/* Badge */}
          <div className="gsap-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ccf2f9] text-[#00a1be] text-xs font-bold uppercase tracking-wider border border-[#00BDE0]/20 shadow-sm">
            <Heart size={14} className="fill-[#00BDE0] text-[#00BDE0]" />
            Gynecology & Obstetrics Specialist • Lahore
          </div>

          {/* Heading */}
          <h1 className="gsap-title text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#031B4E] leading-[1.16] tracking-tight">
            We want you to experience <br />
            <span className="text-[#00BDE0]">birthing</span> with lots of love!
          </h1>

          {/* Description */}
          <p className="gsap-desc text-base sm:text-lg text-[#566593] max-w-xl leading-relaxed font-normal">
            Welcome to the medical portal of <strong className="text-[#031B4E] font-semibold">Dr. Faiza Hafeez</strong> — Gynae and Obs Resident at <strong className="text-[#0A3366] font-semibold">Ittefaq Hospital Lahore (Trust)</strong>. Dedicated to compassionate maternal care, high-risk pregnancy, 3D/4D ultrasound, and pelvic health.
          </p>

          {/* Key checklist items */}
          <div className="gsap-features grid grid-cols-2 gap-3 max-w-lg pt-1">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#031B4E] font-semibold">
              <CheckCircle2 size={16} className="text-[#00BDE0] flex-shrink-0" />
              <span>FCPS Certified Care</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#031B4E] font-semibold">
              <CheckCircle2 size={16} className="text-[#00BDE0] flex-shrink-0" />
              <span>3D/4D Fetal Ultrasound</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#031B4E] font-semibold">
              <CheckCircle2 size={16} className="text-[#00BDE0] flex-shrink-0" />
              <span>High-Risk Pregnancy Unit</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#031B4E] font-semibold">
              <CheckCircle2 size={16} className="text-[#00BDE0] flex-shrink-0" />
              <span>PCOS & Infertility Clinic</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="gsap-buttons flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              href="/appointments"
              className="btn btn-primary btn-lg flex items-center gap-2.5 shadow-xl group"
            >
              <Calendar size={18} />
              <span>Book Appointment</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+923344280522"
              className="btn btn-secondary btn-lg flex items-center gap-2.5 shadow-md"
            >
              <PhoneCall size={18} className="text-[#00BDE0]" />
              <span>0334 4280522</span>
            </a>
            <Link
              href="/services"
              className="btn btn-white btn-lg flex items-center gap-2"
            >
              <span>Explore Services</span>
            </Link>
          </div>

          {/* Stats Ribbon */}
          <div className="gsap-stats grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/80 max-w-lg">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#031B4E]">12,000+</div>
              <div className="text-[11px] text-[#566593] font-bold uppercase tracking-wider mt-0.5">Safe Deliveries</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#00BDE0]">5+ Yrs</div>
              <div className="text-[11px] text-[#566593] font-bold uppercase tracking-wider mt-0.5">Clinical Practice</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0A3366]">99.8%</div>
              <div className="text-[11px] text-[#566593] font-bold uppercase tracking-wider mt-0.5">Patient Trust</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
