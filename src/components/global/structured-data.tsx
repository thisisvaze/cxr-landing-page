import { FAQS } from "@/constants";
import {
    APP_NAME,
    APP_PRICE_USD,
    DEFAULT_DESCRIPTION,
    PROFILES,
    SITE_URL,
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
                PROFILES.linkedin,
                PROFILES.x,
                PROFILES.discord,
            ],
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
                "Meta Horizon OS — Meta Quest 3, Meta Quest 3S, Meta Quest 2, Meta Quest Pro",
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
                "Mixed reality passthrough — models appear in your room",
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
            video: {
                "@type": "VideoObject",
                name: `${APP_NAME} trailer`,
                description: `Watch how ${APP_NAME} turns spoken questions into interactive 3D models on Meta Quest.`,
                thumbnailUrl: `${SITE_URL}/images/mission_header.png`,
                uploadDate: "2025-01-01",
                contentUrl: `${SITE_URL}/images/v.webm`,
                embedUrl: PROFILES.youtubeTrailer,
            },
        },
        {
            "@type": "FAQPage",
            "@id": `${SITE_URL}/#faq`,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            mainEntity: FAQS.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                },
            })),
        },
    ],
};

const StructuredData = () => (
    <script
        type="application/ld+json"
        // JSON.stringify output is not user input; `</script>` cannot appear in it.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
);

export default StructuredData;
