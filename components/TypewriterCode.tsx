"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterCodeProps {
    snippets: string[];
    typingSpeed?: number;
    pauseDuration?: number;
    className?: string;
}

export default function TypewriterCode({
    snippets,
    typingSpeed = 30,
    pauseDuration = 2000,
    className = "",
}: TypewriterCodeProps) {
    const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [showCursor, setShowCursor] = useState(true);

    const currentSnippet = snippets[currentSnippetIndex];

    useEffect(() => {
        if (!isTyping) {
            // Pause before moving to next snippet
            const pauseTimer = setTimeout(() => {
                setCurrentSnippetIndex((prev) => (prev + 1) % snippets.length);
                setDisplayedText("");
                setIsTyping(true);
            }, pauseDuration);

            return () => clearTimeout(pauseTimer);
        }

        if (displayedText.length < currentSnippet.length) {
            // Type next character
            const typingTimer = setTimeout(() => {
                setDisplayedText(currentSnippet.slice(0, displayedText.length + 1));
            }, typingSpeed);

            return () => clearTimeout(typingTimer);
        } else {
            // Finished typing current snippet
            setIsTyping(false);
        }
    }, [displayedText, isTyping, currentSnippet, snippets.length, typingSpeed, pauseDuration, currentSnippetIndex]);

    // Cursor blink effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    // Syntax highlighting helper
    const highlightSyntax = (text: string) => {
        const lines = text.split("\n");
        return lines.map((line, i) => {
            // Detect keywords
            let highlighted = line;

            // JSX/HTML tags
            highlighted = highlighted.replace(
                /(&lt;\/?)([a-zA-Z][a-zA-Z0-9]*)/g,
                '<span class="text-pink-400">$1$2</span>'
            );

            // Attributes
            highlighted = highlighted.replace(
                /\s([a-zA-Z-]+)=/g,
                ' <span class="text-cyan-400">$1</span>='
            );

            // Strings
            highlighted = highlighted.replace(
                /"([^"]*)"/g,
                '"<span class="text-green-400">$1</span>"'
            );

            // Comments
            highlighted = highlighted.replace(
                /(\/\/.*$)/g,
                '<span class="text-gray-500">$1</span>'
            );

            // Keywords
            const keywords = ["const", "let", "var", "function", "return", "import", "export", "from", "default"];
            keywords.forEach((keyword) => {
                const regex = new RegExp(`\\b${keyword}\\b`, "g");
                highlighted = highlighted.replace(
                    regex,
                    `<span class="text-purple-400">${keyword}</span>`
                );
            });

            return (
                <div key={i} className="flex">
                    <span className="text-gray-600 select-none mr-4 text-right w-8">
                        {i + 1}
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: highlighted }} />
                </div>
            );
        });
    };

    return (
        <div className={`glass-strong rounded-2xl overflow-hidden ${className}`}>
            {/* Terminal Header */}
            <div className="bg-background-elevated px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-foreground-muted ml-2 font-mono">
                    ~/studio-portfolio
                </span>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm overflow-x-auto">
                <div className="text-foreground">
                    {highlightSyntax(displayedText)}
                    <motion.span
                        animate={{ opacity: showCursor ? 1 : 0 }}
                        transition={{ duration: 0 }}
                        className="inline-block w-2 h-5 bg-accent-primary ml-1"
                    />
                </div>
            </div>

            {/* Status Bar */}
            <div className="bg-background-elevated px-4 py-2 flex items-center justify-between border-t border-border text-xs text-foreground-muted">
                <span>TypeScript • Next.js • Tailwind CSS</span>
                <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Live Coding
                </span>
            </div>
        </div>
    );
}
