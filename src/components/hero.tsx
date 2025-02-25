"use client";

import Image from "next/image";
import Link from "next/link";
import AnimationContainer from "./global/animation-container";
import Images from "./global/images";
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import Marquee from "./ui/marquee";
import SectionBadge from "./ui/section-badge";
import { useState } from "react";

const Hero = () => {
    const [isHovering, setIsHovering] = useState(false);
    
    const companies = [
        Images.comp1,
        Images.comp2,
        Images.comp3,
    ];

    const trailerUrl = "https://www.youtube.com/watch?v=um-3guz9FO0";

    return (
        <Wrapper className="pt-32 lg:pt-40 relative min-h-screen w-full flex-1">
            <div className="flex flex-col items-center text-center">
                <div className="flex flex-col items-center gap-6 max-w-3xl">
                    {/* <AnimationContainer animation="fadeUp" delay={0.2}>
                        <SectionBadge title="#1 AI Learning App on Meta Quest" />
                    </AnimationContainer> */}
                    <AnimationContainer animation="fadeUp" delay={0.3}>
                        <Image 
                            src="/images/cxr-logo.png" 
                            alt="Logo" 
                            width={250} 
                            height={100}
                            className="w-auto h-auto max-w-[80%] sm:max-w-[250px]" 
                            priority
                        />
                    </AnimationContainer>
                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <h1 className="text-4xl font-heading lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-neutral-100">
                            Learn in 3D with AI
                        </h1>
                    </AnimationContainer>
                    <AnimationContainer animation="fadeUp" delay={0.6}>
                        <p className="text-lg text-muted-foreground">
                            Experience the future. Today. <br />
                            with the power of AI and Mixed Reality
                        </p>
                    </AnimationContainer>
                    <AnimationContainer animation="fadeUp" delay={0.8}>
                        <div className="flex gap-4">
                            <Link href={trailerUrl} target="_blank">
                                <Button variant="outline">Watch Trailer</Button>
                            </Link>
                            <Link href="https://vr.meta.me/s/2Rgf0BFArrcy5sf" target="_blank">
                                <Button className="magic-button">
                                    <span className="relative z-10">Get on Meta Quest</span>
                                </Button>
                            </Link>
                        </div>
                    </AnimationContainer>
                    
                </div>
                <AnimationContainer animation="fadeUp" delay={1.2} className="mt-16">
                    <div 
                        className="relative w-full max-w-[800px] group"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <video
                            src="/images/v.webm"
                            autoPlay
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
                <AnimationContainer animation="fadeUp" delay={1.4} className="mt-8 flex justify-center w-full">
                    <Image 
                        src="/images/tags.png" 
                        alt="Feature tags" 
                        width={1008} 
                        height={380}
                        quality={100}
                        className="w-auto h-auto max-w-full sm:max-w-[450px]" 
                    />
                </AnimationContainer>
                <AnimationContainer animation="fadeUp" delay={1}>
                        <div className="flex flex-col items-center gap-4 pt-12">
                            <p className="text-sm md:text-base text-muted-foreground">
                                Supported by
                            </p>
                            <div className="w-full relative max-w-[calc(100vw-2rem)] lg:max-w-lg">
                                <Marquee className="[--duration:40s] select-none [--gap:2rem]">
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
