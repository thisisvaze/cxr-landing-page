export const NAV_LINKS: {
    name: string;
    link: string;
    target?: string;
    teaser?: boolean;
    /** Paths that highlight this link; defaults to [link]. */
    match?: string[];
}[] = [
    { name: "Resources", link: "/resources", match: ["/resources", "/vr-ai-tutor", "/meta-quest-education"] },
    { name: "API", link: "/learning-api" },
];
