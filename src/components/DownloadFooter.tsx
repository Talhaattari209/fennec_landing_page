"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube, ArrowUpRight } from "lucide-react";

import { AppStoreButton, GooglePlayButton } from "@/components/ui/StoreButtons";

export function Download() {
    return (
        <section id="download" className="relative w-full flex flex-col items-center bg-[#111111] overflow-hidden py-[80px]">
            {/* The 1083px Container */}
            <div className="relative w-[1083px] h-[1083px] flex flex-col items-center">

                {/* Circle BG */}
                <div
                    className="absolute w-[1083px] h-[1083px] left-0 top-0 rounded-full z-0"
                    style={{
                        background: '#16003F',
                        backdropFilter: 'blur(8px)'
                    }}
                />

                {/* Circle Border (White at top/bottom, transparent in middle) */}
                <div
                    className="absolute w-[1083px] h-[1083px] left-0 top-0 rounded-full z-0 pointer-events-none"
                    style={{
                        border: '3px solid rgba(255, 255, 255, 0.88)',
                        maskImage: 'linear-gradient(to bottom, black, transparent 30%, transparent 70%, black)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 30%, transparent 70%, black)'
                    }}
                />

                {/* Content Wrapper (899x744) */}
                <div className="absolute w-[899px] h-[744px] top-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none">

                    {/* Phones Layer (Inside Content) */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[536px] h-[744px] flex justify-center items-center">
                        <div className="relative w-[536px] h-[744px]">
                            <Image
                                src="/assets/download_Section/Phones.png"
                                alt="Fennec App Screens"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* CTA Card (Col) (Inside Content) */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 w-[898px] h-[263px] bg-[#5F00DB] rounded-[27px] flex flex-col items-center justify-center p-[27px] gap-[27px] z-30 pointer-events-auto"
                        style={{
                            top: 'calc(50% - 263px/2 + 239px)',
                            boxShadow: '0px -67px 67px rgba(22, 0, 63, 0.5)'
                        }}
                    >
                        <h2
                            className="text-white font-bold text-[43px] leading-[110%] tracking-[-0.04em] text-center"
                            style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                        >
                            Ready to Meet Your Next Circle?
                        </h2>

                        <p
                            className="text-white font-normal text-[19px] leading-[120%] tracking-[-0.04em] text-center max-w-[844px]"
                            style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                        >
                            Jump into a world of groups that get you. Swipe, match, and meet your next favorite people.
                        </p>

                        <div className="flex flex-row justify-center items-start gap-[16px]">
                            <AppStoreButton />
                            <GooglePlayButton />
                        </div>

                        <p
                            className="text-white font-bold text-[16px] leading-[120%] tracking-[-0.04em] text-center"
                            style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                        >
                            Download Fennec on iOS and Android.
                        </p>
                    </div>
                </div>

                {/* QR Section (Scan) (Directly in 1083px Container) */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[536px] h-[320px] flex flex-col items-center justify-center gap-[27px] z-30 pointer-events-auto"
                >
                    <h3
                        className="text-white font-bold text-[16px] leading-[120%] tracking-[-0.04em] text-center"
                        style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                    >
                        Scan the QR Code to get the app
                    </h3>

                    <div className="relative w-[166px] h-[166px]">
                        <Image
                            src="/assets/download_Section/QR.png"
                            alt="QR Code"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}


