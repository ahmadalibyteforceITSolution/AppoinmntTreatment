import { blogs } from "@/data/blogs";
import { MetadataRoute } from "next";

export const revalidate = 3600; // Revalidate every hour

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://appoinmnt-treatment.vercel.app";
  const currentDate = new Date();

  // Blog pages
  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
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
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Static pages
  const routes = ["", "/about", "/blogs", "/services", "/appointments", "/contact", "/privacy", "/terms"];
  
  const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "yearly" : "monthly",
    priority: route === "" ? 1.0 : 0.9,
  }));

  return [
    ...staticPages,
    ...serviceEntries,
    ...blogEntries,
  ];
}
