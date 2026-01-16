"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface StoreButtonProps {
    className?: string;
}

export function AppStoreButton({ className }: StoreButtonProps) {
    return (
        <button className={cn(
            "relative w-[180px] h-[60px] bg-black border-[1.5px] border-[#A6A6A6] rounded-[9px] flex items-center px-[12px] gap-[12px] overflow-hidden group hover:border-white transition-all shadow-lg active:scale-95",
            className
        )}>
            <div className="relative w-[30px] h-[36px] flex-shrink-0">
                <Image src="/assets/hero/Mobile/Apple_icon.png" alt="App Store" fill className="object-contain" />
            </div>
            <div className="flex flex-col items-start leading-[1.1] text-left">
                <span
                    className="text-white text-[13.5px] font-semibold"
                    style={{ fontFamily: "'SF Compact', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                >
                    Download on the
                </span>
                <span
                    className="text-white text-[22px] font-semibold tracking-[-0.705px] whitespace-nowrap"
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
            "relative w-[180px] h-[60px] bg-black border-[1.5px] border-[#A6A6A6] rounded-[9px] flex items-center px-[12px] gap-[12px] overflow-hidden group hover:border-white transition-all shadow-lg active:scale-95",
            className
        )}>
            <div className="relative w-[30px] h-[36px] flex-shrink-0">
                <Image src="/assets/hero/Mobile/Playstore_icon.png" alt="Google Play" fill className="object-contain" />
            </div>
            <div className="flex flex-col items-start leading-[1.1] text-left">
                <span
                    className="text-white text-[15px] font-normal uppercase"
                    style={{ fontFamily: "'Product Sans', Roboto, Helvetica, Arial, sans-serif" }}
                >
                    Get it on
                </span>
                <span
                    className="text-white text-[20px] font-semibold whitespace-nowrap"
                    style={{ fontFamily: "'Product Sans', Roboto, Helvetica, Arial, sans-serif" }}
                >
                    Google Play
                </span>
            </div>
        </button>
    );
}
