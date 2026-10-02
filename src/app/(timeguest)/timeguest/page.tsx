/* Hallmark · macrostructure: Bento Grid (photographic hero) · genre: playful · theme: CuriosityXR site system (preserved)
 * tone: warm, curious · nav/footer: site chrome (preserved) · enrichment: Tier C generated stills (Nano Banana Pro)
 */
import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/faq";
import AnimationContainer from "@/components/global/animation-container";
import PageSchema from "@/components/global/page-schema";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import MetaLogo from "@/components/ui/meta-logo";
import { TIMEGUEST_FAQS } from "@/constants/page-faqs";
import { PROFILES, generateMetadata as buildMetadata } from "@/utils";

const PATH = "/timeguest";
const TITLE = "Timeguest: Talk to Historical Figures";
const DESCRIPTION =
    "Timeguest brings history's greatest minds into your home in mixed reality on Meta Quest and Meta VR Glasses. Ask them anything, out loud.";

export const metadata = buildMetadata({
    title: `${TITLE} in Mixed Reality`,
    description: DESCRIPTION,
    path: PATH,
    image: "/images/timeguest/og.jpg",
    keywords: [
        "talk to historical figures",
        "AI historical figures",
        "talk to historical figures AI",
        "historical figures app",
        "talk to famous people AI",
        "AI history app",
        "mixed reality history app",
        "Meta Quest history app",
    ],
});

const QUESTIONS = ["What was your biggest mistake?", "What would you make of the internet?", "Can you show me how it works?"];
const REMEMBERED = ["Knows basic algebra", "Loves anything about space", "Visiting Florence in June"];
const DEVICES = ["Meta Quest 3", "Meta Quest 3S", "Meta VR Glasses"];

const Chips = ({ items, quoted = false }: { items: string[]; quoted?: boolean }) => (
    <ul className="mt-auto flex flex-wrap gap-2 pt-2 text-sm text-neutral-200">
        {items.map((item) => (
            <li key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                {quoted ? <>&ldquo;{item}&rdquo;</> : item}
            </li>
        ))}
    </ul>
);

const Tile = ({ title, body, image, alt, focus = "object-center", className, children }: {
    title: string;
    body: string;
    image?: string;
    alt?: string;
    focus?: string;
    className: string;
    children?: React.ReactNode;
}) => (
    <AnimationContainer animation="fadeUp" delay={0.1} className={className}>
        <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60">
            {image && (
                <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={image} alt={alt ?? ""} fill sizes="(max-width: 1024px) 100vw, 60vw" className={`object-cover ${focus}`} />
                </div>
            )}
            <div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
                <h3 className="font-heading text-xl text-white md:text-2xl">{title}</h3>
                <p className="max-w-prose text-base leading-relaxed text-neutral-300">{body}</p>
                {children}
            </div>
        </article>
    </AnimationContainer>
);

const WishlistButton = () => (
    <Button asChild className="magic-button h-11 px-6">
        <Link href={PROFILES.timeguestStore} target="_blank" rel="noopener noreferrer">
            <span className="relative z-10">Wishlist on Meta Quest</span>
        </Link>
    </Button>
);

const TimeguestPage = () => (
    <div className="w-full relative flex flex-col">
        <PageSchema
            path={PATH}
            name={TITLE}
            description={DESCRIPTION}
            breadcrumb="Timeguest"
            faqs={TIMEGUEST_FAQS}
        />

        {/* Hero: the photograph carries the page; copy sits in the lower-left corner. */}
        <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden">
            <Image
                src="/images/timeguest/leonardo.jpg"
                alt="Mixed reality view of a sunlit living room: a Renaissance guest gestures at a 3D model of a flying machine hovering by the window as the viewer reaches toward it"
                fill
                priority
                sizes="100vw"
                className="-z-10 object-cover object-[30%_center]"
            />
            <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#101010] via-[#101010]/55 to-[#101010]/10" />
            <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101010]/70 via-transparent to-transparent" />
            <Wrapper className="pb-14 pt-40 md:pb-20">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <div className="flex max-w-xl flex-col items-start gap-5 text-left">
                        <p className="flex items-center gap-2 text-sm font-medium text-neutral-200">
                            <MetaLogo className="h-auto w-6 shrink-0 text-[#0081FB]" />
                            Coming soon to Meta Quest and Meta VR Glasses
                        </p>
                        <h1 className="type-display text-balance [overflow-wrap:anywhere]">
                            History&apos;s greatest minds, visiting your home
                        </h1>
                        <p className="type-lead max-w-lg">
                            Four guests from the past are coming to visit. Meet them in your own room, in mixed reality,
                            and ask them anything out loud.
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            <WishlistButton />
                            <Button asChild variant="outline" className="h-11 border-white/20 bg-transparent px-6">
                                <Link href="#features">See how it works</Link>
                            </Button>
                        </div>
                    </div>
                </AnimationContainer>
            </Wrapper>
        </section>

        {/* Features: what a visit is like */}
        <Wrapper className="py-20 md:py-28">
            <div id="features" className="flex scroll-mt-24 flex-col gap-10">
                <AnimationContainer animation="fadeUp" delay={0.1}>
                    <div className="flex max-w-2xl flex-col gap-3">
                        <h2 className="type-heading">What a visit feels like</h2>
                        <p className="type-lead">No lessons and no menus. A guest from the past, your own room, and your questions.</p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
                    <Tile
                        className="lg:col-span-7"
                        image="/images/timeguest/newton.jpg"
                        alt="Mixed reality view of a modern loft home office: a guest in a 17th-century wig splits sunlight into a rainbow with a glass prism while an apple arcs through the air"
                        title="They visit your real room"
                        body="Guests appear in mixed reality at life size, standing in your own home and lit by your room's light."
                    />
                    <Tile
                        className="lg:col-span-5"
                        image="/images/timeguest/portrait-ramanujan.jpg"
                        alt="A young guest in an early-1900s suit in a modern apartment with a terrazzo floor, a spiral of glowing tiles beside him"
                        focus="object-[center_22%]"
                        title="Ask anything, out loud"
                        body="Talk the way you would to a curious friend. Change the subject, ask what they make of today's world, or ask for a different guest."
                    >
                        <Chips items={QUESTIONS} quoted />
                    </Tile>
                    <Tile
                        className="lg:col-span-5"
                        image="/images/timeguest/portrait-leonardo.jpg"
                        alt="A guest with a long grey beard and a Renaissance cap in a bright Japandi-style living room"
                        focus="object-[center_18%]"
                        title="They remember you"
                        body="Your guests recall what you talked about, what you already know and what you're curious about, then pick up where you left off."
                    >
                        <Chips items={REMEMBERED} />
                    </Tile>
                    <Tile
                        className="lg:col-span-7"
                        image="/images/timeguest/curie.jpg"
                        alt="Mixed reality view of a modern kitchen in the evening: a guest in an early-1900s dress explains a glowing 3D atom above the kitchen island while the viewer pinches it"
                        title="Ideas appear around you"
                        body="3D models, maps, diagrams and timelines show up on your table and walls as your guest explains, so you can walk around an idea instead of reading about it."
                    />
                    <Tile
                        className="lg:col-span-6"
                        title="Just your hands and voice"
                        body="No controllers and no menus to learn. Look, point and talk."
                    >
                        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                            <MetaLogo className="h-auto w-7 shrink-0 text-[#0081FB]" />
                            <Chips items={DEVICES} />
                        </div>
                    </Tile>
                    <Tile
                        className="lg:col-span-6"
                        title="Honest about history"
                        body="Guests are AI recreations made for learning, and they say so if you ask. They flag what history is unsure of and never invent quotes. Like any AI they can slip, so check important facts."
                    />
                </div>
            </div>
        </Wrapper>

        <section className="w-full">
            <FAQ
                items={TIMEGUEST_FAQS}
                heading="Timeguest, answered"
                intro="Who the guests are, how accurate they are, and what you need to talk to them."
            />
        </section>

        {/* Closing card: the ask, then the whole cast visiting someone in a Quest 3 */}
        <Wrapper className="pb-20 md:pb-28">
            <AnimationContainer animation="fadeUp" delay={0.1}>
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
                    <div className="relative z-10 flex flex-col items-center gap-5 px-6 pb-10 pt-14 text-center md:pb-12 md:pt-20">
                        <h2 className="type-display text-balance">Who will you invite first?</h2>
                        <p className="type-lead max-w-lg text-balance">Wishlist Timeguest and Meta will tell you the moment it launches.</p>
                        <WishlistButton />
                    </div>
                    <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
                        <Image
                            src="/images/timeguest/guests.jpg"
                            alt="A person wearing a Meta Quest 3 sits on a sofa in a mid-century modern living room, talking with four guests from history"
                            fill
                            sizes="(max-width: 1280px) 100vw, 1280px"
                            className="object-cover object-[35%_center]"
                        />
                        <div aria-hidden className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-neutral-900 to-transparent" />
                    </div>
                </div>
            </AnimationContainer>
        </Wrapper>
    </div>
);

export default TimeguestPage;
