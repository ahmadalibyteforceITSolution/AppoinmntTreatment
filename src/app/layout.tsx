import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport = {
  themeColor: "#db2777",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://faizahafeez-bytely-team.vercel.app"),
  title: "Dr. Faiza Hafeez | Consultant Gynecologist, Obstetrician & Women's Health Specialist Lahore",
  description: "Premier gynecology, high-risk pregnancy care, infertility treatment, PCOS management, 3D/4D ultrasound, and laparoscopic surgery in Lahore by Dr. Faiza Hafeez (FCPS). Book your consultation today.",
  keywords: [
    "Dr. Faiza Hafeez", "Dr Faiza Hafeez Gynecologist", "Best Gynecologist Lahore", "Female Gynecologist Lahore",
    "Top Gynecologist Lahore", "Consultant Gynecologist Lahore", "Obstetrician Lahore", "High Risk Pregnancy Specialist Lahore",
    "Infertility Specialist Lahore", "IVF Specialist Lahore", "PCOS Treatment Lahore", "PCOD Specialist Lahore",
    "3D 4D Ultrasound Lahore", "Fetal Anomaly Scan Lahore", "Laparoscopic Gynecologist Lahore", "Pap Smear Screening Lahore",
    "Cervical Cancer Screening Lahore", "Postnatal Care Specialist Lahore", "Menopause Clinic Lahore", "Fibroid Treatment Lahore",
    "Ovarian Cyst Surgery Lahore", "Hameed Latif Hospital Gynecologist", "Ittefaq Hospital Gynecologist", "Gulberg Lahore Gynecologist",
    "DHA Lahore Female Gynecologist", "Model Town Gynecologist", "Johar Town Gynecologist", "Gynecology Clinic Lahore",
    "Pregnancy Care Doctor Lahore", "Normal Delivery Doctor Lahore", "C-Section Specialist Lahore", "VBAC Doctor Lahore",
    "Pregnancy Ultrasound Lahore", "Follicular Tracking Scan Lahore", "HSG Test Lahore", "IUI Treatment Lahore",
    "Irregular Period Treatment Lahore", "Heavy Bleeding Treatment Lahore", "Endometriosis Treatment Lahore", "Pelvic Pain Treatment Lahore",
    "Adolescent Gynecologist Lahore", "Well Woman Clinic Lahore", "Pregnancy Nutrition Guidance", "Female Doctor Booking Lahore",
    "Online Gynecology Consultation Pakistan", "Emergency Gynecologist Lahore", "Maternity Hospital Gulberg Lahore", "Gynecologist Phone Number Lahore"
  ].join(", "),

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://faizahafeez-bytely-team.vercel.app",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Dr. Faiza Clinic",
  },
  openGraph: {
    title: "Dr. Faiza Hafeez | Consultant Gynecologist & Obstetrician Lahore",
    description: "Expert maternal care, pregnancy ultrasound, PCOS & fertility consultations in Lahore.",
    url: "https://faizahafeez-bytely-team.vercel.app",
    siteName: "Dr. Faiza Hafeez Clinic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://faizahafeez-bytely-team.vercel.app/faiza.jpg",
        width: 800,
        height: 1000,
        alt: "Dr. Faiza Hafeez - Consultant Gynecologist",
      },
    ],
  },
  verification: {
    google: [
      "DI3Yaizs1_j78EF1QhR2H5E9r9qn8pFG3r_B-Y1g3i4",
      "qzoAflzxeJ6OrILXMiIyVbTs2Y6XW6cEF6MvhAiGKC8"
    ],
  },
  other: {
    "google-adsense-account": "ca-pub-1888138480311828",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Faiza Hafeez Clinic",
  "image": "https://faizahafeez-bytely-team.vercel.app/faiza.jpg",
  "@id": "https://faizahafeez-bytely-team.vercel.app/#clinic",
  "url": "https://faizahafeez-bytely-team.vercel.app",
  "telephone": "+923344280522",
  "priceRange": "PKR 2500 - 15000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Medical Square, Gulberg III",
    "addressLocality": "Lahore",
    "addressRegion": "Punjab",
    "postalCode": "54000",
    "addressCountry": "PK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 31.5204,
    "longitude": 74.3587
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "19:00"
  },
  "medicalSpecialty": [
    "Gynecologic",
    "Obstetric",
    "ReproductiveEndocrinology"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <meta name="google-site-verification" content="DI3Yaizs1_j78EF1QhR2H5E9r9qn8pFG3r_B-Y1g3i4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-pink-100 selection:text-pink-700">
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1888138480311828"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        {children}
      </body>
    </html>
  );
}

