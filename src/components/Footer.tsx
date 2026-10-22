import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle, Clock, Heart, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer 
      className="bg-[#0A3366] text-white pt-16 pb-8 relative bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/template/images/background/bg1.webp')" }}
    >
      {/* Dark overlay for perfect contrast */}
      <div className="absolute inset-0 bg-[#0A3366]/90 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Floating Curved White Header Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 mb-14 shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ccf2f9] flex items-center justify-center text-[#00BDE0] flex-shrink-0">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v16m-8-8h16" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#031B4E]">
                Dr. Faiza Hafeez
              </h3>
              <p className="text-xs font-semibold text-[#00a1be] uppercase tracking-wider">
                Consultant Gynecologist & Obstetrician • Ittefaq Hospital (Trust) Lahore
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/923344280522"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-emerald-500 hover:bg-emerald-600 text-white btn-sm flex items-center gap-2"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Us</span>
            </a>
            <Link
              href="/appointments"
              className="btn btn-primary btn-sm flex items-center gap-2"
            >
              <span>Book Appointment</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14 text-sm">
          {/* Col 1: About */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base border-b border-white/10 pb-2">
              About Dr. Faiza
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Dr. Faiza Hafeez provides compassionate, evidence-based maternal and gynecological healthcare in Lahore. Gynae and Obs Resident at Ittefaq Hospital Lahore (Trust).
            </p>
            <div className="pt-2 text-xs text-[#00BDE0] font-semibold">
              FCPS Certified Specialist in Maternal Fetal Wellness
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#00BDE0] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00BDE0]">›</span> Home Page
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#00BDE0] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00BDE0]">›</span> About Dr. Faiza
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00BDE0] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00BDE0]">›</span> All Services
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="hover:text-[#00BDE0] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00BDE0]">›</span> Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-[#00BDE0] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00BDE0]">›</span> Health Blog & Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00BDE0] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00BDE0]">›</span> Contact Clinic
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialties */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base border-b border-white/10 pb-2">
              Specialized Care
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/services/high-risk-pregnancy" className="hover:text-[#00BDE0] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00BDE0]">›</span> High-Risk Pregnancy
                </Link>
              </li>
              <li>
                <Link href="/services/infertility-treatment" className="hover:text-[#00BDE0] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00BDE0]">›</span> Infertility & IVF Advice
                </Link>
              </li>
              <li>
                <Link href="/services/3d-4d-ultrasound" className="hover:text-[#00BDE0] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00BDE0]">›</span> 3D/4D Fetal Anomaly Scan
                </Link>
              </li>
              <li>
                <Link href="/services/pcos-management" className="hover:text-[#00BDE0] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00BDE0]">›</span> PCOS & Hormone Therapy
                </Link>
              </li>
              <li>
                <Link href="/services/laparoscopic-surgery" className="hover:text-[#00BDE0] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00BDE0]">›</span> Laparoscopic Surgery
                </Link>
              </li>
              <li>
                <Link href="/services/cervical-screening" className="hover:text-[#00BDE0] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00BDE0]">›</span> Pap Smear & Screening
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base border-b border-white/10 pb-2">
              Clinic Location
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#00BDE0] flex-shrink-0 mt-1" />
                <span>Ittefaq Hospital (Trust), Model Town / Gulberg III, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#00BDE0] flex-shrink-0" />
                <a href="tel:+923344280522" className="hover:text-[#00BDE0] transition-colors font-semibold">
                  +92 334 4280522
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#00BDE0] flex-shrink-0" />
                <a href="mailto:faizahafeez28@gmail.com" className="hover:text-[#00BDE0] transition-colors">
                  faizahafeez28@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock size={16} className="text-[#00BDE0] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Mon - Sat: 09:00 AM - 07:00 PM</span>
                  <span className="text-[11px] text-slate-400">Emergency Deliveries: 24/7</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Dr. Faiza Hafeez Clinic. All Rights Reserved. FCPS Consultant Gynecologist.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#00BDE0] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#00BDE0] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
