import { blogs } from "@/data/blogs";
import { MetadataRoute } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0; // Always serve the latest up-to-date sitemap

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://faizahafeez-bytely-team.vercel.app";
  const currentDate = new Date().toISOString().split('T')[0];

  // Blog pages
  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Service pages (Gynecology & Women's Health specialties)
  const serviceSlugs = [
    "gynecology",
    "obstetrics",
    "high-risk-pregnancy",
    "infertility-treatment",
    "3d-4d-ultrasound",
    "pcos-management",
    "laparoscopic-surgery",
    "cervical-screening",
    "postnatal-care",
    "menopause-wellness"
  ];

  const serviceEntries: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Static pages
  const routes = [
    { path: "", priority: 1.0, freq: "daily" as const },
    { path: "/about", priority: 0.9, freq: "weekly" as const },
    { path: "/services", priority: 0.9, freq: "weekly" as const },
    { path: "/appointments", priority: 0.95, freq: "daily" as const },
    { path: "/blogs", priority: 0.85, freq: "daily" as const },
    { path: "/contact", priority: 0.9, freq: "weekly" as const },
    { path: "/privacy", priority: 0.4, freq: "monthly" as const },
    { path: "/terms", priority: 0.4, freq: "monthly" as const },
  ];
  
  const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.freq,
    priority: route.priority,
  }));

  return [
    ...staticPages,
    ...serviceEntries,
    ...blogEntries,
  ];
}

