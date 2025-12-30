"use client";

import { motion } from "framer-motion";
import { Code2, Tv, Box } from "lucide-react";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/utils";

import GlowCard from "@/components/GlowCard";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container-custom py-20 md:py-32 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              <span>Available for Selective Partnership</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-bold leading-tight"
            >
              High
              <br />
              <span className="gradient-text">Performance</span>
              <br />
              Design
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-foreground-muted max-w-xl"
            >
              We bridge the gap between imagination and execution with AI-accelerated 3D, IPTV, and Web workflows.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex gap-4">
              <Link
                href="/start-project"
                className="px-8 py-4 rounded-lg gradient-web text-white font-semibold hover:opacity-90 transition-smooth"
              >
                Start a Project
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 rounded-lg border border-border text-foreground font-semibold hover:bg-background-subtle transition-smooth"
              >
                The Process
              </Link>
            </motion.div>
          </motion.div>

          {/* Feature Grid / Split Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 gradient-text opacity-10 blur-3xl" />
            <div className="relative glass-strong p-1 rounded-3xl">
              <div className="bg-background-elevated rounded-2xl overflow-hidden aspect-square flex items-center justify-center p-12">
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                  <div className="rounded-xl gradient-web opacity-50 flex items-center justify-center text-4xl">💻</div>
                  <div className="rounded-xl gradient-iptv opacity-50 flex items-center justify-center text-4xl">📺</div>
                  <div className="rounded-xl gradient-3d opacity-50 flex items-center justify-center text-4xl">🎨</div>
                  <div className="rounded-xl border border-border flex items-center justify-center text-4xl">✨</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container-custom py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeInUp}>
            <Link href="/web-dev" className="block h-full">
              <GlowCard glowColor="rgba(59, 130, 246, 0.2)" className="h-full">
                <div className="w-12 h-12 rounded-lg gradient-web flex items-center justify-center mb-6">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Web Development</h3>
                <p className="text-foreground-muted">
                  High-performance web applications built for speed, SEO, and conversion.
                </p>
              </GlowCard>
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Link href="/iptv" className="block h-full">
              <GlowCard glowColor="rgba(236, 72, 153, 0.2)" className="h-full">
                <div className="w-12 h-12 rounded-lg gradient-iptv flex items-center justify-center mb-6">
                  <Tv className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">IPTV Rebranding</h3>
                <p className="text-foreground-muted">
                  Transform generic platforms into premium, branded streaming experiences.
                </p>
              </GlowCard>
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Link href="/3d-visuals" className="block h-full">
              <GlowCard glowColor="rgba(139, 92, 246, 0.2)" className="h-full">
                <div className="w-12 h-12 rounded-lg gradient-3d flex items-center justify-center mb-6">
                  <Box className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">3D Animation</h3>
                <p className="text-foreground-muted">
                  Cinematic product renders and animations for high-end marketing.
                </p>
              </GlowCard>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Quote */}
      <section className="container-custom py-20 text-center">
        <div className="max-w-2xl mx-auto p-12 rounded-3xl border border-border bg-background-subtle/50">
          <blockquote className="text-2xl italic text-foreground">
            "We believe that premium design is not just a luxury, but a core requirement for high-performance brands in the AI era."
          </blockquote>
          <p className="mt-6 font-bold text-accent-primary">— Studio Team</p>
        </div>
      </section>
    </div>
  );
}
