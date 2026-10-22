"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageBanner from "@/components/PageBanner";
import { Mail, Phone, MapPin, Loader2, Heart, Clock, MessageCircle, Send } from "lucide-react";
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
        text: 'Thank you for contacting Dr. Faiza Hafeez Clinic. We will respond promptly.',
        confirmButtonColor: '#00BDE0'
      });
      setFormData({ fullName: "", phone: "", message: "" });
    } catch {
      Swal.fire({
        icon: "info",
        title: "Redirecting to WhatsApp",
        text: "Please send your query directly via WhatsApp to our clinical reception.",
        confirmButtonColor: "#00BDE0"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* ClinicMaster Style Page Banner */}
      <PageBanner
        badge="Patient Services & Inquiries"
        title="Contact Dr. Faiza Hafeez Clinic"
        description="Get in touch for appointments, high-risk pregnancy guidance, fertility counseling, or 24/7 delivery hospital support in Lahore."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" }
        ]}
      />

      <section className="py-20 lg:py-28 bg-[#ecf5fb]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00a1be] bg-[#ccf2f9] px-3.5 py-1 rounded-full">
                  Direct Clinical Support
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#031B4E]">
                  Reach Our Clinical Desk
                </h2>
              </div>
              
              {/* Phone card */}
              <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-[#ccf2f9] text-[#00BDE0] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-[#031B4E] text-base">Direct Helpline & Phone</h3>
                  <a href="tel:+923344280522" className="text-[#00BDE0] font-bold text-lg mt-0.5 block hover:underline">
                    +92 334 4280522
                  </a>
                  <p className="text-xs text-[#566593] mt-1">Direct reception line & 24/7 delivery triage</p>
                </div>
              </div>

              {/* Location card */}
              <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-[#0A3366]/10 text-[#0A3366] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-[#031B4E] text-base">Hospital Affiliation</h3>
                  <p className="text-sm font-semibold text-[#031B4E] mt-0.5">Ittefaq Hospital (Trust)</p>
                  <p className="text-xs text-[#566593]">Model Town / Gulberg III, Lahore, Punjab, Pakistan</p>
                </div>
              </div>

              {/* Email card */}
              <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-[#031B4E] text-base">Official Email</h3>
                  <a href="mailto:faizahafeez28@gmail.com" className="text-xs sm:text-sm font-semibold text-[#0A3366] hover:text-[#00BDE0] transition-colors mt-0.5 block">
                    faizahafeez28@gmail.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-[#031B4E] text-base">Consultation Hours</h3>
                  <p className="text-xs text-[#566593] mt-0.5">Mon - Sat: 09:00 AM - 07:00 PM</p>
                  <p className="text-xs text-[#00a1be] font-bold mt-0.5">Emergency Labor: 24/7</p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Message Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-[36px] shadow-xl border border-slate-100 space-y-6">
              <h3 className="text-2xl font-bold text-[#031B4E]">
                Send an Online Message
              </h3>
              <p className="text-xs sm:text-sm text-[#566593]">
                Leave your question or consultation query below. Our staff responds within 2-4 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#031B4E] mb-2">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Fatima Ali"
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#ecf5fb]/50 border border-slate-200 focus:border-[#00BDE0] focus:bg-white outline-none text-sm font-medium text-[#031B4E] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#031B4E] mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0334 1234567"
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#ecf5fb]/50 border border-slate-200 focus:border-[#00BDE0] focus:bg-white outline-none text-sm font-medium text-[#031B4E] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#031B4E] mb-2">
                    Your Message / Question *
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your health query, ultrasound inquiry, or consultation request..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#ecf5fb]/50 border border-slate-200 focus:border-[#00BDE0] focus:bg-white outline-none text-sm font-medium text-[#031B4E] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-primary w-full py-4 text-base font-bold shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Submit Inquiry</span>
                    </>
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
