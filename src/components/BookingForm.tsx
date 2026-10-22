"use client";

import { useState } from "react";
import { Calendar, User, Phone, MessageSquare, Loader2, Heart, Clock, Stethoscope, ArrowRight } from "lucide-react";
import Swal from "sweetalert2";

const BookingForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    specialty: "High-Risk Pregnancy & Maternal Care",
    preferredDate: "",
    preferredTime: "10:00 AM",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Construct WhatsApp confirmation text
      const whatsappNumber = "923344280522";
      const text = `Hello Dr. Faiza Hafeez, I would like to book a consultation:\n\n*Patient Name:* *${formData.fullName}*\n*Contact:* *${formData.phone}*\n*Specialty:* *${formData.specialty}*\n*Preferred Date:* *${formData.preferredDate}*\n*Preferred Time:* *${formData.preferredTime}*\n*Notes:* *${formData.message || "None"}*`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      
      window.open(whatsappUrl, '_blank');

      Swal.fire({
        icon: 'success',
        title: 'Appointment Request Submitted!',
        html: `Thank you <b>${formData.fullName}</b>.<br/>Dr. Faiza's clinical team will confirm your slot shortly via WhatsApp/Phone.`,
        confirmButtonColor: '#00BDE0'
      });

      setFormData({
        fullName: "",
        phone: "",
        specialty: "High-Risk Pregnancy & Maternal Care",
        preferredDate: "",
        preferredTime: "10:00 AM",
        message: ""
      });
    } catch {
      Swal.fire({
        icon: "info",
        title: "Request Received",
        text: "Please contact our clinic directly on WhatsApp at +92 334 4280522 to complete your booking.",
        confirmButtonColor: "#00BDE0"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 sm:p-12 rounded-[36px] shadow-2xl border border-slate-100 relative overflow-hidden">
      <div className="flex items-center gap-2.5 mb-2">
        <div className="w-8 h-8 rounded-full bg-[#ccf2f9] flex items-center justify-center text-[#00BDE0]">
          <Heart size={16} className="fill-[#00BDE0]" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#00a1be]">
          Online Slot Reservation
        </span>
      </div>

      <h3 className="text-2xl sm:text-3xl font-bold text-[#031B4E] mb-8">
        Schedule Your Consultation
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#031B4E]">
              Patient Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#566593]" size={18} />
              <input 
                required
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                type="text" 
                placeholder="e.g. Ayesha Khan"
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#ecf5fb]/50 border border-slate-200 focus:border-[#00BDE0] focus:bg-white outline-none transition-all text-sm font-medium text-[#031B4E]"
              />
            </div>
          </div>

          {/* Contact Number */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#031B4E]">
              Phone / WhatsApp *
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#566593]" size={18} />
              <input 
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel" 
                placeholder="0334 1234567"
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#ecf5fb]/50 border border-slate-200 focus:border-[#00BDE0] focus:bg-white outline-none transition-all text-sm font-medium text-[#031B4E]"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Specialty Service */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#031B4E]">
              Select Specialty / Service *
            </label>
            <div className="relative">
              <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#566593]" size={18} />
              <select
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#ecf5fb]/50 border border-slate-200 focus:border-[#00BDE0] focus:bg-white outline-none transition-all text-sm font-medium text-[#031B4E] appearance-none cursor-pointer"
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

          {/* Preferred Date */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#031B4E]">
              Preferred Consultation Date *
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#566593]" size={18} />
              <input 
                required
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                type="date"
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#ecf5fb]/50 border border-slate-200 focus:border-[#00BDE0] focus:bg-white outline-none transition-all text-sm font-medium text-[#031B4E]"
              />
            </div>
          </div>
        </div>

        {/* Notes / Symptoms */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#031B4E]">
            Symptoms or Notes (Optional)
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 text-[#566593]" size={18} />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us about your symptoms or medical background (e.g. 2nd trimester scan, irregular cycles, PCOS treatment)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#ecf5fb]/50 border border-slate-200 focus:border-[#00BDE0] focus:bg-white outline-none transition-all text-sm font-medium text-[#031B4E] resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-primary w-full py-4 text-base font-bold shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              <span>Processing Request...</span>
            </>
          ) : (
            <>
              <span>Confirm Appointment Booking</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        <p className="text-center text-xs text-[#566593]">
          Consultations take place at <strong className="text-[#031B4E]">Ittefaq Hospital (Trust), Lahore</strong>. We ensure complete confidentiality.
        </p>
      </form>
    </div>
  );
};

export default BookingForm;
