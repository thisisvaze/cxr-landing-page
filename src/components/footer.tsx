import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper"
import { LucideProps } from 'lucide-react';
import Images from "./global/images";
const COMPANY_LINKS = [
    { label: "Privacy Policy", href: "/privacy-policy" }
];

const SOCIAL_LINKS = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/curiosityxr" },
    { icon: Twitter, href: "https://x.com/curiosityxr" },
];

const Footer = () => {
    return (
        <footer className="relative border-t border-border pt-16 pb-8 md:pb-0 w-full overflow-hidden">
            <Wrapper className="">
                <AnimationContainer animation="scaleUp" delay={0.2}>
                    <div className="absolute -top-1/8 lg:-top-1/2 inset-x-0 mx-auto bg-primary/50 lg:bg-primary/70 rounded-full w-1/2 h-1/4 blur-[6rem] lg:blur-[12rem]"></div>
                </AnimationContainer>

                <AnimationContainer animation="scaleUp" delay={0.3}>
                    <div className="absolute top-0 w-4/5 mx-auto inset-x-0 h-px bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0"></div>
                </AnimationContainer>

                <div className="grid gap-8 xl:grid-cols-3 xl:gap-8">
                    <AnimationContainer animation="fadeRight" delay={0.4}>
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
                                CuriosityXR
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
                                        animation="fadeUp"
                                        delay={0.6 + (index * 0.1)}
                                    >
                                        <Link
                                            href={social.href}
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


                        <AnimationContainer animation="fadeUp" delay={0.5}>
                            <div>
                                <h3 className="text-base font-medium">Company</h3>
                                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                    {COMPANY_LINKS.map((link, index) => (
                                        <AnimationContainer
                                            key={index}
                                            animation="fadeLeft"
                                            delay={0.8 + (index * 0.1)}
                                        >
                                            <li>
                                                <Link
                                                    href={link.href}
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

                <AnimationContainer animation="fadeUp" delay={1}>
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
