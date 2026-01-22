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
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAysp3QL-gA1zKR5VFSJuHlNeTR-CfjHJMbE5zDeAd-i-DA4eFiDG_QVMY1bnuUgiNZCbyve1TLpA1FLXx06vKl4HzhenvFA9cVFH04TY4luhMKpiZEH-8zGEcVt9gZQLP6F9kOT3h6oETxDbWYSYR65cKUvieyDKuo22CPzF6gchR5ukIX-FmGPw_rl_OK-S0UUFHwuLP7YgYGkefeTXF7mrxTbsnu7DVi1HxO1RNzOy36fpd3v1fM__1n1rUa6J7fAvWv9zQKPTs"
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
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDcEHds0qQMaO7lQu0j56Lz5peFfl5ptWrnjrz6BP4Af0T-ubDWR5W_01fEiEFHhfWR1nj7GJzhOHo4BW9bZbMQR6uu1O4L-8YrGXHWuem-xB3XhBeEgqYRUigOQLbd6M9-u4zaxy1GOwS2t2IY3m3sbHP_oNy6SpvcNWnWZ3c3zpmcXakxBOZtS6Mt8vjSLvRjlAngQwrfxXd42P2LMS2NLlhT8JfEvhFjy4ZVVd6o5IENYy7H7Cs9ViRZqC4QrcNbv-54xDVRXbE"
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
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDaAAF-bt27xuY6nzmoz11T6aqa0Fn0fQ4CMtkAWQBNK-tG06HPvxmSbwcYhlTq8zcNDA-fR3ZomQEMqrBu3vegC0WbBbGgJHMQI20b_qgEcv4r-1sG1dXoL1dZUpRF8UbneiC2bpBs5kRDm2J725xdY6DuDjjvFmyAM7qGv7Z0OtXDQh0qxCRFMONA2cgvsuZ-oFQBiJbhsWeR1N5ieoEZxPhwUtsx9yJqZwuafueeKd3GO0cVawbkiNqnhUOR2zyDd1KZBFjGKko"
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
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCx89WsKniRPf961OeO3bNkApVHR5DX-ogFVux4JpkNBS-CJ5SIpWoI9zqytWfe0WXbu5n5kZiMuYrjMxCgG_l7i0IRTDDEGkMNW3EsYs2TGbIA_Brh9oHRVgV3ejtx-1chcIZe03cm3UAfhVz1HO7hi2DW5D7AOjLwt3oOf5d8FFomkrVx8PujWE65v0uRk8_qmtGrEkNIahYk68ftDrIF9bBw-Gid-bMA-cFNSVhiQJPI3FnhzTVk4ViRyehVwXmBqp5qUGdOCR8"
        imageAlt="Retail Operations"
        isReversed={true}
        bgColorClass="bg-surface-light"
      />

      <SectorCTA />
      
      <Footer />
    </main>
  );
}
