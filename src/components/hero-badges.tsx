import Link from "next/link";
import { PROFILES } from "@/utils";
import MetaLogo from "./ui/meta-logo";

const HeroBadges = () => {
    return (
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2.5 sm:gap-3.5">
            {/* Product Hunt Award Badge */}
            <Link
                href={PROFILES.productHunt}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CuriosityXR on Product Hunt: #3 Product of the Week in Education"
                className="group flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-xl bg-white border border-[#ea532a]/20 shadow-sm hover:border-[#ea532a]/50 hover:shadow-md hover:scale-[1.02] transition-all duration-200"
            >
                <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="size-5 sm:size-6 shrink-0 transition-transform duration-200 group-hover:scale-105"
                    fill="#EA532A"
                >
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201zm0-3.6c.995 0 1.801-.806 1.801-1.801 0-.993-.805-1.799-1.801-1.799h-3.405V12h3.405z" />
                </svg>
                <div className="flex flex-col text-left leading-tight">
                    <span className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-[#ea532a]">
                        #3 Product of the Week
                    </span>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#ea532a] tracking-tight">
                        Education
                    </span>
                </div>
            </Link>

            {/* Meta Quest Store Badge */}
            <Link
                href={PROFILES.metaStore}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CuriosityXR: AI Tutor and 1M+ 3D Models on Meta Quest Store"
                className="group flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-xl bg-gradient-to-r from-[#fffbf7] via-white to-[#edf6ff] border border-[#0081fb]/25 shadow-sm hover:border-[#0081fb]/60 hover:shadow-md hover:scale-[1.02] transition-all duration-200"
            >
                <MetaLogo className="w-5 sm:w-6 h-auto shrink-0 text-[#0081FB] transition-transform duration-200 group-hover:scale-105" />
                <div className="flex flex-col text-left leading-tight">
                    <span className="text-xs sm:text-[13px] font-semibold text-neutral-900 tracking-tight">
                        AI Tutor + 1M 3D Models
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-medium text-neutral-600">
                        on Meta Quest Store
                    </span>
                </div>
            </Link>
        </div>
    );
};

export default HeroBadges;
