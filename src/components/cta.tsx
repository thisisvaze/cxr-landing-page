import Image from "next/image";
import Link from "next/link";
import AnimationContainer from "./global/animation-container";
import { Button } from "./ui/button";
import { FlickeringGrid } from "./ui/flickering-grid";
import SectionBadge from "./ui/section-badge";

const CTA = () => {
    return (
        <section className="w-full py-20 lg:py-32">
            <div className="flex flex-col items-center text-center relative gap-4 py-16 lg:py-24 overflow-hidden z-0">
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101010] w-full h-1/2 z-10 pointer-events-none"></div>

                <AnimationContainer animation="fadeIn" delay={0.2} className="w-full mx-auto pointer-events-none">
                    <div className="absolute -top-1/2 inset-x-0 mx-auto bg-primary/40 rounded-full size-1/2 blur-[4rem] lg:blur-[8rem]"></div>
                </AnimationContainer>

                <AnimationContainer animation="fadeIn" delay={0.3} className="pointer-events-none">
                    <div className="absolute top-0 w-4/5 mx-auto inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </AnimationContainer>

                <AnimationContainer animation="fadeIn" delay={0.2}>
                    <FlickeringGrid
                        className="absolute inset-0 -z-10 h-full w-[120%] pointer-events-none"
                        squareSize={4}
                        gridGap={6}
                        color="#525252"
                        maxOpacity={0.15}
                        flickerChance={0.1}
                        height={600}
                    />
                </AnimationContainer>

                <div className="flex flex-col items-center justify-center w-full z-30 px-4">
                    <AnimationContainer animation="fadeUp" delay={0.2} className="w-24 sm:w-28 mb-6">
                        <Image
                            src="/images/cxr_sticker.png"
                            alt="CuriosityXR, the #1 AI learning app on Meta Quest"
                            width={300}
                            height={300}
                            className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
                        />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.3} className="mb-3">
                        <SectionBadge title="#1 AI Learning App on Meta Quest" />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-white leading-tight">
                            Experience the future. Today.
                        </h2>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.5}>
                        <p className="text-base sm:text-lg text-neutral-300 max-w-md mx-auto mt-3 leading-relaxed">
                            Step inside mixed reality with the power of voice and interactive spatial AI.
                        </p>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.6}>
                        <div className="flex flex-col items-center mt-8">
                            <Link href="https://vr.meta.me/s/2Rgf0BFArrcy5sf" target="_blank" rel="noopener noreferrer">
                                <Button className="magic-button rounded-full px-8 py-5 text-base shadow-xl hover:scale-105 transition-transform duration-200">
                                    <span className="relative z-10">Get on Meta Quest</span>
                                </Button>
                            </Link>
                            <p className="text-xs sm:text-sm text-neutral-400 font-medium mt-3">
                                Available on Meta Quest 3, 3S, 2 and Pro
                            </p>
                        </div>
                    </AnimationContainer>
                </div>
            </div>
        </section>
    );
};

export default CTA;
