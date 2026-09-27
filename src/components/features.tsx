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
                    <h2 className="type-heading">
                        Don’t just learn it. <br className="hidden sm:inline" />
                        See it in your space.
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <p className="type-lead max-w-2xl mx-auto">
                        Speak any question out loud. Your AI teacher responds in mixed reality with
                        interactive 3D models you can inspect, scale, and pull apart in real time.
                    </p>
                    <p className="mt-4 text-sm text-neutral-400">
                        For Meta Quest &amp; Meta VR glasses
                    </p>
                </AnimationContainer>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-[1fr_1.2fr_1fr]">
                <AnimationContainer animation="fadeUp" delay={0.2} className="min-w-0 sm:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-2">
                    <MagicCard className="h-full rounded-2xl border border-violet-400/40">
                        <div className="flex h-full flex-col items-center bg-gradient-to-b from-violet-500/15 via-violet-500/5 to-transparent text-center">
                            <div className="px-6 pt-9 sm:pt-12">
                                <h3 className="font-heading font-medium tracking-tight text-white">
                                    <span className="block text-8xl leading-none tracking-tighter text-violet-200">1M+</span>
                                    <span className="mt-3 block text-3xl">3D Models</span>
                                </h3>
                                <p className="mx-auto mt-4 max-w-xs text-base leading-relaxed text-neutral-300">
                                    {FEATURES[4].description}
                                </p>
                            </div>
                            <div className="relative my-5 min-h-[240px] w-full flex-1 sm:min-h-[280px]">
                                <Image
                                    src={FEATURES[4].image}
                                    alt={FEATURES[4].alt}
                                    fill
                                    className="object-contain p-3 motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.02]"
                                    sizes="(max-width: 1023px) 90vw, 400px"
                                />
                            </div>
                            <p className="px-6 pb-8 text-sm leading-relaxed text-violet-200/80">
                                From tiny cells to entire solar systems.
                            </p>
                        </div>
                    </MagicCard>
                </AnimationContainer>

                {[FEATURES[0], FEATURES[2], FEATURES[1], FEATURES[3]].map((feature) => (
                    <AnimationContainer key={feature.title} animation="fadeUp" delay={0.3} className="min-w-0">
                        <MagicCard className="h-full rounded-2xl border border-white/10">
                            <div className="flex h-full flex-col">
                                <div className="p-6 pb-3">
                                    <h3 className="text-xl font-heading font-medium tracking-tight text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-neutral-400">
                                        {feature.description}
                                    </p>
                                </div>
                                <div className={`relative mt-auto h-[240px] shrink-0 ${feature.flip ? "-scale-x-100" : ""}`}>
                                    <Image
                                        src={feature.image}
                                        alt={feature.alt}
                                        fill
                                        className="object-contain object-bottom motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.02]"
                                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 320px"
                                    />
                                </div>
                            </div>
                        </MagicCard>
                    </AnimationContainer>
                ))}
            </div>
        </Wrapper>
    );
};

export default Features;
