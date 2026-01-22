export default function MissionVision() {
  return (
    <section className="py-20 bg-background-light dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary rounded-2xl p-10 md:p-14 text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3 transition-transform duration-700 group-hover:rotate-12">
              <span
                className="material-icons-outlined"
                style={{ fontSize: "300px" }}
              >
                flag
              </span>
            </div>
            <div className="relative z-10">
              <span className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-lg mb-6 backdrop-blur-sm">
                <span className="material-icons-outlined text-3xl">flag</span>
              </span>
              <h3 className="text-3xl font-display font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-lg opacity-90 leading-relaxed">
                To be the most trusted recruitment partner in the FMCG sector,
                delivering leadership solutions that drive sustainable growth
                and competitive advantage for our clients.
              </p>
            </div>
          </div>
          <div className="bg-accent-charcoal rounded-2xl p-10 md:p-14 text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3 transition-transform duration-700 group-hover:rotate-12">
              <span
                className="material-icons-outlined"
                style={{ fontSize: "300px" }}
              >
                visibility
              </span>
            </div>
            <div className="relative z-10">
              <span className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-lg mb-6 backdrop-blur-sm">
                <span className="material-icons-outlined text-3xl">
                  visibility
                </span>
              </span>
              <h3 className="text-3xl font-display font-bold mb-4">
                Our Vision
              </h3>
              <p className="text-lg opacity-90 leading-relaxed">
                To shape the future of FMCG leadership across Africa by
                connecting visionary talent with organizations that are building
                the continent's economic legacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
