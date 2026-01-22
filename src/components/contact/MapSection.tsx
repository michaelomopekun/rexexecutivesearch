export default function MapSection() {
  return (
    <section className="w-full h-96 relative bg-gray-200">
      <iframe
        allowFullScreen
        height="100%"
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1287959048384!2d3.3867623!3d6.5053535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cf6b4b44585%3A0x6b8b8b8b8b8b8b8b!2s14%20Abayomi%20St%2C%20Akoka%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
        style={{
          border: 0,
          filter: "grayscale(1) contrast(1.2) opacity(0.8)",
        }}
        width="100%"
        title="Rex Executive Search Location"
      ></iframe>
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="relative -mt-8">
          <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute top-10 left-3 opacity-75"></div>
          <span className="material-symbols-outlined text-5xl text-primary drop-shadow-2xl">
            location_on
          </span>
        </div>
      </div>
    </section>
  );
}
