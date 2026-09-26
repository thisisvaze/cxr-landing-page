"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";

interface AnimationContainerProps {
    children: ReactNode;
    className?: string;
    animation?: "fadeUp" | "fadeIn";
    delay?: number;
}

const AnimationContainer = ({
    children,
    className,
    animation = "fadeUp",
    delay = 0,
}: AnimationContainerProps) => {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            className={`reveal ${className ?? ""}`}
            initial={reduceMotion ? false : { opacity: 0, y: animation === "fadeIn" ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                duration: reduceMotion ? 0 : 0.55,
                delay: reduceMotion ? 0 : Math.min(delay * 0.2, 0.16),
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
};

export default AnimationContainer;
