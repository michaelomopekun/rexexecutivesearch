export default function StatsRow() {
  return (
    <section className="py-20 bg-accent-blue dark:bg-gray-900 text-white border-y border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-pill-pattern opacity-10 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          <div className="p-4">
            <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2 font-display">
              ?<span className="text-primary text-3xl">wks</span>
            </div>
            <p className="text-gray-300 text-sm uppercase tracking-wider font-medium">
              Avg. Time to Shortlist
            </p>
          </div>
          <div className="p-4">
            <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2 font-display">
              ?<span className="text-primary text-3xl">%</span>
            </div>
            <p className="text-gray-300 text-sm uppercase tracking-wider font-medium">
              Fill Rate for Retained Search
            </p>
          </div>
          <div className="p-4">
            <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2 font-display">
              ?<span className="text-primary text-3xl">%</span>
            </div>
            <p className="text-gray-300 text-sm uppercase tracking-wider font-medium">
              Retention After 2 Years
            </p>
          </div>
          <div className="p-4">
            <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2 font-display">
              ?<span className="text-primary text-3xl">+</span>
            </div>
            <p className="text-gray-300 text-sm uppercase tracking-wider font-medium">
              C-Suite Placements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
