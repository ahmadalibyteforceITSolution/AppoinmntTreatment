import Link from "next/link";
import { Heart, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex flex-col mb-6">
              <div className="flex items-center gap-2">
                <Heart size={20} className="fill-pink-500 text-pink-500" />
                <span className="text-2xl font-serif font-bold text-white tracking-tight">
                  DR. FAIZA HAFEEZ
                </span>
              </div>
              <span className="text-[10px] tracking-[0.16em] text-pink-400 font-bold uppercase ml-7 -mt-1">
                Gynae & Obs Resident | Ittefaq Hospital (Trust)
              </span>
            </Link>
            <p className="text-xs leading-relaxed mb-6 text-slate-400">
              Providing compassionate, specialized gynecology, maternal healthcare, and reproductive wellness services in Lahore. Gynae and Obs Resident at Ittefaq Hospital Lahore (Trust).
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif text-base font-bold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-xs font-medium">
              <li><Link href="/" className="hover:text-pink-400 transition-colors">Home Page</Link></li>
              <li><Link href="/about" className="hover:text-pink-400 transition-colors">About Dr. Faiza Hafeez</Link></li>
              <li><Link href="/services" className="hover:text-pink-400 transition-colors">Gynecology Services</Link></li>
              <li><Link href="/appointments" className="hover:text-pink-400 transition-colors">Book Consultation</Link></li>
              <li><Link href="/blogs" className="hover:text-pink-400 transition-colors">Women's Health Blog</Link></li>
              <li><Link href="/contact" className="hover:text-pink-400 transition-colors">Contact Clinic</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-base font-bold mb-5">Gynecology Specialties</h3>
            <ul className="space-y-3 text-xs font-medium">
              <li><Link href="/services/high-risk-pregnancy" className="hover:text-pink-400 transition-colors">High-Risk Pregnancy Care</Link></li>
              <li><Link href="/services/infertility-treatment" className="hover:text-pink-400 transition-colors">Infertility & IVF Guidance</Link></li>
              <li><Link href="/services/3d-4d-ultrasound" className="hover:text-pink-400 transition-colors">3D/4D Pregnancy Ultrasound</Link></li>
              <li><Link href="/services/pcos-management" className="hover:text-pink-400 transition-colors">PCOS & Hormonal Treatment</Link></li>
              <li><Link href="/services/laparoscopic-surgery" className="hover:text-pink-400 transition-colors">Laparoscopic Surgery</Link></li>
              <li><Link href="/services/cervical-screening" className="hover:text-pink-400 transition-colors">Pap Smears & Cervical Care</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-base font-bold mb-5">Clinic Contact</h3>
            <ul className="space-y-3 text-xs font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="text-pink-500 flex-shrink-0 mt-0.5" size={16} />
                <span className="text-slate-300">123 Medical Square, Gulberg III, Lahore, Punjab, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-pink-500 flex-shrink-0" size={16} />
                <span className="text-slate-300">+92 334 4280522</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="text-emerald-500 flex-shrink-0" size={16} />
                <a href="https://wa.me/923344280522" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp: 0334 4280522</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-pink-500 flex-shrink-0" size={16} />
                <span className="text-slate-300">faizahafeez28@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Dr. Faiza Hafeez Clinic. All Rights Reserved. FCPS Consultant Gynecologist.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-pink-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-pink-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

