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

const Summary = () => {
    const backgroundMask = "linear-gradient(to bottom, transparent, black 240px, black calc(100% - 180px), transparent)";

    return (
        <div className="relative isolate w-full overflow-hidden">
            <MagicalBackground 
                primaryColor="#9E7AFF"
                secondaryColor="#FE8BBB"
                accentColor="#3ABEFF"
                particleCount={30}
                className="pointer-events-none absolute inset-0 z-0 w-full h-full"
                style={{ maskImage: backgroundMask, WebkitMaskImage: backgroundMask }}
            />
            
            <Wrapper className="py-16 lg:py-24 relative z-20">
                <div className="flex flex-col items-center text-center relative gap-4 py-8 lg:py-16 overflow-hidden z-0">
                    <div className="absolute inset-x-0 bottom-0 w-full h-1/2 z-10"></div>

                    <div className="flex flex-col items-center justify-center w-full z-30">
                        <AnimationContainer animation="fadeUp" delay={0.3} className="mb-4">
                            <SectionBadge title="Spatial AI Learning" />
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.4}>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium tracking-tight text-white leading-tight">
                               It&apos;s like ChatGPT <br className="hidden sm:inline" />
                               for Mixed Reality
                            </h2>
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.6}>
                            <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto mt-4 leading-relaxed">
                                The first AI teacher that assists in 3D. ChatGPT answers
                                in text. CuriosityXR answers in your room, so you can ask
                                about the heart and walk around a life-size beating one.
                            </p>
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={1.2} className="w-full max-w-2xl mt-12 sm:mt-14">
                            <MagicCard 
                                className="w-full aspect-video p-0 overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                                gradientSize={300}
                                gradientFrom="#9E7AFF"
                                gradientTo="#FE8BBB"
                                gradientOpacity={0.9}
                            >
                                <Image
                                    src="/images/mission_header.png"
                                    alt="A student wearing a mixed reality headset learning plant cell biology from a 3D model with the CuriosityXR AI teacher"
                                    width={1200}
                                    height={1200}
                                    className="w-full h-full object-cover"
                                />
                            </MagicCard>
                        </AnimationContainer>
                        <AnimationContainer animation="fadeUp" delay={0.6}>
                            <div className="flex items-center mt-6">
                                <div className="rounded-full px-5 py-2.5 bg-neutral-900/90 border border-white/10 backdrop-blur-md shadow-lg flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
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
                                                    className="size-5 text-primary"
                                                />
                                                <span className="text-sm font-medium text-neutral-200 whitespace-nowrap">
                                                    {item.label}
                                                </span>
                                                {index < HIGHLIGHTS.length - 1 && (
                                                    <div className="h-3.5 w-px bg-neutral-700 ml-2 hidden sm:block"></div>
                                                )}
                                            </div>
                                        </AnimationContainer>
                                    ))}
                                </div>
                            </div>
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={1}>
                            <div className="flex items-center mt-10 flex-col gap-2">
                                <Link href="https://vr.meta.me/s/2Rgf0BFArrcy5sf" target="_blank" rel="noopener noreferrer">
                                    <Button className="magic-button rounded-full px-6">
                                        <span className="relative z-10">Get on Meta Quest</span>
                                    </Button>
                                </Link>
                                <p className="text-xs sm:text-sm text-neutral-400 font-medium mt-2">Join 2,000+ curious minds</p>
                            </div>
                        </AnimationContainer>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Summary;
