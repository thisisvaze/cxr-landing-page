import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import PageSchema from "@/components/global/page-schema";
import { FAQS } from "@/constants";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "@/utils";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Endorsements from "@/components/endorsements";
import Testimonials from "@/components/testimonials";
import Summary from "@/components/summary";
const HomePage = () => {
    return (
        <div className="w-full relative flex flex-col">
            <PageSchema
                path="/"
                name={DEFAULT_TITLE}
                description={DEFAULT_DESCRIPTION}
                faqs={FAQS}
            />
            <section className="w-full">
                <Hero />
            </section>


            <section className="w-full">
                <Summary />
            </section>

            <section className="w-full scroll-mt-24" id="features">
                <Features />
            </section>

{/*          
            <section className="w-full">
                <CTA />
            </section> */}

            <section className="w-full">
                <Endorsements />
            </section>

            <section className="w-full">
                <Testimonials />
            </section>

            <section className="w-full scroll-mt-24" id="faq">
                <FAQ />
            </section>

            <section className="w-full">
                <CTA />
            </section>
        </div>
    );
};

export default HomePage;
