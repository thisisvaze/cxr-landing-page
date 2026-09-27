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

const MODEL_URL = "https://storage.googleapis.com/cxr_3d_models/models/590d56ceb7ec467c83b67c3f3a98a773.glb";
const SPEECH = "Think of a volcano as Earth’s pressure valve. Deep underground, melted rock called magma collects in a chamber. It’s lighter than the rock around it, so it rises through the conduit. When the pressure gets too high, it bursts out as lava, ash, and gas.";
const WORDS = SPEECH.split(" ");
// Each panel lights up while the explanation is talking about it.
const DIAGRAM_AT = WORDS.indexOf("Deep");
const PHOTO_AT = WORDS.indexOf("bursts");

const panel = "relative overflow-hidden rounded-2xl border transition-[border-color,box-shadow] duration-500";
const chip = "absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-neutral-200 backdrop-blur";

export default function ApiShowcase() {
    const ref = useRef<HTMLDivElement>(null);
    const [spoken, setSpoken] = useState(0);
    const [playing, setPlaying] = useState(false);

    useEffect(() => { import("@google/model-viewer"); }, []);

    // Start speaking the first time the showcase is on screen.
    useEffect(() => {
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) return setSpoken(WORDS.length);
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setPlaying(true); observer.disconnect(); }
        }, { threshold: 0.3 });
        observer.observe(ref.current!);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!playing) return;
        if (spoken >= WORDS.length) return setPlaying(false);
        const pause = /[.,]$/.test(WORDS[spoken - 1] ?? "") ? 520 : 240;
        const timer = setTimeout(() => setSpoken((n) => n + 1), pause);
        return () => clearTimeout(timer);
    }, [playing, spoken]);

    const focus = !playing ? null : spoken >= PHOTO_AT ? "photo" : spoken >= DIAGRAM_AT ? "diagram" : "model";
    const ring = (name: string) => focus === name ? "border-violet-400/70 shadow-[0_0_40px_-8px] shadow-violet-500/50" : "border-white/10";

    return (
        <div ref={ref} className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900/80 to-neutral-950">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-white/10 px-5 py-4 sm:px-7">
                <span className="text-xs font-medium uppercase tracking-widest text-neutral-500">Learner asks</span>
                <p className="text-lg text-white">“How does a volcano work?”</p>
            </div>

            <div className="grid lg:grid-cols-[1fr_2fr]">
                <div className="border-b border-white/10 p-5 sm:p-7 lg:border-b-0 lg:border-r">
                    <div className="flex items-center gap-3">
                        <div aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center gap-[3px] rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500">
                            {[0.5, 0.9, 0.65, 1, 0.55].map((height, i) => (
                                <span key={i} className={`w-[3px] origin-center rounded-full bg-white ${playing ? "animate-speak" : ""}`} style={{ height: `${height * 16}px`, animationDelay: `${i * 0.12}s` }} />
                            ))}
                        </div>
                        <p className="text-xs font-medium uppercase tracking-widest text-violet-300">{playing ? "Explaining…" : "Spoken explanation"}</p>
                        <button
                            type="button"
                            onClick={() => { setSpoken(0); setPlaying(true); }}
                            disabled={playing}
                            aria-label="Replay explanation"
                            className="ml-auto rounded-full border border-white/15 p-2 text-neutral-300 transition-opacity hover:text-white disabled:opacity-0"
                        >
                            <RotateCcw className="size-4" aria-hidden="true" />
                        </button>
                    </div>
                    <p className="mt-5 text-lg leading-relaxed sm:text-xl">
                        {WORDS.map((word, i) => (
                            <span key={i} className={`transition-colors duration-300 ${i < spoken ? "text-white" : "text-neutral-600"}`}>{word} </span>
                        ))}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3 sm:p-5">
                    <div className={`${panel} ${ring("model")} col-span-2 h-64 bg-[radial-gradient(circle_at_50%_65%,rgba(249,115,22,0.22),transparent_60%)] sm:h-80`}>
                        <model-viewer
                            src={MODEL_URL}
                            alt="3D volcano with glowing magma channels running down its slopes"
                            camera-controls=""
                            auto-rotate=""
                            rotation-per-second="18deg"
                            disable-zoom=""
                            interaction-prompt="none"
                            shadow-intensity="1"
                            loading="lazy"
                            style={{ width: "100%", height: "100%", background: "transparent" }}
                        />
                        <span className={chip}>3D model · drag to rotate</span>
                    </div>
                    <figure className={`${panel} ${ring("diagram")} flex h-40 items-center bg-white sm:h-56`}>
                        <Image src="/images/api/volcano-diagram.jpg" alt="Labeled cross-section of a volcano: ash cloud and gas, crater, vent, lava flow, layers of ash and lava, conduit, magma chamber, and crust" width={1200} height={896} sizes="(max-width: 1023px) 50vw, 360px" className="h-auto max-h-full w-full object-contain" />
                        <figcaption className={chip}>Diagram</figcaption>
                    </figure>
                    <figure className={`${panel} ${ring("photo")} h-40 sm:h-56`}>
                        <Image src="/images/api/mount-st-helens-1980.jpg" alt="Mount St. Helens erupting on May 18, 1980, with a tall ash column above the summit" fill sizes="(max-width: 1023px) 50vw, 360px" className="object-cover object-[center_65%]" />
                        <figcaption className={chip}>Photo</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
}
