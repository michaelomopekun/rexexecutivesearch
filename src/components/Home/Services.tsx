import Link from "next/link";

export default function Services() {
  return (
    <section
      className="py-24 bg-background-light dark:bg-surface-dark border-y border-gray-200 dark:border-gray-700 bg-pill-grid"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mt-2 leading-tight">
              Tailored Recruitment Solutions for Your Business Growth
            </h2>
          </div>
          <Link
            className="hidden md:flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
            href="/services"
          >
            View all services{" "}
            <span className="material-icons-outlined ml-1">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-surface-light dark:bg-background-dark p-8 rounded-xl border-l-4 border-primary shadow-md hover:shadow-xl transition-all duration-300">
            <span className="material-icons-outlined text-4xl text-gray-700 dark:text-gray-300 mb-4">
              search
            </span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Executive Search
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Headhunting C-suite and director-level executives with proven
              track records.
            </p>
          </div>
          <div className="bg-surface-light dark:bg-background-dark p-8 rounded-xl border-l-4 border-primary shadow-md hover:shadow-xl transition-all duration-300">
            <span className="material-icons-outlined text-4xl text-gray-700 dark:text-gray-300 mb-4">
              groups
            </span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Mid to Senior Recruitment
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Finding the perfect managers and specialists to lead your teams.
            </p>
          </div>
          <div className="bg-surface-light dark:bg-background-dark p-8 rounded-xl border-l-4 border-primary shadow-md hover:shadow-xl transition-all duration-300">
            <span className="material-icons-outlined text-4xl text-gray-700 dark:text-gray-300 mb-4">
              map
            </span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Talent Mapping
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Analyzing the market landscape to identify future talent pipelines.
            </p>
          </div>
          <div className="bg-surface-light dark:bg-background-dark p-8 rounded-xl border-l-4 border-primary shadow-md hover:shadow-xl transition-all duration-300">
            <span className="material-icons-outlined text-4xl text-gray-700 dark:text-gray-300 mb-4">
              lock
            </span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Confidential Search
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Discreet hiring processes for sensitive roles and replacements.
            </p>
          </div>
        </div>
        <div className="mt-8 md:hidden text-center">
          <Link
            className="flex items-center justify-center text-primary font-semibold hover:text-primary-dark transition-colors"
            href="/contact"
          >
            View all services{" "}
            <span className="material-icons-outlined ml-1">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
