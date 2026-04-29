import { Heart, UserRound, Baby, Activity, Stethoscope, Pill } from "lucide-react";
import Link from "next/link";

const specialties = [
  {
    title: "Cardiology",
    description: "Expert heart care including ECG, Stress Testing, and Hypertension management.",
    icon: Heart,
    color: "bg-red-50 text-red-600",
    link: "/services/cardiology"
  },
  {
    title: "Gynecology",
    description: "Comprehensive women's health, prenatal care, and reproductive wellness.",
    icon: UserRound,
    color: "bg-purple-50 text-purple-600",
    link: "/services/gynecology"
  },
  {
    title: "Obstetrics",
    description: "Personalized maternity care ensuring a safe and healthy journey to motherhood.",
    icon: Baby,
    color: "bg-blue-50 text-blue-600",
    link: "/services/obstetrics"
  },
  {
    title: "General Medicine",
    description: "Primary care for acute and chronic illnesses with a holistic approach.",
    icon: Stethoscope,
    color: "bg-teal-50 text-teal-600",
    link: "/services/general-medicine"
  },
  {
    title: "Pediatrics",
    description: "Specialized medical care for infants, children, and adolescents.",
    icon: Pill,
    color: "bg-amber-50 text-amber-600",
    link: "/services/pediatrics"
  },
  {
    title: "Diagnostic Imaging",
    description: "Advanced ultrasound and diagnostic services with precise reporting.",
    icon: Activity,
    color: "bg-indigo-50 text-indigo-600",
    link: "/services/diagnostics"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Our Specialties</h2>
          <p className="text-4xl md:text-5xl font-serif font-bold text-slate-950">Expert Medical Solutions</p>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide specialized care across multiple disciplines, utilizing the latest 
            medical technologies and evidence-based practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, index) => (
            <Link 
              key={index} 
              href={item.link}
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 border-b-4 border-b-transparent hover:border-b-primary"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="flex items-center text-primary font-bold text-sm">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
