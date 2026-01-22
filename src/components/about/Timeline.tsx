export default function Timeline() {
  return (
    <section className="py-24 bg-background-light dark:bg-surface-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
            Our Growth Story
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="space-y-12 md:space-y-24 relative z-10">
            {/* 2005 - Left/Right */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full pl-12 md:pl-0">
              <div className="md:w-5/12 order-2 md:order-1 text-left md:text-right p-4">
                <h3 className="text-2xl font-bold text-primary">2005</h3>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                  Inception
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Rex Executive Search is founded in Lagos with a team of 3.
                </p>
              </div>
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-gray-900 shadow order-1 md:order-2 z-10"></div>
              <div className="md:w-5/12 order-3 md:order-3"></div>
            </div>

            {/* 2010 - Right/Left */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full pl-12 md:pl-0">
              <div className="md:w-5/12 order-3 md:order-1"></div>
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-accent-charcoal border-4 border-white dark:border-gray-900 shadow order-1 md:order-2 z-10"></div>
              <div className="md:w-5/12 order-2 md:order-3 text-left p-4">
                <h3 className="text-2xl font-bold text-accent-charcoal dark:text-gray-400">
                  2010
                </h3>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                  First Multinational Partner
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Secured exclusive recruitment contract with a global beverage
                  giant.
                </p>
              </div>
            </div>

            {/* 2015 - Left/Right */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full pl-12 md:pl-0">
              <div className="md:w-5/12 order-2 md:order-1 text-left md:text-right p-4">
                <h3 className="text-2xl font-bold text-primary">2015</h3>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                  Pan-African Expansion
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Opened offices in Accra and Nairobi to serve the wider region.
                </p>
              </div>
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-gray-900 shadow order-1 md:order-2 z-10"></div>
              <div className="md:w-5/12 order-3 md:order-3"></div>
            </div>

            {/* 2024 - Right/Left */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full pl-12 md:pl-0">
              <div className="md:w-5/12 order-3 md:order-1"></div>
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-accent-charcoal border-4 border-white dark:border-gray-900 shadow order-1 md:order-2 z-10"></div>
              <div className="md:w-5/12 order-2 md:order-3 text-left p-4">
                <h3 className="text-2xl font-bold text-accent-charcoal dark:text-gray-400">
                  2024
                </h3>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                  Digital Transformation
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Launch of AI-driven talent mapping tools for faster
                  placements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
