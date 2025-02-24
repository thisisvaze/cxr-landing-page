import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Perks from "@/components/perks";
// import PlatformMetrics from "@/components/platform-metrics";
import Testimonials from "@/components/testimonials";
import Summary from "@/components/summary";
const HomePage = () => {
    return (
        <div className="w-full relative flex flex-col">
            <section className="w-full">
                <Hero />
            </section>


            <section className="w-full">
                <Summary />
            </section>

            <section className="w-full">
                <Features />
            </section>
{/* 
            <section className="w-full">
                <Perks />
            </section> */}

         {/* <section className="w-full">
                <HowItWorks />
            </section> */}

{/*          
            <section className="w-full">
                <CTA />
            </section> */}

            <section className="w-full">
                <Testimonials />
            </section>

            {/* <section className="w-full">
                <PlatformMetrics />
            </section> */}

            {/* <section className="w-full">
                <FAQ />
            </section> */}

            <section className="w-full">
                <CTA />
            </section>
        </div>
    );
};

export default HomePage;
