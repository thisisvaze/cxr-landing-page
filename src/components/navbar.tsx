"use client";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import { useClickOutside } from "@/hooks";
import { cn } from "@/lib";
import { PROFILES } from "@/utils";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CSSProperties, useState } from "react";

// Progressive blur ramp (same build as the ViddyScribe navbar): each layer is a
// feathered band sliding down the strip, with blur rising a fixed step per layer.
// Feathered edges + even steps keep the ramp from reading as stripes.
const BLUR_LAYER_COUNT = 8;
const BLUR_STEP_PX = 1.5;
const BLUR_SEGMENT = 100 / (BLUR_LAYER_COUNT + 1);
const BLUR_LAYERS = Array.from({ length: BLUR_LAYER_COUNT }, (_, index) => {
    const [fadeIn, solidFrom, solidTo, fadeOut] = [index, index + 1, index + 2, index + 3]
        .map((step) => (step * BLUR_SEGMENT).toFixed(2));
    return {
        blur: (index + 1) * BLUR_STEP_PX,
        // Measured from the bottom, so the strongest blur sits under the nav row.
        mask: `linear-gradient(to top, transparent ${fadeIn}%, #000 ${solidFrom}%, #000 ${solidTo}%, transparent ${fadeOut}%)`,
    };
});

const Navbar = () => {
    const pathname = usePathname();
    const isApiPage = pathname === "/learning-api";
    const isTimeguest = pathname === "/timeguest";
    const links = isTimeguest ? [] : NAV_LINKS;
    const isActive = (link: (typeof NAV_LINKS)[number]) =>
        (link.match ?? [link.link]).some((path) => pathname === path || pathname.startsWith(`${path}/`));
    const ctaHref = isApiPage ? "#request-access" : isTimeguest ? PROFILES.timeguestStore : "https://vr.meta.me/s/2Rgf0BFArrcy5sf";
    const ctaLabel = isApiPage ? "Request API access" : isTimeguest ? "Wishlist on Meta Quest" : "Get on Meta Quest";
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Wraps the toggle too, so tapping X doesn't count as an outside click and reopen the menu.
    const ref = useClickOutside(() => setOpen(false));

    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 8));

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <span
                aria-hidden="true"
                className={cn(
                    "nav-progressive-blur pointer-events-none absolute inset-x-0 top-0 h-[calc(100%+2.5rem)] transition-opacity duration-300",
                    scrolled || open ? "opacity-100" : "opacity-0",
                )}
            >
                {BLUR_LAYERS.map((layer) => (
                    <span
                        key={layer.blur}
                        style={{ "--nav-blur": `${layer.blur}px`, "--nav-mask": layer.mask } as CSSProperties}
                    />
                ))}
            </span>

            <div ref={ref} className="relative">
                <div className="relative mx-auto flex h-16 w-full items-center justify-between px-4 lg:max-w-screen-xl lg:px-20">
                    <div className="flex items-center gap-6">
                        {isTimeguest ? (
                            <Link href="/timeguest" className="flex shrink-0 items-center gap-2">
                                <Image src="/images/timeguest/logo-mark.png" alt="" width={512} height={512} priority className="size-6" />
                                <span className="font-heading text-lg text-white">Timeguest</span>
                                <span className="hidden text-xs text-neutral-400 sm:inline">by CuriosityXR</span>
                            </Link>
                        ) : (
                            <Link href="/" className="shrink-0">
                                <Image src="/images/cxr-logo.png" alt="CuriosityXR" width={1079} height={274} priority className="h-8 w-auto" />
                            </Link>
                        )}

                        <nav className="hidden items-center gap-1 text-sm font-medium text-neutral-400 lg:flex">
                            {links.map((link) => (
                                <Link
                                    key={link.link}
                                    href={link.link}
                                    target={link.target}
                                    aria-current={isActive(link) ? "page" : undefined}
                                    className={cn(
                                        "rounded-full px-3.5 py-1.5 transition-colors hover:text-white",
                                        isActive(link) && "text-white",
                                    )}
                                >
                                    {link.name}
                                    {link.teaser && <span aria-hidden="true" className="ml-1.5 inline-block size-1.5 animate-pulse rounded-full bg-violet-400 align-middle shadow-[0_0_8px_2px] shadow-violet-500/60" />}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button asChild size="sm" className="magic-button">
                            <Link href={ctaHref} target={isApiPage ? undefined : "_blank"} onClick={() => setOpen(false)}>
                                <span className="relative z-10">{ctaLabel}</span>
                            </Link>
                        </Button>
                        {links.length > 0 && (
                            <button
                                type="button"
                                aria-label={open ? "Close menu" : "Open menu"}
                                aria-expanded={open}
                                aria-controls="mobile-nav"
                                onClick={() => setOpen((o) => !o)}
                                className="grid size-9 place-items-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
                            >
                                {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
                            </button>
                        )}
                    </div>
                </div>

                <AnimatePresence>
                    {open && (
                        <motion.nav
                            id="mobile-nav"
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            className="mx-4 flex flex-col gap-1 rounded-2xl border border-white/10 bg-neutral-900/90 p-2 shadow-xl backdrop-blur-xl lg:hidden"
                        >
                            {links.map((link) => (
                                <Link
                                    key={link.link}
                                    href={link.link}
                                    target={link.target}
                                    onClick={() => setOpen(false)}
                                    aria-current={isActive(link) ? "page" : undefined}
                                    className={cn(
                                        "rounded-xl px-4 py-3 text-neutral-400 transition-colors hover:bg-white/5 hover:text-white",
                                        isActive(link) && "text-white",
                                    )}
                                >
                                    {link.name}
                                    {link.teaser && <span aria-hidden="true" className="ml-1.5 inline-block size-1.5 animate-pulse rounded-full bg-violet-400 align-middle shadow-[0_0_8px_2px] shadow-violet-500/60" />}
                                </Link>
                            ))}
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;
