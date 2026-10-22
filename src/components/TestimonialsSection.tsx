import Image from "next/image";
import { Star, Quote, Heart, CheckCircle2 } from "lucide-react";
import GsapAnimation from "@/components/GsapAnimation";

const reviews = [
  {
    name: "Sana Tariq",
    tag: "High-Risk Pregnancy & Safe Delivery",
    avatar: "/template/images/avatar/small/avatar1.webp",
    rating: 5,
    comment:
      "I was diagnosed with gestational hypertension at week 28. Dr. Faiza Hafeez managed my case with immense precision, calm reassurance, and daily monitoring. I delivered a healthy baby boy safely at Ittefaq Hospital!",
  },
  {
    name: "Mariam Usman",
    tag: "PCOS & Fertility Success",
    avatar: "/template/images/avatar/small/avatar2.webp",
    rating: 5,
    comment:
      "After 3 years of struggling with PCOS and irregular cycles, Dr. Faiza's structured metabolic and ovulation induction treatment worked wonders. We are now blessed with a beautiful daughter. Truly the best gynecologist in Lahore!",
  },
  {
    name: "Dr. Fatima Zahra",
    tag: "3D/4D Fetal Anomaly Ultrasound",
    avatar: "/template/images/avatar/small/avatar3.webp",
    rating: 5,
    comment:
      "As a fellow healthcare professional, I was thoroughly impressed by Dr. Faiza’s detailed anatomical evaluation during our 20-week anomaly scan. She explained every chamber and measurement with complete transparency.",
  },
  {
    name: "Zainab Bilal",
    tag: "VBAC (Vaginal Birth After C-Section)",
    avatar: "/template/images/avatar/small/avatar4.webp",
    rating: 5,
    comment:
      "Most doctors insisted on a second C-section, but Dr. Faiza believed in my body. With her vigilant labor monitoring, I had a successful and painless normal delivery. Highly compassionate lady doctor!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="pt-12 sm:pt-16 pb-10 sm:pb-12 bg-[#ecf5fb] border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#00a1be] text-xs font-bold uppercase tracking-wider shadow-sm border border-slate-200/60">
            <Heart size={14} className="fill-[#00BDE0] text-[#00BDE0]" />
            Patient Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#031B4E]">
            What Our Patients <span className="text-[#00BDE0]">Say About Us</span>
          </h2>
          <p className="text-[#566593] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Real experiences from mothers and families who trusted Dr. Faiza Hafeez with their maternal and gynecological care.
          </p>
        </div>

        <GsapAnimation animation="staggerUp" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 text-amber-400 mb-5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#566593] leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#00BDE0] relative flex-shrink-0 bg-[#ecf5fb]">
                  <Image
                    src={rev.avatar}
                    alt={rev.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#031B4E] flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                  </div>
                  <div className="text-[10px] text-[#00a1be] font-semibold">
                    {rev.tag}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </GsapAnimation>
      </div>
    </section>
  );
};

export default TestimonialsSection;
