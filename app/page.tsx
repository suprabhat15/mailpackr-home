import Hero from "@/components/landing/Hero";
import Ticker from "@/components/landing/Ticker";
import HowItWorks from "@/components/landing/HowItWorks";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import Comparison from "@/components/landing/Comparison";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "var(--font-body)",
        overflowX: "hidden",
      }}
    >
      <Header />

      <main>
        <Hero />
        <Ticker />
        <HowItWorks />
        <ProblemSolution />
        <Features />
        <Pricing />
        <Comparison />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
