import Link from "next/link";
import SocialIcons from "./social_icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link className="flex flex-col mb-6" href="#">
              <span className="text-3xl font-display font-extrabold text-white tracking-tighter leading-none">
                REX
              </span>
              <span className="text-xs font-display font-bold text-gray-400 tracking-[0.2em] leading-none mt-1">
                EXECUTIVE SEARCH
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Specialist recruitment agency focused on delivering high-impact
              leadership to the FMCG sector across Africa.
            </p>
            <SocialIcons />
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/sectors"
                >
                  Sectors
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/services"
                >
                  Services
                </Link>
              </li>
              {/* <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Job Board
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <span className="material-icons-outlined text-primary mr-3 text-lg">
                  location_on
                </span>
                <span>
                  14, Abayomi Street,
                  <br />
                 Akoka, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center">
                <span className="material-icons-outlined text-primary mr-3 text-lg">
                  phone
                </span>
                <span>+234 912 568 9905</span>
              </li>
              <li className="flex items-center">
                <span className="material-icons-outlined text-primary mr-3 text-lg">
                  email
                </span>
                <span>info@rexexecutivesearch.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Stay updated with the latest FMCG market trends and job
              opportunities.
            </p>
            <form className="flex flex-col gap-2">
              <input
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm placeholder-gray-500"
                placeholder="Your email address"
                type="email"
                required
              />
              <button
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded font-semibold text-sm transition-colors"
                type="button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Rex Executive Search. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
