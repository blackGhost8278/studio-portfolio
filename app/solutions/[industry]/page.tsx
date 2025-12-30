"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { getIndustryConfig, getPersonalizedHeadline } from "@/constants/industryConfig";
import VideoHero from "@/components/VideoHero";
import type { VideoConfig } from "@/lib/videocdn";

interface IndustrySolutionsPageProps {
  params: {
    industry: string;
  };
}

// Webhook notification for agent handshake
async function notifyAgentHandshake(company: string, industry: string, ref?: string) {
  try {
    // Replace with your webhook URL (Discord, Slack, or custom endpoint)
    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;

    if (!webhookUrl) return;

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `🎯 **Lead Alert!**\n\nSomeone from **${company}** just landed on their personalized ${industry} portal.\n${ref ? `Reference: ${ref}` : ''}`,
        embeds: [{
          title: 'Magic Link Clicked',
          fields: [
            { name: 'Company', value: company, inline: true },
            { name: 'Industry', value: industry, inline: true },
            { name: 'Reference', value: ref || 'N/A', inline: true },
          ],
          color: 0x3b82f6,
          timestamp: new Date().toISOString(),
        }],
      }),
    });
  } catch (error) {
    console.error('Webhook notification failed:', error);
  }
}

export default function IndustrySolutionsPage({ params }: IndustrySolutionsPageProps) {
  const searchParams = useSearchParams();
  const companyName = searchParams.get("company");
  const ref = searchParams.get("ref");

  const config = getIndustryConfig(params.industry);
  const headline = getPersonalizedHeadline(config, companyName || undefined);

  // Apply industry-specific CSS variables for theming
  useEffect(() => {
    document.documentElement.style.setProperty("--industry-primary", config.theme.primary);
    document.documentElement.style.setProperty("--industry-secondary", config.theme.secondary);
    document.documentElement.style.setProperty("--industry-accent", config.theme.accent);

    // Cleanup on unmount
    return () => {
      document.documentElement.style.removeProperty("--industry-primary");
      document.documentElement.style.removeProperty("--industry-secondary");
      document.documentElement.style.removeProperty("--industry-accent");
    };
  }, [config.theme]);

  // Agent handshake notification
  useEffect(() => {
    if (companyName && ref) {
      notifyAgentHandshake(companyName, params.industry, ref);
    }
  }, [companyName, params.industry, ref]);

  // Mock video config - in production, map to actual videos
  const heroVideoConfig: VideoConfig = {
    src: "/videos/3d-hero.mp4",
    poster: "/images/3d-hero-poster.jpg",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Industry Theming */}
      <section className="relative">
        {config.videoCategory ? (
          <VideoHero
            config={heroVideoConfig}
            title={headline}
            subtitle={config.subheadline}
            overlayOpacity={0.6}
          />
        ) : (
          <div className="container-custom py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold">
                {headline}
              </h1>
              <p className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto">
                {config.subheadline}
              </p>
            </motion.div>
          </div>
        )}
      </section>

      {/* Personalized Welcome */}
      {companyName && (
        <section className="container-custom py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-strong p-8 rounded-2xl max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold mb-2">
              Welcome, {companyName}!
            </h2>
            <p className="text-foreground-muted">
              We've curated these solutions specifically for your {config.name.toLowerCase()} business.
              Let's transform your vision into reality.
            </p>
          </motion.div>
        </section>
      )}

      {/* Services Grid with Industry Theming */}
      <section className="container-custom py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our {config.name} Solutions
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {config.services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-xl flex items-start gap-4 hover:scale-102 transition-smooth"
              style={{
                borderColor: `${config.theme.primary}20`,
              }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                style={{ backgroundColor: config.theme.primary }}
              >
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{service}</h3>
                <p className="text-sm text-foreground-muted">
                  Tailored specifically for {config.name.toLowerCase()} businesses
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why {config.name} Leaders Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                style={{
                  background: `linear-gradient(135deg, ${config.theme.primary}, ${config.theme.secondary})`,
                  color: "white",
                }}
              >
                3-4x
              </div>
              <h3 className="font-bold mb-2">Higher Conversion</h3>
              <p className="text-sm text-foreground-muted">
                Personalized landing pages increase conversion by 3-4x
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                style={{
                  background: `linear-gradient(135deg, ${config.theme.primary}, ${config.theme.secondary})`,
                  color: "white",
                }}
              >
                90+
              </div>
              <h3 className="font-bold mb-2">Performance Score</h3>
              <p className="text-sm text-foreground-muted">
                Lighthouse-optimized for speed and SEO
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                style={{
                  background: `linear-gradient(135deg, ${config.theme.primary}, ${config.theme.secondary})`,
                  color: "white",
                }}
              >
                24h
              </div>
              <h3 className="font-bold mb-2">Response Time</h3>
              <p className="text-sm text-foreground-muted">
                We'll get back to you within one business day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Industry Theming */}
      <section className="container-custom py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-strong p-12 rounded-2xl text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-foreground-muted mb-8">
            {companyName
              ? `Let's discuss how we can help ${companyName} achieve its goals.`
              : `Let's discuss your ${config.name.toLowerCase()} project and create something amazing together.`}
          </p>
          <a
            href="/start-project"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-smooth"
            style={{
              background: `linear-gradient(135deg, ${config.theme.primary}, ${config.theme.secondary})`,
            }}
          >
            {config.cta}
            <ArrowRight className="w-5 h-5" />
          </a>

          {ref && (
            <p className="text-xs text-foreground-muted mt-4">
              Reference: {ref}
            </p>
          )}
        </motion.div>
      </section>
    </div>
  );
}
