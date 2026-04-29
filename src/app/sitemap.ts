import { blogs } from "@/data/blogs";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://faiza-hafeez-clinic.vercel.app";

  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const serviceSlugs = [
    "cardiology", "gynecology", "pediatrics", "orthopedics", 
    "dermatology", "obstetrics", "general-medicine", "diagnostics"
  ];

  const serviceEntries: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const staticPages = ["", "/about", "/blogs", "/services", "/appointments", "/contact", "/privacy", "/terms"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("yearly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.9,
  }));

  return [
    ...staticPages,
    ...serviceEntries,
    ...blogEntries,
  ];
}
