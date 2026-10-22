import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import TimelineSection from "@/components/TimelineSection";
import AppointmentSection from "@/components/AppointmentSection";
import NutritionSection from "@/components/NutritionSection";
import CareTabsSection from "@/components/CareTabsSection";
import FaqSection from "@/components/FaqSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AdUnit from "@/components/AdUnit";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Hero Banner */}
      <Hero />

      {/* 3. Stat Ribbon Section */}
      <StatsSection />

      {/* 4. Section 1: About Doctor & Clinic */}
      <AboutSection />

      {/* 5. Section 2: Specialty Services Showcase */}
      <Services />

      {/* 6. Section 3: 9-Month Pregnancy Timeline */}
      <TimelineSection />

      {/* 7. Section 4: Make An Appointment */}
      <AppointmentSection />

      {/* 8. Section 5: Healthy Pregnancy Nutrition */}
      <NutritionSection />

      {/* 9. Section 6: We Are Helping People Who Are (Care Pathways Tabs) */}
      <CareTabsSection />

      {/* 10. Section 7: Frequently Asked Questions */}
      <FaqSection />

      {/* 11. Section 8: Patient Testimonials */}
      <TestimonialsSection />

      {/* 12. Latest Medical Insights & Health Blogs */}
      <BlogSection />

      {/* 13. ClinicMaster Footer */}
      <Footer />

      {/* 14. Floating Call & WhatsApp Action Buttons */}
      <FloatingWhatsApp />
    </main>
  );
}
