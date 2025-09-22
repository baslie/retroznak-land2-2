"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { analyticsConfig } from "@/config/analytics";
import { initAnalytics, resetAnalytics, trackEvent } from "@/lib/analytics";

function isAnalyticsEnabled() {
  return Boolean(analyticsConfig.projectId || analyticsConfig.debug);
}

export function AnalyticsProvider() {
  const pathname = usePathname();
  const enabled = isAnalyticsEnabled();

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    initAnalytics(analyticsConfig);

    return () => {
      resetAnalytics();
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const path = pathname ?? (typeof window !== "undefined" ? window.location.pathname : "/");
    const search = typeof window !== "undefined" ? window.location.search : "";
    const url = search ? `${path}${search}` : path;

    trackEvent({
      name: "page_view",
      properties: {
        path: url,
        title: typeof document !== "undefined" ? document.title : undefined,
        referrer: typeof document !== "undefined" ? document.referrer : undefined,
      },
    });
  }, [enabled, pathname]);

  return null;
}
