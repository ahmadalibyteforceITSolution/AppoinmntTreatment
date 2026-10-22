"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Calendar, Heart, CheckCircle2 } from "lucide-react";
import GsapAnimation from "@/components/GsapAnimation";

const timelineData = [
  {
    month: "1 Month",
    image: "/template/images/dummy/1.png",
    title: "Conception & Early Implantation",
    milestone: "Fertilized egg implants in the uterine wall. Neural tube formation begins.",
    tests: "Initial pregnancy confirmation (Beta hCG), folic acid & prenatal vitamins initiation.",
  },
  {
    month: "2 Month",
    image: "/template/images/dummy/2.png",
    title: "Heartbeat & Organogenesis",
    milestone: "Baby's heart begins beating at ~6 weeks. Tiny limb buds and facial features form.",
    tests: "Early viability ultrasound scan, baseline blood tests, routine obstetric history.",
  },
  {
    month: "3 Month",
    image: "/template/images/dummy/3.png",
    title: "First Trimester Screening",
    milestone: "Baby is fully formed with fingers, toes, and reflexive movements.",
    tests: "Nuchal Translucency (NT) scan, First Trimester Combined Screening for chromosomal health.",
  },
  {
    month: "4 Month",
    image: "/template/images/dummy/4.png",
    title: "Second Trimester Transition",
    milestone: "Baby can suck thumb, swallow, and has distinct fingerprints.",
    tests: "Maternal blood pressure check, urine protein check, fetal heart Doppler listening.",
  },
  {
    month: "5 Month",
    image: "/template/images/dummy/5.png",
    title: "Detailed Fetal Anomaly Scan",
    milestone: "You may feel the first baby kicks ('quickening'). Vernix caseosa coats delicate skin.",
    tests: "3D/4D Fetal Anomaly Ultrasound (18-22 weeks) evaluating brain, heart, kidneys, and spine.",
  },
  {
    month: "6 Month",
    image: "/template/images/dummy/6.png",
    title: "Growth & Hearing Development",
    milestone: "Baby responds to mother's voice and sounds. Lungs develop alveoli air sacs.",
    tests: "Gestational diabetes glucose challenge test (OGTT), complete blood count (CBC) for anemia.",
  },
  {
    month: "7 Month",
    image: "/template/images/dummy/7.png",
    title: "Third Trimester Journey",
    milestone: "Baby opens eyes, practices breathing motions, and brain tissue matures rapidly.",
    tests: "Third-trimester growth scan, placental positioning check, Rh antibody check if needed.",
  },
  {
    month: "8 Month",
    image: "/template/images/dummy/8.png",
    title: "Rapid Weight Gain & Positioning",
    milestone: "Baby turns head-down in preparation for birth. Immune antibodies cross the placenta.",
    tests: "Bi-weekly prenatal consultations, fetal Doppler flow assessment, blood pressure monitoring.",
  },
  {
    month: "9 Month",
    image: "/template/images/dummy/9.png",
    title: "Full Term & Delivery Readiness",
    milestone: "Baby is fully mature, weighing 2.8 - 3.5 kg, ready to meet the loving family!",
    tests: "Weekly clinical checkups, pelvic evaluation, birth plan finalization at Ittefaq Hospital Trust.",
  },
];

const TimelineSection = () => {
  const [activeIdx, setActiveIdx] = useState(4); // Default to Month 5 (Anomaly scan)

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ccf2f9] text-[#00a1be] text-xs font-bold uppercase tracking-wider">
            <Sparkles size={14} className="text-[#00BDE0]" />
            Your Maternity Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#031B4E]">
            Taking Care of You and Your Baby <br className="hidden sm:inline" />
            <span className="text-[#00BDE0]">Pregnancy Timeline</span>
          </h2>
          <p className="text-[#566593] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Follow your pregnancy journey month-by-month with Dr. Faiza Hafeez's specialized clinical milestone guidance.
          </p>
        </div>

        {/* Timeline Horizontal Swiper / Navigation Bar */}
        <div className="relative mb-12">
          <div className="overflow-x-auto pb-4 custom-scroll">
            <div className="flex gap-4 sm:gap-6 min-w-max px-2 py-4 justify-center">
              {timelineData.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex flex-col items-center p-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeIdx === idx
                      ? "bg-[#00BDE0] text-white border-[#00BDE0] shadow-lg shadow-[#00BDE0]/30 scale-105"
                      : "bg-white text-[#031B4E] border-slate-200/80 hover:border-[#00BDE0]/60 hover:bg-[#ecf5fb]"
                  }`}
                >
                  <div className="w-16 h-20 sm:w-20 sm:h-24 relative mb-2 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.month}
                      width={80}
                      height={96}
                      className="object-contain h-full"
                    />
                  </div>
                  <span className={`text-xs font-bold py-1 px-3 rounded-full ${
                    activeIdx === idx ? "bg-white text-[#00BDE0]" : "bg-[#ecf5fb] text-[#0A3366]"
                  }`}>
                    {item.month}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Month Detail Card */}
        <GsapAnimation animation="fadeInUp" className="max-w-4xl mx-auto bg-[#ecf5fb] rounded-[32px] p-8 sm:p-12 border border-[#00BDE0]/20 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="w-40 h-48 relative bg-white rounded-3xl p-4 shadow-sm border border-slate-100 flex items-center justify-center">
                <Image
                  src={timelineData[activeIdx].image}
                  alt={timelineData[activeIdx].title}
                  width={140}
                  height={170}
                  className="object-contain max-h-full"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-[#00BDE0] text-white text-xs font-bold uppercase tracking-wider">
                Stage: {timelineData[activeIdx].month}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#031B4E]">
                {timelineData[activeIdx].title}
              </h3>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Heart size={18} className="text-[#00BDE0] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#0A3366] uppercase block">Fetal Development:</span>
                    <p className="text-sm text-[#566593]">{timelineData[activeIdx].milestone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#0A3366] uppercase block">Recommended Medical Tests:</span>
                    <p className="text-sm text-[#566593]">{timelineData[activeIdx].tests}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GsapAnimation>
      </div>
    </section>
  );
};

export default TimelineSection;
