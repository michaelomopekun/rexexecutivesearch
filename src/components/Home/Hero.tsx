import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (

    <header className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Modern corporate meeting discussing strategy"
          className="w-full h-full object-cover"
          src="/thoughtful-african-american-woman-shopping-grocery-store.jpg"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/95 via-accent-blue/80 to-transparent dark:from-background-dark/95 dark:via-background-dark/85 dark:to-background-dark/40"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-semibold text-white tracking-wide uppercase">
              Premier FMCG Recruitment
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-white leading-tight mb-6">
            Connecting <span className="text-primary">Top Talent</span> with
            Leading FMCG Brands.
          </h1>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
            Your specialist growth and productivity partner. We identify and
            place exceptional leaders who drive innovation in the fast-moving
            consumer goods sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-DEFAULT text-white bg-primary hover:bg-primary-dark transition-all shadow-lg hover:shadow-red-500/40"
              href="/contact"
            >
              Find Talent
              <span className="material-icons-outlined ml-2">
                arrow_forward
              </span>
            </Link>
            <Link
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/30 hover:border-white text-base font-bold rounded-DEFAULT text-white hover:bg-white/10 transition-all backdrop-blur-sm"
              href="/sectors"
            >
              Explore Sectors
            </Link>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 right-0 w-1/3 h-24 bg-background-light dark:bg-background-dark hidden lg:block bg-pill-grid"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
      ></div>
    </header>

  );
}
