export default function CoreValues() {
  return (
    <section
      className="py-24 bg-white dark:bg-background-dark bg-pill-grid"
      id="values"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">
            Our Ethos
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mt-2">
            Core Values
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group text-center hover:-translate-y-1">
            <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-icons-outlined text-3xl text-primary group-hover:text-white">
                verified_user
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Integrity
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              We operate with absolute transparency and honesty in every
              interaction.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group text-center hover:-translate-y-1">
            <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-icons-outlined text-3xl text-primary group-hover:text-white">
                factory
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Industry Focus
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Unmatched specialization in the FMCG sector is our hallmark.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group text-center hover:-translate-y-1">
            <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-icons-outlined text-3xl text-primary group-hover:text-white">
                diamond
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Quality
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              We value precision over volume, ensuring the perfect fit every
              time.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group text-center hover:-translate-y-1">
            <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-icons-outlined text-3xl text-primary group-hover:text-white">
                trending_up
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Result-Driven
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Our success is measured by the long-term impact of our placements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
