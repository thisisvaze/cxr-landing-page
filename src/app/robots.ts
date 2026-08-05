import type { MetadataRoute } from "next";
import { SITE_URL } from "@/utils";

/**
 * AI answer engines (ChatGPT, Perplexity, Claude, Gemini, Copilot) are a primary
 * acquisition channel for us, so their crawlers are allowed explicitly rather than
 * left to the wildcard rule — several of them read only the rule block that names them.
 */
const ANSWER_ENGINE_CRAWLERS = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "PerplexityBot",
    "Perplexity-User",
    "ClaudeBot",
    "Claude-User",
    "Claude-SearchBot",
    "anthropic-ai",
    "Google-Extended",
    "Applebot",
    "Applebot-Extended",
    "Bingbot",
    "DuckDuckBot",
    "Amazonbot",
    "meta-externalagent",
    "meta-externalfetcher",
    "CCBot",
    "cohere-ai",
    "YouBot",
];

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/static/chunks/"],
            },
            {
                userAgent: ANSWER_ENGINE_CRAWLERS,
                allow: "/",
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
