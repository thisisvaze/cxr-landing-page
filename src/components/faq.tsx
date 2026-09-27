import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from '@/constants';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/constants/faq';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';

const VISIBLE = 5;

const renderItem = (item: FAQItem, index: number) => (
    <AccordionItem
        key={index}
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
);

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
    const shown = items.slice(0, VISIBLE);
    const more = items.slice(VISIBLE);

    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-12">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="FAQ" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="type-heading">
                        {heading}
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="type-lead max-w-xl mx-auto">
                        {intro}
                    </p>
                </AnimationContainer>
            </div>

            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full space-y-3.5">
                    {shown.map((item, index) => (
                        <AnimationContainer
                            key={index}
                            animation="fadeUp"
                            delay={0.4 + (index * 0.05)}
                        >
                            {renderItem(item, index)}
                        </AnimationContainer>
                    ))}
                </Accordion>

                {/* Native <details>: the extra answers stay in the HTML for search engines, no JS needed. */}
                {more.length > 0 && (
                    <AnimationContainer animation="fadeUp" delay={0.4 + VISIBLE * 0.05}>
                        <details className="group/more mt-3.5">
                            <summary className="mx-auto flex w-max cursor-pointer list-none items-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium text-neutral-300 transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
                                <span className="group-open/more:hidden">Show {more.length} more questions</span>
                                <span className="hidden group-open/more:inline">Show fewer questions</span>
                                <ChevronDown aria-hidden className="size-4 transition-transform group-open/more:rotate-180" />
                            </summary>
                            <Accordion type="single" collapsible className="mt-3.5 w-full space-y-3.5">
                                {more.map((item, index) => renderItem(item, VISIBLE + index))}
                            </Accordion>
                        </details>
                    </AnimationContainer>
                )}
            </div>
        </Wrapper>
    );
};

export default FAQ;
