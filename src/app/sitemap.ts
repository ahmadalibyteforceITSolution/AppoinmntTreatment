import { blogs } from "@/data/blogs";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://appoinmnt-treatment.vercel.app";
  const currentDate = new Date().toISOString().split('T')[0]; // Use YYYY-MM-DD for consistency

  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

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

  const routes = ["", "/about", "/blogs", "/services", "/appointments", "/contact", "/privacy", "/terms"];
  
  const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route || "/"}`, // Ensure home page has a trailing slash or is just the base
    lastModified: currentDate,
    changeFrequency: route === "" ? ("yearly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.9,
  }));

  return [
    ...staticPages,
    ...serviceEntries,
    ...blogEntries,
  ];
}
