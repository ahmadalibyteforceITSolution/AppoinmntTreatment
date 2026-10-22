"use client";

import React, { useEffect, useRef } from "react";

interface AdUnitProps {
  slot: string;
  format?: "auto" | "fluid" | "rectangle" | "autorelaxed";
  responsive?: "true" | "false";
  style?: React.CSSProperties;
}

export default function AdUnit({
  slot,
  format = "auto",
  responsive = "true",
  style,
}: AdUnitProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    const el = adRef.current;
    if (!el) return;

    let retries = 0;
    const maxRetries = 20;

    const pushAd = () => {
      if (!el) return;

      if (el.getAttribute("data-adsbygoogle-status")) {
        return;
      }

      const availableWidth = el.offsetWidth || el.parentElement?.offsetWidth || 0;
      if (availableWidth > 0) {
        try {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
          console.warn("AdSense push notice:", err);
        }
      } else if (retries < maxRetries) {
        retries++;
        setTimeout(pushAd, 150);
      }
    };

    const timer = setTimeout(pushAd, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center w-full overflow-hidden">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style || { display: "block", width: "100%" }}
        data-ad-client="ca-pub-1888138480311828"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}
