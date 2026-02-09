import type { Metadata } from "next";
import localFont from "next/font/local";
import { Michroma } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

const sfProDisplay = localFont({
  src: [
    { path: "../../public/fonts/SFPRODISPLAYREGULAR.woff2", weight: "400" },
    { path: "../../public/fonts/SFPRODISPLAYMEDIUM.woff2", weight: "500" },
    { path: "../../public/fonts/SFPRODISPLAYBOLD.woff2", weight: "700" },
  ],
  variable: "--font-sf-pro",
  display: "swap",
});

const michroma = Michroma({ weight: "400", subsets: ["latin"], variable: "--font-michroma" });

export const metadata: Metadata = {
  title: "Fenec - Digital Management",
  description: "Experience the future of digital management with Fenec.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(sfProDisplay.variable, michroma.variable, "font-sans bg-[#1a1a1a] antialiased")}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
