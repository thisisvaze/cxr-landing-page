import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import { FAQS } from '@/constants';
import type { FAQItem } from '@/constants/faq';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';

interface Props {
    items?: FAQItem[];
    heading?: string;
    intro?: string;
}

const FAQ = ({
    items = FAQS,
    heading = "CuriosityXR, answered",
    intro = "What CuriosityXR is, which Meta Quest headsets it runs on, and how it differs from ChatGPT.",
}: Props = {}) => {
    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center text-center gap-4">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="FAQ" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                        {heading}
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        {intro}
                    </p>
                </AnimationContainer>
            </div>

            <div className="max-w-3xl mx-auto pt-10">
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {items.map((item, index) => (
                        <AnimationContainer
                            key={index}
                            animation="fadeUp"
                            delay={0.5 + (index * 0.1)}
                        >
                            <AccordionItem
                                value={`item-${index}`}
                                className="border-none bg-[#191919] rounded-2xl px-6"
                            >
                                <AccordionTrigger className="hover:no-underline py-6 text-base md:text-lg text-left font-normal">
                                    {item.question}
                                </AccordionTrigger>
                                {/*
                                  * forceMount keeps every answer in the DOM even while
                                  * collapsed. Radix unmounts closed panels by default,
                                  * which hid the answers from crawlers that don't run JS
                                  * and left the FAQPage JSON-LD without matching on-page
                                  * text. Radix still sets `hidden` when closed, so the
                                  * collapsed visual is unchanged.
                                  */}
                                <AccordionContent
                                    forceMount
                                    className="text-muted-foreground text-left"
                                >
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </AnimationContainer>
                    ))}
                </Accordion>
            </div>
        </Wrapper>
    );
};

export default FAQ;
