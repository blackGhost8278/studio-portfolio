"use client";

import { motion } from "framer-motion";
import { Code2, Tv, Box } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container-custom py-20 md:py-32">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center space-y-8"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold gradient-text"
          >
            Multi-Disciplinary
            <br />
            Creative Studio
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto"
          >
            Premium web development, IPTV rebranding, and 3D animation services.
            <br />
            AI-accelerated workflows for future-proof digital solutions.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex justify-center gap-4">
            <a
              href="/start-project"
              className="px-8 py-4 rounded-lg gradient-web text-white font-semibold hover:opacity-90 transition-smooth"
            >
              Start a Project
            </a>
            <a
              href="/about"
              className="px-8 py-4 rounded-lg border border-border text-foreground font-semibold hover:bg-background-subtle transition-smooth"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Three-Pillar Section - Placeholder */}
      <section className="container-custom py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Web Development */}
          <div className="glass p-8 rounded-2xl hover:glow-web transition-smooth group cursor-pointer">
            <div className="w-12 h-12 rounded-lg gradient-web flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Web Development</h3>
            <p className="text-foreground-muted">
              High-performance web applications built with cutting-edge technology.
            </p>
          </div>

          {/* IPTV Rebranding */}
          <div className="glass p-8 rounded-2xl hover:glow-iptv transition-smooth group cursor-pointer">
            <div className="w-12 h-12 rounded-lg gradient-iptv flex items-center justify-center mb-4">
              <Tv className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">IPTV Rebranding</h3>
            <p className="text-foreground-muted">
              Transform your IPTV platform with stunning UI/UX design.
            </p>
          </div>

          {/* 3D Animation */}
          <div className="glass p-8 rounded-2xl hover:glow-3d transition-smooth group cursor-pointer">
            <div className="w-12 h-12 rounded-lg gradient-3d flex items-center justify-center mb-4">
              <Box className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">3D Animation</h3>
            <p className="text-foreground-muted">
              Cinematic 3D visuals for fashion, interior, and exterior design.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Temporary Note */}
      <section className="container-custom py-20 text-center">
        <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">🚀 Stage 1 Complete</h3>
          <p className="text-foreground-muted">
            Project foundation successfully scaffolded. Next.js with App Router, Tailwind CSS v4,
            Framer Motion, and Lucide React are all configured and ready.
          </p>
          <p className="text-foreground-muted mt-4">
            <strong>Next:</strong> Building individual components (LiveUISwitcher, VibeCheckForm, VideoHero)
          </p>
        </div>
      </section>
    </div>
  );
}
