"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AppStoreButton, GooglePlayButton } from "@/components/ui/StoreButtons";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const SLIDES = [
    "/assets/hero/Slide=1.png",
    "/assets/hero/Slide=2.png",
    "/assets/hero/Slide=3.png",
];

const ICONS = {
    eyes: {
        desktop: "/assets/hero/Mobile/Image_eye.png",
        mobile: "/assets/hero/Mobile/Image_eye.png",
    },
    handshake: {
        desktop: "/assets/hero/Mobile/Image_handshake.png",
        mobile: "/assets/hero/Mobile/Image_handshake.png",
    },
    tick: {
        desktop: "/assets/hero/Mobile/Image_tick.png",
        mobile: "/assets/hero/Mobile/Image_tick.png",
    },
    human: {
        desktop: "/assets/hero/Mobile/Image_people.png",
        mobile: "/assets/hero/Mobile/Image_people.png",
    },
};

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const getPrevIndex = () => (currentIndex - 1 + SLIDES.length) % SLIDES.length;
    const getNextIndex = () => (currentIndex + 1) % SLIDES.length;

    return (
        <section className="relative w-full h-[640px] md:h-[800px] flex flex-col items-center overflow-hidden bg-[#111111] select-none">
            {/* Background Image Layer */}
            <div
                className="absolute inset-x-[-2.08%] inset-y-[-3.7%] z-0"
                style={{
                    background: `linear-gradient(180deg, rgba(17, 17, 17, 0.5) 0%, #111111 70%), url('/assets/hero/BG.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />

            {/* Scaling 3D Icons */}

            {/* Icon 3: Eyes (Top Left) */}
            <motion.div
                className="absolute z-10 w-[80px] h-[80px] flex items-center justify-center cursor-pointer transition-all duration-300"
                style={{
                    left: isMobile ? 'calc(50% - 40px - 87px)' : '102px',
                    top: isMobile ? '80px' : '161px'
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="absolute w-[67px] h-[67px] opacity-50 blur-[17px]">
                    <Image src={isMobile ? ICONS.eyes.mobile : ICONS.eyes.desktop} alt="" fill className="object-contain" />
                </div>
                <div className="absolute w-[67px] h-[67px] drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)]">
                    <Image src={isMobile ? ICONS.eyes.mobile : ICONS.eyes.desktop} alt="Eyes Icon" fill className="object-contain" />
                </div>
            </motion.div>

            {/* Icon 4: Handshake (Bottom Left on Mobile, Middle Left on Desktop) */}
            <motion.div
                className="absolute z-10 w-[80px] h-[80px] flex items-center justify-center cursor-pointer transition-all duration-300"
                style={{
                    left: isMobile ? 'calc(50% - 40px - 87px)' : '316px',
                    top: isMobile ? '395px' : '359px'
                }}
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
                <div className="absolute w-[67px] h-[67px] opacity-50 blur-[17px]">
                    <Image src={isMobile ? ICONS.handshake.mobile : ICONS.handshake.desktop} alt="" fill className="object-contain" />
                </div>
                <div className="absolute w-[67px] h-[67px] drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)]">
                    <Image src={isMobile ? ICONS.handshake.mobile : ICONS.handshake.desktop} alt="Handshake Icon" fill className="object-contain" />
                </div>
            </motion.div>

            {/* Icon 1: Tick (Top Right) */}
            <motion.div
                className="absolute z-10 w-[80px] h-[80px] flex items-center justify-center cursor-pointer transition-all duration-300"
                style={{
                    right: isMobile ? 'calc(50% - 40px - 87px)' : '182px',
                    top: isMobile ? '80px' : '161px'
                }}
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <div className="absolute w-[67px] h-[67px] opacity-50 blur-[17px]">
                    <Image src={isMobile ? ICONS.tick.mobile : ICONS.tick.desktop} alt="" fill className="object-contain" />
                </div>
                <div className="absolute w-[67px] h-[67px] drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)]">
                    <Image src={isMobile ? ICONS.tick.mobile : ICONS.tick.desktop} alt="Tick Icon" fill className="object-contain" />
                </div>
            </motion.div>

            {/* Icon 2: Human (Bottom Right on Mobile, Middle Right on Desktop) */}
            <motion.div
                className="absolute z-10 w-[80px] h-[80px] flex items-center justify-center cursor-pointer transition-all duration-300"
                style={{
                    right: isMobile ? 'calc(50% - 40px - 87px)' : '236px',
                    top: isMobile ? '395px' : '359px'
                }}
                animate={{ scale: [1, 1.07, 1] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
                <div className="absolute w-[67px] h-[67px] opacity-50 blur-[17px]">
                    <Image src={isMobile ? ICONS.human.mobile : ICONS.human.desktop} alt="" fill className="object-contain" />
                </div>
                <div className="absolute w-[67px] h-[67px] drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)]">
                    <Image src={isMobile ? ICONS.human.mobile : ICONS.human.desktop} alt="Human Icon" fill className="object-contain" />
                </div>
            </motion.div>

            {/* Content Layer */}
            <div
                className="absolute z-20 flex flex-col items-center w-full px-3"
                style={{
                    top: isMobile ? '80px' : '161px',
                    gap: isMobile ? '16px' : '27px'
                }}
            >
                {/* Heading */}
                <div className="flex flex-col items-center gap-[8px] md:gap-[16px] w-full text-center max-w-[241px] md:max-w-none">
                    <h1
                        className="text-white font-bold text-[40px] md:text-[67px] leading-[110%] tracking-[-0.04em]"
                        style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                    >
                        Meet New People,<br />
                        Together.
                    </h1>
                </div>

                {/* Text */}
                <p
                    className="text-white font-normal text-[12px] md:text-[16px] leading-[15px] md:leading-[21px] text-center w-full max-w-[241px] md:max-w-none"
                    style={{ fontFamily: "'SF Pro Text', sans-serif" }}
                >
                    Groups connect with groups. Real conversations. Real chemistry.
                </p>

                {/* Links / Download Buttons */}
                <div className="flex flex-row justify-center items-start gap-[11px] md:gap-[16px] w-full mt-1 md:mt-0">
                    <AppStoreButton />
                    <GooglePlayButton />
                </div>
            </div>

            {/* Carousel Layer */}
            <div
                className="absolute z-20 flex flex-row justify-center items-center gap-[4px] md:gap-[11px] w-full h-[120px] md:h-[322px]"
                style={{ top: isMobile ? '493px' : '478px' }}
            >
                <AnimatePresence mode="popLayout">
                    {/* Left Image (Previous) */}
                    <motion.div
                        key={`prev-${currentIndex}`}
                        initial={{ opacity: 0, x: -33 }}
                        animate={{ opacity: 0.5, x: 0, filter: isMobile ? 'blur(1px)' : 'blur(3px)' }}
                        exit={{ opacity: 0, x: -33 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-[151px] h-[90px] md:w-[402px] md:h-[241px] rounded-[6px] md:rounded-[16px] overflow-hidden flex-shrink-0"
                    >
                        <Image
                            src={SLIDES[getPrevIndex()]}
                            alt="Previous slide"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Center Image (Current) */}
                    <motion.div
                        key={`curr-${currentIndex}`}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-[201px] h-[120px] md:w-[536px] md:h-[322px] rounded-[6px] md:rounded-[16px] overflow-hidden z-30 shadow-2xl flex-shrink-0"
                    >
                        <Image
                            src={SLIDES[currentIndex]}
                            alt="Current slide"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Right Image (Next) */}
                    <motion.div
                        key={`next-${currentIndex}`}
                        initial={{ opacity: 0, x: 33 }}
                        animate={{ opacity: 0.5, x: 0, filter: isMobile ? 'blur(1px)' : 'blur(3px)' }}
                        exit={{ opacity: 0, x: 33 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-[151px] h-[90px] md:w-[402px] md:h-[241px] rounded-[6px] md:rounded-[16px] overflow-hidden flex-shrink-0"
                    >
                        <Image
                            src={SLIDES[getNextIndex()]}
                            alt="Next slide"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
