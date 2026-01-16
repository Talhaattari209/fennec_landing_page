"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { label: "How It Works", href: "#how-it-works", width: "144px", mobileWidth: "288px" },
    { label: "Features", href: "#features", width: "106px", mobileWidth: "212px" },
    { label: "About", href: "#about", width: "83px", mobileWidth: "166px" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className="fixed top-4 md:top-8 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
                <nav className={cn(
                    "w-full transition-all duration-300 relative flex items-center justify-between",
                    // Desktop Styles
                    "md:max-w-[1616px] md:h-[88px] md:px-4 md:bg-[#5F00DB]/25 md:backdrop-blur-[12px] md:border md:border-white/10 md:rounded-[64px]",
                    // Mobile Styles
                    "h-[68px] px-[16px] bg-[#5F00DB]/25 backdrop-blur-[12px] rounded-[64px] border border-white/5 max-w-[408px]",
                    isScrolled && "md:bg-[#5F00DB]/40"
                )}>
                    {/* Logo - Center on Desktop, Left on Mobile */}
                    <Link
                        href="/"
                        className="flex items-center gap-[12px] h-[48px] order-1 md:absolute md:left-1/2 md:-translate-x-1/2"
                    >
                        <div className="relative w-[48px] h-[48px]">
                            <Image
                                src="/assets/Header_Section/Vector_logo.png"
                                alt="Fennec Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-michroma text-[24px] leading-[34px] text-white">
                            Fennec
                        </span>
                    </Link>

                    {/* Nav Links - Desktop Only */}
                    <div className="hidden md:flex items-center h-full order-1">
                        <div className="flex items-center">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="group relative flex flex-col items-center justify-center h-[48px] px-4 transition-colors"
                                    style={{ width: link.width }}
                                >
                                    <span className="text-[18px] leading-[32px] text-white font-['SF_Pro_Text',sans-serif] flex items-center">
                                        {link.label}
                                    </span>
                                    {/* Hover Indicator (Rectangle 3) */}
                                    <div className="absolute bottom-[8px] left-[33px] right-[33px] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[2px]" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Download Button / Mobile Menu Toggle */}
                    <div className="flex items-center order-2">
                        {/* Desktop Button */}
                        <Button
                            className={cn(
                                "hidden md:flex w-[196px] h-[56px] bg-[#5F00DB] hover:bg-[#4D00B3] text-white rounded-[52px] px-[24px] items-center justify-center gap-[12px] transition-all",
                                "shadow-[0px_4px_12px_rgba(95,0,219,0.25)]"
                            )}
                        >
                            <span className="font-['SF_Pro_Text',sans-serif] font-medium text-[16px] leading-[24px]">
                                Download App
                            </span>
                            <Download className="w-[24px] h-[24px]" />
                        </Button>

                        {/* Mobile Menu Icon Button */}
                        <button
                            className="md:hidden w-[36px] h-[36px] flex items-center justify-center text-white rounded-full transition-colors"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="w-[36px] h-[36px]" />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[60] bg-[#16003F] flex flex-col items-center"
                    >
                        {/* Menu Header Area */}
                        <div className="w-full flex justify-center px-4 mt-4">
                            <div className="w-full max-w-[408px] h-[68px] flex items-center justify-between px-[16px] bg-[#5F00DB]/25 backdrop-blur-[12px] rounded-[64px] border border-white/5">
                                <div className="flex items-center gap-[12px] h-[48px]">
                                    <div className="relative w-[48px] h-[48px]">
                                        <Image
                                            src="/assets/Header_Section/Vector_logo.png"
                                            alt="Fennec Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="font-michroma text-[24px] leading-[34px] text-white">
                                        Fennec
                                    </span>
                                </div>
                                <button
                                    className="w-[36px] h-[36px] flex items-center justify-center text-white"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <X className="w-[36px] h-[36px]" />
                                </button>
                            </div>
                        </div>

                        {/* Menu Content */}
                        <div className="flex-1 flex flex-col items-center justify-center gap-[80px] w-full">
                            {/* Nav Links */}
                            <nav className="flex flex-col items-center gap-[24px] w-full">
                                {NAV_LINKS.map((link) => (
                                    <motion.div
                                        key={link.label}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="w-full flex justify-center"
                                    >
                                        <Link
                                            href={link.href}
                                            className="group relative flex flex-col items-center justify-center h-[96px] transition-all hover:scale-105"
                                            style={{ width: link.mobileWidth }}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <span className="text-[36px] leading-[64px] text-white font-['SF_Pro_Text',sans-serif] whitespace-nowrap">
                                                {link.label}
                                            </span>
                                            {/* Rectangle 3 line 94+ */}
                                            <div className="absolute bottom-[16px] left-[15%] right-[15%] h-[4px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-active:opacity-100 transition-opacity rounded-[4px]" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Download Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Button
                                    className={cn(
                                        "w-[196px] h-[56px] bg-[#5F00DB] hover:bg-[#4D00B3] text-white rounded-[52px] px-[24px] flex items-center justify-center gap-[12px] transition-all",
                                        "shadow-[0px_4px_12px_rgba(95,0,219,0.25)]"
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span className="font-['SF_Pro_Text',sans-serif] font-medium text-[16px] leading-[24px]">
                                        Download App
                                    </span>
                                    <Download className="w-[24px] h-[24px]" />
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
