import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

// Define types for flexible content structure
interface SubSection {
    title: string;
    items: string[];
}

interface PrivacySection {
    title: string;
    content?: string;      // Standalone paragraph
    intro?: string;        // Text introducing a list
    items?: string[];      // List items
    subSections?: SubSection[]; // Nested sections (e.g. Point 1)
    extraContent?: string; // Additional text if needed (e.g. Point 3 first line)
}

const PRIVACY_SECTIONS: PrivacySection[] = [
    {
        title: "1. Information We Collect",
        subSections: [
            {
                title: "Information You Provide",
                items: [
                    "Name, email, phone number",
                    "Profile details (photos, prompts, interests)",
                    "Messages and group activity"
                ]
            },
            {
                title: "Information Collected Automatically",
                items: [
                    "Device information",
                    "App usage data",
                    "Location (approximate, if enabled)"
                ]
            }
        ]
    },
    {
        title: "2. How We Use Your Information",
        intro: "We use your information to:",
        items: [
            "Create and manage your account",
            "Enable group matching and communication",
            "Improve app performance and features",
            "Ensure safety, moderation, and support"
        ]
    },
    {
        title: "3. Sharing of Information",
        extraContent: "We do not sell your personal data.",
        intro: "We may share information:",
        items: [
            "With other users (based on your profile visibility settings)",
            "With service providers (hosting, analytics, payments)",
            "If required by law or to protect user safety"
        ]
    },
    {
        title: "4. Your Choices & Controls",
        intro: "You can:",
        items: [
            "Edit or delete your profile information",
            "Control what appears publicly",
            "Manage notification and privacy settings",
            "Request account deletion"
        ]
    },
    {
        title: "5. Data Security",
        content: "We use industry-standard security measures to protect your data. However, no system is 100% secure."
    },
    {
        title: "6. Data Retention",
        content: "We retain your data only as long as necessary to provide our services or comply with legal obligations."
    },
    {
        title: "7. Children’s Privacy",
        content: "Fennec is not intended for users under 18. We do not knowingly collect data from minors."
    },
    {
        title: "8. International Use",
        content: "Your data may be processed in countries outside your own, with appropriate safeguards in place."
    },
    {
        title: "9. Changes to This Policy",
        content: "We may update this Privacy Policy. Significant changes will be communicated in the app."
    },
    {
        title: "10. Contact Us",
        content: "If you have questions about privacy, contact us at: privacy@fennecapp.com"
    }
];

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col items-center bg-[#111111] min-h-screen w-full pt-[22.73vw] mobile:pt-[8.33vw]">
            {/* 
                Spacing Reference:
                Mobile (Base 440px):
                - Margin Top (Header Gap): 100px = 22.73vw
                - Content Width: 408px = 92.73vw
                - Hero Height: 408px = 92.73vw
                - Hero Radius: 24px = 5.45vw
                - Hero Title: 28px = 6.36vw
                - Hero Subtitle: 16px = 3.64vw
                - Hero Bottom Margin: 40px = 9.09vw
                - Point Gap: 48px = 10.91vw
                - Point Title: 24px = 5.45vw
                - Point Body: 16px = 3.64vw
                - Footer Margin: 120px = 27.27vw

                Desktop (Base 1920px, via mobile: prefix):
                - Margin Top: 160px = 8.33vw
                - Content Width: 1616px = 84.17vw
                - Hero Height: 560px = 29.17vw
                - Hero Radius: 40px = 2.08vw
                - Hero Title: 72px = 3.75vw
                - Hero Subtitle: 16px = 0.83vw
                - Hero Bottom Margin: 80px = 4.17vw
                - Point Gap: 64px = 3.33vw
                - Point Title: 36px = 1.88vw
                - Point Body: 18px = 0.94vw
                - Footer Margin: 120px = 6.25vw
            */}

            {/* Top Image Section */}
            <section className="w-[92.73vw] mobile:w-[84.17vw] h-[92.73vw] mobile:h-[29.17vw] rounded-[5.45vw] mobile:rounded-[2.08vw] overflow-hidden relative mb-[9.09vw] mobile:mb-[4.17vw]">
                <Image
                    src="/assets/privacy policy/privacy_top_image_mobile.png"
                    alt="Privacy Policy"
                    fill
                    className="absolute top-0 left-0 w-full h-full object-cover z-10 block mobile:hidden"
                    priority
                />
                <Image
                    src="/assets/privacy policy/Top-Image.png"
                    alt="Privacy Policy"
                    fill
                    className="absolute top-0 left-0 w-full h-full object-cover z-10 hidden mobile:block"
                    priority
                />
                <div className="absolute inset-0 bg-[rgba(22,0,63,0.5)] z-20 flex flex-col justify-end p-[5.45vw] mobile:p-[2.08vw] gap-[3.64vw] mobile:gap-[1.25vw]">
                    <h1 className="font-bold text-[6.36vw] mobile:text-[3.75vw] leading-[1.1] text-white text-center w-full">
                        Privacy Policy
                    </h1>
                    <p className="font-normal text-[3.64vw] mobile:text-[0.83vw] leading-[1.5] text-white text-center w-full">
                        Last updated: [Date]
                    </p>
                </div>
            </section>

            {/* Points Section */}
            <section className="flex flex-col gap-[10.91vw] mobile:gap-[3.33vw] w-[92.73vw] mobile:w-[84.17vw]">
                {PRIVACY_SECTIONS.map((section, index) => (
                    <div key={index} className="flex flex-col gap-[3.64vw] mobile:gap-[1.25vw] w-full">
                        <h2 className="font-bold text-[5.45vw] mobile:text-[1.88vw] leading-[1.1] text-white tracking-tighter">
                            {section.title}
                        </h2>

                        <div className="font-normal text-[3.64vw] mobile:text-[0.94vw] leading-[1.78] text-[#CCCCCC]">

                            {/* Extra content (e.g. "We do not sell...") */}
                            {section.extraContent && (
                                <p className="mb-[2.72vw] mobile:mb-[1.25vw]">{section.extraContent}</p>
                            )}

                            {/* Intro text for lists */}
                            {section.intro && (
                                <p className="mb-[1.82vw] mobile:mb-[0.83vw]">{section.intro}</p>
                            )}

                            {/* Standard Content Paragraph */}
                            {section.content && (
                                <p>{section.content}</p>
                            )}

                            {/* Direct Lists */}
                            {section.items && (
                                <ul className="flex flex-col gap-[1.82vw] mobile:gap-[0.83vw]">
                                    {section.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-[1.36vw] mobile:gap-[0.625vw] ml-[1.82vw] mobile:ml-[0.83vw]">
                                            <span className="text-[#CCCCCC] mt-[0.6vw] mobile:mt-[0.31vw] leading-[1]">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* SubSections (Point 1) */}
                            {section.subSections && (
                                <div className="flex flex-col gap-[3.64vw] mobile:gap-[1.25vw]">
                                    {section.subSections.map((sub, subIdx) => (
                                        <div key={subIdx} className="flex flex-col gap-[1.82vw] mobile:gap-[0.83vw]">
                                            <h4 className="font-bold text-[3.64vw] mobile:text-[1.25vw] leading-[1.2] text-white tracking-tighter">
                                                {sub.title}
                                            </h4>
                                            <ul className="flex flex-col gap-[1.82vw] mobile:gap-[0.83vw]">
                                                {sub.items.map((item, itemIdx) => (
                                                    <li key={itemIdx} className="flex items-start gap-[1.36vw] mobile:gap-[0.625vw] ml-[1.82vw] mobile:ml-[0.83vw]">
                                                        <span className="text-[#CCCCCC] mt-[0.6vw] mobile:mt-[0.31vw] leading-[1]">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>
                ))}
            </section>

            <div className="w-full mt-[27.27vw] mobile:mt-[6.25vw]">
                <Footer />
            </div>
        </div>
    );
}
