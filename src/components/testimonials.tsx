import { TESTIMONIALS } from '@/constants';
import { Star } from 'lucide-react';
import Image from 'next/image';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import Marquee from './ui/marquee';
import SectionBadge from './ui/section-badge';

const Testimonials = () => {
    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-3xl mx-auto">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="What our users say" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium tracking-tight text-white leading-tight">
                        Loved by homeschoolers <br className="hidden sm:inline" />
                        and teachers
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed">
                        More than 2,000 homeschooling families, teachers and curious
                        learners use CuriosityXR on Meta Quest.
                    </p>
                </AnimationContainer>
            </div>

            <AnimationContainer animation="fadeUp" delay={0.5}>
                <div className="relative">
                    <div className="pointer-events-none absolute -left-1 top-0 w-20 h-full bg-gradient-to-r from-[#101010] to-transparent z-10" />
                    <div className="pointer-events-none absolute -right-1 top-0 w-20 h-full bg-gradient-to-l from-[#101010] to-transparent z-10" />

                    <Marquee className="[--gap:1.5rem]" pauseOnHover>
                        {TESTIMONIALS.map((testimonial, index) => (
                            <div key={index}>
                                <div
                                    className="flex-shrink-0 w-[300px] sm:w-[360px] md:w-[400px] rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-white/20 transition-all shadow-lg backdrop-blur-xl p-6 sm:p-7"
                                >
                                    <div className="flex flex-col gap-5">
                                        <div className="flex items-center gap-3.5">
                                            <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-white/10">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.author}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="text-left">
                                                <p className="font-semibold text-sm sm:text-base text-white">
                                                    {testimonial.author}
                                                </p>
                                                <p className="text-xs text-neutral-400">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-sm sm:text-[15px] text-neutral-200 leading-relaxed font-normal text-left">
                                            &ldquo;{testimonial.content.replace(/^["'\s]+|["'\s]+$/g, '')}&rdquo;
                                        </p>

                                        <div className="flex gap-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="size-4 fill-amber-400 text-amber-400"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </AnimationContainer>
        </Wrapper>
    );
};

export default Testimonials;
