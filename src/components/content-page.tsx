import Image from "next/image";
import Link from "next/link";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import SectionBadge from "./ui/section-badge";
import { PROFILES } from "@/utils";

export interface ContentSection {
    heading: string;
    body: string[];
    bullets?: string[];
    image?: { src: string; alt: string };
}

interface Props {
    badge: string;
    title: string;
    lede: string;
    sections: ContentSection[];
    children?: React.ReactNode;
}

const ContentPage = ({ badge, title, lede, sections, children }: Props) => {
    return (
        <div className="w-full relative flex flex-col">
            <Wrapper className="pt-32 lg:pt-40 pb-8">
                <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
                    <AnimationContainer animation="fadeUp" delay={0.2}>
                        <SectionBadge title={badge} />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.3}>
                        <h1 className="type-heading">
                            {title}
                        </h1>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <p className="type-lead">
                            {lede}
                        </p>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.5}>
                        <div className="flex gap-4">
                            <Link
                                href={PROFILES.metaStore}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="magic-button">
                                    <span className="relative z-10">
                                        Get on Meta Quest
                                    </span>
                                </Button>
                            </Link>
                            <Link href="/">
                                <Button variant="outline">See how it works</Button>
                            </Link>
                        </div>
                    </AnimationContainer>
                </div>
            </Wrapper>

            <Wrapper className="py-12 lg:py-16">
                <div className="max-w-3xl mx-auto flex flex-col gap-12">
                    {sections.map((section, index) => (
                        <AnimationContainer
                            key={section.heading}
                            animation="fadeUp"
                            delay={0.2 + index * 0.05}
                        >
                            <article className="flex flex-col gap-4">
                                <h2 className="text-2xl md:text-3xl font-heading font-medium text-foreground">
                                    {section.heading}
                                </h2>
                                {section.body.map((paragraph) => (
                                    <p
                                        key={paragraph.slice(0, 40)}
                                        className="text-base text-muted-foreground leading-relaxed"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                                {section.bullets && (
                                    <ul className="flex flex-col gap-2 pl-5 list-disc text-base text-muted-foreground marker:text-primary">
                                        {section.bullets.map((bullet) => (
                                            <li key={bullet.slice(0, 40)}>{bullet}</li>
                                        ))}
                                    </ul>
                                )}
                                {section.image && (
                                    <Image
                                        src={section.image.src}
                                        alt={section.image.alt}
                                        width={1440}
                                        height={803}
                                        sizes="(max-width: 768px) 100vw, 768px"
                                        className="mt-4 h-auto w-full rounded-2xl border border-white/10"
                                    />
                                )}
                            </article>
                        </AnimationContainer>
                    ))}
                </div>
            </Wrapper>

            {children}
        </div>
    );
};

export default ContentPage;
