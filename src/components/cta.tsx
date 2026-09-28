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

// IEEE mark and wordmark (public-domain SVG on Wikimedia Commons), tagline removed.
const IeeeLogo = () => (
    <svg viewBox="0 0 61.61 17.2" aria-hidden="true" fill="currentColor" className="h-3.5 w-auto"><path d="M20.59 2.5h3.75v13.54h-3.75zm0 0M26.3 16.04V2.5h10.33v2.62h-6.57v2.8h6.04v2.63h-6.04v2.87h6.57v2.62zm0 0M38.73 16.04V2.5h10.31v2.62h-6.56v2.8h6.04v2.63h-6.04v2.87h6.56v2.62zm0 0M51.15 16.04V2.5h10.31v2.62H54.9v2.8h6.04v2.63H54.9v2.87h6.56v2.62zm0 0M8.55 2.65c.6-.47 1.35-.08 1.85.35.53.4 1.08.86 1.56 1.33l.09.05a25.93 25.93 0 0 1 3.6 4.06c.16.26.3.55.21.88-.34.85-1.03 1.53-1.63 2.27A27.5 27.5 0 0 1 10 15.44c-.32.22-.74.42-1.11.25-1.13-.6-2.1-1.57-3.08-2.46a21.34 21.34 0 0 1-3.18-3.61c-.13-.18-.17-.4-.17-.65.12-.45.42-.82.72-1.2a29.6 29.6 0 0 1 3.56-3.7l.14-.11c.54-.48 1.09-.9 1.66-1.31m1.75-1.37L9.63.32C9.54.27 9.44.2 9.35.16c-.2-.08-.42.02-.58.15L7.55 1.9A33 33 0 0 1 .7 8.34c-.2.16-.5.31-.56.57-.07.23.06.43.2.57a33.35 33.35 0 0 1 5.7 4.96c.31.32.56.64.86.95.51.67 1.1 1.35 1.57 2.07.15.16.17.4.4.48.18.06.4.1.57 0l.17-.17a33.9 33.9 0 0 1 7.75-7.82c.3-.27.87-.36.88-.86a.78.78 0 0 0-.35-.58h-.05a30.13 30.13 0 0 1-4.31-3.57L12.05 3.4c-.6-.67-1.19-1.41-1.75-2.12M8.77 3.02c.61-.42 1.16.16 1.63.5a24.66 24.66 0 0 1 4.88 5.07c.17.24.24.62.1.9-.35.57-.8 1.1-1.24 1.62v.03a32.86 32.86 0 0 1-3.49 3.33c-.6.37-1.16 1.18-1.94.68a28.14 28.14 0 0 1-4.93-4.65c-.24-.39-.62-.7-.8-1.13-.23-.58.3-1 .6-1.45 1.46-1.81 3.3-3.6 5.19-4.9m.39 1.2-.17.52-.83 2.39c.2.02.47 0 .67.02v.02l-.12 2.7.02.02c.27.03.6.04.87 0v-.05l-.11-2.61.02-.09.73-.01c-.37-.97-.72-1.94-1.06-2.92ZM6.33 7.93c-.47.24-1.15.6-1.08 1.23.1.35.48.58.78.72 1.65.73 3.85.75 5.6.21.42-.17 1-.4 1.08-.94 0-.43-.46-.7-.8-.87v-.02c.12-.05.25-.1.37-.1v-.02c-.58-.1-1.15-.25-1.71-.4.1.25.18.5.27.77.18-.06.35-.1.53-.12.3.11.73.28.77.65.04.35-.35.52-.59.66a6.85 6.85 0 0 1-4.06.16c-.36-.12-.9-.27-.94-.74.26-.61.94-.74 1.5-.9-.29-.18-.58-.35-.87-.56-.3.02-.58.15-.85.27m2.36 2.69c-.05.96-.06 1.84-.13 2.8.38.03.8.07 1.2.01l-.11-2.67-.02-.13c-.31.01-.6.02-.94-.01" /></svg>
);

const AS_SEEN_IN = [
    { label: "IEEE", href: PROFILES.researchPaper, icon: <IeeeLogo />, logoOnly: true },
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
                            alt="CuriosityXR sticker"
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
                                    #3 Product of the Week
                                </span>
                                <span className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-400">
                                    Product Hunt · Education
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
                                {AS_SEEN_IN.map(({ label, href, icon, logoOnly }) => (
                                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={logoOnly ? label : undefined} className="flex items-center gap-2 text-neutral-400 transition-colors hover:text-white">
                                        {icon}
                                        {!logoOnly && <span className="text-sm font-semibold tracking-tight">{label}</span>}
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
