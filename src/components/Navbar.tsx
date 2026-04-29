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
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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
