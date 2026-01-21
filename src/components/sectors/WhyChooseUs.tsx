import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background-light dark:bg-surface-dark relative overflow-hidden bg-pill-pattern">
      <div className="absolute inset-0 bg-background-light/90 dark:bg-surface-dark/95 z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/50 dark:bg-gray-800/20 -skew-x-12 transform origin-top-right z-0 backdrop-blur-[2px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mt-2 mb-8 leading-tight">
              Precision, Discretion, and{" "}
              <span className="text-primary">Industry Authority</span>.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Executive search requires a different caliber of approach. We
              don't just fill vacancies; we secure the future leadership of your
              company through a partner-led process defined by trust and
              results.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    lock
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    Confidentiality & Discretion
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    We operate with the utmost sensitivity, protecting your
                    brand and the privacy of candidates throughout the search.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-blue/10 flex items-center justify-center mr-4 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-accent-blue dark:text-white text-2xl">
                    public
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    Global Network of Top Leaders
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Access to an exclusive pool of high-caliber executives
                    across international markets, not visible on public job
                    boards.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    factory
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    Deep FMCG Industry Insight
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Our specialization means we understand the specific nuances
                    of FMCG leadership, from supply chain complexities to market
                    agility.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-accent-blue opacity-20 blur-2xl rounded-xl"></div>
            <div className="relative w-full h-[500px]">
               <Image
                alt="Executive handshake"
                className="rounded-xl shadow-2xl object-cover border border-white/20"
                src="/default-image.svg"
                fill
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border-l-4 border-primary max-w-xs hidden md:block">
              <p className="italic text-gray-600 dark:text-gray-300 text-sm mb-4">
                "Rex Executive Search delivered a CEO who transformed our
                operations within 6 months. Their insight is unmatched."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 overflow-hidden relative">
                   <Image
                    alt="Client"
                    src="/default-image.svg"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">
                    Regional Director
                  </p>
                  <p className="text-xs text-gray-500">Global Beverage Co.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
