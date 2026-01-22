import Image from "next/image";

interface SectorBlockProps {
  number: string;
  title: string;
  description: string;
  roles: string[];
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean; // If true, image is on the right
  bgColorClass?: string;
  borderColorClass?: string;
  bgClass?: string;
}

export default function SectorBlock({
  number,
  title,
  description,
  roles,
  imageSrc,
  imageAlt,
  isReversed = false,
  bgColorClass = "bg-white",
  borderColorClass = "border-gray-100",
  bgClass = "",
}: SectorBlockProps) {
  return (
    <section className={`py-24 border-b ${borderColorClass} ${bgColorClass} ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div
            className={`relative group ${
              isReversed ? "order-1 lg:order-2" : "order-2 lg:order-1"
            }`}
          >
            <div
              className={`absolute -inset-4 bg-primary/5 rounded-3xl transform transition-transform duration-500 ${
                isReversed
                  ? "rotate-2 group-hover:rotate-3"
                  : "-rotate-2 group-hover:-rotate-3"
              }`}
            ></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <Image
                 alt={imageAlt}
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
                 src="/default-image.svg"
                 fill
               />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
            </div>
          </div>

          {/* Text Column */}
          <div
            className={`${
              isReversed ? "order-2 lg:order-1" : "order-1 lg:order-2"
            }`}
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-12 h-1 bg-primary rounded-full"></span>
              <span className="text-primary font-bold uppercase text-sm tracking-widest">
                {number}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">
              {title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {description}
            </p>
            <div
              className={`${
                bgColorClass === "bg-surface-light" ? "bg-white" : "bg-gray-50"
              } p-8 rounded-2xl border border-gray-100 ${bgColorClass === "bg-surface-light" ? "shadow-sm" : ""}`}
            >
              <h3 className="text-lg font-bold text-secondary mb-4 border-b border-gray-200 pb-2">
                Key Roles We Recruit
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {roles.map((role, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-700 font-medium"
                  >
                    <span className="material-icons-outlined text-primary mr-3 text-sm">
                      double_arrow
                    </span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
