import Image from "next/image";
import Link from "next/link";
import PageSchema from "@/components/global/page-schema";
import Wrapper from "@/components/global/wrapper";
import { generateMetadata as buildMetadata, PROFILES } from "@/utils";

const PATH = "/resources";
const TITLE = "Resources";
const DESCRIPTION = "Guides and research on AI tutors, spatial learning, and education on Meta Quest from CuriosityXR.";

export const metadata = buildMetadata({ title: `${TITLE} | CuriosityXR`, description: DESCRIPTION, path: PATH });

// ponytail: hand-listed cards; move to MDX posts once there are more than a handful.
const RESOURCES = [
    { tag: "Guide", title: "AI tutor for VR", description: "How an AI tutor teaches in 3D.", href: "/vr-ai-tutor", image: "/images/covers/ai-tutor.jpg" },
    { tag: "Guide", title: "Education on Meta Quest", description: "Live lessons vs. lesson-based VR apps.", href: "/meta-quest-education", image: "/images/covers/meta-quest-education.jpg" },
    { tag: "Podcast", title: "VR in Education, Episode 139", description: "Curiosity-driven learning in mixed reality.", href: PROFILES.podcast, image: "/images/covers/podcast.jpg" },
    { tag: "Research", title: "Published research", description: "Our paper on IEEE Xplore.", href: PROFILES.researchPaper, image: "/images/covers/research.jpg" },
];

export default function ResourcesPage() {
    return (
        <>
            <PageSchema path={PATH} name={TITLE} description={DESCRIPTION} breadcrumb={TITLE} />
            <Wrapper className="pb-24 pt-36 lg:pb-32 lg:pt-44">
                <h1 className="text-4xl font-heading font-medium tracking-tight text-white sm:text-5xl">Resources</h1>
                <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                    {RESOURCES.map(({ tag, title, description, href, image }) => {
                        const external = href.startsWith("http");
                        return (
                            <Link
                                key={href}
                                href={href}
                                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                                className="group flex flex-col"
                            >
                                <div className="relative aspect-[2/1] overflow-hidden rounded-2xl">
                                    <Image src={image} alt="" fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 280px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                                <div className="mt-4">
                                    <span className="text-xs font-medium uppercase tracking-widest text-violet-300">{tag}</span>
                                    <h2 className="mt-2 text-lg font-heading font-medium text-white transition-colors group-hover:text-violet-200">{title}</h2>
                                    <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">{description}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </Wrapper>
        </>
    );
}
