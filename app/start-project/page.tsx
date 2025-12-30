import VibeCheckForm from "@/components/VibeCheckForm";
import { Sparkles } from "lucide-react";

export const metadata = {
    title: "Start a Project | Studio",
    description: "Tell us about your project and let's create something amazing together.",
};

export default function StartProjectPage() {
    return (
        <div className="min-h-screen bg-background py-20">
            <section className="container-custom">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-6">
                        <Sparkles className="w-4 h-4 text-accent-primary" />
                        <span>Let's Work Together</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        Start Your
                        <br />
                        <span className="gradient-text">Next Project</span>
                    </h1>

                    <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
                        Choose your vibe, share your vision, and we'll bring it to life with
                        our AI-accelerated workflows.
                    </p>
                </div>

                <VibeCheckForm />
            </section>
        </div>
    );
}
