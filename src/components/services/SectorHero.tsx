import Link from "next/link";
import Image from "next/image";

export default function SectorHero() {
  return (
    <header className="relative overflow-hidden h-[85vh] min-h-[600px]">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Boardroom executive meeting"
          className="w-full h-full object-cover"
          src="/thoughtful-african-american-woman-shopping-grocery-store.jpg"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/90 via-accent-blue/70 to-transparent dark:from-background-dark/95 dark:via-background-dark/85 dark:to-background-dark/40"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-4xl pt-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-semibold text-white tracking-wide uppercase">
              C-Suite & Board Level Recruitment
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight mb-6">
            Executive Search & <br />{" "}
            <span className="text-primary">Leadership Placement</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-3xl font-light">
            Our rigorous headhunting process identifies and secures visionary
            leaders. We specialize in C-suite and director-level talent
            acquisition for the FMCG sector, ensuring your organization is led
            by the best in the industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-DEFAULT text-white bg-primary hover:bg-primary-dark transition-all shadow-lg hover:shadow-red-500/40"
              href="/contact"
            >
              Start Your Search
              <span className="material-icons-outlined ml-2">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
