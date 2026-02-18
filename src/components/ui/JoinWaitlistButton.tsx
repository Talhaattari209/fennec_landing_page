"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface JoinWaitlistButtonProps {
    variant?: "hero" | "download";
    onClick?: () => void;
    className?: string;
}

export function JoinWaitlistButton({ variant = "hero", onClick, className }: JoinWaitlistButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                // Base styles
                "flex flex-row justify-center items-center gap-[4.93vw] mobile:gap-[1.03vw] cursor-pointer transition-all active:scale-95",
                "rounded-[12.75vw] mobile:rounded-[2.71vw]",
                "px-[5.88vw] py-[3.92vw] mobile:px-[1.25vw] mobile:py-[0.83vw]",
                "w-[43.86vw] h-[13.73vw] mobile:w-[9.32vw] mobile:h-[2.92vw]",
                // Variant backgrounds
                variant === "hero"
                    ? "bg-[#5F00DB] shadow-[0_0.98vw_2.94vw_rgba(95,0,219,0.25)] mobile:shadow-[0_0.21vw_0.63vw_rgba(95,0,219,0.25)] hover:bg-[#4D00B3]"
                    : "bg-[#16003F] shadow-[0_0.98vw_2.94vw_rgba(95,0,219,0.25)] mobile:shadow-[0_0.21vw_0.63vw_rgba(95,0,219,0.25)] hover:bg-[#0F002B]",
                className
            )}
        >
            <span
                className="text-white font-medium text-[3.92vw] mobile:text-[0.83vw] leading-[5.88vw] mobile:leading-[2.25vw] tracking-[0.03em] mobile:tracking-[0.05em] whitespace-nowrap"
            >
                Join Waitlist
            </span>
            <div className="relative w-[3vw] h-[3vw] mobile:w-[0.7vw] mobile:h-[0.7vw]">
                <Image
                    src="/assets/waitlist/arrow-up-right.png"
                    alt=""
                    fill
                    className="object-contain brightness-0 invert"
                />
            </div>
        </button>
    );
}
