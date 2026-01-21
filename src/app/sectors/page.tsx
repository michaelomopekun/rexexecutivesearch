import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import SectorHero from "@/components/sectors/SectorHero";
import Methodology from "@/components/sectors/Methodology";
import WhyChooseUs from "@/components/sectors/WhyChooseUs";
import StatsRow from "@/components/sectors/StatsRow";
import CallToAction from "@/components/sectors/CallToAction";

export default function SectorsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SectorHero />
      <Methodology />
      <WhyChooseUs />
      <StatsRow />
      <CallToAction />
      <Footer />
    </main>
  );
}
