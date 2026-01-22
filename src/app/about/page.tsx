import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import AboutHero from "@/components/about/AboutHero";
import Story from "@/components/about/Story";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import Timeline from "@/components/about/Timeline";
import Team from "@/components/about/Team";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <Story />
      <MissionVision />
      <CoreValues />
      <Timeline />
      <Team />
      <AboutCTA />
      <Footer />
    </main>
  );
}
