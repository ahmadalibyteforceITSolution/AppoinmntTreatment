import { Users, Award, ShieldCheck, HeartHandshake } from "lucide-react";
import GsapAnimation from "@/components/GsapAnimation";

const stats = [
  {
    number: "12,000+",
    label: "Happy Patients",
    desc: "Maternal & gynecological patients treated",
    icon: Users,
    color: "bg-[#ccf2f9] text-[#00BDE0]",
  },
  {
    number: "5+",
    label: "Years Experience",
    desc: "Obstetrics & reproductive clinical care",
    icon: HeartHandshake,
    color: "bg-[#0A3366]/10 text-[#0A3366]",
  },
  {
    number: "99.8%",
    label: "Patient Trust Rate",
    desc: "Positive verified reviews & safe deliveries",
    icon: ShieldCheck,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    number: "20+",
    label: "Awards & Credentials",
    desc: "FCPS certified & hospital honors",
    icon: Award,
    color: "bg-amber-50 text-amber-600",
  },
];

const StatsSection = () => {
  return (
    <section className="py-14 sm:py-16 bg-[#ecf5fb] border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GsapAnimation animation="staggerUp" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <item.icon size={28} />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#031B4E] leading-none mb-1">
                  {item.number}
                </div>
                <div className="text-sm font-bold text-[#0A3366]">
                  {item.label}
                </div>
                <div className="text-[11px] text-[#566593] mt-0.5">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </GsapAnimation>
      </div>
    </section>
  );
};

export default StatsSection;
