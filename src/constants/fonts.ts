import { Architects_Daughter, Fjalla_One, Inter, Sora } from "next/font/google";


export const base = Inter({
    subsets: ["latin"],
    variable: "--font-base",
});

export const heading = Sora({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-heading",
});

export const architectsDaughter = Architects_Daughter({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-architects-daughter",
});
