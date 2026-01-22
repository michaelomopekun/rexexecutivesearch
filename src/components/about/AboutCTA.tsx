import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-20 bg-accent-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg
          className="h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path d="M0 100 L100 0 L100 100 Z" fill="white"></path>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
          Ready to Shape the Future?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Whether you're looking for your next leadership role or seeking the
          talent to drive your business forward, we are here to help.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-primary hover:bg-primary-dark transition-all shadow-lg hover:shadow-red-500/40 transform hover:-translate-y-1"
            href="#contact"
          >
            I am a Client
            <span className="material-icons-outlined ml-2">
              business_center
            </span>
          </Link>
          <Link
            className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/30 hover:border-white text-base font-bold rounded-full text-white hover:bg-white/10 transition-all backdrop-blur-sm transform hover:-translate-y-1"
            href="#contact"
          >
            I am a Candidate
            <span className="material-icons-outlined ml-2">person</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
