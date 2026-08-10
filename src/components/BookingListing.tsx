"use client";

import { useState } from "react";
import { Clock, DollarSign, Stethoscope, Heart, Baby, Sparkles, ShieldCheck, Activity } from "lucide-react";
import Swal from "sweetalert2";

const treatments = [
  {
    name: "Consultant Gynecology Consultation",
    time: "20-30 Mins",
    charges: "2,500",
    specialist: "Dr. Faiza Hafeez (FCPS)",
    icon: Stethoscope
  },
  {
    name: "Comprehensive Prenatal & Antenatal Care",
    time: "30 Mins",
    charges: "3,500",
    specialist: "Obstetrics Specialist",
    icon: Baby
  },
  {
    name: "3D / 4D Fetal Anomaly Ultrasound",
    time: "30-45 Mins",
    charges: "5,000",
    specialist: "Diagnostic Imaging",
    icon: Activity
  },
  {
    name: "PCOS & Hormonal Imbalance Audit",
    time: "40 Mins",
    charges: "4,000",
    specialist: "Gynecological Endocrinology",
    icon: Sparkles
  },
  {
    name: "Infertility Assessment & Fertility Plan",
    time: "45 Mins",
    charges: "6,000",
    specialist: "Reproductive Specialist",
    icon: Heart
  },
  {
    name: "Cervical Cancer Screening (Pap Smear)",
    time: "20 Mins",
    charges: "3,000",
    specialist: "Preventive Care",
    icon: ShieldCheck
  }
];

const BookingListing = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleBook = (treatmentName: string) => {
    if (!selectedDate) {
      Swal.fire({
        icon: 'warning',
        title: 'Select Preferred Date',
        text: 'Please select your preferred consultation date before booking.',
        confirmButtonColor: '#db2777'
      });
      return;
    }

    const whatsappNumber = "923344280522";
    const text = `Hello Dr. Faiza, I would like to book a appointment for:\n\n*Treatment:* *${treatmentName}*\n*Preferred Date:* *${selectedDate}*\n\nPlease confirm my appointment slot.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-rose-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-widest mb-3">
            Treatment Menu & Services
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-950 mb-6">
            Gynecology Care & Fee Structure
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-base leading-relaxed">
            Transparent pricing for expert consultations, maternity scans, and specialized procedures by Dr. Faiza Hafeez.
          </p>

          <div className="max-w-xs mx-auto space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Select Preferred Date First</label>
            <div className="relative">
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl bg-white border border-pink-200 focus:ring-2 focus:ring-pink-500/20 shadow-sm outline-none transition-all font-bold text-slate-900"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {treatments.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl border border-pink-100 bg-white hover:shadow-xl hover:border-pink-300 transition-all group text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-pink-50 text-pink-600 shadow-inner flex items-center justify-center group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition-all flex-shrink-0">
                <item.icon size={28} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-950 text-lg leading-snug">{item.name}</h3>
                <p className="text-xs text-pink-600 uppercase tracking-wider font-bold mt-1">{item.specialist}</p>
                <div className="flex justify-center sm:justify-start gap-4 mt-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                    <Clock size={14} className="text-pink-600" />
                    {item.time}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-700 font-bold">
                    <DollarSign size={14} className="text-pink-600" />
                    PKR {item.charges}
                  </div>
                </div>
              </div>
              <button 
                onClick={() => handleBook(item.name)}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-pink-600 text-white text-sm font-bold hover:bg-pink-700 transition-all shadow-lg shadow-pink-600/20"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-slate-900 p-8 md:p-12 rounded-[36px] text-white flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="relative z-10">
            <h4 className="text-2xl font-serif font-bold mb-2">Need a custom maternity or surgical care plan?</h4>
            <p className="text-slate-300 text-sm max-w-xl">Dr. Faiza Hafeez offers personalized maternity delivery packages, high-risk pregnancy supervision, and surgical consultation.</p>
          </div>
          <a 
            href="https://wa.me/923344280522" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative z-10 px-8 py-4 bg-pink-600 hover:bg-pink-500 text-white rounded-full font-bold text-sm transition-all whitespace-nowrap shadow-lg shadow-pink-600/30"
          >
            Consult via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingListing;

