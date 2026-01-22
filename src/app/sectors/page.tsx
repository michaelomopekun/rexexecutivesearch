import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import SectorPageHeader from "@/components/sectors/SectorPageHeader";
import SectorBlock from "@/components/sectors/SectorBlock";
import SectorCTA from "@/components/sectors/SectorCTA";

export default function SectorsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <SectorPageHeader />
      
      <SectorBlock
        number="Sector 01"
        title="Agro-Allied Industry"
        description="The foundation of the FMCG value chain. We identify leaders capable of managing complex agricultural operations, from raw material sourcing and plantation management to primary processing. Our candidates understand the critical balance between yield optimization, sustainability, and supply chain continuity."
        roles={[
          "Supply Chain Manager (Agri-commodities)",
          "Outgrower Program Director",
          "Quality Control Lead",
          "Logistics Coordinator"
        ]}
        imageSrc="/Agro-Allied.jpg"        
        imageAlt="Agro-Allied Industry"
        isReversed={false}
        bgClass="bg-pill-grid"
      />

      <SectorBlock
        number="Sector 02"
        title="Food & Drinks Production"
        description="In a sector driven by taste, safety, and efficiency, we find the operational masterminds. We connect you with professionals who excel in manufacturing excellence, strict hygiene standards, and innovative product development—ensuring your products not only reach the shelf but fly off it."
        roles={[
          "Plant / Factory Manager",
          "R&D Specialist",
          "Production Manager",
          "Head of Quality Assurance"
        ]}
        imageSrc="/food_and_beverage_production.jpg"
        imageAlt="Food & Drinks Production"
        isReversed={true}
        bgColorClass="bg-surface-light"
      />

      <SectorBlock
        number="Sector 03"
        title="Non-Food Consumer Goods"
        description="For personal care, home care, and hygiene brands, differentiation is key. We specialize in placing strategic minds who can drive market penetration and brand loyalty. Our network includes top-tier talent in marketing, packaging innovation, and category management."
        roles={[
          "Brand Manager",
          "Marketing Director",
          "Packaging Engineer",
          "Trade Marketing Manager"
        ]}
        imageSrc="/non_food_product.jpg"
        imageAlt="Consumer Goods"
        isReversed={false}
        bgClass="bg-pill-grid"
      />

      <SectorBlock
        number="Sector 04"
        title="Retail Operations"
        description="The ultimate point of conversion. Whether for large-scale supermarket chains or specialized outlets, we recruit dynamic leaders who understand visual merchandising, inventory turnover, and customer experience excellence to drive same-store growth."
        roles={[
          "Retail Operations Director",
          "Area Manager",
          "Visual Merchandising Lead",
          "Store Manager"
        ]}
        imageSrc="/Retail-inventory-management.jpg"
        imageAlt="Retail Operations"
        isReversed={true}
        bgColorClass="bg-surface-light"
      />

      <SectorCTA />
      
      <Footer />
    </main>
  );
}
