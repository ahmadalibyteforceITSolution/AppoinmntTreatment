import { Baby, Heart, Sparkles, Activity, ShieldCheck, Stethoscope, UserCheck, Flame } from "lucide-react";
import Link from "next/link";

const specialties = [
  {
    title: "High-Risk Pregnancy & Maternal Care",
    description: "Expert supervision for complex pregnancies, hypertension, gestational diabetes, and fetal wellbeing monitoring.",
    icon: Baby,
    color: "bg-rose-50 text-rose-600 border-rose-100",
    link: "/services/high-risk-pregnancy"
  },
  {
    title: "Gynecology & Pelvic Health",
    description: "Routine screenings, fibroid management, menstrual disorders, endometriosis, and chronic pelvic pain therapy.",
    icon: Stethoscope,
    color: "bg-pink-50 text-pink-600 border-pink-100",
    link: "/services/gynecology"
  },
  {
    title: "Infertility & Reproductive Wellness",
    description: "Comprehensive fertility evaluations, ovulation induction, follicular tracking, and assisted conception guidance.",
    icon: Heart,
    color: "bg-purple-50 text-purple-600 border-purple-100",
    link: "/services/infertility-treatment"
  },
  {
    title: "PCOS / PCOD & Hormonal Management",
    description: "Targeted metabolic and lifestyle solutions for PCOS, irregular cycles, acne, and weight management.",
    icon: Sparkles,
    color: "bg-amber-50 text-amber-600 border-amber-100",
    link: "/services/pcos-management"
  },
  {
    title: "3D / 4D Fetal Anomaly Ultrasound",
    description: "High-resolution ultrasound imaging for growth monitoring, anomaly screening, and Doppler flow studies.",
    icon: Activity,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    link: "/services/3d-4d-ultrasound"
  },
  {
    title: "Laparoscopic & Minimally Invasive Surgery",
    description: "Advanced keyhole surgical procedures for ovarian cysts, fibroids, hysteroscopy, and pelvic disorders.",
    icon: Flame,
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    link: "/services/laparoscopic-surgery"
  },
  {
    title: "Cervical Screening & Pap Smear Clinic",
    description: "Preventive screening for cervical health, HPV testing, colposcopy evaluation, and early lesion care.",
    icon: ShieldCheck,
    color: "bg-teal-50 text-teal-600 border-teal-100",
    link: "/services/cervical-screening"
  },
  {
    title: "Postnatal Care & Lactation Support",
    description: "Dedicated postpartum checkups, newborn bonding guidance, lactation counseling, and emotional wellness.",
    icon: UserCheck,
    color: "bg-sky-50 text-sky-600 border-sky-100",
    link: "/services/postnatal-care"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-widest">
            Specialized Medical Discipline
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-950">
            Gynecology & Obstetrics Specialties
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
            Evidence-based medical care tailored for every stage of a woman's life — from adolescence and motherhood to menopause.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, index) => (
            <Link 
              key={index} 
              href={item.link}
              className="group p-7 rounded-3xl border border-pink-100/70 bg-gradient-to-b from-white to-rose-50/20 hover:bg-white hover:shadow-xl hover:shadow-pink-900/5 hover:border-pink-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl ${item.color} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                  <item.icon size={26} />
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2 leading-snug group-hover:text-pink-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center text-pink-600 font-bold text-xs pt-4 border-t border-pink-50">
                View Details
                <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

