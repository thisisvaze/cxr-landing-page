import type { MetadataRoute } from "next";
import { SITE_URL } from "@/utils";

/**
 * Bump when the homepage's *content* meaningfully changes — not on every deploy.
 * `new Date()` here would stamp a fresh lastmod on every build, which teaches
 * Google the value is noise and gets it ignored.
 */
const HOMEPAGE_LAST_MODIFIED = "2026-08-05";

export default function sitemap(): MetadataRoute.Sitemap {
    // /privacy-policy is deliberately absent — it is noindex, and listing a noindex
    // URL in the sitemap sends Google contradictory signals.
    return [
        {
            url: `${SITE_URL}/`,
            lastModified: HOMEPAGE_LAST_MODIFIED,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${SITE_URL}/vr-ai-tutor`,
            lastModified: HOMEPAGE_LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/meta-quest-education`,
            lastModified: HOMEPAGE_LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
