"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface StoreButtonProps {
    className?: string;
}

export function AppStoreButton({ className }: StoreButtonProps) {
    return (
        <Link href="#" className={cn(
            "relative w-[150px] mobile:w-[8.4vw] h-[50px] mobile:h-[2.77vw] group transition-all active:scale-95 block",
            className
        )}>
            <Image
                src="/assets/Buttons/AppStore download button.png"
                alt="Download on the App Store"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 150px, 8.4vw"
            />
        </Link>
    );
}

export function GooglePlayButton({ className }: StoreButtonProps) {
    return (
        <Link href="#" className={cn(
            "relative w-[150px] mobile:w-[8.4vw] h-[50px] mobile:h-[2.77vw] group transition-all active:scale-95 block",
            className
        )}>
            <Image
                src="/assets/Buttons/playStore download button.png"
                alt="Get it on Google Play"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 150px, 8.4vw"
            />
        </Link>
    );
}

