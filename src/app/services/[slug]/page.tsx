import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Heart, ExternalLink, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";

const servicesData: Record<string, { title: string; description: string; features: string[]; clinicalGuidelines?: { title: string; source: string; url: string }[] }> = {
  "high-risk-pregnancy": {
    title: "High-Risk Pregnancy & Maternal Care",
    description: "Expert maternal-fetal supervision for high-risk pregnancies, pre-eclampsia, gestational diabetes, multiple gestations, and previous miscarriage history in Lahore.",
    features: ["Continuous Fetal Wellbeing Doppler Scans", "Blood Pressure & Blood Sugar Control Protocols", "Pre-Term Labor Prevention Management", "24/7 Priority Hospital Admission Support"],
    clinicalGuidelines: [
      { title: "ACOG Guidelines on High-Risk Pregnancy Care", source: "American College of Obstetricians and Gynecologists", url: "https://www.acog.org/womens-health" },
      { title: "WHO Maternal & Perinatal Health Standards", source: "World Health Organization", url: "https://www.who.int/health-topics/maternal-health" }
    ]
  },
  gynecology: {
    title: "Gynecology & Pelvic Health",
    description: "Comprehensive women's pelvic healthcare including routine checkups, menstrual disorder therapy, fibroid management, and endometriosis care in Lahore.",
    features: ["Heavy & Irregular Period Therapy", "Uterine Fibroids & Ovarian Cyst Management", "Endometriosis & Pelvic Pain Relief", "Annual Well-Woman Health Checks"],
    clinicalGuidelines: [
      { title: "RCOG Women's Pelvic Health Guidance", source: "Royal College of Obstetricians and Gynaecologists", url: "https://www.rcog.org.uk/for-the-public" },
      { title: "NHS Women's Reproductive Health Overview", source: "NHS UK", url: "https://www.nhs.uk/conditions/womens-health/" }
    ]
  },
  "infertility-treatment": {
    title: "Infertility & Reproductive Wellness",
    description: "Holistic fertility evaluations, ovulation stimulation, follicular ultrasound tracking, and personalized conception roadmaps in Lahore by Dr. Faiza Hafeez.",
    features: ["Hormonal Profile & Ovarian Reserve Assessment", "Follicular Tracking Ultrasound", "Tubal Patency Testing Guidance", "Couples Fertility Counseling"],
    clinicalGuidelines: [
      { title: "ASRM Guidelines for Fertility Evaluation", source: "American Society for Reproductive Medicine", url: "https://www.reproductivefacts.org/" }
    ]
  },
  "3d-4d-ultrasound": {
    title: "3D / 4D Fetal Anomaly Ultrasound",
    description: "High-precision ultrasound scanning for detailed fetal organ development evaluation, anomaly screening, and live 4D baby imaging in Lahore.",
    features: ["1st Trimester Nuchal Translucency (NT) Scan", "18-22 Weeks Detailed Anomaly Screening", "Fetal Growth & Doppler Blood Flow Analysis", "High-Resolution Image Prints"],
    clinicalGuidelines: [
      { title: "ISUOG Practice Guidelines: Fetal Ultrasound", source: "International Society of Ultrasound in Obstetrics and Gynecology", url: "https://www.isuog.org/clinical-resources/patient-information-leaflets.html" }
    ]
  },
  "pcos-management": {
    title: "PCOS / PCOD & Hormonal Management",
    description: "Tailored medical and dietary interventions to manage Polycystic Ovary Syndrome, restore regular periods, and treat acne and hirsutism in Lahore.",
    features: ["Insulin Resistance & Metabolic Optimization", "Menstrual Cycle Regulation", "Hormonal Hair Loss & Skin Care Guidance", "Fertility Restoration for PCOS"],
    clinicalGuidelines: [
      { title: "International Evidence-Based Guideline for PCOS", source: "Monash University & Endocrine Society", url: "https://www.monash.edu/medicine/sphpm/mchri/pcos" }
    ]
  },
  "laparoscopic-surgery": {
    title: "Laparoscopic & Minimally Invasive Surgery",
    description: "Advanced keyhole gynecological procedures offering minimal scarring, faster recovery, and shorter hospital stays in Lahore.",
    features: ["Laparoscopic Ovarian Cystectomy", "Keyhole Fibroid Removal (Myomectomy)", "Diagnostic & Operative Hysteroscopy", "Minimal Access Surgical Care"],
    clinicalGuidelines: [
      { title: "AAGL Minimally Invasive Gynecologic Surgery Standards", source: "American Association of Gynecologic Laparoscopists", url: "https://www.aagl.org/" }
    ]
  },
  "cervical-screening": {
    title: "Cervical Screening & Pap Smear Clinic",
    description: "Preventive cervical health checkups, liquid-based Pap cytology, HPV DNA testing, and early pre-cancerous lesion care in Lahore.",
    features: ["Routine Pap Smear Cytology", "High-Risk HPV DNA Screening", "Colposcopy Evaluation Referral", "Cervical Health Counseling"],
    clinicalGuidelines: [
      { title: "WHO Cervical Cancer Elimination Initiative", source: "World Health Organization", url: "https://www.who.int/initiatives/cervical-cancer-elimination-initiative" }
    ]
  },
  "postnatal-care": {
    title: "Postnatal Care & Lactation Support",
    description: "Supportive post-delivery checkups, incision healing care, newborn nursing guidance, and maternal emotional recovery in Lahore.",
    features: ["Post-C-Section & Perineal Wound Assessment", "Lactation & Latching Guidance", "Postpartum Depression & Mood Support", "Safe Post-Delivery Contraception"],
    clinicalGuidelines: [
      { title: "WHO Postnatal Care Recommendations", source: "World Health Organization", url: "https://www.who.int/publications/i/item/9789240045989" }
    ]
  },
  "menopause-wellness": {
    title: "Menopause & Healthy Aging Clinic",
    description: "Compassionate care for women transitioning through menopause, addressing hot flashes, osteoporosis prevention, and hormonal balance in Lahore.",
    features: ["Hormone Replacement Therapy (HRT) Counseling", "Bone Density (DEXA) Screening Guidance", "Urogenital Health & Dryness Relief", "Cardiovascular & Metabolic Health Checks"],
    clinicalGuidelines: [
      { title: "International Menopause Society Guidelines", source: "International Menopause Society", url: "https://www.imsociety.org/" }
    ]
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};

  const url = `https://faizahafeez-bytely-team.vercel.app/services/${slug}`;
  return {
    title: `${service.title} in Lahore | Dr. Faiza Hafeez FCPS`,
    description: service.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${service.title} | Dr. Faiza Hafeez Gynecologist Lahore`,
      description: service.description,
      url,
      type: "website",
    },
    keywords: [
      service.title,
      `${service.title} Lahore`,
      "Dr Faiza Hafeez",
      "Gynecologist in Lahore",
      "Female Gynecologist Lahore",
      "Obstetrician Lahore",
      ...service.features,
    ].join(", "),
  };
}

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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Physician",
      "name": "Dr. Faiza Hafeez",
      "medicalSpecialty": "Obstetrics & Gynecology",
      "url": "https://faizahafeez-bytely-team.vercel.app"
    },
    "location": {
      "@type": "MedicalClinic",
      "name": "Dr. Faiza Hafeez Clinic Lahore",
      "address": "123 Medical Square, Gulberg III, Lahore, Pakistan"
    }
  };

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

          {service.clinicalGuidelines && service.clinicalGuidelines.length > 0 && (
            <div className="mb-16 p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-serif font-bold text-lg">
                <ShieldCheck size={20} className="text-pink-600" />
                Evidence-Based Clinical References & Standards
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                All gynecological and obstetric protocols followed by Dr. Faiza Hafeez align with international clinical practice standards:
              </p>
              <ul className="space-y-2.5 pt-2">
                {service.clinicalGuidelines.map((guide, idx) => (
                  <li key={idx}>
                    <a
                      href={guide.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-pink-700 hover:text-pink-900 hover:underline transition-colors"
                    >
                      <ExternalLink size={13} className="text-pink-500" />
                      <span>{guide.title}</span>
                      <span className="text-slate-400 font-normal">({guide.source})</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

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

