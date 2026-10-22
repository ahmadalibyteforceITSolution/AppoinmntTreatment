import Image from "next/image";
import { Apple, Droplets, Salad, Pill, CheckCircle2 } from "lucide-react";
import GsapAnimation from "@/components/GsapAnimation";

const nutritionCards = [
  {
    title: "More Fresh Fruits",
    desc: "Rich in vitamin C, fiber, and essential antioxidants that support placenta development and boost maternal immunity.",
    image: "/template/images/about/items/1.png",
    tag: "Antioxidants",
    color: "bg-rose-50 text-rose-500",
  },
  {
    title: "Essential Vitamins",
    desc: "Targeted prenatal vitamins including Folic Acid (400 mcg), Iron for hemoglobin, Calcium, and Vitamin D3.",
    image: "/template/images/about/items/2.png",
    tag: "Micro-Nutrients",
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Organic Vegetables",
    desc: "Dark leafy greens providing natural folate, magnesium, and potassium to prevent pre-eclampsia and constipation.",
    image: "/template/images/about/items/3.png",
    tag: "Dietary Fiber",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Clean Pure Water",
    desc: "Hydration of at least 8-10 glasses daily maintains healthy amniotic fluid levels and supports baby circulation.",
    image: "/template/images/about/items/4.png",
    tag: "Hydration",
    color: "bg-sky-50 text-sky-600",
  },
];

const NutritionSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ccf2f9] text-[#00a1be] text-xs font-bold uppercase tracking-wider">
            Healthy Living Guide
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#031B4E]">
            Essential Nutrition Tips for a <br className="hidden sm:inline" />
            <span className="text-[#00BDE0]">Healthy Pregnancy</span>
          </h2>
          <p className="text-[#566593] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Maintaining a balanced diet during pregnancy directly impacts your baby's organogenesis, brain maturation, and safe birth weight.
          </p>
        </div>

        <GsapAnimation animation="staggerUp" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {nutritionCards.map((item, idx) => (
            <div
              key={idx}
              className="clinic-card p-6 sm:p-7 flex flex-col items-center text-center group bg-[#ecf5fb]/40 hover:bg-white"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 relative mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={112}
                  height={112}
                  className="object-contain"
                />
              </div>

              <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${item.color}`}>
                {item.tag}
              </span>

              <h3 className="text-xl font-bold text-[#031B4E] mb-2 group-hover:text-[#00BDE0] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#566593] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </GsapAnimation>
      </div>
    </section>
  );
};

export default NutritionSection;
