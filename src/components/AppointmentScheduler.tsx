"use client";

import { useState } from "react";
import { Clock, CheckCircle2, DollarSign, User, ShieldPlus, Loader2 } from "lucide-react";
import Link from "next/link";
import Swal from "sweetalert2";

const packages = [
  {
    name: "Standard Consultation",
    price: "2,000",
    duration: "20 Mins",
    features: ["Basic Health Checkup", "Physical Examination", "Prescription", "Follow-up Guide"],
    recommended: false
  },
  {
    name: "Premium Specialist Care",
    price: "5,000",
    duration: "45 Mins",
    features: ["Detailed Consultation", "ECG/Basic Diagnostics", "Comprehensive Plan", "24/7 Chat Support"],
    recommended: true
  },
  {
    name: "Executive Health Wrap",
    price: "12,000",
    duration: "90 Mins",
    features: ["Full Body Screening", "Senior Consultant Review", "Laboratory Tests", "Nutrition Consultation"],
    recommended: false
  }
];

const schedules = [
  { day: "Monday", time: "09:00 AM - 02:00 PM", status: "Available" },
  { day: "Tuesday", time: "11:00 AM - 05:00 PM", status: "Available" },
  { day: "Wednesday", time: "09:00 AM - 02:00 PM", status: "Limited" },
  { day: "Thursday", time: "11:00 AM - 05:00 PM", status: "Available" },
  { day: "Friday", time: "02:00 PM - 07:00 PM", status: "Available" },
  { day: "Saturday", time: "10:00 AM - 02:00 PM", status: "By Appt" },
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
          fullName: "Fast-Track Booking Request",
          phone: phone,
          message: "Patient requested a fast-track callback from the Pricing & Schedule section."
        }),
      });

      if (response.ok) {
        // Construct WhatsApp message
        const whatsappNumber = "923344280522";
        const text = `Hello Dr. Faiza, I would like to request a fast-track callback:\n\n*Phone:* ${phone}\n*Request:* Fast-Track Callback from Schedule Section`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        Swal.fire("Request Sent!", "We will call you shortly.", "success");
        setPhone("");
      } else {
        Swal.fire("Oops!", "Failed to send request. Please try again.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Network error. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Pricing & Schedule</h2>
          <p className="text-4xl md:text-5xl font-serif font-bold text-slate-950 mb-6">Transparency in Care</p>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose the package that fits your needs. No hidden charges, just premium healthcare services.
          </p>
        </div>

        {/* Package Listing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, idx) => (
            <div 
              key={idx}
              className={`relative p-8 rounded-3xl transition-all duration-300 flex flex-col ${
                pkg.recommended 
                ? "bg-slate-950 text-white scale-105 shadow-2xl z-10" 
                : "bg-white text-slate-900 border border-slate-100 hover:shadow-xl"
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-slate-950 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Recommended
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium opacity-70">PKR</span>
                  <span className="text-4xl font-bold">{pkg.price}</span>
                </div>
                <div className="flex items-center gap-2 text-xs mt-2 opacity-70">
                  <Clock size={14} />
                  {pkg.duration} Session
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {pkg.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 size={18} className={pkg.recommended ? "text-secondary" : "text-primary"} />
                    <span className="opacity-90">{feat}</span>
                  </li>
                ))}
              </ul>

              <Link href="/appointments" className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                pkg.recommended 
                ? "bg-secondary text-slate-900 hover:bg-white" 
                : "bg-primary text-white hover:bg-primary/90"
              }`}>
                Select Package
              </Link>
            </div>
          ))}
        </div>

        {/* Timing Schedule Table */}
        <div className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-slate-100 grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10 lg:p-16 bg-primary text-white">
            <h3 className="text-3xl font-serif font-bold mb-6">Doctor's Schedule</h3>
            <p className="opacity-80 mb-10">
              Please check the available time slots before visiting. We recommend 
              prior booking to avoid waiting times at the clinic.
            </p>
            
            <div className="space-y-6">
              {schedules.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-white/20 pb-4">
                  <span className="font-bold">{item.day}</span>
                  <div className="text-right">
                    <div className="text-sm font-medium">{item.time}</div>
                    <div className={`text-[10px] uppercase font-bold tracking-widest ${
                      item.status === "Available" ? "text-secondary" : "text-white/60"
                    }`}>
                      {item.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-10 lg:p-16 flex flex-col justify-center space-y-8">
            <div className="space-y-2">
              <h4 className="text-2xl font-serif font-bold text-slate-950">Patient & Nursing Schedule</h4>
              <p className="text-slate-600 text-sm">Round-the-clock monitoring and specialized care services.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 space-y-3">
                <User className="text-primary" size={24} />
                <h5 className="font-bold text-slate-950 text-sm">In-Patient Rounds</h5>
                <p className="text-xs text-slate-500">08:00 AM & 08:00 PM Daily</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 space-y-3">
                <ShieldPlus className="text-primary" size={24} />
                <h5 className="font-bold text-slate-950 text-sm">Emergency Nursing</h5>
                <p className="text-xs text-slate-500">24/7 On-Call Support</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 space-y-3">
                <Clock className="text-primary" size={24} />
                <h5 className="font-bold text-slate-950 text-sm">Treatment Timing</h5>
                <p className="text-xs text-slate-500">Scheduled as per Doctor's advice</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 space-y-3">
                <DollarSign className="text-primary" size={24} />
                <h5 className="font-bold text-slate-950 text-sm">Billing Hours</h5>
                <p className="text-xs text-slate-500">09:00 AM - 10:00 PM</p>
              </div>
            </div>
            
            <div className="pt-6">
              <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold mb-4">Fast-Track Booking</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number" 
                  className="flex-1 px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button 
                  onClick={handleFastTrack}
                  disabled={isLoading}
                  className="px-8 py-4 bg-slate-950 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors disabled:opacity-70 flex items-center justify-center gap-2 whitespace-nowrap"
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
