import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
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
  themeColor: "#0ea5e9",
};

export const metadata: Metadata = {
  title: "Dr. Faiza Hafeez | Premium Medical Specialist & Appointments",
  description: "Expert medical care with a focus on Cardiology, Gynecology, and specialized treatments. Book your appointment at Lahore's premier medical clinic.",
  keywords: "Dr. Faiza Hafeez, Cardiology Lahore, Gynecology Lahore, Hameed Latif Hospital specialists, Ittefaq Hospital specialists, Medical Appointments Lahore, Nursing Schedule, Heart Specialist Pakistan",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Faiza Clinic",
  },
  openGraph: {
    title: "Dr. Faiza Hafeez | Premium Medical Specialist",
    description: "Expert medical care with a focus on Cardiology, Gynecology, and specialized treatments.",
    url: "https://faiza-hafeez-clinic.vercel.app",
    siteName: "Dr. Faiza Hafeez Clinic",
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: [
      "DI3Yaizs1_j78EF1QhR2H5E9r9qn8pFG3r_B-Y1g3i4",
      "qzoAflzxeJ6OrILXMiIyVbTs2Y6XW6cEF6MvhAiGKC8"
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col font-sans bg-white text-slate-900"
      >
        {children}
      </body>
    </html>
  );
}
