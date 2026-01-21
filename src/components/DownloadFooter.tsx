"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube, ArrowUpRight } from "lucide-react";

import { AppStoreButton, GooglePlayButton } from "@/components/ui/StoreButtons";

export function Download() {
    return (
        <section id="download" className="relative w-full flex flex-col items-center bg-[#111111] overflow-hidden py-[80px] mobile:py-[5.5vw] px-[16px] mobile:px-[7.08vw] lg:px-[152px]">
            {/* The Main Container: 1454px high on mobile, responsive on desktop */}
            <div className="relative w-full max-w-[408px] h-[1454px] mobile:max-w-none mobile:w-[75.2vw] mobile:h-[75.2vw] lg:w-full lg:h-auto lg:aspect-square flex flex-col items-center">

                {/* Background Circle & Boundaries (Mobile & Desktop) */}
                <div
                    className="absolute w-[1454px] h-[1454px] mobile:w-full mobile:h-full left-[-528px] mobile:left-1/2 mobile:-translate-x-1/2 top-0 rounded-full z-0 overflow-hidden"
                    style={{
                        background: '#16003F',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)'
                    }}
                >
                    {/* Circle Border (Boundaries) with Gradient Mask */}
                    <div
                        className="absolute inset-0 rounded-full border-[3px] mobile:border-[0.2vw] border-[rgba(255,255,255,0.88)] pointer-events-none"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black, transparent 30%, transparent 70%, black)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 30%, transparent 70%, black)'
                        }}
                    />
                </div>

                {/* Content Area */}
                <div className="relative w-full h-full mobile:absolute mobile:w-[62.4vw] mobile:h-[51.6vw] mobile:top-0 mobile:left-1/2 mobile:-translate-x-1/2 z-10 pointer-events-none">

                    {/* Phones Image Block - Fixed at top 0 on mobile */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[376px] h-[634px] mobile:w-[37.2vw] mobile:h-[51.6vw] flex justify-center items-center">
                        <div className="relative w-full h-full">
                            <Image
                                src="/assets/download_Section/Phones.png"
                                alt="Fennec App Screens"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* CTA Card Card - Fixed at top 659px on mobile */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 w-[376px] h-[365px] bg-[#5F00DB] rounded-[24px] flex flex-col items-center justify-center p-[24px] gap-[24px] z-30 shadow-[0px_-100px_100px_rgba(22,0,63,0.5)] pointer-events-auto top-[659px]
                                   mobile:w-[62.3vw] mobile:h-[18.2vw] mobile:rounded-[1.87vw] mobile:p-[1.87vw] mobile:gap-[1.87vw] mobile:shadow-[0px_-4.65vw_4.65vw_rgba(22,0,63,0.5)] mobile:top-[calc(50%-9.1vw+16.6vw)]"
                    >
                        <h2
                            className="text-white font-bold text-[36px] mobile:text-[3vw] leading-[110%] tracking-[-0.04em] text-center"
                            style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif" }}
                        >
                            Ready to Meet Your Next Circle?
                        </h2>

                        <p
                            className="text-white font-normal text-[18px] mobile:text-[1.32vw] leading-[32px] mobile:leading-[120%] tracking-[-0.04em] text-center w-[328px] h-[96px] mobile:w-auto mobile:h-auto mobile:max-w-[58.6vw]"
                            style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif" }}
                        >
                            Jump into a world of groups that get you. Swipe, match, and meet your next favorite people.
                        </p>

                        <div className="flex flex-row justify-center items-start gap-[16px] mobile:gap-[1.1vw] w-full mobile:w-auto">
                            <AppStoreButton />
                            <GooglePlayButton />
                        </div>

                        <p
                            className="text-white font-bold text-[16px] mobile:text-[1.11vw] leading-[120%] tracking-[-0.04em] text-center"
                            style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif" }}
                        >
                            Download Fennec on iOS and Android.
                        </p>
                    </div>
                </div>

                {/* Scan / QR Section - Fixed at top 1100px on mobile */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center p-[24px] gap-[40px] z-30 w-full top-[1100px]
                               mobile:bottom-0 mobile:top-auto mobile:w-[37.2vw] mobile:h-[22.2vw] mobile:gap-[1.87vw] mobile:p-0"
                >
                    <h3
                        className="text-white font-bold text-[24px] mobile:text-[1.11vw] leading-[120%] tracking-[-0.04em] text-center"
                        style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif" }}
                    >
                        Scan the QR Code to get the app
                    </h3>

                    <div className="relative w-[208px] h-[208px] bg-[#5F00DB] border-[4px] border-white rounded-[24px] shadow-[0_0_50px_#5F00DB] flex items-center justify-center p-[24px] gap-[10px]
                                   mobile:w-[11.5vw] mobile:h-[11.5vw] mobile:bg-transparent mobile:border-0 mobile:shadow-none mobile:rounded-0 mobile:p-0 mobile:gap-0">
                        <div className="relative w-[160px] h-[160px] mobile:w-full mobile:h-full">
                            <Image
                                src="/assets/download_Section/QRR.png"
                                alt="QR Code"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


