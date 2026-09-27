import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageSchema from "@/components/global/page-schema";
import Wrapper from "@/components/global/wrapper";
import SectionBadge from "@/components/ui/section-badge";
import { generateMetadata as buildMetadata, PROFILES } from "@/utils";

const PATH = "/resources";
const TITLE = "Resources";
const DESCRIPTION = "Guides and research on AI tutors, spatial learning, and education on Meta Quest from CuriosityXR.";

export const metadata = buildMetadata({ title: `${TITLE} | CuriosityXR`, description: DESCRIPTION, path: PATH });

// ponytail: hand-listed cards; move to MDX posts once there are more than a handful.
const RESOURCES = [
    { tag: "Guide", title: "AI tutor for VR", description: "What an AI tutor in mixed reality does, and how it teaches with 3D.", href: "/vr-ai-tutor", image: "/images/blog/heart-bedroom.jpg" },
    { tag: "Guide", title: "Education on Meta Quest", description: "How live, question-driven lessons compare with lesson-based VR apps.", href: "/meta-quest-education", image: "/images/blog/volcano-classroom.jpg" },
    { tag: "Podcast", title: "VR in Education, Episode 139", description: "Aaditya on curiosity-driven learning and why CuriosityXR stays grounded in the real world.", href: PROFILES.podcast, image: "/images/blog/podcast-studio.jpg" },
    { tag: "Research", title: "Published research", description: "The CuriosityXR research paper, published on IEEE Xplore.", href: PROFILES.researchPaper, image: "/images/blog/brain-lab.jpg" },
];

export default function ResourcesPage() {
    return (
        <>
            <PageSchema path={PATH} name={TITLE} description={DESCRIPTION} breadcrumb={TITLE} />
            <Wrapper className="pb-24 pt-36 lg:pb-32 lg:pt-44">
                <SectionBadge title="Resources" />
                <h1 className="mt-6 text-4xl font-heading font-medium tracking-tight text-white sm:text-5xl">Learn more about learning.</h1>
                <div className="mt-12 grid gap-5 md:grid-cols-2">
                    {RESOURCES.map(({ tag, title, description, href, image }) => {
                        const external = href.startsWith("http");
                        return (
                            <Link
                                key={href}
                                href={href}
                                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/60 transition-colors hover:border-violet-400/40"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <Image src={image} alt="" fill sizes="(max-width: 767px) 100vw, 400px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <span className="text-xs font-medium uppercase tracking-widest text-violet-300">{tag}</span>
                                    <h2 className="mt-4 text-xl font-heading font-medium text-white">{title}</h2>
                                    <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">{description}</p>
                                    <ArrowUpRight className="mt-6 size-5 text-neutral-500 transition-colors group-hover:text-white" aria-hidden="true" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </Wrapper>
        </>
    );
}
