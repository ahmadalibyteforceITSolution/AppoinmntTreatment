"use client";

import { useState } from "react";
import { CheckCircle, Calendar, User, Phone, MessageSquare, Loader2 } from "lucide-react";

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    specialty: "Cardiology",
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
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: "",
          phone: "",
          specialty: "Cardiology",
          preferredDate: "",
          message: ""
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("Failed to connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-[40px] shadow-2xl text-center space-y-6 animate-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={48} />
        </div>
        <h3 className="text-3xl font-serif font-bold text-slate-950">Appointment Requested!</h3>
        <p className="text-slate-600">
          Thank you for choosing Dr. Faiza Hafeez. Our reception team will call you 
          within 15 minutes to confirm your slot.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-primary font-bold hover:underline"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100">
      <h3 className="text-3xl font-serif font-bold text-slate-950 mb-8">Schedule Your Visit</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                required
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                type="text" 
                placeholder="John Doe"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel" 
                placeholder="0334 4280522"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Specialty</label>
            <select 
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
            >
              <option value="Cardiology">Cardiology</option>
              <option value="Gynecology">Gynecology</option>
              <option value="General Medicine">General Medicine</option>
              <option value="Pediatrics">Pediatrics</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Preferred Date</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                required
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                type="date" 
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Message (Optional)</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-5 text-slate-400" size={18} />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your symptoms..."
              rows={4}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
            ></textarea>
          </div>
        </div>

        <button 
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 disabled:opacity-70"
        >
          {isLoading ? (
            <><Loader2 className="animate-spin" size={20} /> Processing...</>
          ) : (
            "Confirm Appointment Request"
          )}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
