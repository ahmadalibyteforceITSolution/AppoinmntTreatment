"use client";

import { useState } from "react";
import { Calendar, User, Phone, MessageSquare, Loader2, Heart } from "lucide-react";
import Swal from "sweetalert2";

const BookingForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    specialty: "High-Risk Pregnancy & Maternal Care",
    preferredDate: "",
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

      // Construct WhatsApp message
      const whatsappNumber = "923344280522";
      const text = `Hello Dr. Faiza Hafeez, I would like to book a consultation:\n\n*Patient Name:* *${formData.fullName}*\n*Phone Number:* *${formData.phone}*\n*Service Needed:* *${formData.specialty}*\n*Preferred Date:* *${formData.preferredDate}*\n*Message/Notes:* *${formData.message || "N/A"}*`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      Swal.fire({
        icon: 'success',
        title: 'Appointment Request Submitted!',
        text: 'Thank you for contacting Dr. Faiza Hafeez Clinic. Our team will confirm your slot shortly.',
        confirmButtonColor: '#db2777'
      });
      setFormData({
        fullName: "",
        phone: "",
        specialty: "High-Risk Pregnancy & Maternal Care",
        preferredDate: "",
        message: ""
      });
    } catch (error) {
      console.error("Booking error:", error);
      Swal.fire("Notice", "Redirecting to WhatsApp to complete your booking.", "info");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-pink-100 relative overflow-hidden">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
          <Heart size={18} className="fill-pink-600" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-pink-600">Online Slot Booking</span>
      </div>
      <h3 className="text-3xl font-serif font-bold text-slate-900 mb-8">Schedule Your Consultation</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Patient Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400" size={18} />
              <input 
                required
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                type="text" 
                placeholder="e.g. Ayesha Khan"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-rose-50/40 border border-pink-100 focus:ring-2 focus:ring-pink-500/20 focus:bg-white outline-none transition-all font-medium"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Contact Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400" size={18} />
              <input 
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel" 
                placeholder="0334 4280522"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-rose-50/40 border border-pink-100 focus:ring-2 focus:ring-pink-500/20 focus:bg-white outline-none transition-all font-medium"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Select Specialty Service</label>
            <select 
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-2xl bg-rose-50/40 border border-pink-100 focus:ring-2 focus:ring-pink-500/20 focus:bg-white outline-none transition-all appearance-none font-medium text-slate-900"
            >
              <option value="High-Risk Pregnancy & Maternal Care">High-Risk Pregnancy & Maternal Care</option>
              <option value="Gynecology Consultation">General Gynecology Consultation</option>
              <option value="Infertility & Fertility Assessment">Infertility & Fertility Assessment</option>
              <option value="PCOS / PCOD Management">PCOS / PCOD Management</option>
              <option value="3D / 4D Fetal Anomaly Ultrasound">3D / 4D Fetal Anomaly Ultrasound</option>
              <option value="Laparoscopic Surgery Consultation">Laparoscopic Surgery Consultation</option>
              <option value="Pap Smear & Cervical Health">Pap Smear & Cervical Health</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Preferred Date</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400" size={18} />
              <input 
                required
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                type="date" 
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-rose-50/40 border border-pink-100 focus:ring-2 focus:ring-pink-500/20 focus:bg-white outline-none transition-all font-medium text-slate-900"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Medical Symptoms / Notes (Optional)</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-5 text-pink-400" size={18} />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Briefly describe your symptoms or pregnancy week..."
              rows={3}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-rose-50/40 border border-pink-100 focus:ring-2 focus:ring-pink-500/20 focus:bg-white outline-none transition-all resize-none font-medium"
            ></textarea>
          </div>
        </div>

        <button 
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 py-4 shadow-xl shadow-pink-600/30 bg-pink-600 text-white rounded-2xl font-bold text-lg hover:bg-pink-700 transition-all disabled:opacity-70"
        >
          {isLoading ? (
            <><Loader2 className="animate-spin" size={20} /> Booking...</>
          ) : (
            "Confirm Appointment Request"
          )}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

