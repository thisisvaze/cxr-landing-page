import { ArrowUpRight } from "lucide-react";
import ApiAccessForm from "@/components/api-access-form";
import ApiShowcase from "@/components/api-showcase";
import AnimationContainer from "@/components/global/animation-container";
import PageSchema from "@/components/global/page-schema";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import { generateMetadata as buildMetadata } from "@/utils";

const PATH = "/learning-api";
const TITLE = "Learning Content API for Edtech Teams";
const DESCRIPTION = "Give learners answers they can explore, not walls of AI text: 3D models, real visuals, and a short spoken explanation. CuriosityXR API, now in private beta.";
const ACCESS_LINK = "#request-access";

export const metadata = buildMetadata({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    keywords: ["learning content API", "educational content API", "3D models API", "CuriosityXR API"],
});

export default function LearningApiPage() {
    return (
        <>
            <PageSchema path={PATH} name={TITLE} description={DESCRIPTION} breadcrumb="Learning Content API" />

            <Wrapper className="pb-12 pt-36 lg:pb-16 lg:pt-44">
                <AnimationContainer animation="fadeUp" className="mx-auto max-w-4xl text-center">
                    <SectionBadge title="CuriosityXR API · Private beta" />
                    <h1 className="mt-6 text-4xl font-heading font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Answers learners can explore.<br />
                        <span className="text-violet-200">Not walls of AI text.</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-300">
                        Turn every question in your app into a 3D model, real visuals, and a short spoken explanation.
                    </p>
                    <Button asChild className="magic-button mt-8">
                        <a href={ACCESS_LINK}>Request API access <ArrowUpRight className="ml-2 size-4" aria-hidden="true" /></a>
                    </Button>
                </AnimationContainer>
            </Wrapper>

            <Wrapper className="pb-20 lg:pb-28">
                <AnimationContainer animation="fadeIn">
                    <ApiShowcase />
                </AnimationContainer>
            </Wrapper>

            <Wrapper className="pb-24 lg:pb-32">
                <div id="request-access" className="grid scroll-mt-32 gap-10 border-t border-white/10 pt-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <SectionBadge title="Private beta" />
                        <h2 className="mt-5 text-3xl font-heading font-medium tracking-tight text-white sm:text-4xl">Request API access</h2>
                        <p className="mt-5 leading-relaxed text-neutral-400">Tell us what you’re building.</p>
                    </div>
                    <ApiAccessForm />
                </div>
            </Wrapper>
        </>
    );
}
