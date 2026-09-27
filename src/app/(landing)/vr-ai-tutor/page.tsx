import ContentPage from "@/components/content-page";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import PageSchema from "@/components/global/page-schema";
import { VR_TUTOR_FAQS } from "@/constants/page-faqs";
import { generateMetadata as buildMetadata } from "@/utils";

const PATH = "/vr-ai-tutor";
const TITLE = "AI Tutor for VR";
const DESCRIPTION =
    "CuriosityXR is an AI tutor for VR on Meta Quest. Speak a question out loud and your AI teacher answers in mixed reality with an interactive 3D model you can hold.";

export const metadata = buildMetadata({
    title: `${TITLE} | AI Teacher on Meta Quest`,
    description: DESCRIPTION,
    path: PATH,
    keywords: [
        "AI tutor VR",
        "VR AI tutor",
        "AI teacher VR",
        "AI tutor for Meta Quest",
        "virtual reality AI tutor",
        "AI tutor app",
        "conversational AI in VR",
        "AI tutor for kids",
        "spatial learning AI",
    ],
});

const SECTIONS = [
    {
        heading: "What an AI tutor in VR actually does",
        image: { src: "/images/blog/heart-bedroom.jpg", alt: "Mixed reality view of a child's bedroom: the AI teacher avatar explains a floating anatomical heart as the learner reaches for it" },
        body: [
            "An AI tutor in VR replaces the two things a flat chatbot cannot give you: scale and presence. Instead of reading an explanation, you stand next to the thing being explained. CuriosityXR runs on Meta Quest, listens to a spoken question, and answers by placing an interactive 3D model in the room with you.",
            "Ask about the human heart and a heart appears at life size, beating, ready to be pulled apart. Ask what the left ventricle does and the tutor answers while the model is still in your hands. The conversation and the object are in the same place, which is the part a screen cannot reproduce.",
        ],
    },
    {
        heading: "How it works",
        body: [
            "There is no menu to navigate and nothing to set up before a session. The whole interaction is a conversation.",
        ],
        bullets: [
            "Ask out loud, in plain language, the way you would ask a person.",
            "The AI teacher answers in speech and pulls a matching model from a library of more than 1 million 3D objects.",
            "Grab, scale, rotate and take the model apart with hand tracking or Touch controllers.",
            "Follow up. Each question builds on the last, so a session goes wherever your curiosity takes it.",
        ],
    },
    {
        heading: "Why a VR AI tutor beats a text AI tutor",
        image: { src: "/images/blog/saturn-study.jpg", alt: "Mixed reality view of a home study at night: the AI teacher avatar stands beside a model of Saturn floating over the desk while the learner points at its rings" },
        body: [
            "Text-based AI tutors are good at explanation and bad at demonstration. They can tell you a mitochondrion is the powerhouse of the cell; they cannot show you one at a scale where the phrase means anything.",
            "Spatial answers also make a difference to what sticks. Walking around a model, changing its size and taking it apart are physical acts, and they engage a kind of attention that reading does not. This is the whole reason CuriosityXR was built in a headset rather than as another chat window.",
        ],
    },
    {
        heading: "Built on peer-reviewed research",
        body: [
            "CuriosityXR did not start as a product. It started as research into context-aware mixed reality learning by Aaditya Vaze, Alexis Morris and Ian Clarke, published by IEEE at IEEE VR 2023 and at AIxVR 2024. The papers set out the multi-modal, context-aware approach the AI tutor is built on.",
        ],
    },
    {
        heading: "Who uses it",
        body: [
            "Homeschooling families are the largest group, including many parents of neurodivergent and autistic learners who find that hands-on 3D exploration holds attention where worksheets do not. Teachers use it for demonstration, and a large number of adults use it simply to chase their own questions.",
            "There are no quizzes, no grades and no fixed lesson plans. The learner leads and the AI teacher follows.",
        ],
    },
    {
        heading: "Supported headsets",
        body: [
            "CuriosityXR runs on Meta Quest 3, Meta Quest 3S, Meta Quest 2 and Meta Quest Pro, with hand tracking and Touch controller support. On Quest 3 and Quest 3S it uses colour passthrough, so models appear in your real room rather than a virtual one.",
        ],
    },
];

const VrAiTutorPage = () => (
    <>
        <PageSchema
            path={PATH}
            name={`${TITLE} | AI Teacher on Meta Quest`}
            description={DESCRIPTION}
            breadcrumb={TITLE}
            faqs={VR_TUTOR_FAQS}
        />
        <ContentPage
            badge="AI Tutor for VR"
            title="An AI tutor you can talk to, in VR"
            lede="Speak a question out loud and your AI teacher answers in mixed reality, as an interactive 3D model you can hold. On Meta Quest 3, 3S, Quest 2 and Quest Pro."
            sections={SECTIONS}
        >
            <section className="w-full">
                <FAQ
                    items={VR_TUTOR_FAQS}
                    heading="AI tutors in VR, answered"
                    intro="What an AI tutor in VR is, how it compares to a pre-recorded lesson, and where it fits alongside a teacher."
                />
            </section>
            <section className="w-full">
                <CTA />
            </section>
        </ContentPage>
    </>
);

export default VrAiTutorPage;
