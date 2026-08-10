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
  metadataBase: new URL("https://appoinmnt-treatment.vercel.app"),
  title: "Dr. Faiza Hafeez | Consultant Gynecologist, Obstetrician & Women's Health Specialist Lahore",
  description: "Premier gynecology, high-risk pregnancy care, infertility treatment, PCOS management, 3D/4D ultrasound, and laparoscopic surgery in Lahore by Dr. Faiza Hafeez (FCPS). Book your consultation today.",
  keywords: [
    "Dr. Faiza Hafeez",
    "Best Gynecologist Lahore",
    "Female Gynecologist Lahore",
    "Obstetrician Lahore",
    "High Risk Pregnancy Specialist",
    "Infertility Specialist Lahore",
    "PCOS Treatment Lahore",
    "Hameed Latif Hospital Gynecologist",
    "Ittefaq Hospital Gynecologist",
    "Gynecology Appointment Lahore",
    "3D 4D Ultrasound Pregnancy Lahore",
    "Cervical Screening Pap Smear Lahore"
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
    canonical: "https://appoinmnt-treatment.vercel.app",
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
    url: "https://appoinmnt-treatment.vercel.app",
    siteName: "Dr. Faiza Hafeez Clinic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://appoinmnt-treatment.vercel.app/faiza.jpg",
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
  "image": "https://appoinmnt-treatment.vercel.app/faiza.jpg",
  "@id": "https://appoinmnt-treatment.vercel.app/#clinic",
  "url": "https://appoinmnt-treatment.vercel.app",
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

