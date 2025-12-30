/**
 * Video CDN Configuration and Utilities
 * Supports Cloudinary for optimized video delivery
 */

export interface VideoConfig {
    src: string;
    poster?: string;
    cloudinaryId?: string;
    quality?: "auto" | "low" | "medium" | "high";
    format?: "auto" | "mp4" | "webm";
}

/**
 * Generate Cloudinary video URL with optimization parameters
 * Falls back to direct URL if no Cloudinary ID is provided
 */
export function getOptimizedVideoUrl(config: VideoConfig): string {
    const { src, cloudinaryId, quality = "auto", format = "auto" } = config;

    // If no Cloudinary ID, return direct URL
    if (!cloudinaryId) {
        return src;
    }

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    if (!cloudName) {
        console.warn("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME not set, using direct URL");
        return src;
    }

    // Build Cloudinary transformation URL
    const transformations = [
        `q_${quality}`,
        `f_${format}`,
        "c_limit",
        "w_1920", // Max width for performance
    ].join(",");

    return `https://res.cloudinary.com/${cloudName}/video/upload/${transformations}/${cloudinaryId}`;
}

/**
 * Generate blurred placeholder image URL from video
 * Uses Cloudinary's automatic thumbnail generation
 */
export function getVideoPosterUrl(config: VideoConfig): string {
    const { poster, cloudinaryId } = config;

    // If custom poster provided, use it
    if (poster) {
        return poster;
    }

    // If no Cloudinary ID, return empty
    if (!cloudinaryId) {
        return "";
    }

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    if (!cloudName) {
        return "";
    }

    // Generate blurred thumbnail from video
    const transformations = [
        "so_0", // First frame
        "e_blur:1000", // Heavy blur for placeholder
        "q_auto:low", // Low quality for fast load
        "f_auto",
        "w_100", // Small size for fast load
    ].join(",");

    return `https://res.cloudinary.com/${cloudName}/video/upload/${transformations}/${cloudinaryId}.jpg`;
}

/**
 * Preload video for better UX
 */
export function preloadVideo(url: string): void {
    if (typeof window === "undefined") return;

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "video";
    link.href = url;
    document.head.appendChild(link);
}

/**
 * Check if user is on a slow connection
 * Used to adjust video quality automatically
 */
export function isSlowConnection(): boolean {
    if (typeof navigator === "undefined" || !("connection" in navigator)) {
        return false;
    }

    const connection = (navigator as any).connection;
    return connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g";
}
