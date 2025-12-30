import VideoHero from "@/components/VideoHero";
import VideoGallery from "@/components/VideoGallery";
import { Sparkles } from "lucide-react";
import type { VideoConfig } from "@/lib/videocdn";

export const metadata = {
    title: "3D Animation | Studio",
    description: "Cinematic 3D visuals for fashion, interior, and exterior design. High-quality renders and animations.",
};

// Mock video data - replace with actual Cloudinary IDs and assets
const heroVideoConfig: VideoConfig = {
    src: "/videos/3d-hero.mp4", // Fallback local video
    poster: "/images/3d-hero-poster.jpg",
    // cloudinaryId: "your-cloudinary-id", // Uncomment when using Cloudinary
};

const galleryVideos = [
    {
        id: "1",
        title: "Luxury Fashion Collection",
        category: "fashion" as const,
        thumbnail: "/images/fashion-1.jpg",
        description: "High-end fashion visualization with dynamic cloth simulation",
        config: {
            src: "/videos/fashion-1.mp4",
            // cloudinaryId: "fashion-1",
        },
    },
    {
        id: "2",
        title: "Modern Interior Walkthrough",
        category: "interior" as const,
        thumbnail: "/images/interior-1.jpg",
        description: "Photorealistic interior rendering with global illumination",
        config: {
            src: "/videos/interior-1.mp4",
            // cloudinaryId: "interior-1",
        },
    },
    {
        id: "3",
        title: "Architectural Exterior",
        category: "exterior" as const,
        thumbnail: "/images/exterior-1.jpg",
        description: "Stunning architectural visualization with environmental effects",
        config: {
            src: "/videos/exterior-1.mp4",
            // cloudinaryId: "exterior-1",
        },
    },
    {
        id: "4",
        title: "Runway Animation",
        category: "fashion" as const,
        thumbnail: "/images/fashion-2.jpg",
        description: "Dynamic runway show with realistic fabric physics",
        config: {
            src: "/videos/fashion-2.mp4",
            // cloudinaryId: "fashion-2",
        },
    },
    {
        id: "5",
        title: "Minimalist Living Space",
        category: "interior" as const,
        thumbnail: "/images/interior-2.jpg",
        description: "Clean, modern interior with natural lighting",
        config: {
            src: "/videos/interior-2.mp4",
            // cloudinaryId: "interior-2",
        },
    },
    {
        id: "6",
        title: "Urban Development",
        category: "exterior" as const,
        thumbnail: "/images/exterior-2.jpg",
        description: "Large-scale urban planning visualization",
        config: {
            src: "/videos/exterior-2.mp4",
            // cloudinaryId: "exterior-2",
        },
    },
];

export default function ThreeDVisualsPage() {
    return (
        <div className="min-h-screen bg-background" data-cursor="3d">
            {/* Video Hero */}
            <VideoHero
                config={heroVideoConfig}
                title="Cinematic 3D Visuals"
                subtitle="Bringing your vision to life with photorealistic renders and animations"
                overlayOpacity={0.5}
            />

            {/* Introduction Section */}
            <section className="container-custom py-20">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
                        <Sparkles className="w-4 h-4 text-brand-3d" />
                        <span>3D Animation & Visualization</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Premium 3D Services
                    </h2>

                    <p className="text-xl text-foreground-muted">
                        From fashion collections to architectural masterpieces, we create
                        stunning 3D visuals that captivate and inspire.
                    </p>
                </div>
            </section>

            {/* Video Gallery */}
            <section className="container-custom py-20">
                <VideoGallery videos={galleryVideos} />
            </section>

            {/* Services Grid */}
            <section className="container-custom py-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Our 3D Specializations
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="glass p-8 rounded-2xl">
                        <div className="text-4xl mb-4">👗</div>
                        <h3 className="text-xl font-bold mb-3">Fashion</h3>
                        <ul className="space-y-2 text-foreground-muted text-sm">
                            <li>• Cloth simulation & physics</li>
                            <li>• Product visualization</li>
                            <li>• Runway animations</li>
                            <li>• Lookbook renders</li>
                        </ul>
                    </div>

                    <div className="glass p-8 rounded-2xl">
                        <div className="text-4xl mb-4">🏠</div>
                        <h3 className="text-xl font-bold mb-3">Interior</h3>
                        <ul className="space-y-2 text-foreground-muted text-sm">
                            <li>• Photorealistic renders</li>
                            <li>• Virtual staging</li>
                            <li>• Lighting design</li>
                            <li>• 360° walkthroughs</li>
                        </ul>
                    </div>

                    <div className="glass p-8 rounded-2xl">
                        <div className="text-4xl mb-4">🏗️</div>
                        <h3 className="text-xl font-bold mb-3">Exterior</h3>
                        <ul className="space-y-2 text-foreground-muted text-sm">
                            <li>• Architectural visualization</li>
                            <li>• Environmental design</li>
                            <li>• Drone-style flyovers</li>
                            <li>• Urban planning</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Technical Excellence */}
            <section className="container-custom py-20">
                <div className="glass-strong p-12 rounded-2xl max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        Technical Excellence
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 text-foreground-muted">
                        <div>
                            <h4 className="font-semibold text-foreground mb-2">Rendering</h4>
                            <p className="text-sm">
                                Industry-leading render engines (V-Ray, Octane, Cycles) for
                                photorealistic results with physically accurate lighting and materials.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-2">Performance</h4>
                            <p className="text-sm">
                                CDN-optimized delivery ensures your 4K renders load fast on any device,
                                maintaining 90+ Lighthouse scores.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-2">Workflow</h4>
                            <p className="text-sm">
                                AI-accelerated modeling and rendering pipelines allow us to deliver
                                premium quality at competitive timelines.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-2">Formats</h4>
                            <p className="text-sm">
                                Delivery in all major formats: MP4, WebM, image sequences, and
                                interactive WebGL experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container-custom py-20">
                <div className="glass-strong p-12 rounded-2xl text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Visualize Your Vision?
                    </h2>
                    <p className="text-foreground-muted mb-8">
                        Let's discuss your 3D project and create stunning visuals that
                        bring your ideas to life.
                    </p>
                    <a
                        href="/start-project"
                        className="inline-block px-8 py-4 rounded-lg gradient-3d text-white font-semibold hover:opacity-90 transition-smooth"
                    >
                        Start Your 3D Project
                    </a>
                </div>
            </section>
        </div>
    );
}
