import Link from "next/link";

export default function SectorCTA() {
  return (
    <section className="relative py-24 bg-secondary overflow-hidden ">
      <div className="absolute inset-0 opacity-5">
        <svg
          className="h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path d="M0 100 L100 0 L100 100 Z" fill="white"></path>
        </svg>
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
          Need specialized talent?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Connect with our sector specialists today to discuss your hiring needs
          and access our premium talent pool.
        </p>
        <Link
          className="inline-flex items-center px-10 py-4 bg-primary text-white text-lg font-bold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          href="/#contact"
        >
          Get in Touch
          <span className="material-icons-outlined ml-2">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
}
