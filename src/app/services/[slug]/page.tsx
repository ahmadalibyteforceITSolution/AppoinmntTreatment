import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Heart } from "lucide-react";
import { notFound } from "next/navigation";

const servicesData: Record<string, { title: string; description: string; features: string[] }> = {
  "high-risk-pregnancy": {
    title: "High-Risk Pregnancy & Maternal Care",
    description: "Expert maternal-fetal supervision for high-risk pregnancies, pre-eclampsia, gestational diabetes, multiple gestations, and previous miscarriage history.",
    features: ["Continuous Fetal Wellbeing Doppler Scans", "Blood Pressure & Blood Sugar Control Protocols", "Pre-Term Labor Prevention Management", "24/7 Priority Hospital Admission Support"]
  },
  gynecology: {
    title: "Gynecology & Pelvic Health",
    description: "Comprehensive women's pelvic healthcare including routine checkups, menstrual disorder therapy, fibroid management, and endometriosis care.",
    features: ["Heavy & Irregular Period Therapy", "Uterine Fibroids & Ovarian Cyst Management", "Endometriosis & Pelvic Pain Relief", "Annual Well-Woman Health Checks"]
  },
  "infertility-treatment": {
    title: "Infertility & Reproductive Wellness",
    description: "Holistic fertility evaluations, ovulation stimulation, follicular ultrasound tracking, and personalized conception roadmaps.",
    features: ["Hormonal Profile & Ovarian Reserve Assessment", "Follicular Tracking Ultrasound", "Tubal Patency Testing Guidance", "Couples Fertility Counseling"]
  },
  "3d-4d-ultrasound": {
    title: "3D / 4D Fetal Anomaly Ultrasound",
    description: "High-precision ultrasound scanning for detailed fetal organ development evaluation, anomaly screening, and live 4D baby imaging.",
    features: ["1st Trimester Nuchal Translucency (NT) Scan", "18-22 Weeks Detailed Anomaly Screening", "Fetal Growth & Doppler Blood Flow Analysis", "High-Resolution Image Prints"]
  },
  "pcos-management": {
    title: "PCOS / PCOD & Hormonal Management",
    description: "Tailored medical and dietary interventions to manage Polycystic Ovary Syndrome, restore regular periods, and treat acne and hirsutism.",
    features: ["Insulin Resistance & Metabolic Optimization", "Menstrual Cycle Regulation", "Hormonal Hair Loss & Skin Care Guidance", "Fertility Restoration for PCOS"]
  },
  "laparoscopic-surgery": {
    title: "Laparoscopic & Minimally Invasive Surgery",
    description: "Advanced keyhole gynecological procedures offering minimal scarring, faster recovery, and shorter hospital stays.",
    features: ["Laparoscopic Ovarian Cystectomy", "Keyhole Fibroid Removal (Myomectomy)", "Diagnostic & Operative Hysteroscopy", "Minimal Access Surgical Care"]
  },
  "cervical-screening": {
    title: "Cervical Screening & Pap Smear Clinic",
    description: "Preventive cervical health checkups, liquid-based Pap cytology, HPV DNA testing, and early pre-cancerous lesion care.",
    features: ["Routine Pap Smear Cytology", "High-Risk HPV DNA Screening", "Colposcopy Evaluation Referral", "Cervical Health Counseling"]
  },
  "postnatal-care": {
    title: "Postnatal Care & Lactation Support",
    description: "Supportive post-delivery checkups, incision healing care, newborn nursing guidance, and maternal emotional recovery.",
    features: ["Post-C-Section & Perineal Wound Assessment", "Lactation & Latching Guidance", "Postpartum Depression & Mood Support", "Safe Post-Delivery Contraception"]
  },
  "menopause-wellness": {
    title: "Menopause & Healthy Aging Clinic",
    description: "Compassionate care for women transitioning through menopause, addressing hot flashes, osteoporosis prevention, and hormonal balance.",
    features: ["Hormone Replacement Therapy (HRT) Counseling", "Bone Density (DEXA) Screening Guidance", "Urogenital Health & Dryness Relief", "Cardiovascular & Metabolic Health Checks"]
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServiceDetailPage({ params }: Props) {

  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      <section className="pt-36 pb-20 bg-gradient-to-b from-rose-50/50 via-pink-50/20 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-8 transition-colors font-bold text-sm">
            <ArrowLeft size={18} />
            Back to All Gynecology Services
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <Heart size={18} className="fill-pink-600 text-pink-600" />
            <span className="text-pink-600 font-bold uppercase tracking-widest text-xs">Specialized Care Protocol</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-950 mb-6">{service.title}</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-950 mb-8">What We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle2 className="text-pink-600 flex-shrink-0 mt-1" size={22} />
                <span className="font-semibold text-slate-800 text-base">{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-[40px] p-10 md:p-14 text-center text-white space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
            <h3 className="text-3xl font-serif font-bold relative z-10">Ready to consult Dr. Faiza Hafeez?</h3>
            <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed relative z-10">
              Our clinic in Lahore is fully equipped to provide personalized consultation for {service.title}. Schedule online or connect instantly on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 relative z-10">
              <Link href="/appointments" className="px-8 py-4 bg-pink-600 text-white rounded-full font-bold text-sm hover:bg-pink-500 transition-all shadow-lg shadow-pink-600/30">
                Book Consultation
              </Link>
              <a href="https://wa.me/923344280522" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-sm hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/30">
                WhatsApp Direct Message
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

