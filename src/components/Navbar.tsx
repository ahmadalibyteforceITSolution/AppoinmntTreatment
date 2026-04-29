"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Calendar, MessageCircle } from "lucide-react";

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
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      {/* Top Info Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="mailto:Faizahafeez28@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Faizahafeez28@gmail.com
            </a>
            <a href="tel:+923344280522" className="hover:text-primary transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +92 334 4280522
            </a>
          </div>
          <div className="font-medium text-slate-300">
            Mon - Sat: 9:00 AM - 7:00 PM
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center h-14">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-primary tracking-tight">
                DR. FAIZA HAFEEZ
              </span>
              <span className="text-[10px] tracking-[0.2em] text-secondary font-semibold -mt-1">
                PREMIUM MEDICAL CARE
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-slate-700 hover:text-primary px-3 py-2 font-medium transition-colors">Home</Link>
              <Link href="/about" className="text-slate-700 hover:text-primary px-3 py-2 font-medium transition-colors">About Us</Link>
              <Link href="/services" className="text-slate-700 hover:text-primary px-3 py-2 font-medium transition-colors">Services</Link>
              <Link href="/blogs" className="text-slate-700 hover:text-primary px-3 py-2 font-medium transition-colors">Blogs</Link>
              <a href="https://wa.me/923344280522" target="_blank" className="text-green-600 hover:text-green-700 px-3 py-2 font-medium transition-colors flex items-center gap-1">
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <Link href="/appointments" className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg flex items-center gap-2">
                <Calendar size={18} />
                Book Now
              </Link>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-slate-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/about" className="block text-slate-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">About Us</Link>
            <Link href="/services" className="block text-slate-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link href="/blogs" className="block text-slate-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">Blogs</Link>
            <Link href="/appointments" className="block bg-primary text-white px-3 py-3 rounded-md text-base font-medium text-center">Book Appointment</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
