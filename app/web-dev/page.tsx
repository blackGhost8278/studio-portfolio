import TypewriterCode from "@/components/TypewriterCode";
import { Code2, Zap, Rocket, Sparkles } from "lucide-react";

export const metadata = {
    title: "Web Development | Studio",
    description: "High-performance web applications built with cutting-edge technology. Next.js, React, and modern web standards.",
};

const codeSnippets = [
    `// This very page you're viewing
export default function WebDevPage() {
  return (
    &lt;div className="min-h-screen bg-background"&gt;
      &lt;TypewriterCode snippets={codeSnippets} /&gt;
    &lt;/div&gt;
  );
}`,
    `// Next.js App Router with Server Components
import { Suspense } from 'react';

export default async function Page() {
  const data = await fetch('/api/projects');
  
  return (
    &lt;Suspense fallback={&lt;Loading /&gt;}&gt;
      &lt;ProjectGrid data={data} /&gt;
    &lt;/Suspense&gt;
  );
}`,
    `// Tailwind CSS with Custom Design Tokens
const theme = {
  colors: {
    brand: {
      web: '#3b82f6',
      iptv: '#ec4899',
      '3d': '#8b5cf6'
    }
  }
};`,
    `// Framer Motion Animations
&lt;motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
&gt;
  Premium UI Components
&lt;/motion.div&gt;`,
];

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack Next.js application with Stripe integration",
        tech: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
        image: "/images/project-1.jpg",
    },
    {
        id: 2,
        title: "SaaS Dashboard",
        description: "Real-time analytics dashboard with WebSocket integration",
        tech: ["React", "Node.js", "PostgreSQL", "WebSocket"],
        image: "/images/project-2.jpg",
    },
    {
        id: 3,
        title: "AI Content Platform",
        description: "AI-powered content generation with OpenAI integration",
        tech: ["Next.js", "OpenAI", "Prisma", "tRPC"],
        image: "/images/project-3.jpg",
    },
    {
        id: 4,
        title: "Mobile-First PWA",
        description: "Progressive web app with offline-first architecture",
        tech: ["React", "Service Workers", "IndexedDB"],
        image: "/images/project-4.jpg",
    },
];

export default function WebDevPage() {
    return (
        <div className="min-h-screen bg-background" data-cursor="web">
            {/* Hero Section */}
            <section className="container-custom py-20 md:py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
                            <Code2 className="w-4 h-4 text-brand-web" />
                            <span>Web Development</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold">
                            High-Performance
                            <br />
                            <span className="gradient-web bg-clip-text text-transparent">
                                Web Applications
                            </span>
                        </h1>

                        <p className="text-xl text-foreground-muted">
                            Built with cutting-edge technology. Lightning-fast, scalable, and
                            optimized for conversion. From landing pages to full-stack SaaS platforms.
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="/start-project"
                                className="px-8 py-4 rounded-lg gradient-web text-white font-semibold hover:opacity-90 transition-smooth"
                            >
                                Start Your Project
                            </a>
                            <a
                                href="#projects"
                                className="px-8 py-4 rounded-lg border border-border text-foreground font-semibold hover:bg-background-subtle transition-smooth"
                            >
                                View Projects
                            </a>
                        </div>
                    </div>

                    {/* Live Code Demo */}
                    <div>
                        <TypewriterCode snippets={codeSnippets} />
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="container-custom py-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Our Tech Stack
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="glass p-8 rounded-2xl">
                        <div className="w-12 h-12 rounded-lg gradient-web flex items-center justify-center mb-4">
                            <Rocket className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Frontend</h3>
                        <ul className="space-y-2 text-foreground-muted text-sm">
                            <li>• Next.js 15 (App Router)</li>
                            <li>• React 19 with Server Components</li>
                            <li>• Tailwind CSS v4</li>
                            <li>• Framer Motion</li>
                            <li>• TypeScript</li>
                        </ul>
                    </div>

                    <div className="glass p-8 rounded-2xl">
                        <div className="w-12 h-12 rounded-lg gradient-web flex items-center justify-center mb-4">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Backend</h3>
                        <ul className="space-y-2 text-foreground-muted text-sm">
                            <li>• Node.js / Bun</li>
                            <li>• tRPC / GraphQL</li>
                            <li>• Prisma ORM</li>
                            <li>• PostgreSQL / MongoDB</li>
                            <li>• Redis for caching</li>
                        </ul>
                    </div>

                    <div className="glass p-8 rounded-2xl">
                        <div className="w-12 h-12 rounded-lg gradient-web flex items-center justify-center mb-4">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Infrastructure</h3>
                        <ul className="space-y-2 text-foreground-muted text-sm">
                            <li>• Vercel / AWS</li>
                            <li>• Cloudflare CDN</li>
                            <li>• GitHub Actions CI/CD</li>
                            <li>• Docker containers</li>
                            <li>• Monitoring & Analytics</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Project Showcase */}
            <section id="projects" className="container-custom py-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Recent Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="glass rounded-2xl overflow-hidden group cursor-pointer hover:glow-web transition-smooth"
                        >
                            <div className="aspect-video bg-background-subtle relative overflow-hidden">
                                {/* Placeholder gradient */}
                                <div className="absolute inset-0 gradient-web opacity-20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Code2 className="w-16 h-16 text-foreground-muted" />
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-foreground-muted mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-full bg-background-subtle text-xs text-foreground-muted"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="container-custom py-20">
                <div className="glass-strong p-12 rounded-2xl max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Performance-First Development
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold gradient-web bg-clip-text text-transparent mb-2">
                                95+
                            </div>
                            <div className="text-sm text-foreground-muted">
                                Lighthouse Score
                            </div>
                        </div>

                        <div>
                            <div className="text-4xl font-bold gradient-web bg-clip-text text-transparent mb-2">
                                &lt;1s
                            </div>
                            <div className="text-sm text-foreground-muted">
                                Time to Interactive
                            </div>
                        </div>

                        <div>
                            <div className="text-4xl font-bold gradient-web bg-clip-text text-transparent mb-2">
                                100%
                            </div>
                            <div className="text-sm text-foreground-muted">
                                Accessibility
                            </div>
                        </div>

                        <div>
                            <div className="text-4xl font-bold gradient-web bg-clip-text text-transparent mb-2">
                                A+
                            </div>
                            <div className="text-sm text-foreground-muted">
                                Security Grade
                            </div>
                        </div>
                    </div>

                    <p className="text-foreground-muted text-center mt-8">
                        Every project is optimized for Core Web Vitals, SEO, and conversion.
                        We don't just build websites—we build revenue-generating machines.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container-custom py-20">
                <div className="glass-strong p-12 rounded-2xl text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Build Something Amazing?
                    </h2>
                    <p className="text-foreground-muted mb-8">
                        Let's discuss your web development project and create a high-performance
                        application that drives results.
                    </p>
                    <a
                        href="/start-project"
                        className="inline-block px-8 py-4 rounded-lg gradient-web text-white font-semibold hover:opacity-90 transition-smooth"
                    >
                        Start Your Web Project
                    </a>
                </div>
            </section>
        </div>
    );
}
