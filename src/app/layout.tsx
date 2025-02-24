import { Toaster } from "@/components/ui/sonner";
import { architectsDaughter, base, heading } from "@/constants/fonts";
import { cn } from "@/lib";
import "./globals.css";
import { generateMetadata } from "@/utils";

export const metadata = generateMetadata({
    title: `${process.env.NEXT_PUBLIC_APP_NAME} | Home`,
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/icons/favicon-32x32.png" />
            </head>
            <body
                className={cn(
                    "min-h-screen bg-[#101010] text-foreground font-base antialiased overflow-x-hidden dark",
                    base.variable,
                    heading.variable,
                    architectsDaughter.variable,
                )}
            >
                <Toaster richColors theme="dark" position="bottom-center" />
                {children}
            </body>
        </html>
    );
};
