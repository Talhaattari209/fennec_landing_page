'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

/*
  Design Specs (Reference 1920px width):
  1616px = 84.17vw (Content Width)
  560px = 29.17vw (Hero Height)
  1072px = 55.83vw (Left Col Width)
  528px = 27.5vw (Right Col Width)
  56px = 2.92vw (Header Gap)
  80px = 4.17vw (Hero Bottom Margin)
  64px = 3.33vw (Section Gap)
  16px = 0.83vw (Col Gap)
  120px = 6.25vw (Footer Margin)
  40px = 2.08vw (Image Radius)
  
  Header is provided by layout.tsx. Padding-top compensates for fixed header + 56px gap.
*/

const FAQS = [
    {
        q: "Can I use Fennec without joining a group?",
        a: "You'll need to be in a group to start matching. You can either create your own or join one via an invite, code, or QR scan."
    },
    {
        q: "How do group matches work?",
        a: "Group matches suggest potential connections based on shared interests and compatibility scores within your joined groups."
    },
    {
        q: "What happens when I unmatch a group?",
        a: "When you unmatch a group, you will no longer receive match suggestions from that group, and your profile will be hidden from its members."
    },
    {
        q: "Can I edit my profile after signing up?",
        a: "Yes, you can edit your profile at any time from the account settings page, including your photos and bio."
    },
    {
        q: "How do I change my phone number or email?",
        a: "Navigate to Settings > Account to update your contact information. You may need to verify the new details."
    },
    {
        q: "What should I do if I forget my password?",
        a: "Use the 'Forgot Password' link on the login screen to receive a reset code via your registered email or phone number."
    },
    {
        q: "Is there a limit to the number of groups I can join?",
        a: "There is currently no strict limit on the number of groups you can join, but we recommend focusing on groups relevant to you."
    },
    {
        q: "How can I report inappropriate behavior in a group?",
        a: "Tap the three dots on any user profile or message and select 'Report'. Our team reviews all reports within 24 hours."
    },
    {
        q: "Can I leave a group at any time?",
        a: "Yes, you can leave a group through the group settings menu. You can rejoin later if you have an invite code."
    },
    {
        q: "What are the benefits of joining a group?",
        a: "Groups allow you to connect with like-minded individuals, attend exclusive events, and get tailored match suggestions."
    },
    {
        q: "How do I find groups that match my interests?",
        a: "Use the search bar on the 'Explore' page to find groups by keyword, location, or interest category."
    },
    {
        q: "Can I block other users?",
        a: "Yes, blocking a user prevents them from seeing your profile or contacting you. You can manage blocked users in Settings."
    },
    {
        q: "Are there any fees associated with group memberships?",
        a: "Most groups are free, but some specialized communities may require a membership fee, which will be clearly indicated."
    },
    {
        q: "What privacy settings are available for my profile?",
        a: "You can control who sees your profile, limit visibility to specific groups, and toggle read receipts in Privacy Settings."
    },
    {
        q: "Can I view my group's activity history?",
        a: "Group admins can view activity logs. Regular members can see their own interaction history within the group."
    },
    {
        q: "What should I do if I encounter technical issues?",
        a: "Please try clearing your cache or reinstalling the app. If the issue persists, use the 'Contact Support' form on this page."
    }
];

export default function HelpCenterPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center bg-[#111111] min-h-screen w-full pt-[8.33vw] font-['SF_Pro_Text',sans-serif]">

            {/* Layout provides Header. We use pt to clear it + gap. */}

            {/* Hero Section */}
            {/* Top Image: 1616x560 (84.17vw x 29.17vw), Radius 40px (2.08vw) */}
            <div className="relative w-[84.17vw] h-[29.17vw] mb-[4.17vw]">
                <Image
                    src="/assets/help-center/top_Img.png"
                    alt="Help Center"
                    fill
                    className="object-cover rounded-[2.08vw]"
                    priority
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-[#16003F]/50 rounded-[2.08vw] flex flex-col items-center justify-end pb-[2.08vw]">
                    {/* Title 72px = 3.75vw */}
                    <h1 className="font-bold text-[3.75vw] text-white leading-[1.1] mb-[1.25vw] tracking-[-0.04em]">
                        Help Center
                    </h1>

                    {/* Subtitle 24px = 1.25vw */}
                    <h4 className="font-bold text-[1.25vw] text-white leading-[1.2] mb-[0.83vw] tracking-[-0.04em]">
                        We’re here to help you get the most out of Fennec.
                    </h4>

                    {/* Body 16px = 0.83vw */}
                    <p className="font-normal text-[0.83vw] text-white leading-[1.5] mb-[1.25vw] max-w-[33.33vw] text-center">
                        Find answers to common questions, learn how features work, or reach out to our support team if you need assistance.
                    </p>

                    {/* Search Bar - Width 640px (33.33vw), Height 56px (2.92vw) */}
                    <div className="relative w-[33.33vw] h-[2.92vw]">
                        <div className="absolute inset-0 bg-[#111111]/75 backdrop-blur-[12px] rounded-[0.83vw] border border-[#666666]/50 flex items-center px-[0.83vw] gap-[0.83vw]">
                            <Search className="w-[1.25vw] h-[1.25vw] text-white" />
                            <input
                                type="text"
                                placeholder="Search frequently asked questions..."
                                className="bg-transparent border-none outline-none text-white text-[0.83vw] placeholder-white/40 w-full font-normal"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content: Two Columns */}
            {/* Gap between image and heading is 80px (4.17vw) - handled by mb above */}

            <div className="flex flex-row items-start w-[84.17vw] gap-[0.83vw] mb-[6.25vw]">

                {/* Left Column: FAQs - Width 1072px (55.83vw) */}
                <div className="flex flex-col w-[55.83vw]">
                    {/* Heading 36px = 1.88vw */}
                    {/* Gap to card 64px = 3.33vw */}
                    <h2 className="font-bold text-[1.88vw] text-white leading-[1.1] mb-[3.33vw] tracking-[-0.04em]">
                        Frequently Asked Questions
                    </h2>

                    {/* FAQ List - Gap 16px (0.83vw) as requested in prompt */}
                    <div className="flex flex-col gap-[0.83vw]">
                        {FAQS.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    onClick={() => toggleFAQ(index)}
                                    className={`
                                    w-full rounded-[0.83vw] cursor-pointer transition-all duration-300
                                    flex flex-col justify-center px-[0.83vw]
                                    ${isOpen
                                            ? 'bg-[#5F00DB] py-[0.83vw]' // Open style: Min Height 96px (5vw)
                                            : 'bg-[#5F00DB]/25 h-[3.75vw]' // Closed style: Height 72px (3.75vw)
                                        }
                                `}
                                >
                                    <div className="flex flex-row justify-between items-start w-full gap-[0.52vw]">
                                        <div className="flex flex-col gap-[0.83vw] flex-1">
                                            <h5 className="font-medium text-[0.94vw] text-white leading-[1.2] tracking-[-0.02em]">
                                                {faq.q}
                                            </h5>
                                            {isOpen && (
                                                <p className="font-normal text-[0.83vw] text-[#CCCCCC] leading-[1.5]">
                                                    {faq.a}
                                                </p>
                                            )}
                                        </div>
                                        {isOpen ? (
                                            <ChevronUp className="w-[1.25vw] h-[1.25vw] text-white flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-[1.25vw] h-[1.25vw] text-white flex-shrink-0" />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column: Contact Support - Width 528px (27.5vw) */}
                <div className="flex flex-col w-[27.5vw]">
                    {/* Heading for alignment - Must align with FAQ heading visually.
                    If FAQ Heading has mb-[3.33vw], this needs same spacing logic from top or same mb.
                    The layout is row, so they share top alignment.
                    This heading height matches FAQ heading height?
                    FAQ Heading 36px. Support form heading 24px is inside the card? No.
                    Prompt: "then comes 2 div (FAQs and Contact support) ... between heading of 2 divs and card is 64px".
                    This implies both columns have headings!
                    Left col: "Frequently Asked Questions" heading.
                    Right col: "Contact Support" heading?
                    The CSS file `Form_css.txt` has a heading inside the form card: "We’re here to help..."
                    But the Prompt says: "2 div (FAQs and Contact support)".
                    And "between heading of 2 divs and card is 64px".
                    This implies there is a heading OUTSIDE the card for Contact Support too. Or maybe just "Contact Support" is the heading.
                    I will assume "Contact Support" is the exterior heading matching "Frequently Asked Questions".
                */}
                    <h2 className="font-bold text-[1.88vw] text-white leading-[1.1] mb-[3.33vw] tracking-[-0.04em]">
                        Contact Support
                    </h2>

                    {/* Form Card */}
                    <div className="w-full bg-[#5F00DB]/25 rounded-[0.83vw] p-[0.83vw] flex flex-col gap-[1.67vw]">
                        <div className="flex flex-col gap-[0.83vw]">
                            <h3 className="font-medium text-[1.25vw] text-white leading-[1.2] tracking-[-0.02em]">
                                We’re here to help — anytime you need us.
                            </h3>
                            <p className="font-normal text-[0.83vw] text-white leading-[1.5]">
                                Tell us what you need help with, and our support team will get back to you within 24 hours.
                            </p>
                        </div>

                        <form className="flex flex-col gap-[1.25vw]">
                            {/* Topic Select */}
                            <div className="flex flex-col gap-[0.21vw]">
                                <label className="font-bold text-[0.63vw] text-white">What can we help you with?</label>
                                <div className="relative border-b border-white h-[2.5vw] flex items-center">
                                    <span className="text-white/40 text-[0.83vw]">Select a Topic</span>
                                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-[1.25vw] h-[1.25vw] text-white" />
                                </div>
                            </div>

                            {/* Message Input */}
                            <div className="flex flex-col gap-[0.21vw]">
                                <label className="font-bold text-[0.63vw] text-white">Message</label>
                                <div className="border-b border-white min-h-[5.83vw] pt-[0.42vw]">
                                    <textarea
                                        className="w-full bg-transparent border-none outline-none text-white text-[0.83vw] placeholder-white/40 resize-none h-[5vw]"
                                        placeholder="Describe your question or issue here..."
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button className="w-full bg-[#5F00DB] h-[2.92vw] rounded-[2.71vw] flex items-center justify-center font-bold text-[0.83vw] text-white shadow-lg mt-[0.83vw]">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>

            <div className="w-full">
                <Footer />
            </div>
        </div>
    );
}
