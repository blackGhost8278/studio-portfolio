"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tv, Play, Users } from "lucide-react";
import { iptvThemes, mockChannels, mockNowPlaying, type IPTVTheme } from "@/constants/iptvThemes";
import { cn } from "@/lib/utils";

export default function LiveUISwitcher() {
    const [activeTheme, setActiveTheme] = useState<string>("standard");
    const theme = iptvThemes[activeTheme];

    return (
        <div className="space-y-8">
            {/* Theme Selector */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Live UI Switcher</h2>
                    <p className="text-foreground-muted">
                        See how we transform IPTV interfaces in real-time
                    </p>
                </div>

                <div className="flex gap-2 flex-wrap">
                    {Object.values(iptvThemes).map((themeOption) => (
                        <button
                            key={themeOption.id}
                            onClick={() => setActiveTheme(themeOption.id)}
                            className={cn(
                                "px-4 py-2 rounded-lg font-medium transition-smooth text-sm",
                                activeTheme === themeOption.id
                                    ? "bg-accent-primary text-white"
                                    : "bg-background-subtle text-foreground-muted hover:text-foreground hover:bg-background-elevated"
                            )}
                        >
                            {themeOption.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Theme Description */}
            <motion.div
                key={`description-${activeTheme}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass p-4 rounded-lg"
            >
                <p className="text-sm text-foreground-muted">{theme.description}</p>
            </motion.div>

            {/* Mock IPTV Dashboard */}
            <motion.div
                layout
                className="relative overflow-hidden rounded-2xl"
                style={{
                    background: theme.colors.background,
                    borderRadius: theme.spacing.borderRadius,
                }}
            >
                {/* Dashboard Container */}
                <div className="p-6 md:p-8 space-y-6">
                    {/* Header */}
                    <motion.div
                        layout
                        className="flex items-center justify-between"
                        style={{
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <motion.div
                                layout
                                className="w-10 h-10 flex items-center justify-center"
                                style={{
                                    background: theme.colors.primary,
                                    borderRadius: theme.spacing.borderRadius,
                                    boxShadow: theme.effects.glow,
                                }}
                            >
                                <Tv className="w-5 h-5" style={{ color: theme.colors.background }} />
                            </motion.div>
                            <motion.h3
                                layout
                                className="text-xl"
                                style={{
                                    color: theme.colors.text,
                                    fontWeight: theme.typography.headingWeight,
                                }}
                            >
                                My IPTV
                            </motion.h3>
                        </div>

                        <motion.div
                            layout
                            className="px-4 py-2 text-sm"
                            style={{
                                background: theme.colors.surface,
                                color: theme.colors.textMuted,
                                borderRadius: theme.spacing.borderRadius,
                            }}
                        >
                            Live Now
                        </motion.div>
                    </motion.div>

                    {/* Now Playing Card */}
                    <motion.div
                        layout
                        className="relative overflow-hidden"
                        style={{
                            background: theme.colors.surface,
                            borderRadius: theme.spacing.borderRadius,
                            padding: theme.spacing.cardPadding,
                            border: `1px solid ${theme.colors.border}`,
                            boxShadow: theme.effects.shadow,
                        }}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <motion.h4
                                    layout
                                    className="text-lg mb-1"
                                    style={{
                                        color: theme.colors.text,
                                        fontWeight: theme.typography.headingWeight,
                                        fontFamily: theme.typography.fontFamily,
                                    }}
                                >
                                    {mockNowPlaying.title}
                                </motion.h4>
                                <motion.p
                                    layout
                                    className="text-sm"
                                    style={{ color: theme.colors.textMuted }}
                                >
                                    {mockNowPlaying.channel} • {mockNowPlaying.duration}
                                </motion.p>
                            </div>

                            <motion.button
                                layout
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-12 h-12 flex items-center justify-center"
                                style={{
                                    background: theme.colors.primary,
                                    borderRadius: theme.spacing.borderRadius,
                                    boxShadow: theme.effects.glow,
                                }}
                            >
                                <Play className="w-5 h-5" style={{ color: theme.colors.background }} />
                            </motion.button>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                            <motion.div
                                layout
                                className="h-1.5 overflow-hidden"
                                style={{
                                    background: theme.colors.background,
                                    borderRadius: theme.spacing.borderRadius,
                                }}
                            >
                                <motion.div
                                    layout
                                    className="h-full"
                                    style={{
                                        background: theme.colors.primary,
                                        width: `${mockNowPlaying.progress}%`,
                                    }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${mockNowPlaying.progress}%` }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                />
                            </motion.div>
                            <motion.div
                                layout
                                className="flex justify-between text-xs"
                                style={{ color: theme.colors.textMuted }}
                            >
                                <span>1:02:15</span>
                                <span>{mockNowPlaying.duration}</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Channel Grid */}
                    <div>
                        <motion.h4
                            layout
                            className="text-sm uppercase tracking-wider mb-4"
                            style={{
                                color: theme.colors.textMuted,
                                fontWeight: theme.typography.headingWeight,
                            }}
                        >
                            Popular Channels
                        </motion.h4>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {mockChannels.map((channel, index) => (
                                <motion.div
                                    key={channel.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="cursor-pointer"
                                    style={{
                                        background: theme.colors.surface,
                                        borderRadius: theme.spacing.borderRadius,
                                        padding: theme.spacing.cardPadding,
                                        border: `1px solid ${theme.colors.border}`,
                                    }}
                                >
                                    <motion.div
                                        layout
                                        className="flex items-center gap-2 mb-2"
                                    >
                                        <div
                                            className="w-8 h-8 flex items-center justify-center text-xs font-bold"
                                            style={{
                                                background: theme.colors.primary,
                                                color: theme.colors.background,
                                                borderRadius: theme.spacing.borderRadius,
                                            }}
                                        >
                                            {channel.name.charAt(0)}
                                        </div>
                                        <motion.span
                                            layout
                                            className="text-sm font-medium truncate"
                                            style={{
                                                color: theme.colors.text,
                                                fontFamily: theme.typography.fontFamily,
                                            }}
                                        >
                                            {channel.name}
                                        </motion.span>
                                    </motion.div>

                                    <motion.div
                                        layout
                                        className="flex items-center justify-between text-xs"
                                    >
                                        <span style={{ color: theme.colors.textMuted }}>
                                            {channel.category}
                                        </span>
                                        <span
                                            className="flex items-center gap-1"
                                            style={{ color: theme.colors.accent }}
                                        >
                                            <Users className="w-3 h-3" />
                                            {channel.viewers}
                                        </span>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Technical Note */}
            <div className="glass p-4 rounded-lg">
                <p className="text-sm text-foreground-muted">
                    <strong className="text-foreground">Technical Note:</strong> This component uses Framer Motion's{" "}
                    <code className="px-1.5 py-0.5 rounded bg-background-subtle text-accent-primary">
                        layout
                    </code>{" "}
                    prop for smooth shape morphing between themes. All theme data is stored in a centralized schema,
                    making it easy to add new brands.
                </p>
            </div>
        </div>
    );
}
