import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Women's Health, Pregnancy & Gynecology Blog | Dr. Faiza Hafeez Lahore",
  description: "Read evidence-based medical articles on high-risk pregnancy, PCOS, fertility treatments, ultrasound scans, and pelvic health by Dr. Faiza Hafeez (FCPS).",
  alternates: {
    canonical: "https://faizahafeez-bytely-team.vercel.app/blogs",
  },
  openGraph: {
    title: "Women's Health & Pregnancy Blog | Dr. Faiza Hafeez Lahore",
    description: "Expert maternal health and gynecology medical advice and guides by Dr. Faiza Hafeez.",
    url: "https://faizahafeez-bytely-team.vercel.app/blogs",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
