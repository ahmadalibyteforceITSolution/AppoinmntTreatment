"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Mail, Phone, MapPin, Loader2, Heart } from "lucide-react";
import Swal from "sweetalert2";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const whatsappNumber = "923344280522";
      const text = `Hello Dr. Faiza Hafeez, I have an inquiry:\n\n*Name:* *${formData.fullName}*\n*Phone:* *${formData.phone}*\n*Message:* *${formData.message}*`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      
      window.open(whatsappUrl, '_blank');

      Swal.fire({
        icon: 'success',
        title: 'Inquiry Sent!',
        text: 'Thank you for reaching out to Dr. Faiza Hafeez Clinic. We will respond shortly.',
        confirmButtonColor: '#db2777'
      });
      setFormData({ fullName: "", phone: "", message: "" });
    } catch (error) {
      Swal.fire("Notice", "Redirecting to WhatsApp to complete your message.", "info");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      
      <section className="pt-36 pb-20 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-900/60 text-pink-300 text-xs font-bold uppercase tracking-widest border border-pink-700/50">
            Patient Services & Contact
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold">Contact Dr. Faiza Hafeez Clinic</h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Get in touch for consultations, high-risk pregnancy guidance, fertility counseling, or emergency hospital support in Lahore.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-pink-600 font-bold uppercase tracking-widest text-xs">Direct Support</span>
                <h2 className="text-3xl font-serif font-bold text-slate-950">Reach Our Clinical Reception</h2>
              </div>
              
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-pink-100 shadow-sm">
                <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Helpline & WhatsApp</h3>
                  <p className="text-slate-600 font-semibold mt-1">+92 334 4280522</p>
                  <p className="text-xs text-slate-500 mt-1">Direct reception line & 24/7 delivery helpline</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-pink-100 shadow-sm">
                <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Clinic Location</h3>
                  <p className="text-slate-600 text-sm mt-1">123 Medical Square, Gulberg III</p>
                  <p className="text-slate-600 text-sm">Lahore, Punjab, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-pink-100 shadow-sm">
                <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Email Inquiries</h3>
                  <p className="text-slate-600 text-sm mt-1">Faizahafeez28@gmail.com</p>
                  <p className="text-xs text-slate-500 mt-1">Response within 24 business hours</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-pink-100">
              <h3 className="text-2xl font-serif font-bold text-slate-950 mb-6">Send an Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                  <input 
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text" 
                    className="w-full px-4 py-3.5 rounded-2xl bg-rose-50/40 border border-pink-100 focus:ring-2 focus:ring-pink-500/20 focus:bg-white outline-none mt-1 font-medium" 
                    placeholder="e.g. Sara Ali" 
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Phone Number</label>
                  <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel" 
                    className="w-full px-4 py-3.5 rounded-2xl bg-rose-50/40 border border-pink-100 focus:ring-2 focus:ring-pink-500/20 focus:bg-white outline-none mt-1 font-medium" 
                    placeholder="+92 334 4280522" 
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message / Medical Inquiry</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full px-4 py-3.5 rounded-2xl bg-rose-50/40 border border-pink-100 focus:ring-2 focus:ring-pink-500/20 focus:bg-white outline-none mt-1 resize-none font-medium" 
                    placeholder="How can Dr. Faiza assist you?"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-pink-600 text-white rounded-2xl font-bold text-base hover:bg-pink-700 transition-all shadow-lg shadow-pink-600/30 disabled:opacity-70"
                >
                  {isLoading ? (
                    <><Loader2 className="animate-spin" size={18} /> Sending...</>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

