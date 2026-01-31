import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

type SectionContent = {
    title: string;
    content?: string;
    intro?: string;
    items?: string[];
    outro?: string;
};

const TERMS_SECTIONS: SectionContent[] = [
    {
        title: "1. Acceptance of Terms",
        content: "By accessing or using Fennec, you agree to be bound by these Terms of Service. If you do not agree, please do not use the app."
    },
    {
        title: "2. Eligibility",
        items: [
            "You must be at least 18 years old to use Fennec.",
            "You agree to provide accurate and truthful information.",
            "You are responsible for all activity under your account."
        ]
    },
    {
        title: "3. Accounts & Groups",
        items: [
            "Users may create or join groups according to their subscription plan.",
            "Free users may belong to one group; Premium users may belong to multiple groups.",
            "You are responsible for the content you post, including messages, photos, videos, and prompts."
        ]
    },
    {
        title: "4. Acceptable Use",
        intro: "You agree not to:",
        items: [
            "Harass, abuse, or harm other users",
            "Post illegal, explicit, or hateful content",
            "Impersonate others or misrepresent your identity",
            "Use the app for spam, scams, or commercial solicitation"
        ],
        outro: "We reserve the right to remove content or suspend accounts that violate these rules."
    },
    {
        title: "5. Matches & Communication",
        items: [
            "Matches are created based on mutual interest.",
            "Fennec does not guarantee matches or responses.",
            "Individual messaging, extended calls, and certain features may require a Premium subscription."
        ]
    },
    {
        title: "6. Subscriptions & Purchases",
        items: [
            "Premium subscriptions and in-app purchases are billed through your app store.",
            "Payments are non-refundable except where required by law.",
            "Subscription terms and pricing may change with notice."
        ]
    },
    {
        title: "7. Safety & Reporting",
        items: [
            "Users can report or block individuals or groups.",
            "We may investigate reports and take action, including warnings, content removal, or account suspension."
        ]
    },
    {
        title: "8. Termination",
        content: "We may suspend or terminate your account if you violate these Terms or engage in harmful behavior. You may stop using the app at any time."
    },
    {
        title: "9. Disclaimer",
        content: "Fennec is provided “as is.” We do not guarantee uninterrupted service or compatibility between users."
    },
    {
        title: "10. Changes to Terms",
        content: "We may update these Terms from time to time. Continued use of the app means you accept the updated terms."
    },
    {
        title: "11. Contact",
        content: "For questions or concerns, contact us at: support@fennecapp.com"
    }
];

export default function TermsOfServicePage() {
    return (
        <div className="flex flex-col items-center bg-[#111111] min-h-screen w-full pt-[8.33vw] font-['SF_Pro_Text',sans-serif]">
            {/* 
                Spacing Reference (1920px -> vw):
                56px = 2.92vw (Header Gap) -> Handled by pt-[8.33vw] (approx 160px) to clear header
                80px = 4.17vw (Image to Content)
                64px = 3.33vw (Between Points)
                120px = 6.25vw (Content to Footer)
                1616px = 84.17vw (Content Width)
                560px = 29.17vw (Top Image Height)
                40px = 2.08vw (Padding/BorderRadius)
                24px = 1.25vw (Gap, Text Height)
                72px = 3.75vw (Hero Title)
                16px = 0.83vw (Hero Subtitle)
                36px = 1.88vw (Point Title)
                18px = 0.94vw (Point Body)
            */}

            {/* Top Image Section */}
            <section className="w-[84.17vw] h-[29.17vw] rounded-[2.08vw] overflow-hidden relative mb-[4.17vw]">
                <Image
                    src="/assets/Term & services/Top-Image.png"
                    alt="Terms of Service"
                    fill
                    className="absolute top-0 left-0 w-full h-full object-cover z-10"
                    priority
                />
                <div className="absolute inset-0 bg-[rgba(22,0,63,0.5)] z-20 flex flex-col justify-end p-[2.08vw] gap-[1.25vw]">
                    <h1 className="font-bold text-[3.75vw] leading-[1.1] text-white text-center w-full">
                        Terms of Service
                    </h1>
                    <p className="font-normal text-[0.83vw] leading-[1.5] text-white text-center w-full">
                        Last updated: [Date]
                    </p>
                </div>
            </section>

            {/* Points Section */}
            <section className="flex flex-col gap-[3.33vw] w-[84.17vw]">
                {TERMS_SECTIONS.map((section, index) => (
                    <div key={index} className="flex flex-col gap-[1.25vw] w-full">
                        <h2 className="font-bold text-[1.88vw] leading-[1.1] text-white tracking-[-0.04em]">
                            {section.title}
                        </h2>

                        {/* Render content based on type */}
                        <div className="font-normal text-[0.94vw] leading-[1.78] text-[#CCCCCC]">
                            {section.content && (
                                <p>{section.content}</p>
                            )}

                            {(section.items || section.intro) && (
                                <div className="flex flex-col gap-[0.83vw]">
                                    {section.intro && (
                                        <p>{section.intro}</p>
                                    )}
                                    {section.items && (
                                        <ul className="flex flex-col gap-[0.83vw]">
                                            {section.items.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-[0.625vw] ml-[0.83vw]">
                                                    <span className="text-[#CCCCCC] mt-[0.31vw] leading-[1]">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {section.outro && (
                                        <p>{section.outro}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </section>

            <div className="w-full mt-[6.25vw]">
                <Footer />
            </div>
        </div>
    );
}
