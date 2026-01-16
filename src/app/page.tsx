import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import About from "@/components/About";
import { Download } from "@/components/DownloadFooter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <HowItWorks />
      <Features />
      <About />
      <Download />
      <Footer />
    </div>
  );
}
