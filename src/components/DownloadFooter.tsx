"use client";

import Image from "next/image";
import { useState } from "react";
import { JoinWaitlistButton } from "@/components/ui/JoinWaitlistButton";
import JoinWaitlistModal from "@/components/JoinWaitlistModal";

export function Download() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <section id="download" className="relative w-full flex flex-col items-center bg-[#111111] overflow-hidden py-[80px] mobile:py-[5.5vw] px-[16px] mobile:px-[7.08vw] lg:px-[152px]">
            {/* Main Container: mobile fixed, desktop 84.17vw (1616px on 1920) × 62.5vw (1200px) */}
            <div className="relative w-full max-w-[408px] h-[1200px] mobile:max-w-none mobile:w-[84.17vw] mobile:h-[62.5vw] flex flex-col items-center shrink-0">

                {/* Background Circle — 1200×1200, left: 208px (10.83vw) */}
                <div
                    className="absolute w-[1200px] h-[1200px] mobile:w-[62.5vw] mobile:h-[62.5vw] left-[-430px] mobile:left-[10.33vw] top-0 rounded-full z-0 overflow-hidden"
                    style={{
                        background: '#16003F',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)'
                    }}
                >
                    {/* Circle Border with Gradient Mask */}
                    <div
                        className="absolute inset-0 rounded-full border-[3px] mobile:border-[0.16vw] border-[rgba(255,255,255,0.88)] pointer-events-none"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black, transparent 30%, transparent 70%, black)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 30%, transparent 70%, black)'
                        }}
                    />
                </div>

                {/* Content Area — 1342×1110, left: 137px (7.14vw) */}
                <div className="relative w-full h-full mobile:absolute mobile:w-[69.9vw] mobile:h-[57.81vw] mobile:top-0 mobile:left-[7.14vw] z-10 pointer-events-none">

                    {/* Phones — 800×1054, centered */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[376px] h-[634px] mobile:w-[41.67vw] mobile:h-[54.9vw] flex justify-center items-center z-20">
                        <div className="relative w-full h-full">
                            <Image
                                src="/assets/download_Section/Phones.png"
                                alt="Fennec App Screens"
                                fill
                                className="object-contain mobile:object-top"
                                priority
                            />
                        </div>
                    </div>

                    {/* CTA Card — 1340×320, padding 40px, gap 40px, radius 40px */}
                    {/* Position: top: calc(50% - 320px/2 + 356.5px) = calc(50% + 196.5px) */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 w-[376px] h-auto bg-[#5F00DB] rounded-[24px] flex flex-col items-center justify-center p-[24px] gap-[24px] z-40 shadow-[0px_-100px_100px_rgba(22,0,63,0.5)] pointer-events-auto top-[659px]
                                   mobile:w-[69.79vw] mobile:h-auto mobile:rounded-[2.08vw] mobile:p-[2.08vw] mobile:gap-[2.08vw] mobile:shadow-[0px_-5.21vw_5.21vw_rgba(22,0,63,0.5)] mobile:top-[calc(50%+10.23vw)]"
                    >
                        {/* Heading: 64px/700, 110% line-height */}
                        <h2
                            className="text-white font-bold text-[36px] mobile:text-[3.33vw] leading-[110%] tracking-tighter text-center"
                        >
                            Ready to Meet Your Next Circle?
                        </h2>

                        {/* Description: 28px/400, 120% line-height */}
                        <p
                            className="text-white font-normal text-[18px] mobile:text-[1.46vw] leading-[32px] mobile:leading-[120%] tracking-tighter text-center w-[328px] mobile:w-auto mobile:max-w-[65.63vw]"
                        >
                            Jump into a world of groups that get <br className="mobile:hidden" /> you. Swipe, match, and meet your <br className="mobile:hidden" /> next favorite people.
                        </p>

                        {/* Join Waitlist Button — 179×56 on desktop, bg #16003F */}
                        <JoinWaitlistButton variant="download" onClick={() => setIsModalOpen(true)} />
                    </div>
                </div>

                {/* Waitlist Modal */}
                <JoinWaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </section>
    );
}
