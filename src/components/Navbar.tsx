"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Calendar, MessageCircle, Phone, Mail, Clock, MapPin, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 top-0 left-0 transition-all duration-300">
      {/* ClinicMaster Top Bar */}
      <div className="bg-[#0A3366] text-white text-xs py-2.5 hidden lg:block border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a 
              href="tel:+923344280522" 
              className="flex items-center gap-2 hover:text-[#00BDE0] transition-colors"
            >
              <Phone size={13} className="text-[#00BDE0]" />
              <span className="font-medium">+92 334 4280522</span>
            </a>
            <a 
              href="mailto:faizahafeez28@gmail.com" 
              className="flex items-center gap-2 hover:text-[#00BDE0] transition-colors"
            >
              <Mail size={13} className="text-[#00BDE0]" />
              <span className="font-medium">faizahafeez28@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin size={13} className="text-[#00BDE0]" />
              <span>Ittefaq Hospital (Trust), Gulberg III, Lahore</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-300">
              <Clock size={13} className="text-[#00BDE0]" />
              <span>Mon - Sat: 09:00 AM - 07:00 PM</span>
            </div>
            <a 
              href="https://wa.me/923344280522" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 transition-all shadow-sm"
            >
              <MessageCircle size={12} />
              Quick WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Floating Pill Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2.5 sm:pt-3">
        <nav
          className={`transition-all duration-300 rounded-full px-5 sm:px-7 py-2.5 sm:py-3.5 flex items-center justify-between ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-2xl border border-slate-200/80"
              : "bg-white/95 backdrop-blur-sm shadow-xl border border-slate-100"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#ccf2f9] flex items-center justify-center text-[#00BDE0] group-hover:scale-105 transition-transform shadow-sm">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v16m-8-8h16" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-[#031B4E] tracking-tight group-hover:text-[#00BDE0] transition-colors leading-none">
                Dr. Faiza Hafeez
              </span>
              <span className="text-[10px] text-[#00a1be] font-bold tracking-wider uppercase mt-1">
                Gynecology & Obstetrics • Lahore
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            <Link 
              href="/" 
              className="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-sm transition-colors py-1"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-sm transition-colors py-1"
            >
              About Clinic
            </Link>
            <Link 
              href="/services" 
              className="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-sm transition-colors py-1"
            >
              Services
            </Link>
            <Link 
              href="/appointments" 
              className="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-sm transition-colors py-1"
            >
              Appointments
            </Link>
            <Link 
              href="/blogs" 
              className="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-sm transition-colors py-1"
            >
              Health Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-sm transition-colors py-1"
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/appointments"
              className="btn btn-primary btn-sm flex items-center gap-2 group shadow-md"
            >
              <Calendar size={15} />
              <span>Book Appointment</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggler */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full bg-slate-100 text-[#031B4E] hover:bg-slate-200 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[85px] bg-[#0A3366]/40 backdrop-blur-sm z-40">
          <div className="bg-white m-4 rounded-3xl p-6 shadow-2xl border border-slate-100 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-base py-2 border-b border-slate-100"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-base py-2 border-b border-slate-100"
            >
              About Clinic
            </Link>
            <Link 
              href="/services" 
              onClick={() => setIsOpen(false)}
              className="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-base py-2 border-b border-slate-100"
            >
              Services
            </Link>
            <Link 
              href="/appointments" 
              onClick={() => setIsOpen(false)}
              className="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-base py-2 border-b border-slate-100"
            >
              Appointments
            </Link>
            <Link 
              href="/blogs" 
              onClick={() => setIsOpen(false)}
              className="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-base py-2 border-b border-slate-100"
            >
              Health Blog
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="text-[#031B4E] hover:text-[#00BDE0] font-semibold text-base py-2 border-b border-slate-100"
            >
              Contact
            </Link>

            <div className="flex flex-col gap-3 pt-3">
              <Link
                href="/appointments"
                onClick={() => setIsOpen(false)}
                className="btn btn-primary w-full text-center py-3 flex items-center justify-center gap-2"
              >
                <Calendar size={16} />
                Book Appointment
              </Link>
              <a
                href="https://wa.me/923344280522"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-emerald-500 hover:bg-emerald-600 text-white w-full text-center py-3 flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
