import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import SectionBadge from "./ui/section-badge";
import { MagicCard } from "./magicui/magic-card";
import { MagicalBackground } from "./ui/magical-background";

const HIGHLIGHTS = [
    {
        icon: "/icons/shield.svg",
        label: "Personalized Learning"
    },
    {
        icon: "/icons/magicpen.svg",
        label: "1M+ 3D models"
    }
];

const CTA = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <MagicalBackground 
                primaryColor="#9E7AFF"
                secondaryColor="#FE8BBB"
                accentColor="#3ABEFF"
                particleCount={30}
                className="absolute inset-0 w-full h-full"
            />
            
            <Wrapper className="py-20 lg:py-32">
                <div className="flex -mt-32 flex-col items-center text-center relative gap-4 py-20 lg:py-32 overflow-hidden z-0">
                    <div className="absolute inset-x-0 bottom-0 w-full h-1/2 z-10"></div>

                    <AnimationContainer animation="fadeUp" delay={0.5} className="w-full mx-auto">
                        <div className="absolute -top-1/2 inset-x-0 mx-auto bg-foreground/50 rounded-full size-1/2 blur-[1rem] lg:blur-[1rem] opacity-80 transition-all duration-1000"></div>
                    </AnimationContainer>

                    <AnimationContainer animation="scaleUp" delay={0.3}>
                        <div className="absolute top-0 w-4/5 mx-auto inset-x-0 h-px bg-gradient-to-r from-foreground/0 via-foreground/50 to-foreground/0"></div>
                    </AnimationContainer>

                    <div className="flex flex-col items-center justify-center w-full z-30">
                        <AnimationContainer animation="fadeUp" delay={0.3} className="mb-4">
                            <SectionBadge title="#3 Product of the Week in Education | ProductHunt" />
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.4}>
                            <h2 className="text-2xl md:text-4xl font-heading lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-foreground">
                               It&apos;s like ChatGPT <br />
                               for Mixed Reality
                            </h2>
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.6}>
                            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-lg mx-auto mt-4">
                            The first AI Teacher that
                            assists in 3D
                            </p>
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={1.2} className="w-full max-w-xl mt-16">
                            <MagicCard 
                                className="w-full aspect-video p-0 overflow-hidden"
                                gradientSize={300}
                                gradientFrom="#9E7AFF"
                                gradientTo="#FE8BBB"
                                gradientOpacity={0.9}
                            >
                                <Image
                                    src="/images/mission_header.png"
                                    alt="CXR Learning Experience"
                                    width={1200}
                                    height={1200}
                                    className="w-full h-full object-cover rounded-xl"
                                    priority
                                />
                            </MagicCard>
                        </AnimationContainer>
                        <AnimationContainer animation="fadeUp" delay={0.6}>
                            <div className="flex items-center mt-5">
                                <div className="rounded-full px-4 py-2.5 bg-neutral-900 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
                                    {HIGHLIGHTS.map((item, index) => (
                                        <AnimationContainer
                                            key={index}
                                            animation="fadeRight"
                                            delay={0.7 + (index * 0.1)}
                                        >
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src={item.icon}
                                                    alt={item.label}
                                                    width={1024}
                                                    height={1024}
                                                    className="size-6 text-primary"
                                                />
                                                <span className="text-sm text-foreground whitespace-nowrap">
                                                    {item.label}
                                                </span>
                                                {index < HIGHLIGHTS.length - 1 && (
                                                    <div className="h-4 w-px bg-neutral-700 ml-2 hidden md:block"></div>
                                                )}
                                            </div>
                                        </AnimationContainer>
                                    ))}
                                </div>
                            </div>
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={1}>
                            <div className="flex items-center flex-col gap-2">
                      
                                <Link href="https://vr.meta.me/s/2Rgf0BFArrcy5sf" target="_blank">
                                    <Button className="magic-button mt-6">
                                        <span className="relative z-10">Get on Meta Quest</span>
                                    </Button>
                                </Link>
                            <p className="text-sm text-muted-foreground font-medium">Join 1000+ curious minds</p>
                            </div>
                        </AnimationContainer>

                    </div>
                </div>
            </Wrapper>
        </div>
    )
};

export default CTA;
