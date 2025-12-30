"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { Code2, Play, MousePointer2, Move, Type } from "lucide-react";

export type CursorType = "default" | "web" | "iptv" | "3d" | "text" | "link";

export default function CustomCursor() {
    const [cursorType, setCursorType] = useState<CursorType>("default");
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor") as CursorType;

            if (cursorAttr) {
                setCursorType(cursorAttr);
            } else if (target.closest("a") || target.closest("button")) {
                setCursorType("link");
            } else {
                setCursorType("default");
            }
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [isVisible, mouseX, mouseY]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
            }}
        >
            <motion.div
                animate={{
                    scale: cursorType === "default" ? 1 : 1.5,
                    width: cursorType === "default" ? 10 : 60,
                    height: cursorType === "default" ? 10 : 60,
                    backgroundColor: cursorType === "default" ? "white" : "rgba(255, 255, 255, 0.1)",
                }}
                className="rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20"
            >
                <motion.div
                    animate={{
                        opacity: cursorType === "default" ? 0 : 1,
                        scale: cursorType === "default" ? 0 : 1,
                    }}
                    className="text-white"
                >
                    {cursorType === "web" && <Code2 className="w-6 h-6" />}
                    {cursorType === "iptv" && <Play className="w-6 h-6 fill-current" />}
                    {cursorType === "3d" && <Move className="w-6 h-6" />}
                    {cursorType === "text" && <Type className="w-6 h-6" />}
                    {cursorType === "link" && <MousePointer2 className="w-4 h-4" />}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
