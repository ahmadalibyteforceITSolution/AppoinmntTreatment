"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Calendar, MessageCircle, Heart, Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      <div className="bg-slate-900 text-pink-100 text-xs py-2 hidden md:block border-b border-pink-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center whitespace-nowrap">
          <div className="flex gap-6 items-center whitespace-nowrap">
            <a href="mailto:Faizahafeez28@gmail.com" className="hover:text-pink-400 transition-colors flex items-center gap-1.5 font-medium whitespace-nowrap">
              <Mail size={13} className="text-pink-400" />
              Faizahafeez28@gmail.com
            </a>
            <a href="tel:+923344280522" className="hover:text-pink-400 transition-colors flex items-center gap-1.5 font-medium whitespace-nowrap">
              <Phone size={13} className="text-pink-400" />
              +92 334 4280522
            </a>
          </div>
          <div className="flex items-center gap-4 text-slate-300 font-medium whitespace-nowrap">
            <span className="inline-flex items-center gap-1 text-pink-300 font-semibold whitespace-nowrap">
              <Heart size={12} className="fill-pink-500 text-pink-500" />
              Specialist Clinic Lahore
            </span>
            <span className="text-slate-500">|</span>
            <span className="whitespace-nowrap">Mon - Sat: 09:00 AM - 07:00 PM</span>
          </div>
        </div>
      </div>


      <nav
        className={`transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-pink-900/5 border-b border-pink-100" 
            : "bg-white/85 backdrop-blur-sm border-b border-pink-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center h-14">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex flex-col group">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 group-hover:scale-105 transition-transform">
                    <Heart size={18} className="fill-pink-600 text-pink-600" />
                  </div>
                  <span className="text-2xl font-serif font-bold text-slate-900 tracking-tight group-hover:text-pink-600 transition-colors">
                    DR. FAIZA HAFEEZ
                  </span>
                </div>
                <span className="text-[10px] tracking-[0.22em] text-pink-600 font-bold uppercase ml-10 -mt-1">
                  Consultant Gynecologist & Obstetrician
                </span>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-8 flex items-center space-x-5 lg:space-x-6">
                <Link href="/" className="text-slate-700 hover:text-pink-600 px-1.5 py-2 font-semibold text-sm transition-colors whitespace-nowrap">
                  Home
                </Link>
                <Link href="/about" className="text-slate-700 hover:text-pink-600 px-1.5 py-2 font-semibold text-sm transition-colors whitespace-nowrap">
                  About Dr. Faiza
                </Link>
                <Link href="/services" className="text-slate-700 hover:text-pink-600 px-1.5 py-2 font-semibold text-sm transition-colors whitespace-nowrap">
                  Services
                </Link>
                <Link href="/blogs" className="text-slate-700 hover:text-pink-600 px-1.5 py-2 font-semibold text-sm transition-colors whitespace-nowrap">
                  Blogs
                </Link>
                <Link href="/contact" className="text-slate-700 hover:text-pink-600 px-1.5 py-2 font-semibold text-sm transition-colors whitespace-nowrap">
                  Contact
                </Link>
                <a 
                  href="https://wa.me/923344280522" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-full font-bold text-xs transition-all flex items-center gap-1.5 border border-emerald-200 whitespace-nowrap"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
                <Link 
                  href="/appointments" 
                  className="bg-pink-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-pink-700 transition-all shadow-md shadow-pink-600/25 flex items-center gap-2 whitespace-nowrap"
                >
                  <Calendar size={16} />
                  Book Consultation
                </Link>
              </div>
            </div>

            
            <div className="md:hidden flex items-center gap-3">
              <Link 
                href="/appointments" 
                className="bg-pink-600 text-white px-3.5 py-2 rounded-full font-bold text-xs shadow-md"
              >
                Book Now
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-slate-700 hover:text-pink-600 hover:bg-pink-50 focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-pink-100 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="px-4 pt-3 pb-6 space-y-2">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)} 
                className="block text-slate-800 hover:bg-pink-50 hover:text-pink-600 px-4 py-3 rounded-xl text-base font-bold transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                onClick={() => setIsOpen(false)} 
                className="block text-slate-800 hover:bg-pink-50 hover:text-pink-600 px-4 py-3 rounded-xl text-base font-bold transition-colors"
              >
                About Dr. Faiza
              </Link>
              <Link 
                href="/services" 
                onClick={() => setIsOpen(false)} 
                className="block text-slate-800 hover:bg-pink-50 hover:text-pink-600 px-4 py-3 rounded-xl text-base font-bold transition-colors"
              >
                Gynecology Services
              </Link>
              <Link 
                href="/blogs" 
                onClick={() => setIsOpen(false)} 
                className="block text-slate-800 hover:bg-pink-50 hover:text-pink-600 px-4 py-3 rounded-xl text-base font-bold transition-colors"
              >
                Women's Health Blog
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)} 
                className="block text-slate-800 hover:bg-pink-50 hover:text-pink-600 px-4 py-3 rounded-xl text-base font-bold transition-colors"
              >
                Contact Us
              </Link>
              <div className="pt-2 flex flex-col gap-2">
                <a 
                  href="https://wa.me/923344280522" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-emerald-500 text-white text-center py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle size={18} />
                  WhatsApp Direct Inquiry
                </a>
                <Link 
                  href="/appointments" 
                  onClick={() => setIsOpen(false)} 
                  className="w-full bg-pink-600 text-white text-center py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md"
                >
                  <Calendar size={18} />
                  Schedule Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

