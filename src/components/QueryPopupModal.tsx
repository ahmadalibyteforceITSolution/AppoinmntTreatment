"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Phone, Mail, MessageSquare, X, Send, Loader2, Sparkles, Heart } from "lucide-react";
import Swal from "sweetalert2";

export default function QueryPopupModal() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasClosedManuallyOnPage, setHasClosedManuallyOnPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    message: "",
  });

  // Automatically show popup when any page opens
  useEffect(() => {
    setHasClosedManuallyOnPage(false);

    // Cancel any previous timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Subtle 700ms timer so page finishes initial rendering smoothly before showing
    timerRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 700);

    // ESC key closes modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (timerRef.current) clearTimeout(timerRef.current);
        setIsOpen(false);
        setHasClosedManuallyOnPage(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pathname]);

  const handleClose = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsOpen(false);
    setHasClosedManuallyOnPage(true);
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
      // 1. Post to API to save in DB and dispatch email to respective email (faizahafeez28@gmail.com)
      await fetch("/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // 2. Send message directly to clinic number (+92 334 4280522) via WhatsApp
      const clinicNumber = "923344280522";
      const text = `Hello Dr. Faiza Hafeez, I have submitted an inquiry via your website:\n\n*Phone Number:* *${formData.phone}*\n*Email Address:* *${formData.email}*\n*Query / Message:* *${formData.message}*`;
      const whatsappUrl = `https://wa.me/${clinicNumber}?text=${encodeURIComponent(
        text
      )}`;

      // Open WhatsApp to deliver message to number
      window.open(whatsappUrl, "_blank");

      // 3. Confirmation Dialog
      Swal.fire({
        icon: "success",
        title: "Query Submitted!",
        html: `
          <div style="font-size: 14px; text-align: left; line-height: 1.6; color: #475569;">
            <p style="margin-bottom: 8px;">Thank you! Your query has been successfully submitted:</p>
            <ul style="padding-left: 18px; margin: 8px 0; color: #1e293b;">
              <li><b>Email:</b> Sent to clinic reception (faizahafeez28@gmail.com)</li>
              <li><b>Number:</b> Forwarded to Dr. Faiza Hafeez (+92 334 4280522)</li>
            </ul>
            <p style="font-size: 13px; color: #db2777; font-weight: 600;">Dr. Faiza Hafeez's team will contact you promptly.</p>
          </div>
        `,
        confirmButtonColor: "#db2777",
        confirmButtonText: "Done",
      });

      // Reset & close
      setFormData({ phone: "", email: "", message: "" });
      handleClose();
    } catch (err) {
      console.error("Query submission error:", err);
      const clinicNumber = "923344280522";
      const text = `Hello Dr. Faiza Hafeez, I have an inquiry:\n\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Query:* ${formData.message}`;
      window.open(
        `https://wa.me/${clinicNumber}?text=${encodeURIComponent(text)}`,
        "_blank"
      );
      Swal.fire(
        "Notice",
        "Your message is being sent directly to Dr. Faiza Hafeez on WhatsApp.",
        "info"
      );
      handleClose();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating trigger pill if user dismissed the modal on this page */}
      {hasClosedManuallyOnPage && !isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-40 bg-gradient-to-r from-pink-600 to-rose-600 text-white px-4 py-2.5 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 text-xs font-bold border-2 border-white/80 cursor-pointer"
          title="Open Query Form"
        >
          <Sparkles size={15} className="animate-spin text-pink-200 pointer-events-none" />
          <span>Quick Query</span>
        </button>
      )}

      {/* Modal Backdrop & Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleClose}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl sm:rounded-[32px] shadow-2xl border border-pink-100 p-6 sm:p-8 overflow-hidden transform animate-in zoom-in-95 duration-200 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top decorative pink glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-pink-200/50 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-rose-200/40 rounded-full blur-2xl pointer-events-none" />

            {/* Close Button - High z-index, pointer-events-auto, explicit type="button" */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-pink-100 text-slate-500 hover:text-pink-600 transition-all z-50 pointer-events-auto cursor-pointer hover:scale-110 active:scale-95 shadow-sm"
              aria-label="Close modal"
            >
              <X size={20} className="pointer-events-none text-slate-600" />
            </button>

            {/* Header - padding-right pr-12 to prevent any collision with close button */}
            <div className="text-left mb-6 relative z-10 pr-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-pink-600 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Heart size={12} className="fill-pink-600" />
                <span>Dr. Faiza Hafeez Clinic</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                Submit Your Query
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Enter your details below. Your query will be delivered to our email and sent directly to our doctor helpline number.
              </p>
            </div>

            {/* Strictly 3 Fields: Phone Number, Email, Message */}
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              {/* Field 1: Phone Number */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 ml-1">
                  Phone Number <span className="text-pink-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-pink-400">
                    <Phone size={17} />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 0334 4280522 or +92 334 4280522"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-500/20 text-slate-900 placeholder:text-slate-400 outline-none text-sm transition-all font-medium"
                  />
                </div>
              </div>

              {/* Field 2: Email Address */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 ml-1">
                  Email Address <span className="text-pink-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-pink-400">
                    <Mail size={17} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. yourname@gmail.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-500/20 text-slate-900 placeholder:text-slate-400 outline-none text-sm transition-all font-medium"
                  />
                </div>
              </div>

              {/* Field 3: Message / Query */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 ml-1">
                  Your Query / Message <span className="text-pink-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3.5 pointer-events-none text-pink-400">
                    <MessageSquare size={17} />
                  </div>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your health question, treatment inquiry, or symptoms..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-500/20 text-slate-900 placeholder:text-slate-400 outline-none text-sm transition-all resize-none font-medium"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-pink-600/25 active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    <span>Submitting Query...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Submit Query</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>Confidential & Private Medical Support</span>
              <span className="font-semibold text-pink-600">Direct Helpline: 0334 4280522</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
