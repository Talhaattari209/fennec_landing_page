"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube, ArrowUpRight } from "lucide-react";

import { AppStoreButton, GooglePlayButton } from "@/components/ui/StoreButtons";

export function Download() {
    return (
        <section id="download" className="relative w-full flex flex-col items-center bg-[#111111] overflow-hidden py-[120px]">
            {/* The 1616px Container */}
            <div className="relative w-[1616px] h-[1616px] flex flex-col items-center">

                {/* Circle BG */}
                <div
                    className="absolute w-[1616px] h-[1616px] left-0 top-0 rounded-full z-0"
                    style={{
                        background: '#16003F',
                        backdropFilter: 'blur(12px)'
                    }}
                />

                {/* Content Wrapper (1342x1110) */}
                <div className="absolute w-[1342px] h-[1110px] top-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none">

                    {/* Phones Layer (Inside Content) */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[1110px] flex justify-center items-center">
                        <div className="relative w-[800px] h-[1110px]">
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
                        className="absolute left-1/2 -translate-x-1/2 w-[1340px] h-[393px] bg-[#5F00DB] rounded-[40px] flex flex-col items-center justify-center p-[40px] gap-[40px] z-30 pointer-events-auto"
                        style={{
                            top: 'calc(50% - 393px/2 + 356.5px)',
                            boxShadow: '0px -100px 100px rgba(22, 0, 63, 0.5)'
                        }}
                    >
                        <h2
                            className="text-white font-bold text-[64px] leading-[110%] tracking-[-0.04em] text-center"
                            style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                        >
                            Ready to Meet Your Next Circle?
                        </h2>

                        <p
                            className="text-white font-normal text-[28px] leading-[120%] tracking-[-0.04em] text-center max-w-[1260px]"
                            style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                        >
                            Jump into a world of groups that get you. Swipe, match, and meet your next favorite people.
                        </p>

                        <div className="flex flex-row justify-center items-start gap-[24px]">
                            <AppStoreButton />
                            <GooglePlayButton />
                        </div>

                        <p
                            className="text-white font-bold text-[24px] leading-[120%] tracking-[-0.04em] text-center"
                            style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                        >
                            Download Fennec on iOS and Android.
                        </p>
                    </div>
                </div>

                {/* QR Section (Scan) (Directly in 1616px Container) */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[800px] h-[477px] flex flex-col items-center justify-center gap-[40px] z-30 pointer-events-auto"
                >
                    <h3
                        className="text-white font-bold text-[24px] leading-[120%] tracking-[-0.04em] text-center"
                        style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                    >
                        Scan the QR Code to get the app
                    </h3>

                    <div className="relative w-[248px] h-[248px]">
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


