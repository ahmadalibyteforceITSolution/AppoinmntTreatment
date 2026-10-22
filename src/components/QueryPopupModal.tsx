"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, MessageSquare, X, Send, Loader2, Sparkles, MessageCircleQuestion } from "lucide-react";
import Swal from "sweetalert2";

export default function QueryPopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    message: "",
  });

  // Listen for button click to open modal, and ESC to close
  useEffect(() => {
    const handleOpenModal = () => setIsOpen(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("open-query-modal", handleOpenModal);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-query-modal", handleOpenModal);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClose = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Thank You!",
          text: "Your query has been sent to Dr. Faiza Hafeez's clinical desk. We will respond promptly.",
          confirmButtonColor: "#00BDE0",
        });

        setFormData({
          phone: "",
          email: "",
          message: "",
        });

        setIsOpen(false);
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      Swal.fire({
        icon: "info",
        title: "Request Received",
        text: "Please contact our clinic reception directly at +92 334 4280522 or via WhatsApp for immediate guidance.",
        confirmButtonColor: "#00BDE0",
      });
      setIsOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button: Shows Floating 'Ask Doctor' pill button on click */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 bg-[#0A3366] text-white hover:bg-[#00BDE0] px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-xs font-bold transition-all border border-white/20 group cursor-pointer"
        aria-label="Ask a Question"
      >
        <MessageCircleQuestion size={18} className="text-[#00BDE0] group-hover:text-white transition-colors" />
        <span className="hidden sm:inline">Ask Question</span>
      </button>

      {/* Modal Popup: ONLY opens when button is clicked */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A3366]/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleClose}
        >
          <div
            className="bg-white rounded-[32px] p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-[#566593] hover:bg-slate-200 hover:text-[#031B4E] transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ccf2f9] text-[#00a1be] text-xs font-bold uppercase tracking-wider">
                <Sparkles size={12} className="text-[#00BDE0]" />
                Direct Medical Inquiry
              </div>
              <h3 className="text-2xl font-bold text-[#031B4E]">
                Have a Question for Dr. Faiza?
              </h3>
              <p className="text-xs sm:text-sm text-[#566593]">
                Leave your medical question, treatment inquiry, or symptoms. Our clinical team will reach out directly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#031B4E] uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp *
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#566593]" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    name="phone"
                    placeholder="0334 1234567"
                    className="w-full pl-10 pr-4 py-3 bg-[#ecf5fb]/50 border border-slate-200 rounded-2xl text-sm text-[#031B4E] focus:outline-none focus:border-[#00BDE0] focus:bg-white transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#031B4E] uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#566593]" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="name@example.com"
                    className="w-full pl-10 pr-4 py-3 bg-[#ecf5fb]/50 border border-slate-200 rounded-2xl text-sm text-[#031B4E] focus:outline-none focus:border-[#00BDE0] focus:bg-white transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#031B4E] uppercase tracking-wider mb-1.5">
                  Your Query or Symptoms *
                </label>
                <div className="relative">
                  <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-[#566593]" />
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                    placeholder="Describe your health question, symptom, or ultrasound inquiry..."
                    className="w-full pl-10 pr-4 py-3 bg-[#ecf5fb]/50 border border-slate-200 rounded-2xl text-sm text-[#031B4E] focus:outline-none focus:border-[#00BDE0] focus:bg-white transition-all resize-none font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary w-full py-3.5 text-sm font-bold shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Submitting Query...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Submit Query to Doctor</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#566593]">
              <span>Confidential & Private Medical Support</span>
              <a href="tel:+923344280522" className="font-bold text-[#00BDE0] hover:underline">
                Helpline: 0334 4280522
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
