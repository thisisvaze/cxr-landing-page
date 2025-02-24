import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import { FlickeringGrid } from "./ui/flickering-grid";
import SectionBadge from "./ui/section-badge";
import { MagicCard } from "./magicui/magic-card";

const HIGHLIGHTS = [
    {
        icon: "/icons/shield.svg",
        label: "Personalized Learning"
    },
    {
        icon: "/icons/clock.svg",
        label: "Unlimited Access"
    },
    {
        icon: "/icons/magicpen.svg",
        label: "1M+ 3D models"
    }
];

const CTA = () => {
    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center text-center relative gap-4 py-20 lg:py-32 overflow-hidden z-0">
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101010] w-full h-1/2 z-10"></div>

                <AnimationContainer animation="scaleUp" delay={0.2} className="w-full mx-auto">
                    <div className="absolute -top-1/2 inset-x-0 mx-auto bg-foreground/50 rounded-full size-1/2 blur-[4rem] lg:blur-[10rem]"></div>
                </AnimationContainer>

                <AnimationContainer animation="scaleUp" delay={0.3}>
                    <div className="absolute top-0 w-4/5 mx-auto inset-x-0 h-px bg-gradient-to-r from-foreground/0 via-foreground/50 to-foreground/0"></div>
                </AnimationContainer>

                <AnimationContainer animation="scaleUp" delay={0.2}>
                    <FlickeringGrid
                        className="absolute inset-0 -z-10 h-full w-[120%]"
                        squareSize={4}
                        gridGap={6}
                        color="#525252"
                        maxOpacity={0.2}
                        flickerChance={0.1}
                        height={800}
                    />
                </AnimationContainer>

                <div className="flex flex-col items-center justify-center w-full z-30">

                    <AnimationContainer animation="fadeUp" delay={1.1} className="mb-2">
                        <h3 className="font-architects-daughter text-xl md:text-2xl text-cyan-500 font-semibold">
                            #1 AI LEARNING APP ON META QUEST
                        </h3>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={1.2} className="w-full max-w-xs my-16">
                            <Image
                                src="/images/cxr_sticker.png"
                                alt="CXR Learning Experience"
                                width={1200}
                                height={1200}
                                className="w-full h-full object-cover rounded-xl"
                                priority
                            />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <h2 className="text-2xl md:text-4xl font-heading lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-foreground">
                           Experience the future. Today.
                        </h2>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.5}>
                        <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-lg mx-auto mt-4">
                        with the power of AI and Mixed Reality
                        </p>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={1}>
                        <div className="flex items-center flex-col gap-2">
                  
                            <Link href="/signin">
                                <Button className="magic-button mt-6">
                                    <span className="relative z-10">Get on Meta Quest</span>
                                </Button>
                            </Link>
                        </div>
                    </AnimationContainer>

                </div>
            </div>
        </Wrapper>
    )
};

export default CTA;
