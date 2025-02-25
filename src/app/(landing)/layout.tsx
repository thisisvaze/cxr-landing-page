import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full relative">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
};
