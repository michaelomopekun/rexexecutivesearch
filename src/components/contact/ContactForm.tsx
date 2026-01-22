import Link from "next/link";
import SocialIcons from "../Home/social_icons";

export default function ContactForm() {
  return (
    <section className="py-12 lg:py-20 bg-background-light dark:bg-surface-dark relative">
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <svg
          className="w-full h-full"
          height="100%"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              height="24"
              id="content-pill-pattern"
              patternUnits="userSpaceOnUse"
              width="24"
              x="0"
              y="0"
            >
              <rect
                className="text-accent-charcoal dark:text-white fill-current"
                height="4"
                rx="2"
                width="8"
                x="8"
                y="10"
              ></rect>
            </pattern>
          </defs>
          <rect
            fill="url(#content-pill-pattern)"
            height="100%"
            width="100%"
          ></rect>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 p-8 lg:p-12 xl:p-16">
              <h2 className="text-3xl font-display font-bold text-accent-charcoal dark:text-white mb-8">
                Send us a Message
              </h2>
              <form action="#" className="space-y-6" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                      htmlFor="company"
                    >
                      Company Name
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                      id="company"
                      name="company"
                      placeholder="Company Ltd."
                      type="text"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                      id="email"
                      name="email"
                      placeholder="john@company.com"
                      type="email"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                      id="phone"
                      name="phone"
                      placeholder="+234 ..."
                      type="tel"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="inquiry"
                  >
                    Reason for Inquiry
                  </label>
                  <div className="relative">
                    <select
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none dark:text-white cursor-pointer"
                      id="inquiry"
                      name="inquiry"
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select an option
                      </option>
                      <option value="hiring">Hiring Talent</option>
                      <option value="executive">Executive Search</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white resize-none"
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={4}
                  ></textarea>
                </div>
                <div className="pt-4">
                  <button
                    className="w-full md:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center"
                    type="submit"
                  >
                    Send Message
                    <span className="material-symbols-outlined ml-2 text-sm">
                      send
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:col-span-2 bg-accent-charcoal dark:bg-gray-900 text-white p-8 lg:p-12 xl:p-16 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-40 h-40 rounded-full bg-primary/20 pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold mb-8">
                  Contact Information
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 backdrop-blur-sm">
                      <span className="material-symbols-outlined text-primary">
                        location_on
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">
                        Office Address
                      </p>
                      <p className="text-lg leading-snug">
                        14, Abayomi Street,
                        <br />
                        Akoka, Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 backdrop-blur-sm">
                      <span className="material-symbols-outlined text-primary">
                        phone_in_talk
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">
                        Phone
                      </p>
                      <p className="text-lg leading-snug">
                        +234 912 568 9905
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        Mon-Fri, 9am - 5pm WAT
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 backdrop-blur-sm">
                      <span className="material-symbols-outlined text-primary">
                        mail
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">
                        Email
                      </p>
                      <a
                        className="text-lg leading-snug hover:text-primary transition-colors break-all"
                        href="mailto:info@rexexecutivesearch.com" target="_blank" rel="noopener noreferrer"
                      >
                        info@rexexecutivesearch.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 backdrop-blur-sm">
                      <svg
                        className="w-6 h-6 text-primary fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.9 7.03 8.48 7.03 9.65C7.03 10.82 7.88 11.96 8 12.12C8.12 12.27 9.63 14.6 11.93 15.59C13.85 16.41 14.24 16.23 14.66 16.19C15.08 16.14 16.03 15.62 16.23 15.07C16.43 14.52 16.43 14.05 16.37 13.95C16.31 13.85 16.16 13.79 15.93 13.68C15.7 13.56 14.58 13 14.36 12.89C14.15 12.78 13.99 12.73 13.84 12.96C13.68 13.19 13.23 13.73 13.09 13.89C12.95 14.05 12.81 14.07 12.58 13.96C12.35 13.85 11.61 13.6 10.74 12.83C10.05 12.21 9.59 11.45 9.46 11.23C9.33 11 9.45 10.89 9.56 10.77C9.67 10.67 9.8 10.5 9.92 10.36C10.04 10.22 10.08 10.12 10.16 9.96C10.24 9.8 10.2 9.66 10.14 9.54C10.08 9.42 9.63 8.3 9.44 7.85C9.25 7.4 9.07 7.46 8.93 7.45C8.81 7.45 8.67 7.45 8.53 7.33Z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">
                        WhatsApp
                      </p>
                      <p className="text-lg leading-snug">+234 912 568 9905</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                <p className="text-gray-400 mb-4 text-sm">
                  Follow our social channels
                </p>
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start">
            <span className="material-symbols-outlined text-primary mr-4 mt-1">
              schedule
            </span>
            <div>
              <h4 className="font-bold text-accent-charcoal dark:text-white mb-1">
                Response Time
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We aim to respond to all inquiries within 24 business hours.
                Urgent executive placements are prioritized.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start">
            <span className="material-symbols-outlined text-primary mr-4 mt-1">
              lock
            </span>
            <div>
              <h4 className="font-bold text-accent-charcoal dark:text-white mb-1">
                Strict Confidentiality
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All communications and shared data are treated with the highest
                level of confidentiality and discretion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
