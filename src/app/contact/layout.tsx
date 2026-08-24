import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dr. Faiza Hafeez Clinic Lahore | Phone, Address & WhatsApp",
  description: "Get in touch with Dr. Faiza Hafeez Gynecology Clinic in Lahore. Clinic location in Gulberg, phone number +923344280522, and emergency consultation support.",
  alternates: {
    canonical: "https://faizahafeez-bytely-team.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Dr. Faiza Hafeez Clinic Lahore",
    description: "Contact information, WhatsApp booking, and clinic location for Dr. Faiza Hafeez.",
    url: "https://faizahafeez-bytely-team.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
