"use client";

import Image from "next/image";
import { Mic, Sparkles } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import styles from "./summary.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const INSTANT = { duration: 0 };

// Soft rise + de-blur, staged so the question lands before Alex answers.
const bubble = (delay: number, instant: boolean): Variants => ({
    hidden: { opacity: 0, y: 12, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: instant ? INSTANT : { duration: 0.8, delay, ease: EASE } },
});

const SummaryScene = () => {
    const reduceMotion = !!useReducedMotion();

    return (
        <motion.figure
            className={styles.scene}
            aria-label="An illustration of exploring Saturn’s rings in mixed reality"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
            <motion.div
                className={styles.artwork}
                variants={{
                    hidden: { opacity: 0, scale: 1.04 },
                    show: { opacity: 1, scale: 1, transition: reduceMotion ? INSTANT : { duration: 1.2, ease: EASE } },
                }}
            >
                <Image
                    src="/images/illustrations/saturn-quest-alex.jpg"
                    alt="Mixed reality view of a living room: the learner holds an ice fragment from Saturn’s rings while Alex, the AI teacher in his cyan visor and green jacket, points at the rings"
                    width={1536}
                    height={1030}
                    sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) 55vw, 640px"
                    className={styles.image}
                />
                {/* Pulse on the ice chunk the learner is reaching for, once Alex says to pick one up */}
                <motion.span aria-hidden="true" className={styles.hotspot} variants={bubble(2.1, reduceMotion)} />
            </motion.div>

            <motion.div className={`${styles.bubble} ${styles.question}`} variants={bubble(0.5, reduceMotion)}>
                <span className={styles.speaker}>
                    <Mic aria-hidden="true" />
                    You
                    <motion.span
                        aria-hidden="true"
                        className={styles.wave}
                        variants={{ hidden: { opacity: 1 }, show: { opacity: 0, transition: reduceMotion ? INSTANT : { delay: 1.8, duration: 0.4 } } }}
                    >
                        <i /><i /><i /><i />
                    </motion.span>
                </span>
                <p>“What are Saturn’s rings made of?”</p>
            </motion.div>

            <motion.div className={`${styles.bubble} ${styles.answer}`} variants={bubble(1.6, reduceMotion)}>
                <span className={styles.speaker}>
                    <Sparkles aria-hidden="true" />
                    Alex
                </span>
                <p>Mostly ice, with a little rock and dust. Pick up a piece to look closer.</p>
            </motion.div>
        </motion.figure>
    );
};

export default SummaryScene;
