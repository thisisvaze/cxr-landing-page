import { FEATURES } from '@/constants';
import Image from 'next/image';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';
import { MagicCard } from './magicui/magic-card';

const Features = () => {
    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-3xl mx-auto">
                <AnimationContainer animation="fadeUp" delay={0.1}>
                    <SectionBadge title="What is CuriosityXR?" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium tracking-tight text-white leading-tight">
                        Learn with 1M+ 3D Models <br className="hidden sm:inline" />
                        & AI Teacher
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                        Speak any question out loud. Your AI teacher responds in mixed reality with
                        interactive 3D models you can inspect, scale, and pull apart in real time.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs font-medium text-neutral-400">
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Meta Quest 3</span>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Quest 3S</span>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Quest 2</span>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Quest Pro</span>
                    </div>
                </AnimationContainer>
            </div>

            <div className="flex flex-col gap-6 px-1 md:px-0">
                {/* Top Row: Ask Anything | Spatial Intelligence | Natural Interactions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* 1. Ask Anything */}
                    <AnimationContainer animation="fadeUp" delay={0.2} className="w-full">
                        <MagicCard className="h-[380px] sm:h-[400px] rounded-2xl border border-white/10">
                            <div className="flex flex-col justify-between h-full w-full relative">
                                <div className="p-6 sm:p-7 z-10">
                                    <h3 className="text-xl sm:text-2xl font-heading font-medium text-white tracking-tight">
                                        {FEATURES[0].title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed mt-2">
                                        {FEATURES[0].description}
                                    </p>
                                </div>
                                <div className="relative w-full h-[220px] sm:h-[240px] flex items-center justify-center p-2 mt-auto">
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="size-40 rounded-full bg-violet-600/10 blur-3xl" />
                                    </div>
                                    <Image
                                        src={FEATURES[0].image}
                                        alt={FEATURES[0].alt}
                                        fill
                                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </div>
                        </MagicCard>
                    </AnimationContainer>

                    {/* 2. Spatial Intelligence */}
                    <AnimationContainer animation="fadeUp" delay={0.3} className="w-full">
                        <MagicCard className="h-[380px] sm:h-[400px] rounded-2xl border border-white/10">
                            <div className="flex flex-col justify-between h-full w-full relative">
                                <div className="p-6 sm:p-7 z-10">
                                    <h3 className="text-xl sm:text-2xl font-heading font-medium text-white tracking-tight">
                                        {FEATURES[1].title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed mt-2">
                                        {FEATURES[1].description}
                                    </p>
                                </div>
                                <div className="relative w-full h-[220px] sm:h-[240px] flex items-center justify-center p-4 mt-auto">
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="size-44 rounded-full bg-purple-600/15 blur-3xl" />
                                    </div>
                                    <Image
                                        src={FEATURES[1].image}
                                        alt={FEATURES[1].alt}
                                        fill
                                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </div>
                        </MagicCard>
                    </AnimationContainer>

                    {/* 3. Natural Interactions */}
                    <AnimationContainer animation="fadeUp" delay={0.4} className="w-full md:col-span-2 lg:col-span-1">
                        <MagicCard className="h-[380px] sm:h-[400px] rounded-2xl border border-white/10">
                            <div className="flex flex-col justify-between h-full w-full relative">
                                <div className="p-6 sm:p-7 z-10">
                                    <h3 className="text-xl sm:text-2xl font-heading font-medium text-white tracking-tight">
                                        {FEATURES[2].title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed mt-2">
                                        {FEATURES[2].description}
                                    </p>
                                </div>
                                <div className="relative w-full h-[220px] sm:h-[240px] flex items-end justify-center p-2 mt-auto">
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="size-40 rounded-full bg-cyan-600/15 blur-3xl" />
                                    </div>
                                    <Image
                                        src={FEATURES[2].image}
                                        alt={FEATURES[2].alt}
                                        fill
                                        className="object-contain object-bottom p-2 transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </div>
                        </MagicCard>
                    </AnimationContainer>
                </div>

                {/* Bottom Row: Build your learning journey (3 col) | 1M+ 3D Models (2 col) */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* 4. Build Your Learning Journey */}
                    <AnimationContainer animation="fadeUp" delay={0.5} className="lg:col-span-3 w-full">
                        <MagicCard className="h-[380px] sm:h-[420px] rounded-2xl border border-white/10">
                            <div className="flex flex-col justify-between h-full w-full relative">
                                <div className="p-6 sm:p-7 z-10">
                                    <h3 className="text-xl sm:text-2xl font-heading font-medium text-white tracking-tight">
                                        {FEATURES[3].title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed mt-2 max-w-lg">
                                        {FEATURES[3].description}
                                    </p>
                                </div>
                                <div className="relative w-full h-[220px] sm:h-[280px] flex items-end justify-center p-2 mt-auto">
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="size-52 rounded-full bg-cyan-600/10 blur-3xl" />
                                    </div>
                                    <Image
                                        src={FEATURES[3].image}
                                        alt={FEATURES[3].alt}
                                        fill
                                        className="object-contain object-bottom p-2 transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                    />
                                </div>
                            </div>
                        </MagicCard>
                    </AnimationContainer>

                    {/* 5. 1M+ 3D Models */}
                    <AnimationContainer animation="fadeUp" delay={0.6} className="lg:col-span-2 w-full">
                        <MagicCard className="h-[380px] sm:h-[420px] rounded-2xl border border-white/10">
                            <div className="flex flex-col justify-between h-full w-full relative">
                                <div className="p-6 sm:p-7 z-10">
                                    <h3 className="text-xl sm:text-2xl font-heading font-medium text-white tracking-tight">
                                        {FEATURES[4].title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed mt-2">
                                        {FEATURES[4].description}
                                    </p>
                                </div>
                                <div className="relative w-full h-[220px] sm:h-[280px] flex items-center justify-center p-3 mt-auto">
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="size-48 rounded-full bg-amber-500/10 blur-3xl" />
                                    </div>
                                    <Image
                                        src={FEATURES[4].image}
                                        alt={FEATURES[4].alt}
                                        fill
                                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                    />
                                </div>
                            </div>
                        </MagicCard>
                    </AnimationContainer>
                </div>
            </div>
        </Wrapper>
    );
};

export default Features;
