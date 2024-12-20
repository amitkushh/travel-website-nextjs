import Client from "@/components/Client";
import Explore from "@/components/Explore";
import Features from "@/components/Features";
import Hassle from "@/components/Hassle";
import HeroSection from "@/components/HeroSection";
import Join from "@/components/Join";
import Services from "@/components/Services";
import Travel from "@/components/Travel";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Services />
      <Hassle />
      <Explore />
      <Travel />
      <Client />
      <Join />
    </>
  );
}
