import Image from "next/image";
import Link from "next/link";
import { Mic } from "lucide-react";
import AnimationContainer from "./global/animation-container";
import { Button } from "./ui/button";
import { FlickeringGrid } from "./ui/flickering-grid";
import { PROFILES } from "@/utils";

// [cx, cy, rx, ry, rotate] per leaf, along a left-hand branch
const LEAVES = [
    [7.2, 9, 2, 4.4, -30], [12.4, 10, 1.8, 4, 35],
    [4.6, 17, 2, 4.4, -50], [10.4, 18, 1.8, 4, 25],
    [4.2, 26, 2, 4.4, -70], [10.6, 27, 1.8, 4, 15],
    [7, 34, 2, 4.2, -85], [13, 35.5, 1.7, 3.8, 5],
];

const Laurel = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 22 44" aria-hidden="true" fill="currentColor" className={className}>
        <path d="M17 42 C 6 36, 3 22, 9 4" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        {LEAVES.map(([cx, cy, rx, ry, r]) => (
            <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx={rx} ry={ry} transform={`rotate(${r} ${cx} ${cy})`} />
        ))}
    </svg>
);

const FilledIcon = ({ d }: { d: string }) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="size-5"><path d={d} /></svg>
);

const AS_SEEN_IN = [
    { label: "IEEE Xplore", href: PROFILES.researchPaper, icon: null },
    { label: "Product Hunt", href: PROFILES.productHunt, icon: <FilledIcon d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201zm0-3.6c.995 0 1.801-.806 1.801-1.801 0-.993-.805-1.799-1.801-1.799h-3.405V12h3.405z" /> },
    { label: "VR in Education", href: PROFILES.podcast, icon: <Mic aria-hidden="true" className="size-5" /> },
    { label: "Meta Quest", href: PROFILES.metaStore, icon: <FilledIcon d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" /> },
];

const CTA = () => {
    return (
        <section className="w-full py-20 lg:py-32">
            <div className="flex flex-col items-center text-center relative gap-4 py-16 lg:py-24 overflow-hidden z-0">
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101010] w-full h-1/2 z-10 pointer-events-none"></div>

                <AnimationContainer animation="fadeIn" delay={0.2} className="w-full mx-auto pointer-events-none">
                    <div className="absolute -top-1/2 inset-x-0 mx-auto bg-primary/40 rounded-full size-1/2 blur-[4rem] lg:blur-[8rem]"></div>
                </AnimationContainer>

                <AnimationContainer animation="fadeIn" delay={0.3} className="pointer-events-none">
                    <div className="absolute top-0 w-4/5 mx-auto inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </AnimationContainer>

                <AnimationContainer animation="fadeIn" delay={0.2}>
                    <FlickeringGrid
                        className="absolute inset-0 -z-10 h-full w-[120%] pointer-events-none"
                        squareSize={4}
                        gridGap={6}
                        color="#525252"
                        maxOpacity={0.15}
                        flickerChance={0.1}
                        height={600}
                    />
                </AnimationContainer>

                <div className="flex flex-col items-center justify-center w-full z-30 px-4">
                    <AnimationContainer animation="fadeUp" delay={0.2} className="w-24 sm:w-28 mb-6">
                        <Image
                            src="/images/cxr_sticker.png"
                            alt="CuriosityXR, the #1 AI learning app on Meta Quest"
                            width={300}
                            height={300}
                            className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
                        />
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.3} className="mb-8 sm:mb-10">
                        <div className="flex items-center gap-2.5">
                            <Laurel className="w-6 h-12 shrink-0 text-white/50" />
                            <div className="flex flex-col leading-tight">
                                <span className="font-heading text-[15px] font-semibold tracking-tight text-white">
                                    #1 AI Learning App
                                </span>
                                <span className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-400">
                                    Meta Quest Store
                                </span>
                            </div>
                            <Laurel className="w-6 h-12 shrink-0 text-white/50 -scale-x-100" />
                        </div>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.4}>
                        <h2 className="type-display">
                            Experience the future. Today.
                        </h2>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.5}>
                        <p className="type-lead max-w-md mx-auto mt-5">
                            Step inside mixed reality with the power of voice and interactive spatial AI.
                        </p>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.6}>
                        <div className="flex flex-col items-center mt-10">
                            <Button asChild className="magic-button rounded-full px-8 py-5 text-base shadow-xl">
                                <Link href="https://vr.meta.me/s/2Rgf0BFArrcy5sf" target="_blank" rel="noopener noreferrer">
                                    <span className="relative z-10">Get on Meta Quest</span>
                                </Link>
                            </Button>
                            <p className="text-xs sm:text-sm text-neutral-400 font-medium mt-3">
                                For Meta Quest &amp; Meta VR glasses
                            </p>
                        </div>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.7}>
                        <div className="mt-14 flex flex-col items-center gap-4">
                            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">As seen in</span>
                            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                                {AS_SEEN_IN.map(({ label, href, icon }) => (
                                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-400 transition-colors hover:text-white">
                                        {icon}
                                        <span className={icon ? "text-sm font-semibold tracking-tight" : "font-serif text-base font-bold tracking-wide"}>{label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </AnimationContainer>
                </div>
            </div>
        </section>
    );
};

export default CTA;
