"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

/**
 * Pixel-Perfect "How It Works" Section
 * 
 * Logic:
 * 1. Parent Container: 500vh ensures smooth scrolling for 4 cards.
 * 2. Sticky Viewport: Keeps everything locked in view while cards animate.
 * 3. Desktop: Cards fly in to form a horizontal row (join the 1st card).
 * 4. Mobile: Cards fly in and stack directly on top of each other (cover the previous card).
 */

const CARDS_DESKTOP = [
    {
        id: 1,
        title: "Create Your Group",
        description: "Bring up to 5 friends. Your group becomes your identity.",
        image: "/assets/How to work Section/StickyWrapper_4.png",
        left: "0vw",
        rotate: -5,
        textHeight: "9.93vw",
        textOffset: "0.75vw",
        isStatic: true
    },
    {
        id: 2,
        title: "Match With Other Groups",
        description: "Swipe through groups that share your vibe, interests, and intentions.",
        image: "/assets/How to work Section/StickyWrapper_3.png",
        left: "18.89vw",
        rotate: 5,
        textHeight: "11.74vw",
        textOffset: "0vw",
        scrollRange: [0.1, 0.4]
    },
    {
        id: 3,
        title: "Start the Conversation",
        description: "Chat, send photos, poke someone you like, or jump on voice/video calls when you're ready.",
        image: "/assets/How to work Section/StickyWrapper_2.png",
        left: "37.78vw",
        rotate: -5,
        textHeight: "11.46vw",
        textOffset: "0.624vw",
        scrollRange: [0.4, 0.7]
    },
    {
        id: 4,
        title: "Meet IRL",
        description: "Take your connections from screen to real life—with the comfort of people you trust.",
        image: "/assets/How to work Section/StickyWrapper_1.png",
        right: "-0.07vw",
        rotate: 5,
        textHeight: "11.46vw",
        textOffset: "0vw",
        scrollRange: [0.7, 1.0]
    },
];

const CARDS_MOBILE = [
    {
        id: 1,
        title: "Create Your Group",
        description: "Bring up to 5 friends. Your group becomes your identity.",
        image: "/assets/How to work Section/StickyWrapper_4.png",
        rotate: -3,
        textHeight: "173px",
        textOffset: "10.62px",
        isStatic: true,
        scrollRange: [0, 0.1]
    },
    {
        id: 2,
        title: "Match With Other Groups",
        description: "Swipe through groups that share your vibe, interests, and intentions.",
        image: "/assets/How to work Section/StickyWrapper_3.png",
        rotate: 3,
        textHeight: "173px",
        textOffset: "0px",
        scrollRange: [0.1, 0.4]
    },
    {
        id: 3,
        title: "Start the Conversation",
        description: "Chat, send photos, poke someone you like, or jump on voice/video calls when you're ready.",
        image: "/assets/How to work Section/StickyWrapper_2.png",
        rotate: -3,
        textHeight: "173px",
        textOffset: "10.62px",
        scrollRange: [0.4, 0.7]
    },
    {
        id: 4,
        title: "Meet IRL",
        description: "Take your connections from screen to real life—with the comfort of people you trust.",
        image: "/assets/How to work Section/StickyWrapper_1.png",
        rotate: 3,
        textHeight: "173px",
        textOffset: "0px",
        scrollRange: [0.7, 1.0]
    }
];

export default function HowItWorks() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const cards = isMobile ? CARDS_MOBILE : CARDS_DESKTOP;

    return (
        <section
            id="how-it-works"
            ref={sectionRef}
            className="relative w-full bg-[#111111] h-[500vh]" // Sticky stacking needs vertical room
        >
            {/* Sticky Viewport Layer */}
            <div className="sticky top-0 h-screen w-full flex justify-center items-center overflow-hidden">

                {/* Visual Bounds Container */}
                <div className={`relative w-full h-full flex items-center justify-center ${isMobile ? 'max-w-[408px]' : 'max-w-[75.2vw]'}`}>

                    {/* Fixed Background Heading */}
                    <div className={`absolute w-full text-center pointer-events-none z-0 ${isMobile ? 'top-[12vh]' : 'top-[8.3vw]'}`}>
                        <h2 className={`${isMobile ? 'text-[60px]' : 'text-[5.5vw]'} font-bold leading-[110%] text-white opacity-10 uppercase tracking-[-0.04em] select-none whitespace-nowrap`}>
                            {isMobile ? (
                                <>Effortless Group <br /> Matching</>
                            ) : (
                                <>Effortless Group <br /> Matching Starts Here</>
                            )}
                        </h2>
                    </div>

                    {/* Cards Render Area */}
                    <div className={`relative w-full flex items-center justify-center ${isMobile ? 'h-[400px] mt-[15vh]' : 'h-[18.6vw] mt-[22.2vw]'}`}>
                        {cards.map((card, index) => (
                            <StickyCard
                                key={card.id}
                                card={card}
                                index={index}
                                scrollYProgress={scrollYProgress}
                                isMobile={isMobile}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function StickyCard({ card, index, scrollYProgress, isMobile }: { card: any; index: number; scrollYProgress: any, isMobile: boolean }) {
    // Stacking Strategy:
    // Only animate non-static cards. 
    // Start at y: "100vh" (bottom of screen) and transform to y: "0%" (final position).

    const range = card.scrollRange || [0, 0];

    // Y-Axis Fly-in using percentages for responsive accuracy
    const y = useTransform(
        scrollYProgress,
        [range[0], range[1]],
        ["100vh", "0%"]
    );

    // Fade-in as it approaches
    const opacity = useTransform(
        scrollYProgress,
        [range[0], range[0] + 0.1],
        [0, 1]
    );

    const finalY = card.isStatic ? "0%" : y;
    const finalOpacity = card.isStatic ? 1 : opacity;

    return (
        <motion.div
            style={{
                position: "absolute",
                // Mobile: Stacks vertically (same center). Desktop: Horizontal row offsets.
                left: isMobile ? "calc(50% - 200px + 1px)" : (card.left || "auto"),
                right: isMobile ? "auto" : (card.right || "auto"),
                top: 0,
                y: finalY,
                opacity: finalOpacity,
                width: isMobile ? "400px" : "18.6vw",
                height: isMobile ? "400px" : "18.6vw",
                zIndex: index + 10 // Ensure later cards stack on top
            }}
            className="flex items-center justify-center"
        >
            {/* The Actual Card Component */}
            <motion.div
                className={`relative bg-[#5F00DB] border-[#111111] overflow-hidden group shadow-2xl transition-all duration-300 ${isMobile
                    ? 'w-[376px] h-[376px] border-[5px] rounded-[16px]'
                    : 'w-[18.6vw] h-[18.6vw] border-[0.2vw] rounded-[1.1vw]'
                    }`}
                style={{
                    rotate: `${card.rotate}deg`,
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
                {/* Image Background */}
                <div className={`absolute z-0 ${isMobile
                    ? 'inset-x-[-73.9px] top-[-3.87px] bottom-[3.87px]'
                    : 'inset-x-[-3.4vw] top-[-0.3vw] bottom-[0.3vw]'
                    }`}>
                    <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-60"
                        sizes={isMobile ? "376px" : "18.6vw"}
                    />
                </div>

                {/* Light Purple Shade Hover Overlay */}
                <div className="absolute inset-0 bg-[#9D59FF]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5] pointer-events-none" />

                {/* Text Section (Bottom UI) */}
                <div
                    className={`absolute bottom-0 left-0 right-0 z-10 flex flex-col justify-end ${isMobile ? 'p-4 pb-6' : 'p-[1.1vw] pb-[1.45vw]'
                        }`}
                    style={{
                        height: card.textHeight,
                        background: "linear-gradient(180deg, rgba(22, 0, 63, 0) 0%, rgba(22, 0, 63, 0.75) 100%)",
                        backdropFilter: "blur(4px)",
                        WebkitBackdropFilter: "blur(4px)"
                    }}
                >
                    <div
                        className={`flex flex-col ${isMobile ? 'gap-3' : 'gap-[0.76vw]'}`}
                        style={{
                            paddingLeft: isMobile ? (card.textOffset !== "0px" ? "12px" : "0px") : (card.textOffset !== "0vw" ? card.textOffset : "0px")
                        }}
                    >
                        <h3 className={`${isMobile ? 'text-[24px]' : 'text-[1.45vw]'} font-bold leading-[120%] tracking-[-0.04em] text-white`}>
                            {card.title}
                        </h3>
                        <p className={`${isMobile ? 'text-[16px]' : 'text-[0.83vw]'} font-normal leading-relaxed text-white/95`}>
                            {card.description}
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
