
import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

const SAFETY_POINTS = [
    {
        title: "1. Our Commitment to Your Safety",
        description: "Fennec is built on trust, respect, and inclusivity. We want everyone to feel comfortable and secure while using the app. We expect users to behave respectfully, report unsafe behavior, and take common-sense precautions while interacting with others."
    },
    {
        title: "2. Treat Others with Respect",
        description: "Be kind, respectful, and considerate in all interactions. Inappropriate behavior — including harassment, hate speech, threats, or discrimination — is not tolerated. Profiles, photos, messages, or actions that target others based on personal attributes will be removed, and accounts may be suspended or banned."
    },
    {
        title: "3. Be Authentic",
        description: "Only use accurate information and photos in your profile. Misrepresentation or impersonation undermines trust and may result in account restrictions. Users are encouraged to present themselves truthfully and avoid deceptive behavior from the outset."
    },
    {
        title: "4. Protect Your Personal Information",
        description: "Do not share sensitive personal data such as your full address, workplace, financial information, or other identifying details with people you have just met on the app. Maintain your privacy when connecting with new groups or members, and use in-app communication until you feel comfortable."
    },
    {
        title: "5. Meet Safely in Person (If You Choose to)",
        description: (
            <div className="flex flex-col gap-[3.64vw] mobile:gap-[0.83vw]">
                <p className="font-normal text-[3.64vw] mobile:text-[0.94vw] leading-[1.78] text-[#CCCCCC]">
                    If you decide to meet someone outside the app:
                </p>
                <ul className="flex flex-col gap-[3.64vw] mobile:gap-[0.83vw]">
                    {[
                        "Choose a public, well-populated location.",
                        "Let a friend or group member know where you're going and who you're meeting.",
                        "Use your own transportation and plan a way home.",
                        "Meeting face-to-face is a personal choice; prioritize your comfort at all times."
                    ].map((text, index) => (
                        <li key={index} className="flex items-start gap-[2.5vw] mobile:gap-[0.625vw] ml-[3.64vw] mobile:ml-[0.83vw]">
                            <span className="text-[#CCCCCC] mt-[1.2vw] mobile:mt-[0.31vw] leading-[1]">•</span>
                            <span className="font-normal text-[3.64vw] mobile:text-[0.94vw] leading-[1.78] text-[#CCCCCC]">
                                {text}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    },
    {
        title: "6. Report and Block Unsafe Users",
        description: "If another user makes you feel uneasy, disrespected, or unsafe, you can easily report or block them through the app. This helps keep the community safer for everyone. Our moderation team reviews reports and takes appropriate action."
    },
    {
        title: "7. Respect Content Guidelines",
        description: "Avoid posting media or text that violates community standards — including explicit content, violent imagery, or anything that could be harmful or offensive. Fennec uses automated tools and human review to help monitor inappropriate content and maintain a respectful environment."
    },
    {
        title: "8. No Tolerance for Illegal Behavior",
        description: "Any attempt to use Fennec for illegal purposes — including solicitation, fraud, threats, or actions that risk another user’s safety — will result in immediate action. In severe cases, law enforcement may be involved."
    },
    {
        title: "9. Keep Communication Inside the App",
        description: "In-app communication gives you an extra layer of protection and allows you to use reporting and blocking features effectively. Be cautious about moving to external platforms (SMS, social media, etc.) until you trust the person."
    },
    {
        title: "10. Stay Informed and Vigilant",
        description: "Safety is a shared responsibility. Use strong passwords, update your privacy settings, and trust your instincts. If something feels off, it’s okay to pause, report, or disengage."
    },
    {
        title: "11. Changes to Safety Practices",
        description: "We may update these Safety Guidelines to reflect new features, legal requirements, or best practices. Continued use of Fennec means you agree to these updates."
    },
    {
        title: "12. Contact & Support",
        description: (
            <span>
                If you have immediate safety concerns or need assistance, contact support through the app or email: <a href="mailto:support@fennecapp.com" className="underline">support@fennecapp.com</a>
            </span>
        )
    }
];

export default function SafetyGuidelinesPage() {
    return (
        <div className="flex flex-col items-center bg-[#111111] min-h-screen w-full font-['SF_Pro_Text',sans-serif] pt-[22.73vw] mobile:pt-[8.33vw]">
            {/* 
               Mobile Reference (440px):
               - Unprefixed classes
               - PT: 100px -> 22.73vw
               - Hero W/H: 408px -> 92.73vw
               - Hero Gap/Pad: 16px/24px
               - Fonts: 28px/16px/24px
               
               Desktop Reference (1920px):
               - mobile: prefix
               - PT: 8.33vw
               - Width: 84.17vw
            */}

            {/* Hero Section */}
            <section className="w-[92.73vw] h-[92.73vw] mobile:w-[84.17vw] mobile:h-[29.17vw] rounded-[5.45vw] mobile:rounded-[2.08vw] overflow-hidden relative mb-[12.73vw] mobile:mb-[4.17vw]">
                <Image
                    src="/assets/safety/saftey_top_image_mobile.png"
                    alt="Safety Guidelines Background"
                    fill
                    className="absolute top-0 left-0 w-full h-full object-cover z-10 block mobile:hidden"
                    priority
                />
                <Image
                    src="/assets/safety/hero_bg.png"
                    alt="Safety Guidelines Background"
                    fill
                    className="absolute top-0 left-0 w-full h-full object-cover z-10 hidden mobile:block"
                    priority
                />
                <div className="absolute inset-0 bg-[rgba(22,0,63,0.5)] z-20 flex flex-col justify-end p-[5.45vw] mobile:p-[2.08vw] gap-[3.64vw] mobile:gap-[1.25vw]">
                    <h1 className="font-bold text-[6.36vw] mobile:text-[3.75vw] leading-[1.1] mobile:leading-[1.1] text-white text-center w-full">
                        Safety Guidelines
                    </h1>
                    <p className="font-normal text-[3.64vw] mobile:text-[0.83vw] leading-[1.5] mobile:leading-[1.5] text-white text-center w-full">
                        Last updated: [Date]
                    </p>
                </div>
            </section>

            {/* Points Section */}
            <section className="flex flex-col gap-[10.91vw] mobile:gap-[3.33vw] w-[92.73vw] mobile:w-[84.17vw]">
                {SAFETY_POINTS.map((point, index) => (
                    <div key={index} className="flex flex-col gap-[3.64vw] mobile:gap-[1.25vw] w-full">
                        <h2 className="font-bold text-[5.45vw] mobile:text-[1.88vw] leading-[1.2] mobile:leading-[1.1] text-white tracking-[-0.04em]">
                            {point.title}
                        </h2>
                        <div className="font-normal text-[3.64vw] mobile:text-[0.94vw] leading-[1.78] mobile:leading-[1.78] text-[#CCCCCC]">
                            {point.description}
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
