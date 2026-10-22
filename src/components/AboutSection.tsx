import Image from "next/image";
import Link from "next/link";
import { Check, Heart, Shield, Award, Calendar, ArrowRight } from "lucide-react";
import GsapAnimation from "@/components/GsapAnimation";

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Collage & Badges */}
          <GsapAnimation animation="slideLeft" className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-[480px]">
              {/* Main Image */}
              <div className="rounded-[36px] overflow-hidden shadow-2xl border-8 border-white bg-[#ecf5fb] aspect-[4/3] relative">
                <Image
                  src="/template/images/about/img1.webp"
                  alt="Dr. Faiza Hafeez Gynecology Clinic Consultation"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Secondary Overlapping Image */}
              <div className="absolute -bottom-10 -right-6 sm:-right-8 w-44 sm:w-56 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-6 border-white bg-[#ccf2f9] hidden sm:block">
                <Image
                  src="/template/images/about/main.webp"
                  alt="Dr. Faiza Hafeez Maternal Care"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Years of Experience Circle Badge */}
              <div className="absolute -top-6 -left-6 sm:-left-8 bg-[#00BDE0] text-white p-5 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center max-w-[130px] border-4 border-white">
                <span className="text-3xl font-extrabold leading-none">5+</span>
                <span className="text-[11px] font-bold uppercase tracking-wider mt-1">Years Clinical Experience</span>
              </div>
            </div>
          </GsapAnimation>

          {/* Right Column: Content */}
          <GsapAnimation animation="fadeInUp" className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ccf2f9] text-[#00a1be] text-xs font-bold uppercase tracking-wider">
              <Heart size={14} className="fill-[#00BDE0] text-[#00BDE0]" />
              About Our Clinic
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#031B4E] leading-tight">
              Your Trusted Partner in <br />
              <span className="text-[#00BDE0]">Gynecological Care</span>
            </h2>

            <p className="text-[#566593] text-base sm:text-lg leading-relaxed">
              Experience the highest standard of compassionate healthcare. <strong className="text-[#031B4E] font-semibold">Dr. Faiza Hafeez</strong> — Gynae and Obs Resident at <strong className="text-[#0A3366] font-semibold">Ittefaq Hospital Lahore (Trust)</strong>, offers comprehensive maternal, prenatal, fetal diagnostic, and pelvic healthcare solutions tailored to every woman’s distinct life journey.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {[
                "FCPS Certified Residency & Consultant",
                "Advanced 3D/4D Fetal Anomaly Scans",
                "High-Risk Pregnancy Intensive Care",
                "Dedicated Infertility & PCOS Clinic",
                "Minimally Invasive Laparoscopic Surgery",
                "Compassionate Postpartum & Newborn Support"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ccf2f9] text-[#00a1be] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-[#031B4E]">{item}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/about"
                className="btn btn-primary btn-lg flex items-center gap-2 group"
              >
                <span>Read More About Dr. Faiza</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/appointments"
                className="btn btn-outline-secondary btn-lg flex items-center gap-2"
              >
                <Calendar size={18} className="text-[#00BDE0]" />
                <span>Book Consultation</span>
              </Link>
            </div>
          </GsapAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
