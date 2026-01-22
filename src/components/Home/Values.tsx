export default function Values() {
  return (
    <section className="py-20 bg-background-light dark:bg-surface-dark relative bg-pill-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="group p-8 rounded-xl bg-surface-light dark:bg-gray-800 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative top-0 hover:-top-2">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <span className="material-icons-outlined text-3xl text-primary group-hover:text-white">
                domain
              </span>
            </div>
            <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
              Industry Specialization
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Deep expertise in the FMCG landscape, understanding the unique
              challenges of supply chains, retail, and production.
            </p>
          </div>
          <div className="group p-8 rounded-xl bg-surface-light dark:bg-gray-800 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative top-0 hover:-top-2">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <span className="material-icons-outlined text-3xl text-primary group-hover:text-white">
                verified
              </span>
            </div>
            <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
              Quality Over Quantity
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              A rigorous vetting process ensures we present only the most
              qualified candidates that fit your corporate culture.
            </p>
          </div>
          <div className="group p-8 rounded-xl bg-surface-light dark:bg-gray-800 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative top-0 hover:-top-2">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <span className="material-icons-outlined text-3xl text-primary group-hover:text-white">
                insights
              </span>
            </div>
            <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
              Market Intelligence
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Providing data-driven insights and salary benchmarking to help you
              make informed hiring decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
