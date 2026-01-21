import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-24 bg-white dark:bg-background-dark bg-pill-pattern relative">
      <div className="absolute inset-0 bg-white/90 dark:bg-background-dark/95 z-0"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
          Ready to Find Your Next Leader?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Secure the talent that will drive your organization forward. Let's
          discuss your executive hiring needs in a confidential consultation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            className="inline-flex justify-center items-center px-10 py-5 border border-transparent text-lg font-bold rounded-DEFAULT text-white bg-primary hover:bg-primary-dark transition-all shadow-xl hover:shadow-red-500/40 transform hover:-translate-y-1"
            href="#contact"
          >
            Consult with our Experts
          </Link>
          <Link
            className="inline-flex justify-center items-center px-10 py-5 border-2 border-gray-200 dark:border-gray-700 text-lg font-bold rounded-DEFAULT text-gray-700 dark:text-white hover:border-primary hover:text-primary transition-all bg-white/50 dark:bg-transparent backdrop-blur-sm"
            href="#"
          >
            Download Brochure
          </Link>
        </div>
      </div>
    </section>
  );
}
