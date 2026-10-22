"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface GsapAnimationProps {
  children: React.ReactNode;
  animation?: "fadeInUp" | "fadeIn" | "staggerUp" | "scaleUp" | "slideLeft" | "slideRight";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export default function GsapAnimation({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.85,
  className = "",
  threshold = 0.12,
}: GsapAnimationProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elRef.current) return;
    const el = elRef.current;
    let anim: gsap.core.Tween | null = null;

    // Apply initial state for smooth reveal
    if (animation === "staggerUp") {
      gsap.set(el.children, { opacity: 0, y: 32 });
    } else if (animation === "fadeInUp") {
      gsap.set(el, { opacity: 0, y: 36 });
    } else if (animation === "fadeIn") {
      gsap.set(el, { opacity: 0 });
    } else if (animation === "scaleUp") {
      gsap.set(el, { opacity: 0, scale: 0.94 });
    } else if (animation === "slideLeft") {
      gsap.set(el, { opacity: 0, x: -36 });
    } else if (animation === "slideRight") {
      gsap.set(el, { opacity: 0, x: 36 });
    }

    if (typeof IntersectionObserver === "undefined") {
      // Fallback for non-supporting environments
      gsap.set(el, { opacity: 1, y: 0, x: 0, scale: 1 });
      if (animation === "staggerUp") {
        gsap.set(el.children, { opacity: 1, y: 0 });
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (animation === "staggerUp") {
              anim = gsap.to(el.children, {
                opacity: 1,
                y: 0,
                duration: duration || 0.75,
                delay,
                stagger: 0.12,
                ease: "power3.out",
              });
            } else if (animation === "fadeInUp") {
              anim = gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: duration || 0.85,
                delay,
                ease: "power3.out",
              });
            } else if (animation === "fadeIn") {
              anim = gsap.to(el, {
                opacity: 1,
                duration: duration || 0.8,
                delay,
                ease: "power2.out",
              });
            } else if (animation === "scaleUp") {
              anim = gsap.to(el, {
                opacity: 1,
                scale: 1,
                duration: duration || 0.85,
                delay,
                ease: "power3.out",
              });
            } else if (animation === "slideLeft" || animation === "slideRight") {
              anim = gsap.to(el, {
                opacity: 1,
                x: 0,
                duration: duration || 0.85,
                delay,
                ease: "power3.out",
              });
            }
            observer.unobserve(el);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      anim?.kill();
    };
  }, [animation, delay, duration, threshold]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}
