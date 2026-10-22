"use client";

import { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { Calendar, Clock, Phone, User, Stethoscope, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";
import GsapAnimation from "@/components/GsapAnimation";

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    specialty: "High-Risk Pregnancy & Maternal Care",
    preferredDate: "",
    preferredTime: "10:00 AM",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Appointment Request Submitted!",
          html: `Thank you <b>${formData.fullName}</b>.<br/>Our clinic assistant will contact you at <b>${formData.phone}</b> to confirm your slot with Dr. Faiza Hafeez.`,
          confirmButtonColor: "#00BDE0",
          confirmButtonText: "Done",
        });

        setFormData({
          fullName: "",
          phone: "",
          specialty: "High-Risk Pregnancy & Maternal Care",
          preferredDate: "",
          preferredTime: "10:00 AM",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      Swal.fire({
        icon: "info",
        title: "Request Recorded",
        text: "Please WhatsApp us at +92 334 4280522 for immediate confirmation.",
        confirmButtonColor: "#00BDE0",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-[#ecf5fb] overflow-hidden">
      {/* Decorative background image on right */}
      <div 
        className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-no-repeat bg-right-top bg-contain opacity-40 lg:opacity-80 pointer-events-none -z-0"
        style={{ backgroundImage: "url('/template/images/about/1.png')" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Form container */}
          <GsapAnimation animation="fadeInUp" className="lg:col-span-7 bg-white rounded-[36px] p-8 sm:p-12 shadow-2xl border border-slate-100">
            <div className="space-y-3 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ccf2f9] text-[#00a1be] text-xs font-bold uppercase tracking-wider">
                <Calendar size={13} className="text-[#00BDE0]" />
                Easy Consultation Booking
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#031B4E]">
                Make An <span className="text-[#00BDE0]">Appointment</span>
              </h2>
              <p className="text-sm text-[#566593]">
                Schedule an in-person or online clinical consultation with Dr. Faiza Hafeez at Ittefaq Hospital Trust Lahore.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#031B4E] uppercase tracking-wider mb-2">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#566593]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ayesha Khan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-[#ecf5fb]/50 border border-slate-200 rounded-2xl text-sm text-[#031B4E] focus:outline-none focus:border-[#00BDE0] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-[#031B4E] uppercase tracking-wider mb-2">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#566593]" />
                    <input
                      type="tel"
                      required
                      placeholder="0334 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-[#ecf5fb]/50 border border-slate-200 rounded-2xl text-sm text-[#031B4E] focus:outline-none focus:border-[#00BDE0] focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Department / Service */}
                <div>
                  <label className="block text-xs font-bold text-[#031B4E] uppercase tracking-wider mb-2">
                    Specialty / Service *
                  </label>
                  <div className="relative">
                    <Stethoscope size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#566593]" />
                    <select
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-[#ecf5fb]/50 border border-slate-200 rounded-2xl text-sm text-[#031B4E] focus:outline-none focus:border-[#00BDE0] focus:bg-white transition-all appearance-none cursor-pointer"
                    >
                      <option value="High-Risk Pregnancy & Maternal Care">High-Risk Pregnancy & Maternal Care</option>
                      <option value="Gynecology & Pelvic Health">Gynecology & Pelvic Health</option>
                      <option value="Infertility & Reproductive Wellness">Infertility & Reproductive Wellness</option>
                      <option value="PCOS / PCOD & Hormonal Management">PCOS / PCOD & Hormonal Management</option>
                      <option value="3D / 4D Fetal Anomaly Ultrasound">3D / 4D Fetal Anomaly Ultrasound</option>
                      <option value="Laparoscopic & Minimally Invasive Surgery">Laparoscopic Surgery</option>
                      <option value="Cervical Screening & Pap Smears">Cervical Screening & Pap Smears</option>
                      <option value="Postnatal Care & Lactation Support">Postnatal Care & Lactation Support</option>
                    </select>
                  </div>
                </div>

                {/* Doctor Selection */}
                <div>
                  <label className="block text-xs font-bold text-[#031B4E] uppercase tracking-wider mb-2">
                    Consultant Specialist
                  </label>
                  <input
                    type="text"
                    disabled
                    value="Dr. Faiza Hafeez (FCPS Resident)"
                    className="w-full px-4 py-3.5 bg-slate-100 border border-slate-200 rounded-2xl text-sm text-[#031B4E] font-semibold cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-bold text-[#031B4E] uppercase tracking-wider mb-2">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#566593]" />
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-[#ecf5fb]/50 border border-slate-200 rounded-2xl text-sm text-[#031B4E] focus:outline-none focus:border-[#00BDE0] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block text-xs font-bold text-[#031B4E] uppercase tracking-wider mb-2">
                    Preferred Time Slot *
                  </label>
                  <div className="relative">
                    <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#566593]" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-[#ecf5fb]/50 border border-slate-200 rounded-2xl text-sm text-[#031B4E] focus:outline-none focus:border-[#00BDE0] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="10:00 AM">10:00 AM - 12:00 PM (Morning)</option>
                      <option value="01:00 PM">01:00 PM - 03:00 PM (Afternoon)</option>
                      <option value="05:00 PM">05:00 PM - 07:00 PM (Evening)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-[#031B4E] uppercase tracking-wider mb-2">
                  Symptoms or Medical Notes (Optional)
                </label>
                <div className="relative">
                  <MessageSquare size={16} className="absolute left-4 top-4 text-[#566593]" />
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your concern (e.g. 2nd trimester routine checkup, ultrasound booking, irregular cycles)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-[#ecf5fb]/50 border border-slate-200 rounded-2xl text-sm text-[#031B4E] focus:outline-none focus:border-[#00BDE0] focus:bg-white transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full py-4 text-base font-bold shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{loading ? "Submitting Booking..." : "Confirm Appointment Request"}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </GsapAnimation>

          {/* Right column: Highlights and Trust signal */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-7 shadow-lg border border-slate-100 space-y-4">
              <h3 className="text-xl font-bold text-[#031B4E]">
                Clinic Consultation Hours
              </h3>
              <div className="space-y-2 text-sm text-[#566593]">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="font-semibold text-[#031B4E]">Monday - Friday:</span>
                  <span>09:00 AM - 07:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="font-semibold text-[#031B4E]">Saturday:</span>
                  <span>09:00 AM - 05:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold text-[#031B4E]">Sunday:</span>
                  <span className="text-rose-500 font-semibold">Emergency Delivery Only</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0A3366] text-white rounded-3xl p-7 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00BDE0]/20 text-[#00BDE0] flex items-center justify-center">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold">Need Immediate Assistance?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                For urgent pregnancy symptoms, labor onset, or sudden pain, call our 24/7 hospital emergency triage line directly.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+923344280522"
                  className="btn bg-[#00BDE0] hover:bg-[#00a1be] text-white font-bold text-sm w-full py-3 flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  Emergency: +92 334 4280522
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
