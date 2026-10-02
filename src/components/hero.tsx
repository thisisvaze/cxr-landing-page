"use client";

import { useReducedMotion } from "motion/react";
import Link from "next/link";
import AnimationContainer from "./global/animation-container";
import Images from "./global/images";
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import Marquee from "./ui/marquee";
import HeroBadges from "./hero-badges";
import { useState } from "react";

const Hero = () => {
    const reduceMotion = useReducedMotion();
    const [isHovering, setIsHovering] = useState(false);
    
    const companies = [
        Images.comp1,
        Images.comp2,
        Images.comp3,
        Images.comp5,
    ];

    const trailerUrl = "https://www.youtube.com/watch?v=um-3guz9FO0&t=9s"; // skip the stock-footage intro

    return (
        <Wrapper className="pt-32 relative min-h-screen w-full flex-1">
            <div className="flex flex-col items-center text-center">
                <div className="flex flex-col items-center gap-6 max-w-3xl">
                    <AnimationContainer animation="fadeUp" delay={0.2} className="flex justify-center w-full mb-2 md:mb-4">
                        <HeroBadges />
                    </AnimationContainer>
                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <h1 className="type-display">
                            Learn with AI & <br className="hidden sm:inline" />
                            1M+ 3D models
                        </h1>
                    </AnimationContainer>
                    <AnimationContainer animation="fadeUp" delay={0.6}>
                        <p className="type-lead max-w-2xl mx-auto text-balance">
                            Ask anything out loud on Meta Quest. Your AI teacher answers in 3D.
                        </p>
                    </AnimationContainer>
                    <AnimationContainer animation="fadeUp" delay={0.8}>
                        <div className="flex flex-wrap items-center justify-center gap-3.5">
                            <Link href="https://vr.meta.me/s/2Rgf0BFArrcy5sf" target="_blank" rel="noopener noreferrer">
                                <Button className="magic-button rounded-full px-6">
                                    <span className="relative z-10">Get on Meta Quest</span>
                                </Button>
                            </Link>
                        </div>
                    </AnimationContainer>
                    
                </div>
                <AnimationContainer animation="fadeUp" delay={1.2} className="mt-10 w-full flex justify-center">
                    <div 
                        className="relative w-full max-w-[1040px] group"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <video
                            src={reduceMotion ? undefined : "/images/v.webm"}
                            aria-label="CuriosityXR on Meta Quest: a spoken question turns into an interactive 3D model in mixed reality"
                            poster="/images/v-poster.webp"
                            autoPlay={!reduceMotion}
                            loop
                            muted
                            playsInline
                            className={`w-full h-full object-contain rounded-xl transition-opacity duration-300 ${isHovering ? 'opacity-85' : 'opacity-100'}`}
                        />
                        
                        {/* Play button overlay */}
                        <Link 
                            href={trailerUrl} 
                            target="_blank"
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="bg-black/60 backdrop-blur-sm rounded-full p-6 transform transition-all duration-300 hover:scale-110 hover:bg-black/70 shadow-lg">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="40" 
                                    height="40" 
                                    viewBox="0 0 24 24" 
                                    fill="none"
                                    className="text-white"
                                >
                                    <path 
                                        d="M8 5.14v14l11-7-11-7z" 
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-black/15 rounded-xl transition-opacity duration-300"></div>
                        </Link>
                    </div>
                </AnimationContainer>
                
                <AnimationContainer animation="fadeUp" delay={1}>
                        <div className="flex flex-col items-center gap-4 pt-12">
                            <p className="text-sm md:text-base text-muted-foreground">
                                Supported by
                            </p>
                            <div className="w-full relative max-w-[calc(100vw-2rem)] lg:max-w-lg">
                                <Marquee pauseOnHover className="[--duration:40s] select-none [--gap:2rem]">
                                    {[...Array(10)].map((_, index) => (
                                        <div key={index} className="flex items-center justify-center text-muted-foreground h-16">
                                            {companies[index % companies.length]({ className: "w-auto h-5" })}
                                        </div>
                                    ))}
                                </Marquee>
                                <div className="pointer-events-none absolute inset-y-0 -right-1 w-1/3 bg-gradient-to-l from-[#101010] z-40"></div>
                                <div className="pointer-events-none absolute inset-y-0 -left-1 w-1/3 bg-gradient-to-r from-[#101010] z-40"></div>
                            </div>
                        </div>
                    </AnimationContainer>
            </div>
        </Wrapper>
    )
};

export default Hero
