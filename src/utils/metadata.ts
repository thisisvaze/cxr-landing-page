import { Metadata } from "next";

/**
 * Single source of truth for everything search engines and answer engines read.
 * Update here, not in individual pages.
 */

/**
 * Must be the host that actually serves 200. The apex 308-redirects to www, and
 * Search Console shows Google indexing the www version (882 impressions vs 10),
 * so www is the canonical origin. Pointing canonicals/sitemap at the apex would
 * emit URLs that redirect and split the entity across two hosts.
 */
export const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.curiosityxr.com"
).replace(/\/$/, "");

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "CuriosityXR";

export const YOUTUBE_VIDEO_ID = "um-3guz9FO0";

/** Canonical off-site profiles — used for `sameAs` in JSON-LD and OG links. */
export const PROFILES = {
    metaStore: "https://www.meta.com/experiences/curiosityxr-interactive-ai-learning/8662430537161741/",
    productHunt: "https://www.producthunt.com/products/curiosityxr",
    discord: "https://discord.gg/aF2cRG6k62",
    youtubeTrailer: `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`,
    researchPaper: "https://ieeexplore.ieee.org/document/10445534/",
    podcast: "https://cfrehlich.podbean.com/e/episode-139-curiosity-unleashed-how-curiosityxr-is-redefining-learning-in-mixed-reality/",
} as const;

/**
 * Peer-reviewed publications behind the product. All citations verified against
 * Crossref. The 2024 paper currently outranks curiosityxr.com for the brand
 * query, so the body of work is worth claiming as connected entities rather than
 * left floating unattached to the site.
 */
export const RESEARCH_PAPERS = [
    {
        id: "aixvr-2024",
        name: "CuriosityXR: Context-aware Education Experiences with Mixed Reality and Conversation AI",
        authors: ["Aaditya Vaze", "Alexis Morris", "Ian Clarke"],
        venue: "2024 IEEE International Conference on Artificial Intelligence and eXtended and Virtual Reality (AIxVR)",
        doi: "10.1109/aixvr59861.2024.00013",
        datePublished: "2024-01-17",
        pagination: "41-49",
        url: "https://ieeexplore.ieee.org/document/10445534/",
    },
    {
        id: "ieeevr-2023",
        name: "Towards a Mixed Reality Agent to Support Multi-Modal Interactive Mini-Lessons That Help Users Learn Educational Concepts in Context",
        authors: ["Aaditya Vaze", "Alexis Morris", "Ian Clarke"],
        venue: "2023 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW)",
        doi: "10.1109/vrw58643.2023.00358",
        datePublished: "2023-03",
        pagination: "1026-1027",
        url: "https://doi.org/10.1109/vrw58643.2023.00358",
    },
] as const;

/**
 * Person behind the work. The Scholar profile carries the citation record.
 *
 * Two Scholar profiles exist for this author: 0KB5rnwAAAAJ (ACE Lab, OCAD
 * University, 4 articles) and 3qii1YcAAAAJ (no affiliation, 3 articles). Only
 * the maintained one is listed here. Pointing sameAs at both would assert that
 * a single person is two entities, which is the opposite of what this is for.
 */
export const FOUNDER = {
    name: "Aaditya Vaze",
    jobTitle: "Founder",
    affiliation: "ACE Lab, OCAD University",
    sameAs: [
        "https://scholar.google.com/citations?user=0KB5rnwAAAAJ",
        "https://www.thisisvaze.com/",
    ],
} as const;

/** Keep in sync with the Meta Horizon Store listing. */
export const APP_PRICE_USD = "19.99";

export const DEFAULT_TITLE = `${APP_NAME} | AI Tutor & 1M+ 3D Models on Meta Quest`;

export const DEFAULT_DESCRIPTION =
    `${APP_NAME} is an AI learning app for Meta Quest. Ask anything out loud and your AI teacher ` +
    `answers with 1M+ interactive 3D models in mixed reality. Quest 3, 3S, Quest 2 & Quest Pro.`;

/**
 * Not a ranking factor for Google, but Bing and several AI answer-engine crawlers
 * still parse it, and it keeps the target entity set documented in one place.
 */
export const DEFAULT_KEYWORDS = [
    "AI learning app",
    "AI education app",
    "AI learning app for Meta Quest",
    "Meta Quest education app",
    "AI tutor VR",
    "AI teacher VR",
    "VR AI tutor app",
    "AI VR education",
    "AI AR education",
    "mixed reality learning app",
    "immersive learning app",
    "spatial learning",
    "learn in 3D",
    "3D models learning app",
    "Quest 3 education apps",
    "VR homeschool app",
    "AI tutor for kids",
    "ChatGPT for VR",
    "educational VR app",
    "AR education app",
];

const DEFAULT_OG_IMAGE = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: `${APP_NAME}, the AI learning app for Meta Quest`,
};

export const generateMetadata = ({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    keywords = DEFAULT_KEYWORDS,
    image,
    path = "/",
    icons = [
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/icons/favicon-16x16.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/icons/favicon-32x32.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/icons/apple-touch-icon.png",
        },
        {
            rel: "android-chrome",
            sizes: "192x192",
            url: "/icons/android-chrome-192x192.png",
        },
        {
            rel: "android-chrome",
            sizes: "512x512",
            url: "/icons/android-chrome-512x512.png",
        },
    ],
    noIndex = false,
}: {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string | null;
    path?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => {
    const images = image
        ? [{ ...DEFAULT_OG_IMAGE, url: image }]
        : [DEFAULT_OG_IMAGE];

    return {
        metadataBase: new URL(SITE_URL),
        title,
        description,
        keywords,
        applicationName: APP_NAME,
        category: "education",
        icons,
        manifest: "/icons/site.webmanifest",
        alternates: {
            canonical: path,
        },
        openGraph: {
            type: "website",
            siteName: APP_NAME,
            title,
            description,
            url: path,
            locale: "en_US",
            images,
        },
        twitter: {
            card: "summary_large_image",
            site: "@curiosityxr",
            creator: "@curiosityxr",
            title,
            description,
            images,
        },
        robots: noIndex
            // follow stays true so links on the page still pass equity and remain
            // discoverable; only the page itself is kept out of the index.
            ? { index: false, follow: true }
            : {
                  index: true,
                  follow: true,
                  googleBot: {
                      index: true,
                      follow: true,
                      "max-video-preview": -1,
                      "max-image-preview": "large",
                      "max-snippet": -1,
                  },
              },
    };
};
