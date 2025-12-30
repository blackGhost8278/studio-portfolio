"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/web-dev", label: "Web Dev" },
    { href: "/iptv", label: "IPTV" },
    { href: "/3d-visuals", label: "3D Visuals" },
    { href: "/about", label: "About" },
    { href: "/start-project", label: "Start a Project", highlight: true },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    // Transform scroll position to navbar opacity and blur
    const navOpacity = useTransform(scrollY, [0, 100], [0.7, 0.95]);
    const navBlur = useTransform(scrollY, [0, 100], [12, 20]);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <motion.nav
                style={{
                    opacity: navOpacity,
                    backdropFilter: useTransform(navBlur, (blur) => `blur(${blur}px)`),
                }}
                className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border"
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className="w-8 h-8 rounded-lg gradient-text flex items-center justify-center font-bold text-lg">
                                S
                            </div>
                            <span className="font-bold text-lg gradient-text">
                                Studio
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "relative px-4 py-2 rounded-lg text-sm font-medium transition-smooth",
                                            link.highlight
                                                ? "gradient-web text-white hover:opacity-90"
                                                : isActive
                                                    ? "text-foreground bg-background-elevated"
                                                    : "text-foreground-muted hover:text-foreground hover:bg-background-subtle"
                                        )}
                                    >
                                        {link.label}
                                        {isActive && !link.highlight && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-background-subtle transition-smooth"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed top-16 left-0 right-0 z-40 md:hidden glass-strong border-b border-border"
                >
                    <div className="container-custom py-4 space-y-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "block px-4 py-3 rounded-lg text-sm font-medium transition-smooth",
                                        link.highlight
                                            ? "gradient-web text-white"
                                            : isActive
                                                ? "text-foreground bg-background-elevated"
                                                : "text-foreground-muted hover:text-foreground hover:bg-background-subtle"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                </motion.div>
            )}

            {/* Spacer to prevent content from going under fixed navbar */}
            <div className="h-16" />
        </>
    );
}
