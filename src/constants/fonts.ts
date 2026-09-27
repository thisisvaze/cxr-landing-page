import { Inter, Sora } from "next/font/google";


export const base = Inter({
    subsets: ["latin"],
    variable: "--font-base",
});

export const heading = Sora({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-heading",
});
