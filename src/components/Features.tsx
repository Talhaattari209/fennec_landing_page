"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FEATURES = [
    {
        id: 1,
        title: "Group Matching That Actually Feels Natural",
        description: "Meeting new people doesn't have to be awkward. Our group-first approach creates an easy, comfortable way to connect with others who share your energy.",
        image: "/assets/Feature section/Mobile_mockup/Mockup Wrapper.png",
        points: [
            "Match as a group for effortless chemistry",
            "Smart recommendations based on interests and vibe",
            "Safer, more relaxed conversations from the start"
        ]
    },
    {
        id: 2,
        title: "Stand Out Instantly by Sending Pokes",
        description: "Get noticed without the pressure. Use Pokes to show interest and start interactions in a lighthearted way.",
        image: "/assets/Feature section/standout_instantly.png",
        points: [
            "Quick interaction starters",
            "Low-pressure social signals",
            "Fun and engaging way to connect"
        ]
    },
    {
        id: 3,
        title: "Chat Your Way—Text, Voice, or Video",
        description: "Choose the communication style that fits your mood. From quick texts to face-to-face video calls.",
        image: "/assets/Feature section/chat_your_way.png",
        points: [
            "Versatile messaging options",
            "High-quality voice and video",
            "Secure and private conversations"
        ]
    },
    {
        id: 4,
        title: "Join Groups Instantly With QR Code or Invite Link",
        description: "Joining a community is just a scan or click away. Easy access for you and your friends.",
        image: "/assets/Feature section/join_groups_instantly.png",
        points: [
            "Seamless onboarding",
            "Shareable invite links",
            "Instant community access"
        ]
    }
];

export default function Features() {
    const [activeId, setActiveId] = useState(1);
    const activeFeature = FEATURES.find(f => f.id === activeId) || FEATURES[0];

    return (
        <section id="features" className="w-full bg-[#111111] py-[40px] mobile:py-[5.5vw] flex flex-col items-center lg:px-[152px]">
            {/* Desktop Features Container - 1083px wide (Hidden on Mobile) */}
            <div className="hidden lg:flex w-full max-w-[75.2vw] lg:max-w-none lg:w-full h-[37.2vw] relative rounded-[1.8vw] overflow-hidden">
                {/* Background Gradient & Pattern */}
                <div
                    className="absolute inset-0 bg-[#111111]"
                    style={{
                        background: 'linear-gradient(135deg, rgba(22, 0, 63, 0.9) 0%, rgba(8, 0, 24, 0.9) 100%), url("/assets/Feature section/mobile_version/Phone_BGG.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/assets/noise.png')] mix-blend-overlay"></div>
                </div>

                {/* Content Layout: 3 Columns */}
                <div className="relative z-10 w-full h-full flex items-center px-[2vw] mobile:px-[1.87vw]">

                    {/* 1. Left Column: Stacked Cards */}
                    <div className="w-[24.5vw] flex flex-col gap-[1.1vw] items-start">
                        {FEATURES.map((feature) => {
                            const isActive = activeId === feature.id;
                            return (
                                <button
                                    key={feature.id}
                                    onClick={() => setActiveId(feature.id)}
                                    className={cn(
                                        "w-[20.8vw] text-left transition-all duration-500 rounded-[1.1vw] p-[1.1vw] flex flex-col justify-start gap-[1.1vw] overflow-hidden",
                                        isActive
                                            ? "bg-[#5F00DB] h-[12.8vw]"
                                            : "h-[5.7vw] bg-transparent hover:bg-[#030226]"
                                    )}
                                >
                                    <h3 className={cn(
                                        "text-[1.45vw] font-bold leading-[120%] tracking-[-0.04em] transition-colors duration-300",
                                        "text-white"
                                    )}>
                                        {feature.title}
                                    </h3>

                                    <AnimatePresence initial={false}>
                                        {isActive && (
                                            <motion.p
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                className="text-white text-[0.83vw] leading-[1.45vw] font-normal"
                                            >
                                                {feature.description}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </button>
                            );
                        })}
                    </div>

                    {/* 2. Middle Column: Phone Mockup */}
                    <div className="flex-1 flex justify-center items-center h-full">
                        <div className="relative w-[24.5vw] h-[33.4vw]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeId}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full h-full relative"
                                >
                                    <Image
                                        src={activeFeature.image}
                                        alt={activeFeature.title}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* 3. Right Column: Points */}
                    <div className="w-[24.5vw] flex flex-col gap-[1.1vw] pl-[2.7vw]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, x: '1.4vw' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: '-1.4vw' }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col gap-[1.66vw]"
                            >
                                {activeFeature.points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-[0.76vw] h-[3.33vw]">
                                        <div className="relative w-[1.33vw] h-[1.33vw]">
                                            <Image
                                                src="/check-circle.svg"
                                                alt=""
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <p className="text-white text-[1.11vw] font-normal leading-[150%] flex-1">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            {/* Mobile Features Container (Visible on Mobile) */}
            <div className="flex lg:hidden flex-col w-full px-[20px] gap-6">
                {FEATURES.map((feature) => {
                    const isActive = activeId === feature.id;
                    return (
                        <div key={feature.id} className="flex flex-col gap-4">
                            {/* Dynamic Part: Image (Only shown for active feature) */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div
                                            className="relative w-full aspect-square rounded-[32px] overflow-hidden"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(22, 0, 63, 0.9) 0%, rgba(8, 0, 24, 0.9) 100%), url("/assets/Hero_Background.PNG")',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}
                                        >
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                fill
                                                className="object-contain p-8"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Feature Card */}
                            <button
                                onClick={() => setActiveId(feature.id)}
                                className={cn(
                                    "w-full text-left transition-all duration-500 rounded-[24px] p-6 flex flex-col gap-4",
                                    isActive ? "bg-[#5F00DB]" : "bg-[#0a001a] border border-white/5"
                                )}
                            >
                                <h3 className="text-[24px] font-bold leading-tight text-white">
                                    {feature.title}
                                </h3>

                                {isActive && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="text-white/90 text-[16px] leading-relaxed"
                                    >
                                        {feature.description}
                                    </motion.p>
                                )}
                            </button>

                            {/* Points Part (Only shown for active feature) */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="flex flex-col gap-4 pl-2"
                                    >
                                        {feature.points.map((point, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="relative w-5 h-5 flex-shrink-0">
                                                    <Image
                                                        src="/check-circle.svg"
                                                        alt=""
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <p className="text-white text-[16px]">{point}</p>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>


            {/* Subsection 1: Problem Statement (formerly Subsection 2) */}
            <div className="w-full flex flex-col items-center py-[40px] mobile:py-[5.5vw] px-[16px] mobile:px-0">
                <div className="w-full max-w-[408px] mobile:max-w-[90.24vw] flex flex-col items-start gap-[40px] mobile:gap-[1.87vw]">

                    {/* Heading Section */}
                    <div className="w-full relative flex flex-col items-start">
                        <h2 className="text-white text-[48px] mobile:text-[3vw] font-bold leading-[110%] tracking-[-0.04em] text-left">
                            Traditional dating <br className="mobile:hidden" />
                            apps are <br className="mobile:hidden" />
                            <span className="inline-block bg-[#5F00DB] px-[2vw] py-[0.5vw] mobile:px-[0.97vw] mobile:py-[0.14vw] rounded-[12px] mobile:rounded-[0.76vw] my-[1vw] mobile:my-0">too individual.</span> <br />
                            Social networks <br className="mobile:hidden" />
                            <span className="inline-block bg-[#5F00DB] px-[2vw] py-[0.5vw] mobile:px-[0.97vw] mobile:py-[0.14vw] rounded-[12px] mobile:rounded-[0.76vw] my-[1vw] mobile:my-0 mt-[1vw]">are too broad.</span>
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-[#CCCCCC] text-[20px] mobile:text-[1.11vw] font-normal leading-[120%] mobile:leading-[140%] tracking-[-0.02em] text-left max-w-[408px] mobile:max-w-[90.24vw]">
                        There&apos;s no space for small groups who want to
                        meet new people—whether for friendships,
                        hangouts, trips, or shared hobbies.
                    </p>

                    {/* Lower Image Card */}
                    <div className="relative w-full h-[408px] mobile:h-[31.9vw] rounded-[24px] mobile:rounded-[1.8vw] overflow-hidden group shadow-2xl">
                        <Image
                            src="/assets/Feature Subsection-1/lottie_file.png"
                            alt="Group Connection"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        {/* Overlay with Content */}
                        <div className="absolute inset-0 bg-[#16003F]/50 p-[24px] mobile:p-[3.75vw] flex flex-col mobile:flex-row items-start mobile:items-end justify-end mobile:justify-between gap-[40px] mobile:gap-[1.87vw]">

                            {/* Logo / Pattern - Top Left on Mobile, Bottom Right on Desktop */}
                            <div className="w-[80px] h-[80px] mobile:w-[7.36vw] mobile:h-[7.36vw] relative flex-shrink-0 mobile:order-2">
                                <Image
                                    src="/assets/Feature Subsection-1/Vector_logo.png"
                                    alt="Fennec Pattern"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <h4
                                className="text-white text-[28px] mobile:text-[3.33vw] font-normal leading-[120%] mobile:leading-[110%] tracking-[-0.04em] flex-1 w-full max-w-[360px] mobile:max-w-none h-[240px] mobile:h-auto flex flex-col justify-end text-left mobile:order-1"
                                style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif" }}
                            >
                                Fennec makes expanding
                                your circle natural, effortless,
                                and fun—together.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subsection 3: Statistics Grid */}
            <div className="w-full flex flex-col items-center py-[40px] mobile:py-[5.5vw] px-[16px] mobile:px-0">
                <div className="w-full max-w-[408px] mobile:max-w-[72vw] flex flex-col lg:flex-row gap-[16px] mobile:gap-[1.4vw]">

                    {/* Left/Top Card: 94% */}
                    <div className="bg-[#16003F] rounded-[16px] mobile:rounded-[2.7vw] p-4 mobile:p-[3.75vw] flex flex-col justify-center items-center text-center w-full lg:w-1/2 min-h-[320px] mobile:min-h-[32.5vw] border border-white/5 relative overflow-hidden group">
                        <div
                            className="absolute inset-0 z-0 opacity-40 transition-opacity duration-700"
                            style={{
                                backgroundImage: 'url("/assets/Hero_Background.PNG")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] mobile:w-[27.9vw] h-[200px] mobile:h-[27.9vw] bg-purple-500/10 blur-[40px] mobile:blur-[5.5vw] rounded-full z-1" />
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-[72px] mobile:text-[10.2vw] font-bold text-white leading-[110%] tracking-[-0.04em] relative z-10"
                        >
                            94%
                        </motion.h2>
                        <p className="text-white text-[16px] mobile:text-[2.08vw] font-bold leading-[120%] tracking-[-0.04em] mt-2 mobile:mt-[2.2vw] max-w-[376px] mobile:max-w-[39.5vw] relative z-10">
                            People Feel More Comfortable Meeting New People via Group Matching
                        </p>
                    </div>

                    {/* Right/Bottom Cards Column */}
                    <div className="flex flex-col gap-[16px] mobile:gap-[1.4vw] w-full lg:w-1/2">
                        {/* 78% Card */}
                        <div className="bg-[#5F00DB] rounded-[16px] mobile:rounded-[2.7vw] p-4 mobile:p-[3vw] flex flex-col justify-center items-center text-center h-[139px] mobile:flex-1 border border-white/5 shadow-2xl">
                            <h2 className="text-[48px] mobile:text-[6.5vw] font-bold text-white leading-[110%] tracking-[-0.04em]">78%</h2>
                            <p className="text-white text-[16px] mobile:text-[1.66vw] font-bold leading-[120%] tracking-[-0.04em] mt-2 mobile:mt-[1.4vw]">
                                of Users Report Better First Interactions in Groups
                            </p>
                        </div>

                        {/* Two Small Cards Row */}
                        <div className="flex flex-row gap-[16px] mobile:gap-[1.4vw] w-full">
                            <div className="bg-[rgba(95,0,219,0.75)] rounded-[16px] mobile:rounded-[2.7vw] p-4 mobile:p-[2.2vw] flex flex-col justify-center items-center text-center flex-1 h-[105px] border border-white/5 shadow-xl">
                                <h2 className="text-[32px] mobile:text-[4.16vw] font-bold text-white leading-[120%] tracking-[-0.04em]">1.2M+</h2>
                                <p className="text-white text-[16px] mobile:text-[0.97vw] font-bold leading-tight tracking-[-0.04em]">
                                    Conversation Started
                                </p>
                            </div>
                            <div className="bg-[rgba(95,0,219,0.5)] rounded-[16px] mobile:rounded-[2.7vw] p-4 mobile:p-[2.2vw] flex flex-col justify-center items-center text-center flex-1 h-[105px] border border-white/5 shadow-xl">
                                <h2 className="text-[32px] mobile:text-[4.16vw] font-bold text-white leading-[120%] tracking-[-0.04em]">350K+</h2>
                                <p className="text-white text-[16px] mobile:text-[0.97vw] font-bold leading-tight tracking-[-0.04em]">
                                    Groups Connected
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subsection 4: Testimonials Slider */}
            <TestimonialsSlider />
        </section>
    );
}

const TESTIMONIALS = [
    {
        id: 1,
        text: "Group matching helped us find people with the same vibe. It feels way more natural.",
        author: "— Erica & Friends",
        avatars: ["/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png"]
    },
    {
        id: 2,
        text: "Finally, an app that understands social life happens in groups, not just one-on-one.",
        author: "— The Weekend Squad",
        avatars: ["/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png"]
    },
    {
        id: 3,
        text: "We met our best adventure buddies here. The group dynamics are just spot on!",
        author: "— Adventure Seekers",
        avatars: ["/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png"]
    },
    {
        id: 4,
        text: "No more awkward first dates. Meeting another group is so much more relaxed.",
        author: "— Local Crew",
        avatars: ["/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png"]
    },
    {
        id: 5,
        text: "This transformed how we travel. We connect with locals and other travelers instantly.",
        author: "— Globetrotters",
        avatars: ["/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png"]
    },
    {
        id: 6,
        text: "The easiest way to find people who actually want to do the same stuff as you.",
        author: "— Hobbies & Vibes",
        avatars: ["/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png"]
    }
];

function TestimonialsSlider() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };
    const prev = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "50vw" : "-50vw",
            opacity: 0,
            scale: 0.5,
            filter: "blur(4px)",
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
        },
        exit: (direction: number) => ({
            x: direction > 0 ? "-50vw" : "50vw",
            opacity: 0,
            scale: 0.5,
            filter: "blur(4px)",
        }),
    };

    return (
        <section className="w-full h-auto mobile:h-[36vw] flex flex-col items-center justify-center relative overflow-hidden bg-transparent py-[40px] mobile:py-[5.5vw] px-[16px] mobile:px-[7vw]">
            {/* Outer Container - 1083px for desktop, 408px for mobile */}
            <div className="w-full max-w-[408px] mobile:max-w-[75.2vw] h-[300px] mobile:h-[24.8vw] flex flex-col items-center gap-[40px] mobile:gap-[1.87vw] relative isolation-isolate">

                {/* Huge Quotation Mark Decor */}
                <div
                    className="absolute right-0 top-[13px] mobile:right-[-0.9vw] mobile:top-[-0.9vw] w-[75px] h-[54px] mobile:w-[8.75vw] mobile:h-[6.3vw] flex items-center justify-center select-none pointer-events-none z-0"
                    style={{ opacity: 0.2 }}
                >
                    <span className="text-[120px] mobile:text-[9.3vw] text-white font-serif leading-none">”</span>
                </div>

                {/* Slides Container */}
                <div className="w-full h-[268px] mobile:h-[17.4vw] flex flex-col items-start relative z-10">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={index}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                duration: 0.8,
                                ease: [0.32, 0.72, 0, 1],
                                opacity: { duration: 0.4 }
                            }}
                            className="absolute w-full h-full flex flex-col items-start gap-[24px] mobile:gap-[1.87vw]"
                        >
                            {/* Avatars Row */}
                            <div className="flex flex-row items-start gap-[8px] mobile:gap-[0.76vw] w-fit h-[48px] mobile:h-[4.4vw]">
                                {TESTIMONIALS[index].avatars.map((src, i) => (
                                    <div
                                        key={i}
                                        className="w-[48px] h-[48px] mobile:w-[4.4vw] mobile:h-[4.4vw] rounded-full overflow-hidden flex-shrink-0 bg-[#5F00DB]"
                                    >
                                        <Image
                                            src={src}
                                            alt="User"
                                            width={64}
                                            height={64}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <h2
                                className="w-full h-[152px] mobile:h-[7.36vw] flex items-center text-white font-normal"
                                style={{
                                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
                                    fontSize: 'clamp(24px, 32px, 32px)', // Fixed 32px for mobile, fallback to 24 if too small but specs say 32
                                    lineHeight: '120%',
                                    letterSpacing: '-0.04em'
                                }}
                            >
                                <span className="block mobile:hidden text-[32px]">{TESTIMONIALS[index].text}</span>
                                <span className="hidden mobile:block text-[3.33vw] leading-[110%]">{TESTIMONIALS[index].text}</span>
                            </h2>

                            {/* Author Name */}
                            <p
                                className="w-full h-[20px] mobile:h-[1.87vw] flex items-center text-white font-normal"
                                style={{
                                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
                                    fontSize: 'clamp(16px, 18px, 18px)',
                                    lineHeight: '110%',
                                    letterSpacing: '-0.04em'
                                }}
                            >
                                <span className="block mobile:hidden text-[18px]">{TESTIMONIALS[index].author}</span>
                                <span className="hidden mobile:block text-[1.66vw]">{TESTIMONIALS[index].author}</span>
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigator / Controls */}
                <div
                    className="absolute right-0 bottom-0 flex flex-row items-center justify-end px-[16px] mobile:px-0 gap-[24px] mobile:gap-[1.1vw] w-full mobile:w-[5.5vw] h-[48px] mobile:h-[2.2vw]"
                >
                    <button
                        onClick={prev}
                        className="w-[48px] h-[48px] mobile:w-[2.2vw] mobile:h-[2.2vw] flex items-center justify-center bg-[#5F00DB] rounded-full mobile:rounded-[2.4vw] transition-all duration-300 hover:scale-110 active:scale-95 group shadow-[0px_0px_4px_rgba(95,0,219,0.25),0px_4px_12px_rgba(95,0,219,0.25)] mobile:shadow-[0px_0px_0.2vw_rgba(95,0,219,0.25),0px_0.2vw_0.5vw_rgba(95,0,219,0.25)]"
                    >
                        <ChevronLeft className="w-[24px] h-[24px] mobile:w-[1.1vw] mobile:h-[1.1vw] text-white" />
                    </button>
                    <button
                        onClick={next}
                        className="w-[48px] h-[48px] mobile:w-[2.2vw] mobile:h-[2.2vw] flex items-center justify-center bg-[#5F00DB] rounded-full mobile:rounded-[2.4vw] transition-all duration-300 hover:scale-110 active:scale-95 group shadow-[0px_0px_4px_rgba(95,0,219,0.25),0px_4px_12px_rgba(95,0,219,0.25)] mobile:shadow-[0px_0px_0.2vw_rgba(95,0,219,0.25),0px_0.2vw_0.5vw_rgba(95,0,219,0.25)]"
                    >
                        <ChevronRight className="w-[24px] h-[24px] mobile:w-[1.1vw] mobile:h-[1.1vw] text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
}
