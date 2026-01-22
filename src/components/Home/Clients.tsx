export default function Clients() {
  return (
    <section className="py-16 bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800 bg-pill-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-60">
          <div className="h-10 text-gray-500 dark:text-gray-400 font-display font-bold text-2xl flex items-center">
            NESTLE
          </div>
          <div className="h-10 text-gray-500 dark:text-gray-400 font-display font-bold text-2xl flex items-center">
            UNILEVER
          </div>
          <div className="h-10 text-gray-500 dark:text-gray-400 font-display font-bold text-2xl flex items-center">
            DIAGEO
          </div>
          <div className="h-10 text-gray-500 dark:text-gray-400 font-display font-bold text-2xl flex items-center">
            COCA-COLA
          </div>
          <div className="h-10 text-gray-500 dark:text-gray-400 font-display font-bold text-2xl flex items-center">
            P&G
          </div>
        </div>
      </div>
    </section>
  );
}
