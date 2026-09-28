import Link from "next/link";
import Navbar from "@/components/navbar";
import Wrapper from "@/components/global/wrapper";

// Timeguest is its own brand: the shared navbar switches to it on /timeguest, and the footer credits CuriosityXR.
export default function TimeguestLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full relative">
            <Navbar />
            {children}
            <footer className="border-t border-white/10">
                <Wrapper className="flex flex-col gap-4 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
                    <p>
                        © {new Date().getFullYear()} Timeguest by{" "}
                        <Link href="/" className="text-neutral-300 transition-colors hover:text-white">CuriosityXR</Link>
                        {" "}· Toronto, Canada
                    </p>
                    <nav className="flex flex-wrap gap-x-5 gap-y-2">
                        <Link href="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link>
                        <a href="mailto:support@curiosityxr.com" className="transition-colors hover:text-white">support@curiosityxr.com</a>
                    </nav>
                </Wrapper>
            </footer>
        </main>
    );
}
