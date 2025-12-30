import WorkflowShowcase from "@/components/WorkflowShowcase";
import { Users, Target, Award, Sparkles } from "lucide-react";

export const metadata = {
    title: "About | Studio",
    description: "Multi-disciplinary creative studio specializing in web development, IPTV rebranding, and 3D animation. AI-accelerated workflows for future-proof solutions.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="container-custom py-20 md:py-32">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
                        <Sparkles className="w-4 h-4 text-accent-primary" />
                        <span>About Studio</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold">
                        Multi-Disciplinary
                        <br />
                        <span className="gradient-text">Creative Studio</span>
                    </h1>

                    <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
                        We're not your typical agency. We combine cutting-edge web development,
                        premium IPTV rebranding, and cinematic 3D animation—all powered by
                        AI-accelerated workflows.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="container-custom py-20">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="glass p-8 rounded-2xl text-center">
                        <div className="w-12 h-12 rounded-lg gradient-web flex items-center justify-center mx-auto mb-4">
                            <Target className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                        <p className="text-foreground-muted text-sm">
                            To deliver premium digital experiences that drive results, using
                            AI-accelerated workflows that traditional agencies can't match.
                        </p>
                    </div>

                    <div className="glass p-8 rounded-2xl text-center">
                        <div className="w-12 h-12 rounded-lg gradient-iptv flex items-center justify-center mx-auto mb-4">
                            <Users className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Our Approach</h3>
                        <p className="text-foreground-muted text-sm">
                            We combine human creativity with AI efficiency. This lets us deliver
                            across three disciplines simultaneously without sacrificing quality.
                        </p>
                    </div>

                    <div className="glass p-8 rounded-2xl text-center">
                        <div className="w-12 h-12 rounded-lg gradient-3d flex items-center justify-center mx-auto mb-4">
                            <Award className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Our Promise</h3>
                        <p className="text-foreground-muted text-sm">
                            90+ Lighthouse scores, 3x faster delivery, and premium quality that
                            positions you as a leader in your industry.
                        </p>
                    </div>
                </div>
            </section>

            {/* Workflow Showcase */}
            <section className="container-custom py-20">
                <WorkflowShowcase />
            </section>

            {/* Services Overview */}
            <section className="container-custom py-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Our Three Pillars
                </h2>

                <div className="space-y-8 max-w-4xl mx-auto">
                    {/* Web Development */}
                    <div className="glass p-8 rounded-2xl">
                        <div className="flex items-start gap-6">
                            <div className="w-16 h-16 rounded-xl gradient-web flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl">💻</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Web Development</h3>
                                <p className="text-foreground-muted mb-4">
                                    High-performance web applications built with Next.js, React, and
                                    modern web standards. From landing pages to full-stack SaaS platforms.
                                </p>
                                <a
                                    href="/web-dev"
                                    className="text-accent-primary hover:underline font-medium"
                                >
                                    Explore Web Dev →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* IPTV */}
                    <div className="glass p-8 rounded-2xl">
                        <div className="flex items-start gap-6">
                            <div className="w-16 h-16 rounded-xl gradient-iptv flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl">📺</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">IPTV Rebranding</h3>
                                <p className="text-foreground-muted mb-4">
                                    Transform your IPTV platform with stunning UI/UX design. From
                                    standard interfaces to luxury brands and cyberpunk aesthetics.
                                </p>
                                <a
                                    href="/iptv"
                                    className="text-accent-primary hover:underline font-medium"
                                >
                                    Explore IPTV →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 3D Animation */}
                    <div className="glass p-8 rounded-2xl">
                        <div className="flex items-start gap-6">
                            <div className="w-16 h-16 rounded-xl gradient-3d flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl">🎬</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">3D Animation</h3>
                                <p className="text-foreground-muted mb-4">
                                    Cinematic 3D visuals for fashion, interior, and exterior design.
                                    Photorealistic renders and animations that captivate audiences.
                                </p>
                                <a
                                    href="/3d-visuals"
                                    className="text-accent-primary hover:underline font-medium"
                                >
                                    Explore 3D →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Different */}
            <section className="container-custom py-20">
                <div className="glass-strong p-12 rounded-2xl max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        What Makes Us Different
                    </h2>

                    <div className="space-y-6 text-foreground-muted">
                        <div>
                            <h4 className="font-semibold text-foreground mb-2">
                                🤖 AI-Accelerated Workflows
                            </h4>
                            <p className="text-sm">
                                We use AI for rapid prototyping, automated code generation, and
                                scalable 3D rendering. This means 3x faster delivery without
                                compromising quality.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-2">
                                🎯 Agentic Lead Generation
                            </h4>
                            <p className="text-sm">
                                Our automated lead-gen system creates personalized landing pages
                                for each prospect, increasing conversion by 3-4x compared to
                                generic outreach.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-2">
                                ⚡ Performance-First
                            </h4>
                            <p className="text-sm">
                                Every project maintains 90+ Lighthouse scores. We optimize for
                                Core Web Vitals, SEO, and conversion—because beautiful designs
                                mean nothing if they don't load fast.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-2">
                                🔮 Future-Proof Technology
                            </h4>
                            <p className="text-sm">
                                We build with cutting-edge tech (Next.js 15, React 19, Tailwind v4)
                                and can adapt to new technologies faster than traditional agencies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container-custom py-20">
                <div className="glass-strong p-12 rounded-2xl text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Work Together?
                    </h2>
                    <p className="text-foreground-muted mb-8">
                        Let's discuss your project and create something amazing with our
                        AI-accelerated workflows.
                    </p>
                    <a
                        href="/start-project"
                        className="inline-block px-8 py-4 rounded-lg gradient-web text-white font-semibold hover:opacity-90 transition-smooth"
                    >
                        Start Your Project
                    </a>
                </div>
            </section>
        </div>
    );
}
