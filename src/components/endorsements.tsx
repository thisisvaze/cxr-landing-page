import { ENDORSEMENTS } from '@/constants';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';

const Endorsements = () => {
    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-3xl mx-auto">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Educators & researchers" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="type-heading">
                        Recommended by teachers, <br className="hidden sm:inline" />
                        backed by research
                    </h2>
                </AnimationContainer>

            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {ENDORSEMENTS.map((endorsement, index) => (
                    <AnimationContainer key={endorsement.author} animation="fadeUp" delay={0.2 + index * 0.1} className="h-full">
                        <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-violet-500/[0.08] to-neutral-900/60 p-7 sm:p-8">
                            <Quote aria-hidden className="size-8 text-violet-400/70" />
                            <blockquote className="mt-6 text-lg sm:text-xl font-heading font-medium tracking-tight leading-snug text-white">
                                {endorsement.content}
                            </blockquote>
                            <figcaption className="mt-auto flex items-center gap-4 pt-8">
                                <div className="relative size-14 shrink-0 overflow-hidden rounded-full ring-2 ring-violet-400/30">
                                    <Image src={endorsement.image} alt="" fill sizes="56px" className="object-cover" />
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-white">{endorsement.author}</p>
                                    <p className="text-sm text-neutral-400">{endorsement.role}</p>
                                </div>
                            </figcaption>
                        </figure>
                    </AnimationContainer>
                ))}
            </div>

        </Wrapper>
    );
};

export default Endorsements;
