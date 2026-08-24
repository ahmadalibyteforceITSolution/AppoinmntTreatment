import { MetadataRoute } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://faizahafeez-bytely-team.vercel.app";
  
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

