export default function ContactHero() {
  return (
    <section className="relative pt-48 pb-24 lg:pt-56 lg:pb-32 overflow-hidden bg-white dark:bg-background-dark">
      <div className="absolute inset-0 z-0 opacity-5">
        <svg
          className="w-full h-full"
          height="100%"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              height="24"
              id="hero-pill-pattern"
              patternUnits="userSpaceOnUse"
              width="24"
              x="0"
              y="0"
            >
              <rect
                className="text-accent-charcoal fill-current"
                height="4"
                rx="2"
                width="8"
                x="8"
                y="10"
              ></rect>
            </pattern>
          </defs>
          <rect fill="url(#hero-pill-pattern)" height="100%" width="100%"></rect>
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold tracking-wider uppercase text-xs mb-6">
          Connect With Us
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-accent-charcoal dark:text-white leading-tight mb-6">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Ready to transform your leadership team or take the next step in your
          career? Start a partnership with Rex Executive Search today.
        </p>
      </div>
    </section>
  );
}
