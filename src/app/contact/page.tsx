import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";
import WhatsAppButton from "@/components/contact/WhatsAppButton";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Rex Executive Search for your FMCG recruitment needs.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <MapSection />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
