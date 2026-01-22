import Link from "next/link";
import Image from "next/image";

export default function AboutHero() {
  return (
    <header className="relative overflow-hidden h-[85vh] min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Modern Lagos business district office"
          className="w-full h-full object-cover"
          src="/default-image.svg"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-semibold text-white tracking-wide uppercase">
              About Us
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight mb-6">
            Building Legacies <br />
            <span className="text-primary">Since 2005</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl font-light">
            Connecting exceptional talent with forward-thinking FMCG organizations
            across Africa.
          </p>
        </div>
      </div>
    </header>
  );
}
