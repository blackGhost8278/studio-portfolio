"use client";

import { motion } from "framer-motion";
import { Zap, Brain, Rocket, Code2, Sparkles } from "lucide-react";

export default function WorkflowShowcase() {
    const workflowSteps = [
        {
            icon: Brain,
            title: "AI-Accelerated Design",
            description: "Rapid prototyping with AI-assisted design tools and automated code generation",
            color: "#8b5cf6",
        },
        {
            icon: Code2,
            title: "Agentic Workflows",
            description: "Automated lead generation, personalization, and deployment pipelines",
            color: "#3b82f6",
        },
        {
            icon: Rocket,
            title: "Scalable Rendering",
            description: "Cloud-based 3D rendering farms for parallel processing of complex scenes",
            color: "#ec4899",
        },
        {
            icon: Zap,
            title: "Continuous Optimization",
            description: "Real-time performance monitoring and automated optimization",
            color: "#10b981",
        },
    ];

    return (
        <div className="space-y-12">
            {/* Intro */}
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    How We Build
                </h2>
                <p className="text-foreground-muted">
                    Our AI-accelerated workflows enable us to deliver across three disciplines
                    simultaneously without sacrificing quality. Here's how we do it.
                </p>
            </div>

            {/* Workflow Diagram */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {workflowSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-6 rounded-2xl relative overflow-hidden group hover:scale-105 transition-smooth"
                        >
                            {/* Background Glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                                style={{ background: step.color }}
                            />

                            {/* Icon */}
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                style={{ background: step.color }}
                            >
                                <Icon className="w-6 h-6 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="font-bold mb-2">{step.title}</h3>
                            <p className="text-sm text-foreground-muted">
                                {step.description}
                            </p>

                            {/* Step Number */}
                            <div
                                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold opacity-50"
                                style={{ background: step.color, color: "white" }}
                            >
                                {index + 1}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Key Benefits */}
            <div className="glass-strong p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6 text-center">
                    Why This Matters for You
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="text-3xl font-bold gradient-text mb-2">3x</div>
                        <p className="text-sm text-foreground-muted">
                            Faster delivery than traditional agencies
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl font-bold gradient-text mb-2">90+</div>
                        <p className="text-sm text-foreground-muted">
                            Lighthouse performance scores maintained
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                        <p className="text-sm text-foreground-muted">
                            Automated monitoring and optimization
                        </p>
                    </div>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="text-center">
                <h3 className="text-xl font-bold mb-6">Powered By</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {[
                        "Next.js",
                        "React",
                        "TypeScript",
                        "Tailwind CSS",
                        "Framer Motion",
                        "Cloudinary",
                        "OpenAI",
                        "V-Ray",
                        "Blender",
                    ].map((tech) => (
                        <span
                            key={tech}
                            className="px-4 py-2 rounded-full glass text-sm font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Future-Proof Statement */}
            <div className="text-center glass p-6 rounded-2xl max-w-2xl mx-auto">
                <Sparkles className="w-8 h-8 mx-auto mb-4 text-accent-primary" />
                <p className="text-foreground-muted">
                    <strong className="text-foreground">Future-Proof Partner:</strong> Our
                    AI-accelerated workflows mean we can adapt to new technologies and
                    requirements faster than traditional agencies, keeping your projects
                    cutting-edge.
                </p>
            </div>
        </div>
    );
}
