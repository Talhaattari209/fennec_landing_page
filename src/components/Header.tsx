"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { label: "How It Works", href: "#how-it-works", width: "96px", mobileWidth: "193px" },
    { label: "Features", href: "#features", width: "71px", mobileWidth: "142px" },
    { label: "About", href: "#about", width: "56px", mobileWidth: "111px" },
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

    const scrollToDownload = () => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById("download");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            <header className="fixed top-3 md:top-5 left-0 right-0 z-50 flex justify-center px-3 md:px-4">
                <nav className={cn(
                    "w-full transition-all duration-300 relative flex items-center justify-between",
                    // Desktop Styles
                    "md:max-w-[1083px] md:h-[59px] md:px-3 md:bg-[#5F00DB]/25 md:backdrop-blur-[8px] md:border md:border-white/10 md:rounded-[43px]",
                    // Mobile Styles
                    "h-[46px] px-[11px] bg-[#5F00DB]/25 backdrop-blur-[8px] rounded-[43px] border border-white/5 max-w-[273px]",
                    isScrolled && "md:bg-[#5F00DB]/40"
                )}>
                    {/* Logo - Center on Desktop, Left on Mobile */}
                    <Link
                        href="/"
                        className="flex items-center gap-[8px] h-[32px] order-1 md:absolute md:left-1/2 md:-translate-x-1/2"
                    >
                        <div className="relative w-[32px] h-[32px]">
                            <Image
                                src="/assets/Header_Section/Vector_logo.png"
                                alt="Fennec Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-michroma text-[16px] leading-[23px] text-white">
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
                                    className="group relative flex flex-col items-center justify-center h-[32px] px-3 transition-colors"
                                    style={{ width: link.width }}
                                >
                                    <span className="text-[12px] leading-[21px] text-white font-['SF_Pro_Text',sans-serif] flex items-center">
                                        {link.label}
                                    </span>
                                    {/* Hover Indicator (Rectangle 3) */}
                                    <div className="absolute bottom-[5px] left-[22px] right-[22px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[1px]" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Download Button / Mobile Menu Toggle */}
                    <div className="flex items-center order-2">
                        {/* Desktop Button */}
                        <Button
                            className={cn(
                                "hidden md:flex w-[131px] h-[38px] bg-[#5F00DB] hover:bg-[#4D00B3] text-white rounded-[35px] px-[16px] items-center justify-center gap-[8px] transition-all",
                                "shadow-[0px_3px_8px_rgba(95,0,219,0.25)]"
                            )}
                            onClick={scrollToDownload}
                        >
                            <span className="font-['SF_Pro_Text',sans-serif] font-medium text-[11px] leading-[16px]">
                                Download App
                            </span>
                            <Download className="w-[16px] h-[16px]" />
                        </Button>

                        {/* Mobile Menu Icon Button */}
                        <button
                            className="md:hidden w-[24px] h-[24px] flex items-center justify-center text-white rounded-full transition-colors"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="w-[24px] h-[24px]" />
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
                        <div className="w-full flex justify-center px-3 mt-3">
                            <div className="w-full max-w-[273px] h-[46px] flex items-center justify-between px-[11px] bg-[#5F00DB]/25 backdrop-blur-[8px] rounded-[43px] border border-white/5">
                                <div className="flex items-center gap-[8px] h-[32px]">
                                    <div className="relative w-[32px] h-[32px]">
                                        <Image
                                            src="/assets/Header_Section/Vector_logo.png"
                                            alt="Fennec Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="font-michroma text-[16px] leading-[23px] text-white">
                                        Fennec
                                    </span>
                                </div>
                                <button
                                    className="w-[24px] h-[24px] flex items-center justify-center text-white"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <X className="w-[24px] h-[24px]" />
                                </button>
                            </div>
                        </div>

                        {/* Menu Content */}
                        <div className="flex-1 flex flex-col items-center justify-center gap-[54px] w-full">
                            {/* Nav Links */}
                            <nav className="flex flex-col items-center gap-[16px] w-full">
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
                                            className="group relative flex flex-col items-center justify-center h-[64px] transition-all hover:scale-105"
                                            style={{ width: link.mobileWidth }}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <span className="text-[24px] leading-[43px] text-white font-['SF_Pro_Text',sans-serif] whitespace-nowrap">
                                                {link.label}
                                            </span>
                                            {/* Rectangle 3 line 94+ */}
                                            <div className="absolute bottom-[11px] left-[15%] right-[15%] h-[3px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-active:opacity-100 transition-opacity rounded-[3px]" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Download Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 13 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Button
                                    className={cn(
                                        "w-[131px] h-[38px] bg-[#5F00DB] hover:bg-[#4D00B3] text-white rounded-[35px] px-[16px] flex items-center justify-center gap-[8px] transition-all",
                                        "shadow-[0px_3px_8px_rgba(95,0,219,0.25)]"
                                    )}
                                    onClick={scrollToDownload}
                                >
                                    <span className="font-['SF_Pro_Text',sans-serif] font-medium text-[11px] leading-[16px]">
                                        Download App
                                    </span>
                                    <Download className="w-[16px] h-[16px]" />
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
