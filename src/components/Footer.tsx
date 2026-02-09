"use client";

import Image from "next/image";
import Link from "next/link";

const SOCIAL_LINKS = [
    { icon: <Image src="/assets/Footer section/facebook_icon.png" alt="Facebook" width={24} height={24} />, href: "#" },
    { icon: <InstagramIcon size={24} />, href: "#" },
    { icon: <TikTokIcon size={24} />, href: "#" },
    { icon: <XIcon size={24} />, href: "#" },
    { icon: <Image src="/assets/Footer section/yt_icon.png" alt="YouTube" width={24} height={24} />, href: "#" },
];

const QUICK_LINKS = [
    { label: "Home", href: "/#hero" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Features", href: "/#features" },
    { label: "About", href: "/#about" },
    { label: "Download the App", href: "/#download" },
];

const COMMUNITY_LINKS = [
    { label: "Safety Guidelines", href: "/safety-guidelines" },
    { label: "Help Center", href: "/help-center" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
    return (
        <footer
            className="relative w-full flex flex-col items-center bg-[#111111]"
        >
            <div
                className="relative w-full max-w-[768px] mobile:max-w-none flex flex-col items-center px-[16px] mobile:px-[7.08vw] py-[40px] mobile:py-[3.75vw] gap-[40px] mobile:gap-[3.75vw] bg-[#5F00DB] rounded-t-[40px] mobile:rounded-t-[3.75vw]"
                style={{
                    boxShadow: '0px 0px 100px #5F00DB'
                }}
            >
                {/* Mobile Layout: Logo -> Links -> Socials -> Copyright */}
                <div className="flex flex-col mobile:hidden items-center w-full gap-[9.3vw]">
                    {/* Logo */}
                    <div className="relative w-[65.58vw] h-[13.95vw]">
                        <Image
                            src="/assets/Footer section/Vector.png"
                            alt="Fennec Logo"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Links Row */}
                    <div className="flex flex-row items-start justify-center w-full max-w-[94.88vw] gap-[3.72vw]">
                        {/* Quick Links */}
                        <div className="flex flex-col items-center gap-[3.72vw] flex-1 min-w-0 justify-center">
                            <h4 className="text-white text-[5.58vw] font-bold tracking-[-0.04em] leading-[120%]">
                                Quick Links
                            </h4>
                            <div className="flex flex-col items-start gap-[3.72vw]">
                                {QUICK_LINKS.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-white text-[3.72vw] leading-[150%] font-normal hover:opacity-80 transition-opacity whitespace-nowrap "
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Community */}
                        <div className="flex flex-col items-center gap-[3.72vw] flex-1 min-w-0">
                            <h4 className="text-white text-[5.58vw] font-bold tracking-[-0.04em] leading-[120%]">
                                Community
                            </h4>
                            <div className="flex flex-col items-start gap-[3.72vw]">
                                {COMMUNITY_LINKS.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-white text-[3.72vw] leading-[150%] font-normal hover:opacity-80 transition-opacity whitespace-nowrap "
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Socials & Copyright */}
                    <div className="flex flex-col items-center gap-[9.3vw] w-full max-w-[94.88vw]">
                        <div className="flex flex-row items-center justify-center gap-[5.58vw]">
                            {SOCIAL_LINKS.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="text-white hover:opacity-80 transition-opacity flex items-center justify-center w-[5.58vw] h-[5.58vw]"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                        <p className="text-white text-[4.18vw] leading-[7.44vw] font-normal text-center w-full">
                            © 2025 Fennec. All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Desktop Layout: (Existing logic preserved with mobile: overrides) */}
                <div className="hidden mobile:flex flex-row items-center w-full max-w-[75.2vw] gap-[3.75vw]">
                    {/* Left Column: Logo + Socials + Copyright */}
                    <div className="flex flex-col items-start gap-[1.87vw] w-full max-w-[35.7vw]">
                        {/* Logo */}
                        <div className="relative w-[35.7vw] h-[7.6vw]">
                            <Image
                                src="/assets/Footer section/Vector.png"
                                alt="Fennec Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>

                        {/* Bottom Row: Socials and Copyright */}
                        <div className="flex flex-row items-end justify-between w-[35.7vw] h-[3.26vw] gap-[1.1vw]">
                            {/* Socials */}
                            <div className="flex flex-row items-end gap-[1.1vw] w-[10vw] h-[3.26vw]">
                                {SOCIAL_LINKS.map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        className="text-white hover:opacity-80 transition-opacity flex items-center justify-center"
                                        style={{ width: '1.11vw', height: '1.11vw' }}
                                    >
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>

                            {/* Copyright */}
                            <p className="text-white text-[0.83vw] leading-[1.45vw] font-normal text-right w-[23.8vw] h-[1.45vw] flex items-center justify-end">
                                © 2025 Fennec. All rights reserved.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Links Blocks */}
                    <div className="flex flex-row items-start gap-[1.87vw] w-full max-w-[35.7vw] ml-auto">
                        {/* Quick Links */}
                        <div className="flex flex-col items-start gap-[0.76vw] flex-1">
                            <h3 className="text-white text-[1.32vw] mobile:h-[1.6vw] leading-[120%] font-bold tracking-[-0.04em] flex items-center">
                                Quick Links
                            </h3>
                            <div className="flex flex-col items-start gap-[0.76vw]">
                                {QUICK_LINKS.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-white mobile:text-[0.83vw] mobile:h-[1.45vw] leading-[1.45vw] font-normal hover:opacity-80 transition-opacity whitespace-nowrap flex items-center"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Community */}
                        <div className="flex flex-col items-start gap-[0.76vw] flex-1">
                            <h3 className="text-white text-[1.32vw] mobile:h-[1.6vw] leading-[120%] font-bold tracking-[-0.04em] flex items-center">
                                Community
                            </h3>
                            <div className="flex flex-col items-start gap-[0.76vw]">
                                {COMMUNITY_LINKS.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-white mobile:text-[0.83vw] mobile:h-[1.45vw] leading-[1.45vw] font-normal hover:opacity-80 transition-opacity whitespace-nowrap flex items-center"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function TikTokIcon({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.02 1.4-.35 2.81-1.1 4.02-1.39 2.27-4.14 3.44-6.73 2.96-2.58-.45-4.73-2.61-5.18-5.18-.48-2.6.68-5.33 2.95-6.72.63-.39 1.34-.66 2.07-.8.01 1.39.01 2.78.01 4.17-.18.06-.36.14-.52.24-.75.46-1.21 1.28-1.22 2.16.02 1.4.99 2.65 2.37 2.91 1.38.26 2.88-.61 3.25-1.95.1-.38.12-.77.12-1.16-.01-5.69-.01-11.39.01-17.08z" />
        </svg>
    );
}

function XIcon({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.31 17.41z" />
        </svg>
    );
}

function InstagramIcon({ size = 24 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" fillRule="evenodd" d="M7.25 12C7.25 9.37665 9.37665 7.25 12 7.25C14.6234 7.25 16.75 9.37665 16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37665 16.75 7.25 14.6234 7.25 12ZM12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75Z" clipRule="evenodd" />
            <path fill="currentColor" d="M18.0675 7.00075C18.3446 6.69287 18.3196 6.21865 18.0117 5.94156C17.7038 5.66447 17.2296 5.68942 16.9525 5.99731L16.9425 6.00842C16.6654 6.3163 16.6904 6.79052 16.9983 7.06761C17.3062 7.34471 17.7804 7.31975 18.0575 7.01186L18.0675 7.00075Z" />
            <path fill="currentColor" fillRule="evenodd" d="M2.25 8C2.25 4.82436 4.82436 2.25 8 2.25H16C19.1756 2.25 21.75 4.82436 21.75 8V16C21.75 19.1756 19.1756 21.75 16 21.75H8C4.82436 21.75 2.25 19.1756 2.25 16V8ZM8 3.75C5.65279 3.75 3.75 5.65279 3.75 8V16C3.75 18.3472 5.65279 20.25 8 20.25H16C18.3472 20.25 20.25 18.3472 20.25 16V8C20.25 5.65279 18.3472 3.75 16 3.75H8Z" clipRule="evenodd" />
        </svg>
    );
}
