"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Tv, Box, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// Types
type VibeOption = "web" | "iptv" | "3d";

interface FormData {
    vibe: VibeOption | null;
    name: string;
    email: string;
    company: string;
    brief: string;
}

const STORAGE_KEY = "vibe-check-form-data";

const vibeOptions = [
    {
        id: "web" as VibeOption,
        title: "High-Performance Web",
        description: "Lightning-fast websites and web applications",
        icon: Code2,
        gradient: "gradient-web",
        glow: "glow-web",
    },
    {
        id: "iptv" as VibeOption,
        title: "Brand Transformation",
        description: "IPTV rebranding and UI/UX design",
        icon: Tv,
        gradient: "gradient-iptv",
        glow: "glow-iptv",
    },
    {
        id: "3d" as VibeOption,
        title: "Cinematic 3D",
        description: "Fashion, interior, and exterior 3D animation",
        icon: Box,
        gradient: "gradient-3d",
        glow: "glow-3d",
    },
];

export default function VibeCheckForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        vibe: null,
        name: "",
        email: "",
        company: "",
        brief: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Load form data from local storage on mount
    useEffect(() => {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                setFormData(parsed);
                // If vibe is selected, start at step 2
                if (parsed.vibe) {
                    setStep(2);
                }
            } catch (error) {
                console.error("Failed to parse saved form data:", error);
            }
        }
    }, []);

    // Save form data to local storage whenever it changes
    useEffect(() => {
        if (!isSubmitted) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
        }
    }, [formData, isSubmitted]);

    const handleVibeSelect = (vibe: VibeOption) => {
        setFormData({ ...formData, vibe });
        setTimeout(() => setStep(2), 300);
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setStep(3);

        // Clear local storage after successful submission
        localStorage.removeItem(STORAGE_KEY);
    };

    const resetForm = () => {
        setFormData({
            vibe: null,
            name: "",
            email: "",
            company: "",
            brief: "",
        });
        setStep(1);
        setIsSubmitted(false);
        localStorage.removeItem(STORAGE_KEY);
    };

    const isStep2Valid = formData.name && formData.email && formData.brief;

    return (
        <div className="max-w-4xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center flex-1">
                            <div
                                className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-smooth",
                                    step >= s
                                        ? "bg-accent-primary text-white"
                                        : "bg-background-subtle text-foreground-muted"
                                )}
                            >
                                {step > s ? <Check className="w-5 h-5" /> : s}
                            </div>
                            {s < 3 && (
                                <div
                                    className={cn(
                                        "flex-1 h-1 mx-2 transition-smooth",
                                        step > s ? "bg-accent-primary" : "bg-background-subtle"
                                    )}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex justify-between text-sm text-foreground-muted">
                    <span>Choose Vibe</span>
                    <span>Project Details</span>
                    <span>Confirmation</span>
                </div>
            </div>

            {/* Form Steps */}
            <AnimatePresence mode="wait">
                {/* Step 1: Vibe Selection */}
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-2">What's the Vibe?</h2>
                            <p className="text-foreground-muted">
                                Choose the service that best fits your project
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {vibeOptions.map((option) => {
                                const Icon = option.icon;
                                const isSelected = formData.vibe === option.id;

                                return (
                                    <motion.button
                                        key={option.id}
                                        onClick={() => handleVibeSelect(option.id)}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={cn(
                                            "glass p-8 rounded-2xl text-left transition-smooth relative overflow-hidden",
                                            isSelected && option.glow
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "w-14 h-14 rounded-xl flex items-center justify-center mb-4",
                                                option.gradient
                                            )}
                                        >
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                                        <p className="text-foreground-muted text-sm">
                                            {option.description}
                                        </p>

                                        {isSelected && (
                                            <motion.div
                                                layoutId="vibe-selected"
                                                className="absolute top-4 right-4 w-6 h-6 rounded-full bg-accent-primary flex items-center justify-center"
                                            >
                                                <Check className="w-4 h-4 text-white" />
                                            </motion.div>
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}

                {/* Step 2: Project Details */}
                {step === 2 && (
                    <motion.form
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-2">Tell Us About Your Project</h2>
                            <p className="text-foreground-muted">
                                We'll get back to you within 24 hours
                            </p>
                        </div>

                        <div className="glass p-8 rounded-2xl space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-accent-primary focus:outline-none transition-smooth"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-accent-primary focus:outline-none transition-smooth"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Company (Optional)
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-accent-primary focus:outline-none transition-smooth"
                                    placeholder="Your Company Name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Project Brief *
                                </label>
                                <textarea
                                    name="brief"
                                    value={formData.brief}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-accent-primary focus:outline-none transition-smooth resize-none"
                                    placeholder="Tell us about your project, goals, and timeline..."
                                />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="px-6 py-3 rounded-lg border border-border text-foreground hover:bg-background-subtle transition-smooth flex items-center gap-2"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back
                            </button>
                            <button
                                type="submit"
                                disabled={!isStep2Valid || isSubmitting}
                                className="flex-1 px-6 py-3 rounded-lg gradient-web text-white font-semibold hover:opacity-90 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    "Submitting..."
                                ) : (
                                    <>
                                        Submit Project
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.form>
                )}

                {/* Step 3: Confirmation */}
                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center space-y-6"
                    >
                        <div className="w-20 h-20 rounded-full bg-accent-success/20 flex items-center justify-center mx-auto mb-6">
                            <Check className="w-10 h-10 text-accent-success" />
                        </div>

                        <h2 className="text-3xl font-bold">Thank You!</h2>
                        <p className="text-foreground-muted max-w-md mx-auto">
                            We've received your project details. Our team will review your{" "}
                            <strong className="text-foreground">
                                {vibeOptions.find((v) => v.id === formData.vibe)?.title}
                            </strong>{" "}
                            project and get back to you within 24 hours.
                        </p>

                        <div className="glass p-6 rounded-2xl max-w-md mx-auto text-left">
                            <h3 className="font-semibold mb-4">What's Next?</h3>
                            <ul className="space-y-3 text-sm text-foreground-muted">
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-accent-success mt-0.5 flex-shrink-0" />
                                    <span>We'll review your project requirements</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-accent-success mt-0.5 flex-shrink-0" />
                                    <span>Schedule a discovery call to discuss details</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-accent-success mt-0.5 flex-shrink-0" />
                                    <span>Provide a custom proposal and timeline</span>
                                </li>
                            </ul>
                        </div>

                        <button
                            onClick={resetForm}
                            className="px-6 py-3 rounded-lg border border-border text-foreground hover:bg-background-subtle transition-smooth"
                        >
                            Start Another Project
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Local Storage Indicator */}
            {!isSubmitted && (formData.vibe || formData.name || formData.email) && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-center"
                >
                    <p className="text-xs text-foreground-muted">
                        💾 Your progress is automatically saved
                    </p>
                </motion.div>
            )}
        </div>
    );
}
