import Navbar from "@/components/Home/Navbar";
import Hero from "@/components/Home/Hero";
import Values from "@/components/Home/Values";
import Sectors from "@/components/Home/Sectors";
import Services from "@/components/Home/Services";
import About from "@/components/Home/About";
import Clients from "@/components/Home/Clients";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Values />
      <Sectors />
      <Services />
      <About />
      <Clients />
      <Footer />
    </main>
  );
}
