import LiveUISwitcher from "@/components/LiveUISwitcher";
import { Sparkles, Palette, Zap } from "lucide-react";

export const metadata = {
    title: "IPTV Rebranding | Studio",
    description: "Transform your IPTV platform with stunning UI/UX design. See our live theme switcher in action.",
};

export default function IPTVPage() {
    return (
        <div className="min-h-screen bg-background" data-cursor="iptv">
            {/* Hero Section */}
            <section className="container-custom py-20 md:py-32">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
                        <Sparkles className="w-4 h-4 text-brand-iptv" />
                        <span>IPTV Rebranding & Services</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold">
                        Transform Your
                        <br />
                        <span className="gradient-iptv bg-clip-text text-transparent">
                            IPTV Platform
                        </span>
                    </h1>

                    <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
                        Elevate your streaming service with premium UI/UX design.
                        From standard interfaces to luxury brands and cyberpunk aesthetics.
                    </p>
                </div>
            </section>

            {/* Live UI Switcher Section */}
            <section className="container-custom py-20">
                <LiveUISwitcher />
            </section>

            {/* Features Grid */}
            <section className="container-custom py-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Why Rebrand Your IPTV?
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="glass p-8 rounded-2xl">
                        <div className="w-12 h-12 rounded-lg gradient-iptv flex items-center justify-center mb-4">
                            <Palette className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Brand Identity</h3>
                        <p className="text-foreground-muted">
                            Stand out from generic IPTV templates. Create a unique visual identity
                            that matches your brand's personality and target audience.
                        </p>
                    </div>

                    <div className="glass p-8 rounded-2xl">
                        <div className="w-12 h-12 rounded-lg gradient-iptv flex items-center justify-center mb-4">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">User Experience</h3>
                        <p className="text-foreground-muted">
                            Improve navigation, reduce churn, and increase watch time with
                            intuitive interfaces designed for modern streaming habits.
                        </p>
                    </div>

                    <div className="glass p-8 rounded-2xl">
                        <div className="w-12 h-12 rounded-lg gradient-iptv flex items-center justify-center mb-4">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Premium Perception</h3>
                        <p className="text-foreground-muted">
                            Luxury aesthetics signal quality. Transform your platform into a
                            premium service that justifies higher subscription prices.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container-custom py-20">
                <div className="glass-strong p-12 rounded-2xl text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Your Platform?
                    </h2>
                    <p className="text-foreground-muted mb-8">
                        Let's discuss your IPTV rebranding project and create a custom theme
                        that perfectly matches your vision.
                    </p>
                    <a
                        href="/start-project"
                        className="inline-block px-8 py-4 rounded-lg gradient-iptv text-white font-semibold hover:opacity-90 transition-smooth"
                    >
                        Start Your Rebrand
                    </a>
                </div>
            </section>
        </div>
    );
}
