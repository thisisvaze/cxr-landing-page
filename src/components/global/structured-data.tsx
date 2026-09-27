import {
    APP_NAME,
    APP_PRICE_USD,
    DEFAULT_DESCRIPTION,
    PROFILES,
    FOUNDER,
    RESEARCH_PAPERS,
    SITE_URL,
    YOUTUBE_VIDEO_ID,
} from "@/utils";

/**
 * A single @graph keeps every entity cross-referenced by @id, which is what lets
 * Google and the AI answer engines resolve "CuriosityXR the app" and
 * "CuriosityXR the company" as the same thing rather than two loose nodes.
 */
const graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: APP_NAME,
            url: SITE_URL,
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/images/cxr-logo.png`,
                width: 1079,
                height: 274,
            },
            email: "support@curiosityxr.com",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Toronto",
                addressCountry: "CA",
            },
            sameAs: [
                PROFILES.metaStore,
                PROFILES.productHunt,
                PROFILES.discord,
            ],
            founder: { "@id": `${SITE_URL}/#founder` },
        },
        {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: APP_NAME,
            description: DEFAULT_DESCRIPTION,
            publisher: { "@id": `${SITE_URL}/#organization` },
            inLanguage: "en-US",
        },
        {
            "@type": ["SoftwareApplication", "EducationalApplication"],
            "@id": `${SITE_URL}/#app`,
            name: `${APP_NAME} | Interactive AI Learning`,
            alternateName: [
                "CuriosityXR",
                "Curiosity XR",
                "CuriosityXR AI Teacher",
            ],
            url: SITE_URL,
            description: DEFAULT_DESCRIPTION,
            applicationCategory: "EducationalApplication",
            applicationSubCategory: "AI Tutor / Mixed Reality Learning",
            operatingSystem:
                "Meta Horizon OS (Meta Quest 3, Meta Quest 3S, Meta Quest 2, Meta Quest Pro)",
            installUrl: PROFILES.metaStore,
            downloadUrl: PROFILES.metaStore,
            softwareHelp: PROFILES.discord,
            publisher: { "@id": `${SITE_URL}/#organization` },
            author: { "@id": `${SITE_URL}/#organization` },
            audience: {
                "@type": "EducationalAudience",
                educationalRole: [
                    "student",
                    "homeschool parent",
                    "teacher",
                    "lifelong learner",
                ],
            },
            featureList: [
                "AI teacher you talk to out loud",
                "1M+ interactive 3D models",
                "Mixed reality passthrough so models appear in your room",
                "Hand tracking and Touch controller support",
                "Open-ended topics: anatomy, astronomy, biology, geology, geography",
                "Self-directed learning with no fixed curriculum",
            ],
            offers: {
                "@type": "Offer",
                price: APP_PRICE_USD,
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: PROFILES.metaStore,
            },
            screenshot: [
                `${SITE_URL}/images/f1.png`,
                `${SITE_URL}/images/f3.png`,
                `${SITE_URL}/images/f5.png`,
            ],
            // Values below mirror the actual YouTube listing — VideoObject is only
            // eligible for rich results if it matches the real video.
            video: {
                "@type": "VideoObject",
                name: `${APP_NAME} - Launch Trailer - Meta Quest 3 & 3S - Available on Meta Horizon Store`,
                description: `Watch how ${APP_NAME} turns spoken questions into interactive 3D models on Meta Quest.`,
                thumbnailUrl: `${SITE_URL}/images/mission_header.png`,
                uploadDate: "2024-10-22T14:24:12-07:00",
                duration: "PT1M53S",
                embedUrl: `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`,
                url: PROFILES.youtubeTrailer,
            },
            subjectOf: RESEARCH_PAPERS.map((paper) => ({
                "@id": `${SITE_URL}/#paper-${paper.id}`,
            })),
        },
        {
            "@type": "Person",
            "@id": `${SITE_URL}/#founder`,
            name: FOUNDER.name,
            jobTitle: FOUNDER.jobTitle,
            worksFor: { "@id": `${SITE_URL}/#organization` },
            affiliation: {
                "@type": "CollegeOrUniversity",
                name: FOUNDER.affiliation,
            },
            sameAs: [...FOUNDER.sameAs],
        },
        ...RESEARCH_PAPERS.map((paper) => ({
            "@type": "ScholarlyArticle",
            "@id": `${SITE_URL}/#paper-${paper.id}`,
            name: paper.name,
            headline: paper.name,
            author: paper.authors.map((name) =>
                name === FOUNDER.name
                    ? { "@id": `${SITE_URL}/#founder` }
                    : { "@type": "Person", name },
            ),
            isPartOf: {
                "@type": "PublicationEvent",
                name: paper.venue,
            },
            publisher: { "@type": "Organization", name: "IEEE" },
            datePublished: paper.datePublished,
            pagination: paper.pagination,
            identifier: `https://doi.org/${paper.doi}`,
            sameAs: paper.url,
            url: paper.url,
            about: { "@id": `${SITE_URL}/#app` },
        })),
    ],
};
// FAQPage deliberately lives with each page's own PageSchema, not here. This
// component renders in the root layout, so a FAQPage node added here would claim
// the homepage's questions are on every page of the site.

const StructuredData = () => (
    <script
        type="application/ld+json"
        // JSON.stringify output is not user input; `</script>` cannot appear in it.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
);

export default StructuredData;
