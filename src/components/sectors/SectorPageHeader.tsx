export default function SectorPageHeader() {
  return (
    <header className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white bg-pill-grid">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold tracking-wider uppercase text-xs mb-6">
          Deep Specialization
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-secondary mb-6 leading-tight">
          Our Industry <span className="text-primary">Expertise</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          We are not generalists. Rex Executive Search operates exclusively
          within the FMCG landscape, giving us an unparalleled understanding of
          the market, its challenges, and the leadership required to thrive.
        </p>
      </div>
    </header>
  );
}
