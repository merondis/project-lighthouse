"use client";

import { useEffect } from "react";
import { addRecentTool } from "@/lib/recentlyViewed";

export function RecordRecentTool({ slug }: { slug: string }) {
  useEffect(() => {
    addRecentTool(slug);
  }, [slug]);

  return null;
}