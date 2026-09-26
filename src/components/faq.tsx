import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
            <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-12">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="FAQ" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium tracking-tight text-white leading-tight">
                        {heading}
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed">
                        {intro}
                    </p>
                </AnimationContainer>
            </div>

            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full space-y-3.5">
                    {items.map((item, index) => (
                        <AnimationContainer
                            key={index}
                            animation="fadeUp"
                            delay={0.4 + (index * 0.05)}
                        >
                            <AccordionItem
                                value={`item-${index}`}
                                className="border border-white/10 hover:border-white/20 transition-all bg-neutral-900/60 rounded-xl sm:rounded-2xl px-5 sm:px-6 shadow-sm overflow-hidden"
                            >
                                <AccordionTrigger className="hover:no-underline py-5 text-base sm:text-lg text-left font-medium text-white/95 hover:text-white transition-colors">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent
                                    forceMount
                                    className="text-neutral-400 text-left text-sm sm:text-base leading-relaxed pb-5 pt-1"
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
