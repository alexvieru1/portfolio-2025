import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import HeroSection from "@/components/hero-section";
import RecentWork from "@/components/recent-work";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <RecentWork />
      <Contact/>
    </div>
  );
}
