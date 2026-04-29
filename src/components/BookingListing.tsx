import { Clock, DollarSign, Activity, Heart, UserRound, Baby } from "lucide-react";
import Link from "next/link";
const treatments = [
  {
    name: "General Consultation",
    time: "20-30 Mins",
    charges: "2,000",
    specialist: "Dr. Faiza Hafeez",
    icon: UserRound
  },
  {
    name: "Cardiac ECG & Stress Test",
    time: "45-60 Mins",
    charges: "5,500",
    specialist: "Cardiology Dept",
    icon: Activity
  },
  {
    name: "Prenatal Ultrasound",
    time: "30 Mins",
    charges: "3,500",
    specialist: "Gynecology Dept",
    icon: Baby
  },
  {
    name: "Heart Rhythm Monitoring",
    time: "24 Hours (Device)",
    charges: "8,000",
    specialist: "Cardiology Dept",
    icon: Heart
  },
  {
    name: "Detailed Health Screening",
    time: "90 Mins",
    charges: "12,500",
    specialist: "Executive Clinic",
    icon: Heart
  },
  {
    name: "Nursing Home Visit",
    time: "Flexible",
    charges: "4,000 / visit",
    specialist: "Nursing Team",
    icon: Clock
  }
];

const BookingListing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Treatment Menu</h2>
          <p className="text-4xl md:text-5xl font-serif font-bold text-slate-950 mb-6">Booking & Charges</p>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive list of our medical treatments, estimated session times, and transparent pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {treatments.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 p-6 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <item.icon size={28} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-950 text-lg">{item.name}</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{item.specialist}</p>
                <div className="flex gap-4 mt-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <Clock size={14} className="text-primary" />
                    {item.time}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <DollarSign size={14} className="text-primary" />
                    PKR {item.charges}
                  </div>
                </div>
              </div>
              <Link href="/appointments" className="px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold hover:bg-primary hover:text-white transition-all">
                Book
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-slate-950 p-10 rounded-[40px] text-white flex flex-col md:row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-serif font-bold mb-2">Need a custom treatment plan?</h4>
            <p className="text-slate-400">Our specialists can design a package tailored to your specific health needs.</p>
          </div>
          <a href="https://wa.me/923344280522" target="_blank" className="px-10 py-4 bg-secondary text-slate-950 rounded-full font-bold hover:bg-white transition-all whitespace-nowrap">
            Consult via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingListing;
