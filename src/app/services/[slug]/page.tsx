import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

// Define the services data to populate the dynamic pages
const servicesData: Record<string, { title: string; description: string; features: string[] }> = {
  cardiology: {
    title: "Cardiology & Heart Care",
    description: "State-of-the-art cardiovascular care including diagnostics, treatment, and ongoing management of heart conditions.",
    features: ["ECG & Echocardiography", "Stress Testing", "Hypertension Management", "Preventive Cardiology Screenings"]
  },
  gynecology: {
    title: "Gynecology & Obstetrics",
    description: "Comprehensive women's health services from routine checkups to specialized maternal care.",
    features: ["Prenatal & Postnatal Care", "High-Risk Pregnancy Management", "PCOS Treatment", "Routine Pelvic Exams"]
  },
  pediatrics: {
    title: "Pediatric Care",
    description: "Compassionate and expert medical care for infants, children, and adolescents.",
    features: ["Vaccinations & Immunizations", "Growth & Development Tracking", "Childhood Illness Treatment", "Nutritional Guidance"]
  },
  orthopedics: {
    title: "Orthopedic Surgery",
    description: "Advanced treatments for bone, joint, and muscle conditions to restore mobility and reduce pain.",
    features: ["Joint Replacement Consultations", "Fracture Management", "Sports Injury Treatment", "Arthritis Care"]
  },
  dermatology: {
    title: "Dermatology & Skin",
    description: "Expert care for all skin, hair, and nail conditions using the latest medical and cosmetic treatments.",
    features: ["Acne & Eczema Treatment", "Skin Cancer Screening", "Cosmetic Dermatology", "Laser Treatments"]
  },
  obstetrics: {
    title: "Obstetrics",
    description: "Personalized maternity care ensuring a safe and healthy journey to motherhood.",
    features: ["Labor & Delivery Planning", "Fetal Monitoring", "Ultrasound Services", "Lactation Consulting"]
  },
  "general-medicine": {
    title: "General Medicine",
    description: "Primary care for acute and chronic illnesses with a holistic approach.",
    features: ["Annual Physicals", "Diabetes Management", "Respiratory Infections", "Thyroid Disorders"]
  },
  diagnostics: {
    title: "Diagnostic Imaging",
    description: "Advanced ultrasound and diagnostic services with precise reporting.",
    features: ["Digital X-Rays", "Ultrasound Scans", "Laboratory Services", "Quick Result Turnaround"]
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-8 transition-colors font-medium">
            <ArrowLeft size={18} />
            Back to All Services
          </Link>
          <h1 className="text-5xl font-serif font-bold text-slate-950 mb-6">{service.title}</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-950 mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                <span className="font-medium text-slate-800 text-lg">{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-slate-950 rounded-[40px] p-10 md:p-16 text-center text-white space-y-8">
            <h3 className="text-3xl font-serif font-bold">Ready to book your consultation?</h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Our specialists in {service.title} are available for appointments. Book online or contact us via WhatsApp for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/appointments" className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all">
                Book Appointment
              </Link>
              <a href="https://wa.me/923344280522" target="_blank" className="px-8 py-4 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition-all">
                WhatsApp Us
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
