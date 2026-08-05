import { Toaster } from "@/components/ui/sonner";
import StructuredData from "@/components/global/structured-data";
import { architectsDaughter, base, heading } from "@/constants/fonts";
import { cn } from "@/lib";
import "./globals.css";
import { APP_NAME, DEFAULT_TITLE, generateMetadata } from "@/utils";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
    ...generateMetadata(),
    title: {
        default: DEFAULT_TITLE,
        template: `%s | ${APP_NAME}`,
    },
};

export const viewport = {
    themeColor: "#101010",
    colorScheme: "dark",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/icons/favicon-32x32.png" />
                <StructuredData />
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
                <Analytics />
            </body>
        </html>
    );
};
