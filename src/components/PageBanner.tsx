"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";

interface PageBannerProps {
  badge?: string;
  title: string;
  description?: string;
  bgImage?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageBanner({
  badge,
  title,
  description,
  bgImage = "/template/images/hero-banner/banner-1.webp",
  breadcrumbs,
}: PageBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bannerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".banner-badge", {
        opacity: 0,
        y: -20,
        duration: 0.7,
        ease: "power2.out",
      });

      gsap.from(".banner-title", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
      });

      gsap.from(".banner-desc", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });

      gsap.from(".banner-breadcrumb", {
        opacity: 0,
        y: 15,
        duration: 0.7,
        delay: 0.45,
        ease: "power2.out",
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={bannerRef}
      className="pt-44 sm:pt-48 pb-16 sm:pb-20 text-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      {/* Semi-transparent navy/cyan medical gradient so background photo is visible while text pops */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031742]/90 via-[#0A3366]/80 to-[#0A3366]/70 z-0" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00BDE0]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
        {badge && (
          <div>
            <span className="banner-badge inline-block px-4 py-1.5 rounded-full bg-[#00BDE0] text-white text-xs font-bold uppercase tracking-wider shadow-md">
              {badge}
            </span>
          </div>
        )}

        <h1 
          className="banner-title text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md"
          style={{ color: "#ffffff" }}
        >
          {title}
        </h1>

        {description && (
          <p 
            className="banner-desc text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
            style={{ color: "#f1f5f9" }}
          >
            {description}
          </p>
        )}

        {/* Breadcrumbs */}
        <nav className="banner-breadcrumb flex items-center justify-center gap-2 text-xs sm:text-sm pt-2 font-medium" style={{ color: "#e2e8f0" }}>
          {breadcrumbs.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {idx > 0 && <ChevronRight size={14} className="text-[#00BDE0]" />}
              {item.href ? (
                <Link href={item.href} className="hover:text-[#00BDE0] transition-colors" style={{ color: "#e2e8f0" }}>
                  {item.label}
                </Link>
              ) : (
                <span className="font-bold text-white" style={{ color: "#ffffff" }}>{item.label}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
}
