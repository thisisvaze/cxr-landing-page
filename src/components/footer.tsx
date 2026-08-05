import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper"
import { LucideProps } from 'lucide-react';
import Images from "./global/images";
import { PROFILES } from "@/utils";
const PRODUCT_LINKS = [
    { label: "Get CuriosityXR on Meta Quest", href: PROFILES.metaStore, external: true },
    { label: "AI tutor for VR", href: "/vr-ai-tutor", external: false },
    { label: "Education on Meta Quest", href: "/meta-quest-education", external: false },
    { label: "Watch the trailer", href: PROFILES.youtubeTrailer, external: true },
    { label: "FAQ", href: "/#faq", external: false },
    { label: "Join the Discord", href: PROFILES.discord, external: true },
];

const COMPANY_LINKS = [
    { label: "Privacy Policy", href: "/privacy-policy", external: false },
    { label: "CuriosityXR on Product Hunt", href: PROFILES.productHunt, external: true },
    { label: "Research paper (IEEE AIxVR 2024)", href: PROFILES.researchPaper, external: true },
];

const SOCIAL_LINKS = [
    { icon: Linkedin, href: PROFILES.linkedin, label: "CuriosityXR on LinkedIn" },
    { icon: Twitter, href: PROFILES.x, label: "CuriosityXR on X" },
];

const Footer = () => {
    return (
        <footer className="relative border-t border-border pt-16 pb-8 md:pb-0 w-full overflow-hidden">
            <Wrapper className="">
                <AnimationContainer animation="fadeIn">
                    <div className="absolute -top-1/8 lg:-top-1/2 inset-x-0 mx-auto bg-primary/50 lg:bg-primary/70 rounded-full w-1/2 h-1/4 blur-[6rem] lg:blur-[12rem]"></div>
                </AnimationContainer>

                <AnimationContainer animation="fadeIn">
                    <div className="absolute top-0 w-4/5 mx-auto inset-x-0 h-px bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0"></div>
                </AnimationContainer>

                <div className="grid gap-8 xl:grid-cols-3 xl:gap-8">
                    <AnimationContainer animation="fadeIn">
                        <div className="flex flex-col items-start justify-start md:max-w-[300px]">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/cxr-logo.png"
                                    alt="CuriosityXR"
                                    width={202}
                                    height={32}
                                />
                            </div>
                            <p className="text-muted-foreground mt-4 text-sm">
                                CuriosityXR is the #1 AI learning app on Meta Quest. It puts
                                an AI teacher in your room, answering your questions with
                                interactive 3D models in mixed reality.
                                <br />
                                <br />
                                Toronto, Canada
                            </p>
                            <div className="mt-4 text-sm text-muted-foreground">
                                <p>support@curiosityxr.com</p>
                            </div>
                            <div className="flex items-center gap-4 mt-6">
                                {SOCIAL_LINKS.map((social, index) => (
                                    <AnimationContainer
                                        key={index}
                                        animation="fadeIn"
                                    >
                                        <Link
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <social.icon className="size-5" />
                                        </Link>
                                    </AnimationContainer>
                                ))}
                            </div>
                        </div>
                </AnimationContainer>

                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <AnimationContainer animation="fadeIn">
                            <div>
                                <h3 className="text-base font-medium">Product</h3>
                                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                    {PRODUCT_LINKS.map((link, index) => (
                                        <AnimationContainer
                                            key={index}
                                            animation="fadeIn"
                                        >
                                            <li>
                                                <Link
                                                    href={link.href}
                                                    {...(link.external && {
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                    })}
                                                    className="hover:text-foreground transition-colors"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        </AnimationContainer>
                                    ))}
                                </ul>
                            </div>
                        </AnimationContainer>

                        <AnimationContainer animation="fadeIn">
                            <div>
                                <h3 className="text-base font-medium">Company</h3>
                                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                    {COMPANY_LINKS.map((link, index) => (
                                        <AnimationContainer
                                            key={index}
                                            animation="fadeIn"
                                        >
                                            <li>
                                                <Link
                                                    href={link.href}
                                                    {...(link.external && {
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                    })}
                                                    className="hover:text-foreground transition-colors"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        </AnimationContainer>
                                    ))}
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                </div>

                <AnimationContainer animation="fadeIn">
                    <div className="mt-16 border-t border-border/40 py-8 flex flex-col md:flex-row items-center justify-center">
                        <p className="text-sm text-muted-foreground">
                        {new Date().getFullYear()} CuriosityXR
                        </p>
                    </div>
                </AnimationContainer>
                <div className="w-full flex justify-center mt-4">
                    <Image 
                        src="/images/footer-logo.svg" 
                        alt="CuriosityXR" 
                        width={2000} 
                        height={31}
                        className='w-full h-auto'
                    />
                </div>
            </Wrapper>
        </footer>
    );
};

export default Footer;
