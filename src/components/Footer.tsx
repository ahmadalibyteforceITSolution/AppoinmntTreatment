import Link from "next/link";
import { Heart, Mail, Phone, MapPin, MessageCircle, Share2, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex flex-col mb-6">
              <span className="text-2xl font-serif font-bold text-white tracking-tight">
                DR. FAIZA HAFEEZ
              </span>
              <span className="text-[10px] tracking-[0.2em] text-secondary font-semibold -mt-1">
                PREMIUM MEDICAL CARE
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Providing world-class medical services with a touch of compassion. 
              Specializing in Cardiology, Gynecology, and General Medicine with 
              state-of-the-art facilities in Lahore.
            </p>
            <div className="flex space-x-6 text-sm font-bold mt-6">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Dr. Faiza</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Our Specialities</Link></li>
              <li><Link href="/appointments" className="hover:text-secondary transition-colors">Book Appointment</Link></li>
              <li><Link href="/blogs" className="hover:text-secondary transition-colors">Health Blogs</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-6">Medical Specialities</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services/cardiology" className="hover:text-secondary transition-colors">Cardiology & Heart Care</Link></li>
              <li><Link href="/services/gynecology" className="hover:text-secondary transition-colors">Gynecology & Obstetrics</Link></li>
              <li><Link href="/services/pediatrics" className="hover:text-secondary transition-colors">Pediatric Care</Link></li>
              <li><Link href="/services/orthopedics" className="hover:text-secondary transition-colors">Orthopedic Surgery</Link></li>
              <li><Link href="/services/dermatology" className="hover:text-secondary transition-colors">Dermatology & Skin</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary flex-shrink-0" size={18} />
                <span>123 Medical Square, Gulberg III, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary flex-shrink-0" size={18} />
                <span>+92 334 4280522</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="text-green-500 flex-shrink-0" size={18} />
                <a href="https://wa.me/923344280522" target="_blank" className="hover:text-white transition-colors">WhatsApp: 0334 4280522</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary flex-shrink-0" size={18} />
                <span>faizahafeez28@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Dr. Faiza Hafeez Clinic. All Rights Reserved. 
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
