import Image from "next/image";

export default function Team() {
  return (
    <section
      className="py-24 bg-white dark:bg-background-dark bg-pill-grid"
      id="team"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mt-2">
            Leadership Team
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Member 1: CEO */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-6 h-80 bg-gray-200 shadow-md">
              <Image
                alt="CEO"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="/default-image.svg"
                fill
                style={{
                  objectPosition: "50% 20%",
                  filter: "grayscale(100%) contrast(1.2)",
                  opacity: 0.9,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <span className="block font-bold">Amosu Olayinka Festus</span>
                  <span className="text-xs uppercase tracking-wider text-primary">
                    Connect on LinkedIn
                  </span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Amosu Olayinka Festus
            </h3>
            <p className="text-primary font-medium text-sm mb-3">
              Founder & CEO
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              With over ? years in HR consulting, Olayinka steers the
              strategic vision of Rex.
            </p>
          </div>

          {/* Member 2: Ops */}
          {/* <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-6 h-80 bg-gray-200 shadow-md">
              <Image
                alt="Director"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="/default-image.svg"
                fill
                style={{
                  objectPosition: "20% 50%",
                  filter: "grayscale(100%) contrast(1.2)",
                  opacity: 0.9,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <span className="block font-bold">Chioma Nnaji</span>
                  <span className="text-xs uppercase tracking-wider text-primary">
                    Connect on LinkedIn
                  </span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Chioma Nnaji
            </h3>
            <p className="text-primary font-medium text-sm mb-3">
              Director of Operations
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Chioma ensures operational excellence and oversees our rigorous
              vetting processes.
            </p>
          </div> */}

          {/* Member 3: Talent */}
          {/* <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-6 h-80 bg-gray-200 shadow-md">
              <Image
                alt="Head of Talent"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="/default-image.svg"
                fill
                style={{
                  objectPosition: "50% 50%",
                  filter: "grayscale(100%) contrast(1.2)",
                  opacity: 0.9,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <span className="block font-bold">David Okafor</span>
                  <span className="text-xs uppercase tracking-wider text-primary">
                    Connect on LinkedIn
                  </span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              David Okafor
            </h3>
            <p className="text-primary font-medium text-sm mb-3">
              Head of Talent Mapping
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              David leads our market intelligence unit, identifying trends
              before they emerge.
            </p>
          </div> */}

          {/* Member 4: Regional */}
          {/* <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-6 h-80 bg-gray-200 shadow-md">
              <Image
                alt="Regional Manager"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="/default-image.svg"
                fill
                style={{
                  objectPosition: "50% 50%",
                  filter: "grayscale(100%) contrast(1.2)",
                  opacity: 0.9,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <span className="block font-bold">Sarah Mensah</span>
                  <span className="text-xs uppercase tracking-wider text-primary">
                    Connect on LinkedIn
                  </span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Sarah Mensah
            </h3>
            <p className="text-primary font-medium text-sm mb-3">
              Regional Manager, West Africa
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Sarah manages key client relationships across Ghana and Ivory
              Coast.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
