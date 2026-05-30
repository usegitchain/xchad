import Hero from "@/components/Hero";
import WhyThisExists from "@/components/WhyThisExists";
import HowItWorks from "@/components/HowItWorks";
import Install from "@/components/Install";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-page text-ink">
      <Hero />
      <WhyThisExists />
      <HowItWorks />
      <Install />
      <Footer />
    </main>
  );
}
