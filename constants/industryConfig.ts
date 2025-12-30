/**
 * Industry-specific configuration for dynamic landing pages
 * Includes theming, content, and visual preferences per industry
 */

export interface IndustryConfig {
    id: string;
    name: string;
    description: string;
    theme: {
        primary: string;
        secondary: string;
        accent: string;
    };
    headline: string;
    subheadline: string;
    services: string[];
    videoCategory?: "fashion" | "interior" | "exterior";
    cta: string;
}

export const industryConfigs: Record<string, IndustryConfig> = {
    fashion: {
        id: "fashion",
        name: "Fashion",
        description: "Luxury fashion brands and designers",
        theme: {
            primary: "#d4af37", // Luxury Gold
            secondary: "#ffd700",
            accent: "#c9a961",
        },
        headline: "Elevate Your Fashion Brand",
        subheadline: "Cinematic 3D visuals and premium digital experiences for luxury fashion",
        services: [
            "3D Product Visualization",
            "Virtual Runway Shows",
            "Lookbook Renders",
            "E-Commerce Integration",
        ],
        videoCategory: "fashion",
        cta: "Transform Your Collection",
    },

    hospitality: {
        id: "hospitality",
        name: "Hospitality",
        description: "Hotels, restaurants, and luxury venues",
        theme: {
            primary: "#2d5a3d", // Deep Emerald
            secondary: "#8b4513", // Maroon/Brown
            accent: "#4a7c59",
        },
        headline: "Showcase Your Venue in Stunning Detail",
        subheadline: "Photorealistic 3D renders and immersive virtual tours for hospitality",
        services: [
            "Interior Visualization",
            "Virtual Tours",
            "Booking Platform Development",
            "Brand Identity Design",
        ],
        videoCategory: "interior",
        cta: "Elevate Your Guest Experience",
    },

    "real-estate": {
        id: "real-estate",
        name: "Real Estate",
        description: "Property developers and real estate agencies",
        theme: {
            primary: "#1e3a8a", // Professional Navy
            secondary: "#3b82f6",
            accent: "#60a5fa",
        },
        headline: "Sell Properties Before They're Built",
        subheadline: "Architectural visualization and virtual staging for real estate",
        services: [
            "Architectural Renders",
            "Virtual Staging",
            "360° Property Tours",
            "Development Websites",
        ],
        videoCategory: "exterior",
        cta: "Visualize Your Development",
    },

    retail: {
        id: "retail",
        name: "Retail",
        description: "E-commerce and retail businesses",
        theme: {
            primary: "#ec4899", // Vibrant Pink
            secondary: "#f472b6",
            accent: "#db2777",
        },
        headline: "Convert Browsers into Buyers",
        subheadline: "High-performance e-commerce platforms and product visualization",
        services: [
            "E-Commerce Development",
            "Product 3D Models",
            "AR Try-On Experiences",
            "Conversion Optimization",
        ],
        videoCategory: "fashion",
        cta: "Boost Your Sales",
    },

    healthcare: {
        id: "healthcare",
        name: "Healthcare",
        description: "Medical facilities and healthcare providers",
        theme: {
            primary: "#10b981", // Medical Green
            secondary: "#34d399",
            accent: "#059669",
        },
        headline: "Modern Digital Solutions for Healthcare",
        subheadline: "Patient portals, facility visualization, and healthcare web applications",
        services: [
            "Patient Portal Development",
            "Facility Visualization",
            "Appointment Systems",
            "HIPAA-Compliant Platforms",
        ],
        videoCategory: "interior",
        cta: "Modernize Your Practice",
    },

    technology: {
        id: "technology",
        name: "Technology",
        description: "Tech startups and SaaS companies",
        theme: {
            primary: "#8b5cf6", // Tech Purple
            secondary: "#a78bfa",
            accent: "#7c3aed",
        },
        headline: "Build Your SaaS Platform",
        subheadline: "Full-stack development and AI-powered web applications",
        services: [
            "SaaS Development",
            "AI Integration",
            "Dashboard Design",
            "API Development",
        ],
        cta: "Launch Your Platform",
    },
};

/**
 * Get industry config with fallback to generic
 */
export function getIndustryConfig(industry: string): IndustryConfig {
    const config = industryConfigs[industry.toLowerCase()];

    if (config) {
        return config;
    }

    // Generic fallback
    return {
        id: "generic",
        name: "Your Industry",
        description: "Custom solutions for your business",
        theme: {
            primary: "#6366f1",
            secondary: "#818cf8",
            accent: "#4f46e5",
        },
        headline: "Transform Your Business",
        subheadline: "Custom web development, 3D visualization, and digital solutions",
        services: [
            "Custom Web Development",
            "3D Visualization",
            "Brand Identity",
            "Digital Strategy",
        ],
        cta: "Start Your Project",
    };
}

/**
 * Generate personalized headline with company name
 */
export function getPersonalizedHeadline(
    config: IndustryConfig,
    companyName?: string
): string {
    if (!companyName) {
        return config.headline;
    }

    // Personalized templates based on industry
    const templates: Record<string, string> = {
        fashion: `Specialized 3D Solutions for ${companyName}`,
        hospitality: `Transforming ${companyName} with Immersive Visuals`,
        "real-estate": `Elevating ${companyName}'s Property Showcase`,
        retail: `Powering ${companyName}'s E-Commerce Success`,
        healthcare: `Modernizing ${companyName}'s Digital Presence`,
        technology: `Building ${companyName}'s Next Platform`,
    };

    return templates[config.id] || `Transforming ${companyName} with ${config.name} Excellence`;
}
