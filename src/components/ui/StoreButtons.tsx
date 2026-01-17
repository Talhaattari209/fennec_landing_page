"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface StoreButtonProps {
    className?: string;
}

export function AppStoreButton({ className }: StoreButtonProps) {
    return (
        <button className={cn(
            "relative w-[121px] h-[40px] bg-black border-[1px] border-[#A6A6A6] rounded-[6px] flex items-center px-[8px] gap-[8px] overflow-hidden group hover:border-white transition-all shadow-lg active:scale-95",
            className
        )}>
            <div className="relative w-[20px] h-[24px] flex-shrink-0">
                <Image src="/assets/hero/Mobile/Apple_icon.png" alt="App Store" fill className="object-contain" />
            </div>
            <div className="flex flex-col items-start leading-[1.1] text-left">
                <span
                    className="text-white text-[9px] font-semibold"
                    style={{ fontFamily: "'SF Compact', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                >
                    Download on the
                </span>
                <span
                    className="text-white text-[15px] font-semibold tracking-[-0.705px] whitespace-nowrap"
                    style={{ fontFamily: "'SF Compact', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                >
                    App Store
                </span>
            </div>
        </button>
    );
}

export function GooglePlayButton({ className }: StoreButtonProps) {
    return (
        <button className={cn(
            "relative w-[121px] h-[40px] bg-black border-[1px] border-[#A6A6A6] rounded-[6px] flex items-center px-[8px] gap-[8px] overflow-hidden group hover:border-white transition-all shadow-lg active:scale-95",
            className
        )}>
            <div className="relative w-[20px] h-[24px] flex-shrink-0">
                <Image src="/assets/hero/Mobile/Playstore_icon.png" alt="Google Play" fill className="object-contain" />
            </div>
            <div className="flex flex-col items-start leading-[1.1] text-left">
                <span
                    className="text-white text-[10px] font-normal uppercase"
                    style={{ fontFamily: "'Product Sans', Roboto, Helvetica, Arial, sans-serif" }}
                >
                    Get it on
                </span>
                <span
                    className="text-white text-[14px] font-semibold whitespace-nowrap"
                    style={{ fontFamily: "'Product Sans', Roboto, Helvetica, Arial, sans-serif" }}
                >
                    Google Play
                </span>
            </div>
        </button>
    );
}
