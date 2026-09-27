"use client";

import { animate, motion, useMotionTemplate, useMotionValue } from "motion/react";
import React from "react";

import { cn } from "@/lib";

const SIZE = 320; // spotlight radius in px

// Hover spotlight painted in the card's own background: a faint violet wash inside,
// and a brighter violet glow showing through the card's semi-transparent border.
export function MagicCard({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const o = useMotionValue(0);

  const background = useMotionTemplate`
    radial-gradient(${SIZE}px circle at ${x}px ${y}px, rgb(167 139 250 / calc(${o} * 0.1)), transparent 100%) padding-box,
    linear-gradient(#0b0b0c, #0b0b0c) padding-box,
    radial-gradient(${SIZE}px circle at ${x}px ${y}px, rgb(196 181 253 / calc(${o} * 0.9)), transparent 60%) border-box
  `;

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - left);
    y.set(e.clientY - top);
  };

  return (
    <motion.div
      onPointerMove={onPointerMove}
      onPointerEnter={(e) => e.pointerType === "mouse" && animate(o, 1, { duration: 0.3 })}
      onPointerLeave={() => animate(o, 0, { duration: 0.4 })}
      style={{ background }}
      className={cn("group relative flex w-full flex-col overflow-hidden rounded-2xl", className)}
    >
      {children}
    </motion.div>
  );
}
