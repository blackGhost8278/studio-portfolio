"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Pause } from "lucide-react";
import { getOptimizedVideoUrl, getVideoPosterUrl, type VideoConfig } from "@/lib/videocdn";
import { cn } from "@/lib/utils";

interface VideoHeroProps {
    config: VideoConfig;
    title?: string;
    subtitle?: string;
    overlayOpacity?: number;
    showControls?: boolean;
    autoPlay?: boolean;
    className?: string;
}

export default function VideoHero({
    config,
    title,
    subtitle,
    overlayOpacity = 0.6,
    showControls = true,
    autoPlay = true,
    className,
}: VideoHeroProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [showPoster, setShowPoster] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const videoUrl = getOptimizedVideoUrl(config);
    const posterUrl = getVideoPosterUrl(config) || config.poster;

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleCanPlay = () => {
            setIsLoaded(true);
            // Hide poster once video can play
            setTimeout(() => setShowPoster(false), 300);
        };

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        video.addEventListener("canplay", handleCanPlay);
        video.addEventListener("play", handlePlay);
        video.addEventListener("pause", handlePause);

        return () => {
            video.removeEventListener("canplay", handleCanPlay);
            video.removeEventListener("play", handlePlay);
            video.removeEventListener("pause", handlePause);
        };
    }, []);

    const togglePlayPause = () => {
        const video = videoRef.current;
        if (!video) return;

        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }
    };

    return (
        <div className={cn("relative w-full h-screen overflow-hidden", className)}>
            {/* Blurred Placeholder Image */}
            <AnimatePresence>
                {showPoster && posterUrl && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 z-10"
                    >
                        <Image
                            src={posterUrl}
                            alt="Video loading"
                            fill
                            className="object-cover"
                            style={{ filter: "blur(20px)", transform: "scale(1.1)" }}
                            priority
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Video Element */}
            <video
                ref={videoRef}
                className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                    isLoaded ? "opacity-100" : "opacity-0"
                )}
                autoPlay={autoPlay}
                muted
                loop
                playsInline
                poster={config.poster}
            >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Backdrop Blur Overlay for Text Readability */}
            <div
                className="absolute inset-0 backdrop-blur-sm"
                style={{
                    background: `linear-gradient(to bottom, rgba(0,0,0,${overlayOpacity * 0.5}), rgba(0,0,0,${overlayOpacity}))`,
                }}
            />

            {/* Content */}
            {(title || subtitle) && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="container-custom text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="space-y-6"
                        >
                            {title && (
                                <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
                                    {title}
                                </h1>
                            )}
                            {subtitle && (
                                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
                                    {subtitle}
                                </p>
                            )}
                        </motion.div>
                    </div>
                </div>
            )}

            {/* Play/Pause Control */}
            {showControls && (
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    onClick={togglePlayPause}
                    className="absolute bottom-8 right-8 z-30 w-14 h-14 rounded-full glass-strong flex items-center justify-center hover:scale-110 transition-smooth group"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                    <AnimatePresence mode="wait">
                        {isPlaying ? (
                            <motion.div
                                key="pause"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                            >
                                <Pause className="w-6 h-6 text-white" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="play"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                            >
                                <Play className="w-6 h-6 text-white ml-1" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            )}

            {/* Loading Indicator */}
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="glass-strong px-6 py-3 rounded-full">
                        <p className="text-white text-sm">Loading video...</p>
                    </div>
                </div>
            )}
        </div>
    );
}
