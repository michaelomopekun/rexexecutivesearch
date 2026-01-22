import Image from "next/image";

export default function Story() {
  return (
    <section
      className="py-24 bg-white dark:bg-background-dark bg-pill-grid relative"
      id="story"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-8">
              Deep Roots in FMCG Excellence
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                Established in 2005, Rex Executive Search began with a singular
                vision: to address the critical leadership gap in Africa's
                burgeoning Fast-Moving Consumer Goods sector. What started as a
                boutique agency in Lagos has grown into a pan-African
                powerhouse.
              </p>
              <p>
                We don't just fill vacancies; we understand the pulse of the
                market. From supply chain complexities to evolving consumer
                behaviors, our expertise allows us to identify leaders who don't
                just fit the role but shape the future of the organization.
              </p>
              <p>
                Over the last two decades, we have partnered with multinational
                giants and indigenous conglomerates alike, building a reputation
                for discretion, precision, and an unwavering commitment to
                quality.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary rounded-xl z-0 hidden lg:block"></div>
            <div className="relative z-10 w-full h-[500px]">
              <Image
                alt="Rex Executive Search Team"
                className="rounded-xl shadow-2xl object-cover"
                src="/default-image.svg"
                fill
              />
            </div>
            <div className="absolute bottom-8 left-8 z-20 bg-white/95 dark:bg-gray-800/95 p-6 rounded-lg shadow-lg max-w-xs backdrop-blur-sm border-l-4 border-primary">
              <p className="font-display font-bold text-primary text-4xl mb-1">
                19+
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wide">
                Years of dedicated service to the industry
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
