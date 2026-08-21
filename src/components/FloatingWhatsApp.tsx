import { MessageCircle, PhoneCall } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* Click to Call Button */}
      <a
        href="tel:+923344280522"
        className="bg-pink-600 text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:bg-pink-700 hover:scale-110 transition-all flex items-center justify-center group relative border-2 border-white"
        aria-label="Call Doctor Directly"
      >
        <PhoneCall size={26} />
        <span className="absolute right-full mr-3 bg-slate-900 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Doctor: +92 334 4280522
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923344280522"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-500 text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:bg-emerald-600 hover:scale-110 transition-all flex items-center justify-center group relative border-2 border-white"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={26} />
        <span className="absolute right-full mr-3 bg-slate-900 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Direct Inquiry
        </span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;

