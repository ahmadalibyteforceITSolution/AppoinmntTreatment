"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, HelpCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import GsapAnimation from "@/components/GsapAnimation";

const faqs = [
  {
    q: "Where does Dr. Faiza Hafeez conduct clinical consultations?",
    a: "Dr. Faiza Hafeez practices as a Gynae and Obs Resident at Ittefaq Hospital (Trust), located in Model Town / Gulberg III area in Lahore. Both outpatient consultations and scheduled diagnostic ultrasound slots are available from Monday to Saturday.",
  },
  {
    q: "How do I schedule an appointment or ultrasound scan?",
    a: "You can book directly through our online booking form on this website, call our clinic reception at +92 334 4280522, or message us on WhatsApp. Our assistant will confirm your preferred date and time slot within a few hours.",
  },
  {
    q: "What defines a high-risk pregnancy and how is it managed?",
    a: "A pregnancy is considered high-risk if there is maternal hypertension, pre-eclampsia, gestational diabetes, previous C-section complications, multiple gestation (twins), or maternal age concerns. Dr. Faiza provides individualized monitoring, frequent fetal Doppler scans, and specialized delivery planning.",
  },
  {
    q: "At how many weeks should I get a 3D/4D fetal anomaly ultrasound?",
    a: "The detailed anomaly scan is typically performed between 18 and 22 weeks of pregnancy. This scan meticulously examines fetal organ anatomy, spine, brain, heart chambers, limb development, and placental location.",
  },
  {
    q: "What diagnostic and treatment options exist for PCOS?",
    a: "We perform comprehensive hormonal blood work (LH, FSH, Insulin, Androgens) and high-resolution pelvic ultrasound to evaluate ovarian morphology. Management includes personalized lifestyle nutrition, ovulation induction, insulin sensitizers, and cycle regulation.",
  },
  {
    q: "Do you support Normal Delivery and VBAC (Vaginal Birth After Cesarean)?",
    a: "Yes! Dr. Faiza Hafeez strongly advocates for natural birth when medically safe. For patients with a previous single lower segment cesarean, we conduct a careful anatomical pelvic assessment and continuous electronic fetal monitoring to support safe VBAC attempts.",
  },
];

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Experience Badge */}
          <GsapAnimation animation="slideLeft" className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px]">
              <div className="rounded-[36px] overflow-hidden shadow-2xl border-8 border-[#ecf5fb] aspect-[4/5] relative bg-[#ecf5fb]">
                <Image
                  src="/template/images/about/image.webp"
                  alt="Dr. Faiza Hafeez Patient Consultation"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Help Banner */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#0A3366] text-white p-5 rounded-3xl shadow-xl max-w-[260px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-[#00BDE0] flex items-center justify-center text-white">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-300">Have more questions?</div>
                    <div className="text-sm font-bold">Call Clinic Desk</div>
                  </div>
                </div>
                <a
                  href="tel:+923344280522"
                  className="text-xs font-bold text-[#00BDE0] hover:underline"
                >
                  +92 334 4280522
                </a>
              </div>
            </div>
          </GsapAnimation>

          {/* Right Column: Accordion */}
          <GsapAnimation animation="fadeInUp" className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ccf2f9] text-[#00a1be] text-xs font-bold uppercase tracking-wider">
                <HelpCircle size={13} className="text-[#00BDE0]" />
                Common Inquiries
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#031B4E]">
                Frequently Asked <span className="text-[#00BDE0]">Questions</span>
              </h2>
              <p className="text-sm sm:text-base text-[#566593]">
                Find clear medical insights and booking guidelines from Dr. Faiza Hafeez.
              </p>
            </div>

            {/* Accordion list */}
            <div className="space-y-3.5 pt-2">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-[#ecf5fb]/50 border-[#00BDE0]/40 shadow-sm"
                        : "bg-white border-slate-200/80 hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#031B4E] cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? "bg-[#00BDE0] text-white rotate-180" : "bg-slate-100 text-[#566593]"
                        }`}
                      >
                        <ChevronDown size={18} />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-[#566593] leading-relaxed animate-in fade-in duration-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </GsapAnimation>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
