import type { MetadataRoute } from "next";
import { SITE_URL } from "@/utils";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    // /privacy-policy is deliberately absent — it is noindex, and listing a noindex
    // URL in the sitemap sends Google contradictory signals.
    return [
        {
            url: `${SITE_URL}/`,
            lastModified,
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}
