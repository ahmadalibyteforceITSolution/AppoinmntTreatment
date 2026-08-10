"use client";

import { useState } from "react";
import { Clock, CheckCircle2, DollarSign, User, ShieldPlus, Loader2, Heart, Calendar } from "lucide-react";
import Link from "next/link";
import Swal from "sweetalert2";

const packages = [
  {
    name: "Routine Gynecology Audit",
    price: "2,500",
    duration: "25 Mins",
    features: ["Physical Clinical Examination", "Pelvic Health Screening", "Hormonal & Cycle Advice", "Digital Prescription & Plan"],
    recommended: false
  },
  {
    name: "Comprehensive Antenatal & Pregnancy",
    price: "4,500",
    duration: "45 Mins",
    features: ["Specialist Maternal Checkup", "Fetal Wellbeing Assessment", "Pregnancy Nutrition & Diet Plan", "24/7 Priority Emergency Access"],
    recommended: true
  },
  {
    name: "Executive Women's Health Package",
    price: "9,500",
    duration: "75 Mins",
    features: ["Complete Gynecological Audit", "Pelvic Ultrasound Imaging", "Pap Smear & Cervical Screening", "PCOS & Fertility Consultation"],
    recommended: false
  }
];

const schedules = [
  { day: "Monday", time: "09:00 AM - 02:00 PM", status: "Available" },
  { day: "Tuesday", time: "11:00 AM - 05:00 PM", status: "Available" },
  { day: "Wednesday", time: "09:00 AM - 02:00 PM", status: "Limited Slots" },
  { day: "Thursday", time: "11:00 AM - 05:00 PM", status: "Available" },
  { day: "Friday", time: "02:00 PM - 07:00 PM", status: "Available" },
  { day: "Saturday", time: "10:00 AM - 03:00 PM", status: "Prior Appt" },
];

const AppointmentScheduler = () => {
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFastTrack = async () => {
    if (!phone) return Swal.fire("Required", "Please enter your phone number.", "warning");
    setIsLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: "Fast-Track Callback Request",
          phone: phone,
          message: "Patient requested an urgent callback for gynecology consultation schedule."
        }),
      });

      const whatsappNumber = "923344280522";
      const text = `Hello Dr. Faiza, I request a fast-track callback for gynecology consultation:\n\n*Phone Number:* *${phone}*`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      
      window.open(whatsappUrl, '_blank');

      Swal.fire("Callback Requested!", "Our reception will contact you shortly.", "success");
      setPhone("");
    } catch (error) {
      Swal.fire("Notice", "Redirecting to WhatsApp for quick response.", "info");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-rose-50/40 via-white to-pink-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-widest mb-3">
            Consultation Packages & Timings
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-950 mb-4">
            Transparent Pricing & Clinic OPD Schedule
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            Select a tailored healthcare package or review Dr. Faiza Hafeez's weekly outpatient clinic timings in Lahore.
          </p>
        </div>

        {/* Package Listing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, idx) => (
            <div 
              key={idx}
              className={`relative p-8 rounded-[32px] transition-all duration-300 flex flex-col justify-between ${
                pkg.recommended 
                ? "bg-slate-900 text-white scale-105 shadow-2xl shadow-pink-900/20 z-10 border-2 border-pink-500/30" 
                : "bg-white text-slate-900 border border-pink-100 hover:shadow-xl hover:border-pink-200"
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  Most Popular for Mothers
                </div>
              )}
              
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2 font-serif">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-semibold opacity-70">PKR</span>
                    <span className="text-4xl font-extrabold tracking-tight">{pkg.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs mt-2 opacity-80 font-medium">
                    <Clock size={14} className={pkg.recommended ? "text-pink-400" : "text-pink-600"} />
                    {pkg.duration} Dedicated Consultation
                  </div>
                </div>

                <ul className="space-y-3.5 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs leading-relaxed font-medium">
                      <CheckCircle2 size={16} className={`flex-shrink-0 mt-0.5 ${pkg.recommended ? "text-pink-400" : "text-pink-600"}`} />
                      <span className="opacity-90">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/appointments" 
                className={`w-full py-3.5 rounded-2xl font-bold text-sm text-center transition-all shadow-md ${
                  pkg.recommended 
                  ? "bg-pink-600 text-white hover:bg-pink-500 shadow-pink-600/30" 
                  : "bg-pink-50 text-pink-700 hover:bg-pink-600 hover:text-white"
                }`}
              >
                Select Package
              </Link>
            </div>
          ))}
        </div>

        {/* Timing Schedule Table */}
        <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl border border-pink-100 grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-14 bg-gradient-to-br from-slate-900 via-slate-950 to-pink-950 text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
            <h3 className="text-3xl font-serif font-bold mb-4">OPD & Consultation Hours</h3>
            <p className="opacity-80 text-sm mb-8 leading-relaxed">
              Dr. Faiza Hafeez holds regular clinical consultations. Prior booking is strongly recommended to guarantee your appointment slot.
            </p>
            
            <div className="space-y-4">
              {schedules.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-slate-800/80 pb-3">
                  <span className="font-bold text-sm text-pink-200">{item.day}</span>
                  <div className="text-right">
                    <div className="text-sm font-semibold">{item.time}</div>
                    <div className={`text-[10px] uppercase font-bold tracking-widest ${
                      item.status === "Available" ? "text-emerald-400" : "text-amber-400"
                    }`}>
                      {item.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-8 md:p-14 flex flex-col justify-between space-y-8 bg-white">
            <div className="space-y-3">
              <span className="text-pink-600 font-bold uppercase tracking-widest text-xs">Care Protocols</span>
              <h4 className="text-3xl font-serif font-bold text-slate-900">In-Patient & Emergency Care</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Continuous monitoring for maternity ward admissions and round-the-clock emergency support.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-rose-50/50 border border-pink-100 space-y-2">
                <User className="text-pink-600" size={22} />
                <h5 className="font-bold text-slate-900 text-sm">Maternity Ward Rounds</h5>
                <p className="text-xs text-slate-500">08:30 AM & 07:30 PM Daily</p>
              </div>
              <div className="p-5 rounded-2xl bg-rose-50/50 border border-pink-100 space-y-2">
                <ShieldPlus className="text-pink-600" size={22} />
                <h5 className="font-bold text-slate-900 text-sm">Emergency Deliveries</h5>
                <p className="text-xs text-slate-500">24/7 On-Call Obstetrician</p>
              </div>
              <div className="p-5 rounded-2xl bg-rose-50/50 border border-pink-100 space-y-2">
                <Clock className="text-pink-600" size={22} />
                <h5 className="font-bold text-slate-900 text-sm">Ultrasound Scans</h5>
                <p className="text-xs text-slate-500">Scheduled by appointment</p>
              </div>
              <div className="p-5 rounded-2xl bg-rose-50/50 border border-pink-100 space-y-2">
                <Heart className="text-pink-600" size={22} />
                <h5 className="font-bold text-slate-900 text-sm">Lab & Diagnostic Reporting</h5>
                <p className="text-xs text-slate-500">Same day reporting available</p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-pink-100">
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-3">Fast-Track Schedule Inquiry</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter mobile number (e.g., 0334 1234567)" 
                  className="flex-1 px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 font-medium"
                />
                <button 
                  onClick={handleFastTrack}
                  disabled={isLoading}
                  className="px-6 py-3.5 bg-pink-600 text-white rounded-xl font-bold text-sm hover:bg-pink-700 transition-colors disabled:opacity-70 flex items-center justify-center gap-2 whitespace-nowrap shadow-md"
                >
                  {isLoading ? <Loader2 size={16} className="animate-spin" /> : null}
                  Request Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentScheduler;

