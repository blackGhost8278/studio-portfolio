"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
}

export default function GlowCard({
    children,
    className,
    glowColor = "rgba(99, 102, 241, 0.15)",
}: GlowCardProps) {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "group relative rounded-2xl border border-white/10 bg-background-elevated px-8 py-8 transition-smooth hover:border-white/20",
                className
            )}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${glowColor},
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
}
