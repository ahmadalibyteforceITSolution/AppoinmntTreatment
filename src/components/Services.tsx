import Link from "next/link";
import GsapAnimation from "@/components/GsapAnimation";
import { 
  Baby, 
  Stethoscope, 
  Heart, 
  Sparkles, 
  Activity, 
  Flame, 
  ShieldCheck, 
  UserCheck,
  ArrowRight 
} from "lucide-react";

const specialties = [
  {
    title: "High-Risk Pregnancy & Maternal Care",
    description: "Expert supervision for complex pregnancies, hypertension, gestational diabetes, pre-eclampsia, and continuous fetal wellbeing monitoring.",
    icon: Baby,
    color: "bg-[#ccf2f9] text-[#00BDE0]",
    link: "/services/high-risk-pregnancy",
  },
  {
    title: "Gynecology & Pelvic Health",
    description: "Routine checkups, uterine fibroid management, menstrual disorders, endometriosis treatment, and chronic pelvic pain therapy.",
    icon: Stethoscope,
    color: "bg-[#0A3366]/10 text-[#0A3366]",
    link: "/services/gynecology",
  },
  {
    title: "Infertility & Reproductive Wellness",
    description: "Comprehensive fertility evaluations, ovulation induction, follicular tracking scans, and evidence-based assisted conception guidance.",
    icon: Heart,
    color: "bg-rose-50 text-rose-500",
    link: "/services/infertility-treatment",
  },
  {
    title: "PCOS / PCOD & Hormonal Management",
    description: "Targeted metabolic, dietary, and medical solutions for PCOS, irregular menstrual cycles, hormonal acne, and sustainable weight control.",
    icon: Sparkles,
    color: "bg-amber-50 text-amber-600",
    link: "/services/pcos-management",
  },
  {
    title: "3D / 4D Fetal Anomaly Ultrasound",
    description: "High-resolution obstetric ultrasound imaging for early anatomical screening, growth monitoring, and maternal Doppler blood flow analysis.",
    icon: Activity,
    color: "bg-emerald-50 text-emerald-600",
    link: "/services/3d-4d-ultrasound",
  },
  {
    title: "Laparoscopic & Minimally Invasive Surgery",
    description: "Advanced keyhole surgical procedures for ovarian cysts, laparoscopic myomectomy, diagnostic hysteroscopy, and pelvic surgery.",
    icon: Flame,
    color: "bg-indigo-50 text-indigo-600",
    link: "/services/laparoscopic-surgery",
  },
  {
    title: "Cervical Screening & Pap Smears",
    description: "Preventive oncology screenings, liquid-based Pap smears, HPV DNA testing, colposcopy evaluation, and early cervical lesion management.",
    icon: ShieldCheck,
    color: "bg-teal-50 text-teal-600",
    link: "/services/cervical-screening",
  },
  {
    title: "Postnatal Care & Lactation Support",
    description: "Comprehensive postpartum checkups, healing evaluation, newborn bonding advice, lactation counseling, and maternal mental wellness.",
    icon: UserCheck,
    color: "bg-sky-50 text-sky-600",
    link: "/services/postnatal-care",
  },
];

const Services = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#ecf5fb] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#00a1be] text-xs font-bold uppercase tracking-wider shadow-sm border border-slate-200/60">
            Our Specialties
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#031B4E]">
            The Best Quality Service <span className="text-[#00BDE0]">You Can Get</span>
          </h2>
          <p className="text-[#566593] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Evidence-based medical care tailored for every stage of a woman's wellness — from adolescence and motherhood to post-menopause.
          </p>
        </div>

        <GsapAnimation animation="staggerUp" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {specialties.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="clinic-card p-7 sm:p-8 flex flex-col justify-between group bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-[#031B4E] mb-3 leading-snug group-hover:text-[#00BDE0] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#566593] text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center text-[#00BDE0] font-bold text-xs pt-4 border-t border-slate-100 group-hover:text-[#00a1be]">
                <span>View All Details</span>
                <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          ))}
        </GsapAnimation>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="btn btn-secondary btn-lg inline-flex items-center gap-2 shadow-lg"
          >
            <span>Explore All Medical Treatments</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
