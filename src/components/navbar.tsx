"use client";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import { useClickOutside } from "@/hooks";
import GlassSurface from "@/components/ui/GlassSurface";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { RefObject, useRef, useState } from "react";
import AnimationContainer from "./global/animation-container";
import Icons from "./global/icons";
import Wrapper from "./global/wrapper";

const Navbar = () => {

    const ref = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState<boolean>(false);

    const mobileMenuRef = useClickOutside(() => {
        if (open) setOpen(false);
    });

    const { scrollY } = useScroll({
        target: ref as RefObject<HTMLDivElement>,
        offset: ["start start", "end start"],
    });

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <header className="fixed w-full top-6 inset-x-0 z-50">
            {/* Desktop */}
            <motion.div
                style={{
                    width: "min(90vw, 820px)",
                }}
                className="hidden lg:flex self-start items-center justify-between relative z-[50] mx-auto"
            >
                <GlassSurface
                    width="100%"
                    height="auto"
                    borderRadius={50}
                    borderWidth={0.05}
                    brightness={45}
                    opacity={0.85}
                    blur={12}
                    displace={1.2}
                    backdropBlur={24}
                    backgroundOpacity={visible ? 0.6 : 0.35}
                    saturation={1.8}
                    distortionScale={-32}
                    redOffset={0}
                    greenOffset={2}
                    blueOffset={4}
                    className="w-full border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.36)]"
                    contentClassName="!p-0 w-full"
                >
                    <Wrapper className="flex items-center justify-between lg:px-4 py-2 w-full">
                        <AnimationContainer animation="fadeIn">
                            <Link href="/" className="flex items-center gap-2">
                                <Icons.logo className="w-max h-5 !my-2" />
                                <span className="text-base font-medium ml-2">CuriosityXR</span>
                            </Link>
                        </AnimationContainer>

                        <div className="hidden lg:flex flex-row flex-1 absolute inset-0 items-center justify-center w-max mx-auto gap-x-2 text-sm text-muted-foreground font-medium pointer-events-none">
                            <AnimatePresence>
                                {NAV_LINKS.map((link, index) => (
                                    <AnimationContainer
                                        key={index}
                                        animation="fadeIn"
                                        delay={0.1 * index}
                                    >
                                        <div className="relative pointer-events-auto">
                                            <Link href={link.link} target={link.target} className="hover:text-foreground transition-all duration-200 hover:bg-accent rounded-md px-4 py-2">
                                                {link.name}
                                            </Link>
                                        </div>
                                    </AnimationContainer>
                                ))}
                            </AnimatePresence>
                        </div>

                        <AnimationContainer animation="fadeIn" delay={0.1}>
                            <div className="flex items-center gap-x-4">
                                <Link href="https://vr.meta.me/s/2Rgf0BFArrcy5sf" target="_blank">
                                    <Button size="sm" className="magic-button">
                                        <span className="relative z-10">Get on Meta Quest</span>
                                    </Button>
                                </Link>
                            </div>
                        </AnimationContainer>
                    </Wrapper>
                </GlassSurface>
            </motion.div>

            {/* Mobile */}
            <div className="flex relative flex-col lg:hidden w-11/12 mx-auto z-50">
                <GlassSurface
                    width="100%"
                    height="auto"
                    borderRadius={open ? 16 : 32}
                    borderWidth={0.05}
                    brightness={45}
                    opacity={0.85}
                    blur={12}
                    displace={1.2}
                    backdropBlur={24}
                    backgroundOpacity={visible ? 0.65 : 0.4}
                    saturation={1.8}
                    distortionScale={-28}
                    redOffset={0}
                    greenOffset={2}
                    blueOffset={4}
                    className="w-full border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.36)]"
                    contentClassName="!p-0 w-full"
                >
                    <Wrapper className="flex items-center justify-between px-4 py-3 w-full">
                        <div className="flex items-center justify-between gap-x-4 w-full">
                            <AnimationContainer animation="fadeIn" delay={0.1}>
                                <Link href="/" className="flex items-center gap-2">
                                    <span className="text-base font-medium ml-2">CuriosityXR</span>
                                </Link>
                            </AnimationContainer>

                            <AnimationContainer animation="fadeIn" delay={0.1}>
                                <div className="flex items-center justify-center gap-x-4">
                                    <Button size="sm" className="magic-button">
                                        <Link href="https://vr.meta.me/s/2Rgf0BFArrcy5sf" target="_blank" className="flex items-center">
                                            <span className="relative z-10">Get on Meta Quest</span>
                                        </Link>
                                    </Button>
                                    {NAV_LINKS.length > 0 && (open ? (
                                        <XIcon
                                            className="text-black dark:text-white"
                                            onClick={() => setOpen(!open)}
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="text-black dark:text-white"
                                            onClick={() => setOpen(!open)}
                                        />
                                    ))}
                                </div>
                            </AnimationContainer>
                        </div>
                    </Wrapper>
                </GlassSurface>

                <AnimatePresence>
                    {open && NAV_LINKS.length > 0 && (
                        <motion.div
                            ref={mobileMenuRef}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex rounded-b-xl absolute top-16 bg-neutral-950 inset-x-0 z-50 flex-col items-start justify-start gap-2 w-full px-4 py-8 shadow-xl shadow-neutral-950"
                        >
                            {NAV_LINKS.map((navItem, idx) => (
                                <AnimationContainer
                                    key={`link=${idx}`}
                                    animation="fadeIn"
                                    delay={0.1 * (idx + 1)}
                                    className="w-full"
                                >
                                    <Link
                                        href={navItem.link}
                                        target={navItem.target}
                                        onClick={() => setOpen(false)}
                                        className="relative text-neutral-300 hover:bg-neutral-800 w-full px-4 py-2 rounded-lg"
                                    >
                                        <motion.span>{navItem.name}</motion.span>
                                    </Link>
                                </AnimationContainer>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;
