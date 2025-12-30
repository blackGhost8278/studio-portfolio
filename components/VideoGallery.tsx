"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import Image from "next/image";
import { getOptimizedVideoUrl, type VideoConfig } from "@/lib/videocdn";
import { cn } from "@/lib/utils";

interface VideoItem {
    id: string;
    title: string;
    category: "fashion" | "interior" | "exterior";
    thumbnail: string;
    config: VideoConfig;
    description?: string;
}

interface VideoGalleryProps {
    videos: VideoItem[];
}

const categories = [
    { id: "all", label: "All Projects" },
    { id: "fashion", label: "Fashion" },
    { id: "interior", label: "Interior" },
    { id: "exterior", label: "Exterior" },
];

export default function VideoGallery({ videos }: VideoGalleryProps) {
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const filteredVideos =
        activeCategory === "all"
            ? videos
            : videos.filter((v) => v.category === activeCategory);

    const openLightbox = (video: VideoItem) => {
        setSelectedVideo(video);
        setIsVideoPlaying(false);
    };

    const closeLightbox = () => {
        setSelectedVideo(null);
        setIsVideoPlaying(false);
    };

    return (
        <div className="space-y-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={cn(
                            "px-6 py-2 rounded-lg font-medium transition-smooth text-sm",
                            activeCategory === category.id
                                ? "gradient-3d text-white"
                                : "bg-background-subtle text-foreground-muted hover:text-foreground hover:bg-background-elevated"
                        )}
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            {/* Video Grid */}
            <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredVideos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ delay: index * 0.05 }}
                            className="group cursor-pointer"
                            onClick={() => openLightbox(video)}
                        >
                            <div className="relative aspect-video rounded-2xl overflow-hidden glass">
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full glass-strong flex items-center justify-center glow-3d">
                                            <Play className="w-8 h-8 text-white ml-1" />
                                        </div>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-white font-bold text-lg mb-1">
                                            {video.title}
                                        </h3>
                                        {video.description && (
                                            <p className="text-white/80 text-sm line-clamp-2">
                                                {video.description}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-strong text-xs text-white capitalize">
                                    {video.category}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
                        onClick={closeLightbox}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative w-full max-w-6xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeLightbox}
                                className="absolute -top-12 right-0 w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:bg-white/20 transition-smooth z-10"
                                aria-label="Close"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>

                            {/* Video Container */}
                            <div className="relative aspect-video rounded-2xl overflow-hidden glass-strong">
                                {!isVideoPlaying ? (
                                    // Thumbnail with Play Button
                                    <div
                                        className="relative w-full h-full cursor-pointer group"
                                        onClick={() => setIsVideoPlaying(true)}
                                    >
                                        <Image
                                            src={selectedVideo.thumbnail}
                                            alt={selectedVideo.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <div className="w-20 h-20 rounded-full glass-strong flex items-center justify-center glow-3d group-hover:scale-110 transition-smooth">
                                                <Play className="w-10 h-10 text-white ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    // Video Player
                                    <video
                                        className="w-full h-full"
                                        controls
                                        autoPlay
                                        src={getOptimizedVideoUrl(selectedVideo.config)}
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>

                            {/* Video Info */}
                            <div className="mt-6 text-center">
                                <h2 className="text-2xl font-bold text-white mb-2">
                                    {selectedVideo.title}
                                </h2>
                                {selectedVideo.description && (
                                    <p className="text-white/70">{selectedVideo.description}</p>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Empty State */}
            {filteredVideos.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-foreground-muted">
                        No videos found in this category.
                    </p>
                </div>
            )}
        </div>
    );
}
