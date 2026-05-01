import { blogs } from "@/data/blogs";
import { MetadataRoute } from "next";

export const revalidate = 3600; // Revalidate every hour

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://appoinmnt-treatment.vercel.app";
  const currentDate = new Date().toISOString().split('T')[0];

  // Blog pages
  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Service pages
  const serviceSlugs = [
    "cardiology", "gynecology", "pediatrics", "orthopedics", 
    "dermatology", "obstetrics", "general-medicine", "diagnostics"
  ];

  const serviceEntries: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Static pages
  const routes = [
    { path: "", priority: 1.0, freq: "yearly" as const },
    { path: "/about", priority: 0.9, freq: "monthly" as const },
    { path: "/blogs", priority: 0.9, freq: "monthly" as const },
    { path: "/services", priority: 0.9, freq: "monthly" as const },
    { path: "/appointments", priority: 0.9, freq: "monthly" as const },
    { path: "/contact", priority: 0.9, freq: "monthly" as const },
    { path: "/privacy", priority: 0.5, freq: "yearly" as const },
    { path: "/terms", priority: 0.5, freq: "yearly" as const },
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
