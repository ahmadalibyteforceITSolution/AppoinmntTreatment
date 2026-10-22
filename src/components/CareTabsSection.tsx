"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  Baby, 
  Activity, 
  Sparkles, 
  ShieldCheck, 
  Coffee, 
  Check, 
  ArrowRight 
} from "lucide-react";
import GsapAnimation from "@/components/GsapAnimation";

const tabsData = [
  {
    id: "getting-pregnant",
    label: "Getting Pregnant",
    icon: Heart,
    title: "Holistic Pre-Conception & Fertility Wellness",
    description: "Preparing your body for pregnancy is crucial. Dr. Faiza Hafeez offers thorough pre-pregnancy health evaluations, ovulation tracking, hormonal balancing, and lifestyle counseling to optimize natural conception.",
    image: "/template/images/services/middle/img1.webp",
    points: [
      "Baseline fertility hormone panel (AMH, FSH, LH, Thyroid)",
      "Follicular monitoring & ovulation prediction",
      "PCOS and insulin resistance management",
      "Sperm analysis review & partner guidance"
    ],
  },
  {
    id: "pregnancy",
    label: "Pregnancy Journey",
    icon: Baby,
    title: "Comprehensive Maternal & Obstetric Care",
    description: "Personalized prenatal checkups monitoring maternal blood pressure, fetal growth velocity, amniotic fluid, and early detection of gestational conditions for a safe and healthy pregnancy.",
    image: "/template/images/services/middle/img2.webp",
    points: [
      "Scheduled trimester clinical examinations",
      "Management of gestational diabetes & hypertension",
      "Genetic carrier screening & anomaly detection",
      "Personalized nutrition & weight gain plans"
    ],
  },
  {
    id: "first-scan",
    label: "Your First Scan",
    icon: Activity,
    title: "High-Resolution Early Viability & Dating Scan",
    description: "Your first ultrasound is a magical milestone! We verify fetal heartbeat, calculate your accurate estimated due date (EDD), and confirm single or multiple gestations with high-definition clarity.",
    image: "/template/images/services/middle/img3.webp",
    points: [
      "Early fetal cardiac activity confirmation",
      "Accurate gestational dating & crown-rump length",
      "Exclusion of ectopic pregnancy or subchorionic hematoma",
      "Digital ultrasound pictures for proud parents"
    ],
  },
  {
    id: "baby-birth",
    label: "Baby Birth",
    icon: Sparkles,
    title: "Safe Delivery & Labor Management",
    description: "Dedicated labor and delivery support at Ittefaq Hospital Trust Lahore. We respect your birth plan while maintaining emergency protocols for both normal vaginal birth and planned or emergency cesarean delivery.",
    image: "/template/images/services/middle/img4.webp",
    points: [
      "24/7 labor room admission & monitoring",
      "Continuous electronic fetal heart rate monitoring (CTG)",
      "Pain management options & epidural analgesia",
      "VBAC (Vaginal Birth After Cesarean) guidance"
    ],
  },
  {
    id: "baby-care",
    label: "Baby Care",
    icon: ShieldCheck,
    title: "Newborn Assessment & Postpartum Recovery",
    description: "The golden hour and initial weeks after birth. We guide new mothers through post-operative healing, perineal recovery, hormonal adjustments, and baby bonding.",
    image: "/template/images/services/middle/img5.webp",
    points: [
      "Postnatal recovery examination at 1, 2, and 6 weeks",
      "Wound healing & pelvic floor recovery exercises",
      "Neonatal pediatric screening referrals",
      "Postpartum blues and emotional wellness support"
    ],
  },
  {
    id: "feeding-baby",
    label: "Feeding Baby",
    icon: Coffee,
    title: "Lactation Counseling & Infant Nutrition",
    description: "Empowering mothers with proper breastfeeding techniques, correct latching, milk supply enhancement, and practical solutions for common feeding challenges.",
    image: "/template/images/services/middle/img6.webp",
    points: [
      "Colostrum feeding & newborn latch positioning",
      "Prevention and treatment of sore nipples and mastitis",
      "Nutrition recommendations for nursing mothers",
      "Pumping and safe breastmilk storage advice"
    ],
  },
];

const CareTabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-[#ecf5fb] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#00a1be] text-xs font-bold uppercase tracking-wider shadow-sm border border-slate-200/60">
            Care Pathways
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#031B4E]">
            We Are Helping People Who Are
          </h2>
          <p className="text-[#566593] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            From pre-conception planning to postpartum motherhood, Dr. Faiza Hafeez provides end-to-end medical companionship.
          </p>
        </div>

        {/* Tab Navigation Pill Strip */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 bg-white p-2.5 sm:p-3 rounded-3xl shadow-md border border-slate-200/70 mb-12 max-w-4xl mx-auto">
          {tabsData.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === idx
                  ? "bg-[#00BDE0] text-white shadow-md shadow-[#00BDE0]/30"
                  : "text-[#031B4E] hover:bg-[#ecf5fb] hover:text-[#00BDE0]"
              }`}
            >
              <tab.icon size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <GsapAnimation animation="fadeInUp" className="bg-white rounded-[36px] p-8 sm:p-12 lg:p-16 shadow-xl border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-[#ecf5fb] bg-[#ecf5fb]">
                <Image
                  src={tabsData[activeTab].image}
                  alt={tabsData[activeTab].title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Information */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00a1be] bg-[#ccf2f9] px-3.5 py-1 rounded-full">
                {tabsData[activeTab].label}
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#031B4E] leading-snug">
                {tabsData[activeTab].title}
              </h3>

              <p className="text-[#566593] text-sm sm:text-base leading-relaxed">
                {tabsData[activeTab].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {tabsData[activeTab].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#ccf2f9] text-[#00a1be] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#031B4E]">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/appointments"
                  className="btn btn-primary btn-md flex items-center gap-2 group"
                >
                  <span>Book Consultation for this Stage</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="btn btn-outline-secondary btn-md"
                >
                  View Related Services
                </Link>
              </div>
            </div>
          </div>
        </GsapAnimation>
      </div>
    </section>
  );
};

export default CareTabsSection;
