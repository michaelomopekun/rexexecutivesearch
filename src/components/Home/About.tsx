import Image from "next/image";

export default function About() {
  return (
    <section
      className="relative py-24 bg-accent-blue dark:bg-gray-900 text-white overflow-hidden"
      id="about"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            height="40"
            id="grid"
            patternUnits="userSpaceOnUse"
            width="40"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="white"
              strokeWidth="1"
            ></path>
          </pattern>
          <rect fill="url(#grid)" height="100%" width="100%"></rect>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Building Legacies <br />
              Since 2005.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At Rex Executive Search, we believe that people are the cornerstone
              of any successful FMCG enterprise. For nearly two decades, we have
              been the silent partner behind the success stories of major brands
              across Africa.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Our mission is simple yet ambitious: to be the most trusted
              recruitment partner in the sector, bridging the gap between
              exceptional talent and forward-thinking organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 mt-8 border-t border-white/20 pt-8">
              <div>
                <span className="block text-4xl font-extrabold text-primary">
                  18+
                </span>
                <span className="text-sm text-gray-400 uppercase tracking-wider">
                  Years Experience
                </span>
              </div>
              <div>
                <span className="block text-4xl font-extrabold text-primary">
                  500+
                </span>
                <span className="text-sm text-gray-400 uppercase tracking-wider">
                  Placements
                </span>
              </div>
              <div>
                <span className="block text-4xl font-extrabold text-primary">
                  98%
                </span>
                <span className="text-sm text-gray-400 uppercase tracking-wider">
                  Retention Rate
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-lg"></div>
            <div className="relative w-full h-[400px]">
                 <Image
                    alt="Team collaborating"
                    className="rounded-xl shadow-2xl object-cover"
                    src="/default-image.svg"
                    fill
                 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
