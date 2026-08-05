import type { FAQItem } from "@/constants/faq";
import { SITE_URL } from "@/utils";

interface Props {
    path: string;
    name: string;
    description: string;
    /** Omit on the homepage, which is the breadcrumb root rather than a step in one. */
    breadcrumb?: string;
    faqs?: FAQItem[];
}

/**
 * Per-page JSON-LD. The site-wide graph (Organization, app, papers) is emitted
 * once from the root layout; this adds only what is specific to the page, tied
 * back to the shared nodes by @id so nothing is duplicated or orphaned.
 */
const PageSchema = ({ path, name, description, breadcrumb, faqs }: Props) => {
    const url = `${SITE_URL}${path}`;

    const graph: Record<string, unknown>[] = [
        {
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            url,
            name,
            description,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#app` },
            primaryImageOfPage: `${SITE_URL}/opengraph-image`,
            inLanguage: "en-US",
        },
    ];

    if (breadcrumb) {
        graph.push({
            "@type": "BreadcrumbList",
            "@id": `${url}#breadcrumb`,
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: `${SITE_URL}/`,
                },
                { "@type": "ListItem", position: 2, name: breadcrumb, item: url },
            ],
        });
    }

    if (faqs?.length) {
        graph.push({
            "@type": "FAQPage",
            "@id": `${url}#faq`,
            isPartOf: { "@id": `${url}#webpage` },
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
        });
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": graph,
                }),
            }}
        />
    );
};

export default PageSchema;
