import type { FAQItem } from "./faq";

/**
 * Deliberately distinct from the homepage FAQs. Repeating the same questions on
 * every page would put duplicate FAQPage schema across the site, and Google
 * expects a page's FAQ markup to describe that page's own content.
 */

export const VR_TUTOR_FAQS: FAQItem[] = [
    {
        question: "What is an AI tutor in VR?",
        answer:
            "An AI tutor in VR is a conversational teacher that lives inside a headset instead of on a screen. You speak a question out loud and it answers in the space around you. In CuriosityXR the answer arrives as an interactive 3D model you can grab, scale and take apart, together with a spoken explanation, so the tutor is showing you the thing rather than describing it.",
    },
    {
        question: "Is an AI tutor better than a pre-recorded VR lesson?",
        answer:
            "They solve different problems. A pre-recorded VR lesson is fixed. Someone decided in advance what you would learn and in what order, so it is strong for a set curriculum and weak the moment you ask something off-script. An AI tutor generates the lesson from your question, which means the topic list is open-ended and follow-up questions work. CuriosityXR takes the second approach.",
    },
    {
        question: "Can an AI tutor replace a teacher?",
        answer:
            "No, and CuriosityXR is not built to. It has no grading, no quizzes and no lesson plans. What it does well is the exploratory part of learning: letting someone chase a question as far as their curiosity takes it, and see the answer at full scale. Teachers and homeschooling parents use it alongside their own material, not instead of it.",
    },
    {
        question: "Do I need to know what to ask before I start?",
        answer:
            "No. Most sessions start with something broad like \"show me the human heart\" or \"what is inside a volcano\", then move wherever the questions go. Because answers are generated on demand from a library of more than 1 million 3D models, there is no menu to work through and nothing to prepare.",
    },
    {
        question: "What makes a VR AI tutor different from a voice assistant?",
        answer:
            "A voice assistant answers in words. A VR AI tutor answers in space. Ask a voice assistant about the solar system and you get a sentence; ask CuriosityXR and the planets appear around you at relative scale, and you can walk between them while asking what happens next.",
    },
];

export const QUEST_EDUCATION_FAQS: FAQItem[] = [
    {
        question: "What are the best educational apps for Meta Quest?",
        answer:
            "Meta Quest education apps fall into two groups. Most are lesson-based: a fixed set of guided experiences on a specific subject, such as anatomy atlases, language practice or historical site tours. A smaller group is generative, building the lesson live from whatever you ask. CuriosityXR is in the second group, which is why it does not have a fixed subject list.",
    },
    {
        question: "Which Meta Quest headset is best for education?",
        answer:
            "Meta Quest 3 and Quest 3S are the strongest choices because their colour passthrough puts 3D models in your actual room, which matters for learning at real scale and for staying aware of the people around you. Quest 2 and Quest Pro work well too, as a fully immersive experience rather than a mixed reality one.",
    },
    {
        question: "Is Meta Quest good for homeschooling?",
        answer:
            "Yes, and homeschooling families are one of the largest groups of CuriosityXR users. The appeal is usually that a learner who resists worksheets will happily spend an hour pulling apart a 3D heart. Parents of neurodivergent and autistic learners in particular report that hands-on spatial exploration holds attention where flat material does not.",
    },
    {
        question: "Can you use Meta Quest in a classroom?",
        answer:
            "Yes. Meta offers education-specific device management for schools, and CuriosityXR runs on standard Quest hardware with no special setup. Because it has no fixed curriculum, teachers tend to use it for exploration and demonstration, letting students ask about a topic and see it at full scale, rather than as a graded activity.",
    },
    {
        question: "What subjects can you study on Meta Quest with CuriosityXR?",
        answer:
            "Anatomy, astronomy, biology, geology, geography and history are the most common. Popular starting points are the human heart, the solar system, volcanoes, DNA and world maps. Because every answer is generated on demand from a 1M+ model library, the practical subject range is much wider than any fixed list.",
    },
];

export const TIMEGUEST_FAQS: FAQItem[] = [
    {
        question: "Can you really talk to historical figures with AI?",
        answer:
            "Yes. In Timeguest you speak out loud and a guest from history answers in their own voice, in mixed reality in your room. The guests are AI recreations made for learning, not the real people, and they will tell you so if you ask.",
    },
    {
        question: "Who are the guests in Timeguest?",
        answer:
            "The first four guests are a surprise until launch. New guests join over time, and you can ask your current guest to swap in another one mid-conversation.",
    },
    {
        question: "How accurate are the guests?",
        answer:
            "They are built to stay truthful: they say when history is uncertain and never invent quotes or events. They are still AI and can make mistakes, so check important facts before you rely on them.",
    },
    {
        question: "Which headsets does Timeguest support?",
        answer:
            "Meta Quest 3, Meta Quest 3S and Meta VR Glasses when they launch. Timeguest uses colour passthrough so your guest appears in your real room, works with your hands and voice, and needs an internet connection.",
    },
    {
        question: "Who is Timeguest for?",
        answer:
            "Anyone aged 13 and up who is curious about history, science or art. Students use it to hear ideas explained by the people who had them; adults use it to follow their own questions.",
    },
];
