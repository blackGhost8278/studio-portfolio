/**
 * IPTV Theme Schema
 * Defines visual styles for different IPTV dashboard themes
 * Makes it easy to add more brands/themes in the future
 */

export type IPTVTheme = {
    id: string;
    name: string;
    description: string;
    colors: {
        primary: string;
        secondary: string;
        background: string;
        surface: string;
        text: string;
        textMuted: string;
        accent: string;
        border: string;
    };
    typography: {
        fontFamily: string;
        headingWeight: string;
    };
    spacing: {
        borderRadius: string;
        cardPadding: string;
    };
    effects: {
        shadow: string;
        glow: string;
    };
};

export const iptvThemes: Record<string, IPTVTheme> = {
    standard: {
        id: "standard",
        name: "Standard",
        description: "Clean, modern interface for everyday viewing",
        colors: {
            primary: "#3b82f6",
            secondary: "#60a5fa",
            background: "#0f172a",
            surface: "#1e293b",
            text: "#f1f5f9",
            textMuted: "#94a3b8",
            accent: "#06b6d4",
            border: "rgba(148, 163, 184, 0.2)",
        },
        typography: {
            fontFamily: "var(--font-inter)",
            headingWeight: "600",
        },
        spacing: {
            borderRadius: "0.75rem",
            cardPadding: "1.5rem",
        },
        effects: {
            shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
            glow: "0 0 20px rgba(59, 130, 246, 0.3)",
        },
    },

    luxury: {
        id: "luxury",
        name: "Luxury Mode",
        description: "Premium gold and black aesthetic for high-end brands",
        colors: {
            primary: "#d4af37",
            secondary: "#ffd700",
            background: "#000000",
            surface: "#1a1a1a",
            text: "#ffffff",
            textMuted: "#b8b8b8",
            accent: "#c9a961",
            border: "rgba(212, 175, 55, 0.3)",
        },
        typography: {
            fontFamily: "Georgia, serif",
            headingWeight: "700",
        },
        spacing: {
            borderRadius: "0.25rem",
            cardPadding: "2rem",
        },
        effects: {
            shadow: "0 8px 16px rgba(212, 175, 55, 0.2)",
            glow: "0 0 30px rgba(212, 175, 55, 0.4)",
        },
    },

    cyberpunk: {
        id: "cyberpunk",
        name: "Cyberpunk Rebrand",
        description: "Neon-infused, futuristic design with sharp edges",
        colors: {
            primary: "#ff00ff",
            secondary: "#00ffff",
            background: "#0a0014",
            surface: "#1a0028",
            text: "#00ffff",
            textMuted: "#b300ff",
            accent: "#ff00aa",
            border: "rgba(255, 0, 255, 0.4)",
        },
        typography: {
            fontFamily: "var(--font-geist-mono)",
            headingWeight: "700",
        },
        spacing: {
            borderRadius: "0rem",
            cardPadding: "1.25rem",
        },
        effects: {
            shadow: "0 0 20px rgba(255, 0, 255, 0.5)",
            glow: "0 0 40px rgba(0, 255, 255, 0.6), 0 0 80px rgba(255, 0, 255, 0.4)",
        },
    },
};

/**
 * Mock channel data for demonstration
 */
export const mockChannels = [
    { id: 1, name: "HBO Max", category: "Movies", viewers: "2.4M" },
    { id: 2, name: "ESPN Sports", category: "Sports", viewers: "1.8M" },
    { id: 3, name: "Discovery", category: "Documentary", viewers: "980K" },
    { id: 4, name: "Comedy Central", category: "Entertainment", viewers: "1.2M" },
    { id: 5, name: "National Geo", category: "Nature", viewers: "1.5M" },
    { id: 6, name: "MTV Live", category: "Music", viewers: "890K" },
];

/**
 * Mock "Now Playing" data
 */
export const mockNowPlaying = {
    title: "The Future of Streaming",
    channel: "Tech Network",
    duration: "2:15:30",
    progress: 45,
};
