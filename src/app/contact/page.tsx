"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Mail, Phone, MapPin, Loader2, CheckCircle } from "lucide-react";
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Construct WhatsApp message
        const whatsappNumber = "923344280522";
        const text = `Hello Dr. Faiza, I have a new inquiry:\n\n*Name:* *${formData.fullName}*\n*Phone:* *${formData.phone}*\n*Message:* *${formData.message}*`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'We have received your inquiry and will get back to you shortly.',
          confirmButtonColor: '#0ea5e9'
        });
        setFormData({ fullName: "", phone: "", message: "" });
      } else {
        Swal.fire("Oops!", "Something went wrong. Please try again.", "error");
      }
    } catch (error) {
      console.error("Contact error:", error);
      Swal.fire("Error", "Failed to connect to the server.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We are here to help. Reach out for appointments, medical inquiries, or emergency assistance.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <h2 className="text-3xl font-serif font-bold text-slate-950">Get in Touch</h2>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Phone & WhatsApp</h3>
                  <p className="text-slate-600 mt-1">+92 334 4280522</p>
                  <p className="text-sm text-slate-500 mt-1">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Clinic Address</h3>
                  <p className="text-slate-600 mt-1">123 Medical Square, Gulberg III</p>
                  <p className="text-slate-600">Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Email Address</h3>
                  <p className="text-slate-600 mt-1">faizahafeez28@gmail.com</p>
                  <p className="text-sm text-slate-500 mt-1">We aim to reply within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-slate-100">
                  <h3 className="text-2xl font-serif font-bold text-slate-950 mb-8">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                      <input 
                        required
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        type="text" 
                        className="w-full px-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-primary/20 outline-none mt-2" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                      <input 
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel" 
                        className="w-full px-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-primary/20 outline-none mt-2" 
                        placeholder="+92 300 0000000" 
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Message</label>
                      <textarea 
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4} 
                        className="w-full px-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-primary/20 outline-none mt-2 resize-none" 
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg disabled:opacity-70"
                    >
                      {isLoading ? (
                        <><Loader2 className="animate-spin" size={20} /> Sending...</>
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
