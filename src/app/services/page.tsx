import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import SectorHero from "@/components/services/SectorHero";
import Methodology from "@/components/services/Methodology";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import StatsRow from "@/components/services/StatsRow";
import CallToAction from "@/components/services/CallToAction";

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-[url('data:image/svg+xml,%3Csvg%20width=\'40\'%20height=\'40\'%20viewBox=\'0%200%2040%2040\'%20xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg%20fill=\'none\'%20fill-rule=\'evenodd\'%3E%3Cg%20fill=\'%23B21E29\'%20fill-opacity=\'0.03\'%3E%3Crect%20width=\'10\'%20height=\'4\'%20rx=\'2\'%20x=\'0\'%20y=\'0\'/%3E%3Crect%20width=\'10\'%20height=\'4\'%20rx=\'2\'%20x=\'20\'%20y=\'20\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">
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
