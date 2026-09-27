import Image from 'next/image';
import Link from 'next/link';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper"
import { Button } from "./ui/button";
import { PROFILES } from "@/utils";

// Keep "AI tutor for VR" / "Education on Meta Quest" verbatim: they're the SEO anchor text for those pages.
const COLUMNS = [
    {
        title: "Product",
        links: [
            { label: "How it works", href: "/#features" },
            { label: "Watch the trailer", href: `${PROFILES.youtubeTrailer}&t=9s` },
            { label: "FAQ", href: "/#faq" },
            { label: "Learning Content API", href: "/learning-api" },
        ],
    },
    {
        title: "Learn",
        links: [
            { label: "AI tutor for VR", href: "/vr-ai-tutor" },
            { label: "Education on Meta Quest", href: "/meta-quest-education" },
            { label: "Published research", href: PROFILES.researchPaper },
        ],
    },
    {
        title: "Community",
        links: [
            { label: "Discord", href: PROFILES.discord },
            { label: "Product Hunt", href: PROFILES.productHunt },
            { label: "support@curiosityxr.com", href: "mailto:support@curiosityxr.com" },
        ],
    },
];

const FooterLink = ({ label, href }: { label: string; href: string }) => {
    const className = "hover:text-white transition-colors";
    if (href.startsWith("/")) return <Link href={href} className={className}>{label}</Link>;
    const external = href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" };
    return <a href={href} className={className} {...external}>{label}</a>;
};

const Footer = () => {
    return (
        <footer className="relative border-t border-border pt-16 pb-8 w-full overflow-hidden">
            <Wrapper className="">
                <AnimationContainer animation="fadeIn">
                    <div className="absolute -top-1/8 lg:-top-1/2 inset-x-0 mx-auto bg-primary/50 lg:bg-primary/70 rounded-full w-1/2 h-1/4 blur-[6rem] lg:blur-[12rem]"></div>
                </AnimationContainer>

                <AnimationContainer animation="fadeIn">
                    <div className="absolute top-0 w-4/5 mx-auto inset-x-0 h-px bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0"></div>
                </AnimationContainer>

                <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
                    <AnimationContainer animation="fadeIn">
                        <div className="flex max-w-xs flex-col items-start gap-5">
                            <Image
                                src="/images/cxr-logo.png"
                                alt="CuriosityXR"
                                width={1079}
                                height={274}
                                className="h-11 w-auto"
                            />
                            <p className="text-sm leading-relaxed text-neutral-400">
                                An AI teacher in your room. Ask anything out loud and
                                see the answer in 3D.
                            </p>
                            <Button asChild size="sm" className="magic-button">
                                <a href={PROFILES.metaStore} target="_blank" rel="noopener noreferrer">
                                    <span className="relative z-10">Get on Meta Quest</span>
                                </a>
                            </Button>
                        </div>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeIn">
                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                            {COLUMNS.map((column) => (
                                <div key={column.title}>
                                    <h3 className="text-sm font-medium text-white">{column.title}</h3>
                                    <ul className="mt-4 space-y-2.5 text-sm text-neutral-400 [overflow-wrap:anywhere]">
                                        {column.links.map((link) => (
                                            <li key={link.label}>
                                                <FooterLink {...link} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </AnimationContainer>
                </div>

                <div className="mt-16 flex flex-col-reverse gap-3 border-t border-white/10 py-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} CuriosityXR · Toronto, Canada</p>
                    <Link href="/privacy-policy" className="hover:text-white transition-colors">
                        Privacy Policy
                    </Link>
                </div>

                <div className="w-full flex justify-center mt-4">
                    <Image
                        src="/images/footer-logo.svg"
                        alt=""
                        width={1500}
                        height={90}
                        className='w-full h-auto'
                    />
                </div>
            </Wrapper>
        </footer>
    );
};

export default Footer;
