import { FEATURES } from '@/constants';
import Image from 'next/image';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';
import { MagicCard } from './magicui/magic-card';

const Features = () => {
    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="What is CuriosityXR?" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-2xl font-heading md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-foreground">
                    Learn with 1M+ 3D Models <br />
                    & AI Teacher
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                    The first AI Teacher that assists in 3D
                    </p>
                </AnimationContainer>
            </div>

            <div className="flex flex-col gap-6 px-1 md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <AnimationContainer animation="fadeRight" delay={0.5}>
                        <MagicCard className="min-h-[350px]">
                            <div className="flex flex-col justify-between h-full">
                                <div className="p-8">
                                    <AnimationContainer animation="fadeUp" delay={0.6}>
                                        <div className="space-y-0">
                                            <h3 className="text-lg md:text-xl font-medium">
                                                {FEATURES[0].title}
                                            </h3>
                                            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                                                {FEATURES[0].description}
                                            </p>
                                        </div>
                                    </AnimationContainer>
                                </div>
                                <AnimationContainer animation="fadeUp" delay={0.7}>
                                    <div className="relative w-full h-[250px] overflow-hidden">
                                        <Image
                                            src={FEATURES[0].image}
                                            alt={FEATURES[0].title}
                                            fill
                                            className="object-cover w-full"
                                        />
                                    </div>
                                </AnimationContainer>
                            </div>
                        </MagicCard>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.6}>
                        <MagicCard>
                            <Image
                                src="/images/f2.png"
                                alt="Feature 2"
                                width={500}
                                height={350}
                                className="w-full h-[350px] object-cover"
                                priority
                            />
                        </MagicCard>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeLeft" delay={0.7}>
                        <MagicCard className="min-h-[350px]">
                            <div className="flex flex-col justify-between h-full">
                                <div className="p-8">
                                    <AnimationContainer animation="fadeUp" delay={0.8}>
                                        <div className="space-y-0">
                                            <h3 className="text-lg md:text-xl font-medium">
                                                {FEATURES[2].title}
                                            </h3>
                                            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                                                {FEATURES[2].description}
                                            </p>
                                        </div>
                                    </AnimationContainer>
                                </div>
                                <AnimationContainer animation="fadeUp" delay={0.9}>
                                    <div className="relative w-full h-48 overflow-hidden mt-auto">
                                        <Image
                                            src={FEATURES[2].image}
                                            alt={FEATURES[2].title}
                                            fill
                                            className="object-cover w-full object-bottom"
                                        />
                                    </div>
                                </AnimationContainer>
                            </div>
                        </MagicCard>
                    </AnimationContainer>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    <AnimationContainer animation="fadeRight" delay={0.8} className="lg:col-span-3">
                        <MagicCard className="min-h-[350px]">
                            <div className="flex flex-col justify-between h-full">
                                <div className="p-8">
                                    <AnimationContainer animation="fadeUp" delay={0.9}>
                                        <div className="space-y-2">
                                            <h3 className="text-lg md:text-xl font-medium">
                                                {FEATURES[3].title}
                                            </h3>
                                            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                                                {FEATURES[3].description}
                                            </p>
                                        </div>
                                    </AnimationContainer>
                                </div>
                                <AnimationContainer animation="fadeUp" delay={1}>
                                    <div className="relative w-full h-[350px] overflow-hidden mt-auto">
                                        <Image
                                            src={FEATURES[3].image}
                                            alt={FEATURES[3].title}
                                            fill
                                            className="object-cover w-full object-bottom"
                                            sizes="(max-width: 768px) 100vw, 60vw"
                                            priority
                                        />
                                    </div>
                                </AnimationContainer>
                            </div>
                        </MagicCard>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeLeft" delay={0.9} className="lg:col-span-2">
                        <MagicCard className="min-h-[350px]">
                            <div className="flex flex-col justify-between h-full">
                                <div className="p-8">
                                    <AnimationContainer animation="fadeUp" delay={1}>
                                        <div className="">
                                            <h3 className="text-lg md:text-xl font-medium">
                                                {FEATURES[4].title}
                                            </h3>
                                            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                                                {FEATURES[4].description}
                                            </p>
                                        </div>
                                    </AnimationContainer>
                                </div>
                                <AnimationContainer animation="fadeUp" delay={1.1}>
                                    <div className="relative w-full h-[390px]">
                                        <Image
                                            src={FEATURES[4].image}
                                            alt={FEATURES[4].title}
                                            fill
                                            className="object-cover w-full object-bottom"
                                            sizes="(max-width: 768px) 100vw, 40vw"
                                            priority
                                        />
                                    </div>
                                </AnimationContainer>
                            </div>
                        </MagicCard>
                    </AnimationContainer>
                </div>
            </div>
        </Wrapper>
    );
};

export default Features;
