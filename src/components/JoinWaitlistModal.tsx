"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface JoinWaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Calls the local Next.js proxy route — avoids CORS and keeps the API key server-side
const WAITLIST_API_URL = "/api/waitlist";

export default function JoinWaitlistModal({ isOpen, onClose }: JoinWaitlistModalProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [mounted, setMounted] = useState(false);

    // Ensure portal only renders on client
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSubmit = async () => {
        if (!name.trim() || !email.trim()) {
            setError("Please fill in both name and email.");
            return;
        }
        setError("");
        setIsLoading(true);

        try {
            const res = await fetch(WAITLIST_API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: name.trim(), email: email.trim() }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => null);
                throw new Error(data?.message || `Request failed (${res.status})`);
            }

            setShowSuccess(true);
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
            setError(message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleClose = () => {
        setShowSuccess(false);
        setName("");
        setEmail("");
        setError("");
        onClose();
    };

    // Don't render on server / before mount
    if (!mounted) return null;

    // Use React Portal to render at document.body — escaping any parent stacking contexts
    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Blur Overlay */}
                    <motion.div
                        className="fixed inset-0 z-[9999] backdrop-blur-[12px] bg-black/40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none"
                        initial={{ y: "100vh", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200, duration: 0.5 }}
                    >
                        <div className="pointer-events-auto">
                            {showSuccess ? (
                                <SuccessContent onDone={handleClose} />
                            ) : (
                                <FormContent
                                    name={name}
                                    email={email}
                                    onNameChange={setName}
                                    onEmailChange={setEmail}
                                    onSubmit={handleSubmit}
                                    isLoading={isLoading}
                                    error={error}
                                />
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}

/* ─── Form Modal Content ─── */

function FormContent({
    name,
    email,
    onNameChange,
    onEmailChange,
    onSubmit,
    isLoading,
    error,
}: {
    name: string;
    email: string;
    onNameChange: (v: string) => void;
    onEmailChange: (v: string) => void;
    onSubmit: () => void;
    isLoading: boolean;
    error: string;
}) {
    return (
        <div
            className="
                box-border flex flex-col items-center text-center p-0 relative overflow-hidden
                w-[100vw] max-w-[408px] mobile:w-[29.17vw] mobile:max-w-none
                bg-[#16003F] border border-[rgba(102,102,102,0.5)]
                backdrop-blur-[12px] rounded-[5.88vw] mobile:rounded-[1.67vw]
            "
        >
            {/* Image Section with Purple Overlay */}
            <div className="relative w-full h-[50vw] max-h-[204px] mobile:h-[14.58vw] mobile:max-h-none rounded-t-[7.84vw] mobile:rounded-t-[1.67vw] mb-[-19.6vw] mobile:mb-[-4.17vw] overflow-hidden flex-shrink-0 z-0">
                <Image
                    src="/assets/waitlist/modal-image.png"
                    alt="Fennec group"
                    fill
                    className="object-cover"
                />
                {/* Purple gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(180deg, rgba(95, 0, 219, 0.5) 0%, #16003F 100%)",
                    }}
                />
            </div>

            {/* Form Section */}
            <div
                className="
                    flex flex-col items-start
                    p-[5.88vw] gap-[5.88vw]
                    mobile:p-[1.67vw] mobile:gap-[1.67vw]
                    w-full relative z-10
                "
            >
                {/* Title */}
                <h2
                    className="
                        text-white font-bold w-full
                        text-[7.84vw] leading-[9.31vw]
                        mobile:text-[2.08vw] mobile:leading-[2.5vw]
                        tracking-[-0.02em]
                    "

                >
                    Join the Waitlist
                </h2>

                {/* Subtitle */}
                <h3
                    className="
                        text-white font-medium w-full
                        text-[4.9vw] leading-[5.88vw]
                        mobile:text-[1.25vw] mobile:leading-[1.51vw]
                        tracking-[-0.02em]
                    "

                >
                    Be the first to join Fennec
                </h3>

                {/* Description */}
                <p
                    className="
                        text-[#DDDDDD] font-normal w-[96%]
                        text-[3.92vw] leading-[150%]
                        mobile:text-[0.94vw] mobile:leading-[1.67vw]
                    "

                >
                    Sign up now and get exclusive early access to our group-based matching app. Don&apos;t miss out on new matches, chats, and premium features.
                </p>

                {/* Name Field */}
                <div className="flex flex-col items-start w-full gap-0">
                    <label
                        className="text-white font-bold text-[2.94vw] mobile:text-[0.63vw] leading-[3.92vw] mobile:leading-[0.83vw]"

                    >
                        Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => onNameChange(e.target.value)}
                        placeholder="Enter your name"
                        className="
                            w-full bg-transparent border-b border-white text-white
                            py-[1.96vw] mobile:py-[0.42vw]
                            text-[3.92vw] mobile:text-[0.83vw]
                            leading-[5.88vw] mobile:leading-[1.25vw]
                            placeholder:text-white/40 outline-none
                            h-[11.76vw] mobile:h-[2.5vw] min-h-[48px] mobile:min-h-0
                        "

                    />
                </div>

                {/* Email Field */}
                <div className="flex flex-col items-start w-full gap-0">
                    <label
                        className="text-white font-bold text-[2.94vw] mobile:text-[0.63vw] leading-[3.92vw] mobile:leading-[0.83vw]"

                    >
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => onEmailChange(e.target.value)}
                        placeholder="Enter your email"
                        className="
                            w-full bg-transparent border-b border-white text-white
                            py-[1.96vw] mobile:py-[0.42vw]
                            text-[3.92vw] mobile:text-[0.83vw]
                            leading-[5.88vw] mobile:leading-[1.25vw]
                            placeholder:text-white/40 outline-none
                            h-[11.76vw] mobile:h-[2.5vw] min-h-[48px] mobile:min-h-0
                        "

                    />
                </div>

                {/* Error Message */}
                {error && (
                    <p
                        className="text-[#E74C3C] font-normal text-[3.2vw] mobile:text-[0.73vw] leading-[150%] w-full text-center"

                    >
                        {error}
                    </p>
                )}

                {/* Submit Button */}
                <div className="w-full flex justify-center">
                    <button
                        onClick={onSubmit}
                        disabled={isLoading}
                        className="
                            flex flex-row justify-center items-center
                            px-[5.88vw] py-[3.92vw] gap-[2.94vw]
                            mobile:px-[1.25vw] mobile:py-[0.83vw] mobile:gap-[0.63vw]
                            w-full h-[13.73vw] mobile:h-[2.92vw]
                            bg-[#5F00DB] rounded-[12.75vw] mobile:rounded-[2.71vw]
                            shadow-[0_-1.96vw_2.94vw_rgba(95,0,219,0.25),0_1.96vw_2.94vw_rgba(95,0,219,0.25)]
                            mobile:shadow-[0_-0.42vw_0.63vw_rgba(95,0,219,0.25),0_0.42vw_0.63vw_rgba(95,0,219,0.25)]
                            cursor-pointer transition-all hover:bg-[#4D00B3] active:scale-95
                            disabled:opacity-60 disabled:cursor-not-allowed
                        "
                    >
                        {isLoading ? (
                            <svg className="animate-spin w-[5.88vw] h-[5.88vw] mobile:w-[1.25vw] mobile:h-[1.25vw] text-white" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                        ) : (
                            <span
                                className="text-white font-medium text-[3.92vw] mobile:text-[0.83vw] leading-[5.88vw] mobile:leading-[1.25vw] whitespace-nowrap"

                            >
                                Join Waitlist
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ─── Success Modal Content ─── */

function SuccessContent({ onDone }: { onDone: () => void }) {
    return (
        <div
            className="
                box-border flex flex-col items-center
                p-[5.88vw] gap-[5.88vw]
                mobile:p-[1.67vw] mobile:gap-[1.67vw]
                relative
                w-[100vw] max-w-[408px] mobile:w-[25vw] mobile:max-w-none
                bg-[#16003F] border border-[rgba(102,102,102,0.5)]
                backdrop-blur-[12px] rounded-[7.84vw] mobile:rounded-[1.67vw]
            "
        >
            {/* Icon Section (Icon Design MD) */}
            <div className="flex flex-col justify-center items-center relative w-[29.41vw] h-[29.41vw] mobile:w-[6.25vw] mobile:h-[6.25vw]">
                {/* Rotating Border Animation & Glow */}
                <div className="absolute inset-0 z-[1] rounded-full">
                    {/* Glow Layer */}
                    <div
                        className="absolute -inset-[0.5vw] rounded-full animate-[spin_3s_linear_infinite]"
                        style={{
                            background: 'conic-gradient(from 0deg, transparent 0%, rgba(255, 255, 255, 0.7) 50%, transparent 100%)',
                            filter: 'blur(0.25vw)',
                            WebkitMask: 'radial-gradient(closest-side, transparent 75%, black 80%, black 80%, transparent 85%)',
                            mask: 'radial-gradient(closest-side, transparent 75%, black 80%, black 80%, transparent 85%)'
                        }}
                    />
                    {/* Sharp Border Layer */}
                    <div
                        className="absolute inset-0 rounded-full animate-[spin_3s_linear_infinite]"
                        style={{
                            background: 'conic-gradient(from 0deg, transparent 0%, rgba(255, 255, 255, 1) 50%, transparent 100%)',
                            WebkitMask: 'radial-gradient(closest-side, transparent calc(100% - 0.1vw), black calc(100% - 0.1vw))',
                            mask: 'radial-gradient(closest-side, transparent calc(100% - 0.1vw), black calc(100% - 0.1vw))'
                        }}
                    />
                </div>

                {/* Icon BG */}
                <div className="box-border absolute inset-0 backdrop-blur-[0.31vw] rounded-full bg-white/5 border border-white/10 z-0"></div>

                {/* Check Icon */}
                <svg
                    className="relative z-10 w-[17.65vw] h-[17.65vw] mobile:w-[2.92vw] mobile:h-[2.92vw]"
                    viewBox="0 0 72 72"
                    fill="none"
                >
                    <circle cx="36" cy="36" r="32" stroke="#3ADC60" strokeWidth="3" fill="none" />
                    <path d="M22 36L32 46L50 24" stroke="#3ADC60" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
            </div>

            {/* Title */}
            <h2
                className="
                    text-white font-medium w-full text-center
                    text-[5.88vw] leading-[7.11vw]
                    mobile:text-[1.67vw] mobile:leading-[1.98vw]
                    tracking-[-0.02em]
                "

            >
                You&apos;re on the waitlist!
            </h2>

            {/* Description */}
            <p
                className="
                    text-[#DDDDDD] font-normal w-full text-center
                    text-[3.92vw] leading-[150%]
                    mobile:text-[0.94vw] mobile:leading-[1.67vw]
                "

            >
                Thanks for signing up. We&apos;ll notify you as soon as Fennec is ready for early access.
            </p>

            {/* Done Button */}
            <div className="w-full flex justify-center">
                <button
                    onClick={onDone}
                    className="
                        flex flex-row justify-center items-center
                        px-[5.88vw] py-[3.92vw] gap-[2.94vw]
                        mobile:px-[1.25vw] mobile:py-[0.83vw] mobile:gap-[0.63vw]
                        w-full h-[13.73vw] mobile:h-[2.92vw]
                        bg-[#5F00DB] rounded-[12.75vw] mobile:rounded-[2.71vw]
                        shadow-[0_-1.96vw_2.94vw_rgba(95,0,219,0.25),0_1.96vw_2.94vw_rgba(95,0,219,0.25)]
                        mobile:shadow-[0_-0.42vw_0.63vw_rgba(95,0,219,0.25),0_0.42vw_0.63vw_rgba(95,0,219,0.25)]
                        cursor-pointer transition-all hover:bg-[#4D00B3] active:scale-95
                    "
                >
                    <span
                        className="text-white font-medium text-[3.92vw] mobile:text-[0.83vw] leading-[5.88vw] mobile:leading-[1.25vw] whitespace-nowrap"

                    >
                        Done
                    </span>
                </button>
            </div>
        </div>
    );
}
