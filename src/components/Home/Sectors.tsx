import Image from "next/image";

export default function Sectors() {
  return (
    <section className="py-24 bg-white dark:bg-background-dark" id="sectors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">
            Focus Areas
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mt-2">
            Our Core Sectors
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative group overflow-hidden rounded-xl h-80 shadow-lg cursor-pointer">
            <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110 relative">
               <Image
                alt="Agro-Allied"
                className="object-cover"
                src="/Agro-Allied.jpg"
                fill
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full z-10">
              <div className="bg-primary w-10 h-10 rounded flex items-center justify-center mb-3">
                <span className="material-icons-outlined text-white">
                  agriculture
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Agro-Allied Industry
              </h3>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                Processing, logistics, and raw materials sourcing.
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl h-80 shadow-lg cursor-pointer">
             <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110 relative">
               <Image
                alt="Food & Drinks"
                className="object-cover"
                src="/default-image.svg"
                fill
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full z-10">
              <div className="bg-primary w-10 h-10 rounded flex items-center justify-center mb-3">
                <span className="material-icons-outlined text-white">
                  restaurant_menu
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Food & Drinks Production
              </h3>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                Manufacturing, quality assurance, and distribution.
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl h-80 shadow-lg cursor-pointer">
             <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110 relative">
               <Image
                alt="Consumer Goods"
                className="object-cover"
                src="/default-image.svg"
                fill
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full z-10">
              <div className="bg-primary w-10 h-10 rounded flex items-center justify-center mb-3">
                <span className="material-icons-outlined text-white">
                  inventory_2
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Non-Food Consumer Goods
              </h3>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                Personal care, home care, and packaging.
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl h-80 shadow-lg cursor-pointer">
             <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110 relative">
               <Image
                alt="Retail"
                className="object-cover"
                src="/default-image.svg"
                fill
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full z-10">
              <div className="bg-primary w-10 h-10 rounded flex items-center justify-center mb-3">
                <span className="material-icons-outlined text-white">
                  storefront
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Retail</h3>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                Operations, merchandising, and store management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
