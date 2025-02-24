import { Metadata } from "next";

export const generateMetadata = ({
    title = `${process.env.NEXT_PUBLIC_APP_NAME} | Home`,
    description = `Learn in 3D with AI - Experience the future of education with CuriosityXR.`,
    image = "/thumbnail.png",
    icons = [
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/icons/favicon-16x16.png"
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/icons/favicon-32x32.png"
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/icons/apple-touch-icon.png"
        },
        {
            rel: "android-chrome",
            sizes: "192x192",
            url: "/icons/android-chrome-192x192.png"
        },
        {
            rel: "android-chrome",
            sizes: "512x512",
            url: "/icons/android-chrome-512x512.png"
        }
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => {
    console.log('APP_NAME:', process.env.NEXT_PUBLIC_APP_NAME); // Debug log
    return {
        title,
        description,
        icons,
        manifest: "/icons/site.webmanifest",
        ...(noIndex && { robots: { index: false, follow: false } }),
    };
};
