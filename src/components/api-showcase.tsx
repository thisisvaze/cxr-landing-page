"use client";

import { useEffect, useRef, useState, type DetailedHTMLProps, type HTMLAttributes } from "react";
import Image from "next/image";
import { RotateCcw } from "lucide-react";

declare module "react" {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            "model-viewer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { src: string; alt: string; loading?: string };
        }
    }
}

const MODELS = "https://storage.googleapis.com/cxr_3d_models/models";

// Credits required before launch (CC BY / CC BY-SA): heart model "Human Heart 3D" by soufiane oujihi;
// plant cell model "Plant Cell" by brianj.seely; volcano model "volcano with magma" by sv1nks (all Sketchfab, CC BY 4.0);
// heart photo by Wagner Souza e Silva (CC BY-SA 4.0); moss cells photo by Des Callaghan (CC BY-SA 4.0).
// Mount St. Helens photo: Austin Post, USGS (public domain). Diagrams: CuriosityXR engine.
// Model labels: CuriosityXR annotation lab surface anchors (cxr-content-api/out/annotations), mapped back
// to model space as point / scale + center. `orbit` starts each model facing the side its labels are on. The volcano's "Magma conduit" sits on a surface lava streak, so it reads "Lava flow".
const TOPICS = [
    {
        question: "How does your heart pump blood?",
        speech: "Your heart is really two pumps side by side. The right side sends tired blood to your lungs to pick up oxygen. The left side, with the thickest muscle, pushes that fresh blood to your whole body. Between beats, little valves snap shut so blood only flows one way.",
        diagramCue: "right",
        photoCue: "valves",
        glow: "rgba(244,63,94,0.22)",
        labels: [
            { label: "Left Ventricle", position: "0.0227 0.0896 0.0472", normal: "0.581 0.082 0.810" },
            { label: "Aorta", position: "-0.0148 0.1784 0.0327", normal: "-0.418 0.415 0.808" },
            { label: "Pulmonary Artery", position: "0.0265 0.1556 0.0426", normal: "0.560 -0.191 0.806" },
            { label: "Superior Vena Cava", position: "-0.0328 0.2336 0.0429", normal: "-0.293 0.924 -0.248" },
            { label: "Right Atrium", position: "-0.0580 0.1494 0.0099", normal: "-0.779 0.456 0.430" },
        ],
        orbit: "75deg 65deg auto",
        model: { src: "/models/heart.glb", alt: "3D human heart with the aorta, pulmonary artery and veins" },
        diagram: { src: "/images/api/heart-diagram.jpg", alt: "Labeled diagram of the human heart: right and left atria and ventricles, aorta, pulmonary artery and veins, superior vena cava" },
        photo: { src: "/images/api/heart-model-photo.jpg", alt: "A teaching model of a heart opened up to show the chambers and valves inside" },
    },
    {
        question: "What’s inside a plant cell?",
        speech: "A plant cell is like a tiny factory with walls. The green chloroplasts catch sunlight and turn it into sugar. A big water sac called the vacuole pushes outward and keeps the plant standing tall. Under a microscope, you can see thousands of them packed side by side.",
        diagramCue: "chloroplasts",
        photoCue: "Under",
        glow: "rgba(34,197,94,0.2)",
        labels: [],
        orbit: "0deg 75deg auto",
        model: { src: `${MODELS}/caa4a71203254d979bb8f200a8f96eab.glb`, alt: "3D plant cell cut open to show the nucleus, chloroplasts, vacuole and other organelles" },
        diagram: { src: "/images/api/plant-cell-diagram.jpg", alt: "Labeled diagram of a plant cell: cell wall, cell membrane, chloroplast, nucleus, vacuole, mitochondrion and cytoplasm" },
        photo: { src: "/images/api/moss-leaf-cells.jpg", alt: "Moss leaf cells under a microscope, packed with green chloroplasts" },
    },
    {
        question: "How does a volcano work?",
        speech: "Think of a volcano as Earth’s pressure valve. Deep underground, melted rock called magma collects in a chamber. It’s lighter than the rock around it, so it rises through the conduit. When the pressure gets too high, it bursts out as lava, ash, and gas.",
        diagramCue: "Deep",
        photoCue: "bursts",
        glow: "rgba(249,115,22,0.22)",
        labels: [
            { label: "Lava flow", position: "0.0671 -0.0071 0.2883", normal: "0.030 0.414 0.910" },
            { label: "Volcanic cone", position: "0.0442 0.3972 0.0425", normal: "0.014 0.924 0.383" },
        ],
        orbit: "75deg 70deg auto",
        model: { src: `${MODELS}/590d56ceb7ec467c83b67c3f3a98a773.glb`, alt: "3D volcano with glowing magma channels running down its slopes" },
        diagram: { src: "/images/api/volcano-diagram.jpg", alt: "Labeled cross-section of a volcano: ash cloud and gas, crater, vent, lava flow, layers of ash and lava, conduit, magma chamber, and crust" },
        photo: { src: "/images/api/mount-st-helens-1980.jpg", alt: "Mount St. Helens erupting on May 18, 1980, with a tall ash column above the summit" },
    },
].map((topic) => {
    const words = topic.speech.split(" ");
    // Each panel lights up while the explanation is talking about it.
    return { ...topic, words, diagramAt: words.indexOf(topic.diagramCue), photoAt: words.indexOf(topic.photoCue) };
});

const panel = "relative overflow-hidden rounded-2xl border transition-[border-color,box-shadow] duration-500";
const chip = "absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-neutral-200 backdrop-blur";

export default function ApiShowcase() {
    const ref = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);
    const [spoken, setSpoken] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [picked, setPicked] = useState(false);
    const topic = TOPICS[active];

    useEffect(() => { import("@google/model-viewer"); }, []);

    // Start speaking the first time the showcase is on screen.
    useEffect(() => {
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) return setSpoken(Infinity);
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setPlaying(true); observer.disconnect(); }
        }, { threshold: 0.3 });
        observer.observe(ref.current!);
        return () => observer.disconnect();
    }, []);

    const done = spoken >= topic.words.length;
    const speaking = playing && !done;

    useEffect(() => {
        if (!playing) return;
        if (done) {
            if (picked) return;
            // Until the visitor picks a question, move on to the next one after a pause.
            const next = setTimeout(() => { setActive((i) => (i + 1) % TOPICS.length); setSpoken(0); }, 3500);
            return () => clearTimeout(next);
        }
        const pause = /[.,]$/.test(topic.words[spoken - 1] ?? "") ? 520 : 240;
        const timer = setTimeout(() => setSpoken((n) => n + 1), pause);
        return () => clearTimeout(timer);
    }, [playing, done, spoken, topic, picked]);

    function play(index: number) {
        setPicked(true);
        setActive(index);
        setSpoken(0);
        setPlaying(true);
    }

    const focus = !speaking ? null : spoken >= topic.photoAt ? "photo" : spoken >= topic.diagramAt ? "diagram" : "model";
    const ring = (name: string) => focus === name ? "border-violet-400/70 shadow-[0_0_40px_-8px] shadow-violet-500/50" : "border-white/10";

    return (
        <div ref={ref} className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900/80 to-neutral-950">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-3 border-b border-white/10 px-5 py-4 sm:px-7">
                <span className="text-xs font-medium uppercase tracking-widest text-neutral-500">Learner asks</span>
                <div className="flex flex-wrap gap-2">
                    {TOPICS.map(({ question }, i) => (
                        <button
                            key={question}
                            type="button"
                            onClick={() => play(i)}
                            aria-pressed={i === active}
                            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${i === active ? "border-violet-400/60 bg-violet-500/15 text-white" : "border-white/10 text-neutral-400 hover:border-white/25 hover:text-white"}`}
                        >
                            “{question}”
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid lg:grid-cols-[1fr_2fr]">
                <div className="border-b border-white/10 p-5 sm:p-7 lg:border-b-0 lg:border-r">
                    <div className="flex items-center gap-3">
                        <div aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center gap-[3px] rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500">
                            {[0.5, 0.9, 0.65, 1, 0.55].map((height, i) => (
                                <span key={i} className={`w-[3px] origin-center rounded-full bg-white ${speaking ? "animate-speak" : ""}`} style={{ height: `${height * 16}px`, animationDelay: `${i * 0.12}s` }} />
                            ))}
                        </div>
                        <p className="text-xs font-medium uppercase tracking-widest text-violet-300">{speaking ? "Explaining…" : "Spoken explanation"}</p>
                        <button
                            type="button"
                            onClick={() => play(active)}
                            disabled={speaking}
                            aria-label="Replay explanation"
                            className="ml-auto rounded-full border border-white/15 p-2 text-neutral-300 transition-opacity hover:text-white disabled:opacity-0"
                        >
                            <RotateCcw className="size-4" aria-hidden="true" />
                        </button>
                    </div>
                    <p className="mt-5 text-lg leading-relaxed sm:text-xl">
                        {topic.words.map((word, i) => (
                            <span key={i} className={`transition-colors duration-300 ${i < spoken ? "text-white" : "text-neutral-600"}`}>{word} </span>
                        ))}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3 sm:p-5">
                    {/* Plain wheel scrolls the page; pinch (ctrl+wheel) and touch still zoom the model. */}
                    <div
                        onWheelCapture={(e) => { if (!e.ctrlKey) e.stopPropagation(); }}
                        style={{ backgroundImage: `radial-gradient(circle at 50% 65%, ${topic.glow}, transparent 60%)` }}
                        className={`${panel} ${ring("model")} col-span-2 h-64 sm:h-80`}
                    >
                        <model-viewer
                            src={topic.model.src}
                            alt={topic.model.alt}
                            camera-orbit={topic.orbit}
                            camera-controls=""
                            auto-rotate=""
                            rotation-per-second="18deg"
                            interaction-prompt="none"
                            shadow-intensity="1"
                            loading="lazy"
                            style={{ width: "100%", height: "100%", background: "transparent" }}
                        >
                            {topic.labels.map(({ label, position, normal }, i) => (
                                <div key={`${topic.question}-${label}`} slot={`hotspot-${i}`} data-position={position} data-normal={normal} data-visibility-attribute="visible" className="model-label">
                                    <span>{label}</span>
                                </div>
                            ))}
                        </model-viewer>
                    </div>
                    <figure className={`${panel} ${ring("diagram")} flex h-40 items-center bg-white sm:h-56`}>
                        <Image src={topic.diagram.src} alt={topic.diagram.alt} width={1200} height={896} sizes="(max-width: 1023px) 50vw, 360px" className="h-auto max-h-full w-full object-contain" />
                        <figcaption className={chip}>Diagram</figcaption>
                    </figure>
                    <figure className={`${panel} ${ring("photo")} h-40 sm:h-56`}>
                        <Image src={topic.photo.src} alt={topic.photo.alt} fill sizes="(max-width: 1023px) 50vw, 360px" className="object-cover" />
                        <figcaption className={chip}>Photo</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
}
