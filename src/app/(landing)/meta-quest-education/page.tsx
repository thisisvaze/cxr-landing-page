import ContentPage from "@/components/content-page";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import PageSchema from "@/components/global/page-schema";
import { QUEST_EDUCATION_FAQS } from "@/constants/page-faqs";
import { generateMetadata as buildMetadata } from "@/utils";

const PATH = "/meta-quest-education";
const TITLE = "Education Apps for Meta Quest";
const DESCRIPTION =
    "A guide to education on Meta Quest, and how CuriosityXR differs from lesson-based VR apps by generating the lesson live from whatever you ask. Quest 3, 3S, Quest 2 and Quest Pro.";

export const metadata = buildMetadata({
    title: `${TITLE} | Learn in Mixed Reality`,
    description: DESCRIPTION,
    path: PATH,
    keywords: [
        "Meta Quest education app",
        "educational apps for Meta Quest",
        "Quest 3 educational apps",
        "best educational apps Meta Quest",
        "VR education app",
        "Meta Quest 3 learning app",
        "VR homeschool app",
        "VR apps for classrooms",
        "immersive learning Meta Quest",
    ],
});

const SECTIONS = [
    {
        heading: "Education on Meta Quest, in two shapes",
        body: [
            "Educational apps for Meta Quest tend to fall into one of two categories, and the difference matters more than the subject matter does.",
            "The first is lesson-based. Someone authored a set of guided experiences ahead of time: an anatomy atlas, a language practice scenario, a tour of a historical site. These are polished and well suited to a set curriculum. Their limit is the edge of what was authored, so the moment a learner asks something unplanned, the app has no answer.",
            "The second is generative. There is no library of prepared lessons because the lesson is assembled from the question. CuriosityXR works this way, which is why it has no fixed subject list and why follow-up questions do not run out.",
        ],
    },
    {
        heading: "What that changes in practice",
        image: { src: "/images/blog/volcano-classroom.jpg", alt: "Mixed reality view of a classroom: the AI teacher avatar stands beside a volcano cross-section model on a student desk as the learner turns it" },
        body: [
            "A learner using a lesson-based app works through what is there. A learner using CuriosityXR starts somewhere and follows the thread.",
        ],
        bullets: [
            "Ask out loud and the AI teacher answers in speech while placing a matching 3D model in your room.",
            "Draw on a library of more than 1 million models, so obscure questions still get an object rather than an apology.",
            "Handle everything directly: scale a model up, walk around it, pull it apart.",
            "Change direction at any point. A question about volcanoes can become a question about plate tectonics without leaving the session.",
        ],
    },
    {
        heading: "Which Meta Quest headset suits learning best",
        body: [
            "Meta Quest 3 and Quest 3S are the strongest choices, because colour passthrough places models in your actual room. That matters for judging real scale, and it keeps a learner aware of the people around them, which is the difference between a solitary activity and one a parent or teacher can share.",
            "Meta Quest 2 and Quest Pro are fully supported and work as immersive VR rather than mixed reality. CuriosityXR runs on all four, with hand tracking and Touch controller support.",
        ],
    },
    {
        heading: "Homeschooling",
        body: [
            "Homeschooling families are the largest group of CuriosityXR users. The pattern parents describe is consistent: a learner who resists worksheets will spend an hour taking apart a 3D heart and asking what each part does.",
            "Parents of neurodivergent and autistic learners report this most strongly. Hands-on spatial exploration holds attention where flat material does not, and because there are no quizzes, grades or forced lesson plans, there is nothing to fail at.",
        ],
    },
    {
        heading: "Classrooms",
        body: [
            "CuriosityXR runs on standard Quest hardware with no special configuration, and Meta provides device management for schools running headsets at scale.",
            "Teachers tend to use it for demonstration and exploration rather than as a graded activity. Asking a class what they want to see, and then showing it at full scale in the room, is the use case it was designed around.",
        ],
    },
    {
        heading: "Subjects people actually explore",
        image: { src: "/images/blog/dna-kitchen.jpg", alt: "Mixed reality view of a kitchen: a glowing DNA double helix floats above the kitchen island next to the AI teacher avatar" },
        body: [
            "Anatomy, astronomy, biology, geology, geography and history come up most. The common starting points are the human heart, the solar system, volcanoes, DNA and world maps.",
            "Because each answer is generated on demand, the practical range is far wider than any published subject list, and the interesting sessions are usually the ones that wander off it.",
        ],
    },
];

const MetaQuestEducationPage = () => (
    <>
        <PageSchema
            path={PATH}
            name={`${TITLE} | Learn in Mixed Reality`}
            description={DESCRIPTION}
            breadcrumb={TITLE}
            faqs={QUEST_EDUCATION_FAQS}
        />
        <ContentPage
            badge="Education on Meta Quest"
            title="Education on Meta Quest, without a fixed curriculum"
            lede="Most VR education apps ship a set of prepared lessons. CuriosityXR builds the lesson from your question, then puts the answer in your room as a 3D model you can hold."
            sections={SECTIONS}
        >
            <section className="w-full">
                <FAQ
                    items={QUEST_EDUCATION_FAQS}
                    heading="Meta Quest for learning, answered"
                    intro="Which headset suits education best, whether Quest works for homeschooling and classrooms, and what you can actually study."
                />
            </section>
            <section className="w-full">
                <CTA />
            </section>
        </ContentPage>
    </>
);

export default MetaQuestEducationPage;
