"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 lg:p-6 pointer-events-none">
      <div className="pointer-events-auto max-w-7xl mx-auto bg-white/50 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl px-4 sm:px-6 lg:px-8 transition-all duration-300">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link className="flex flex-col" href="#">
              <span className="text-3xl font-display font-extrabold text-primary tracking-tighter leading-none">
                REX
              </span>
              <span className="text-xs font-display hover:text-primary font-bold text-gray-100 tracking-[0.2em] leading-none mt-1">
                EXECUTIVE SEARCH
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              className="text-black hover:text-primary font-medium text-sm transition-colors"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-black hover:text-primary font-medium text-sm transition-colors"
              href="#sectors"
            >
              Sectors
            </Link>
            <Link
              className="text-black hover:text-primary font-medium text-sm transition-colors"
              href="#services"
            >
              Services
            </Link>
            <Link
              className="text-black hover:text-primary font-medium text-sm transition-colors"
              href="#about"
            >
              About Us
            </Link>
            <Link
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-DEFAULT font-semibold transition-colors shadow-lg shadow-red-500/30"
              href="#contact"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              className="text-gray-300 hover:text-white focus:outline-none"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-icons-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Dropdown (Optional implementation based on HTML capability implies JS was needed) */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden absolute top-24 left-4 right-4 bg-accent-blue/95 dark:bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl p-4 transition-all duration-300">
          <div className="flex flex-col space-y-4">
             <Link
              className="text-black hover:text-primary font-medium text-sm transition-colors"
              href="#"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="text-black hover:text-primary font-medium text-sm transition-colors"
              href="#sectors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sectors
            </Link>
            <Link
              className="text-black hover:text-primary font-medium text-sm transition-colors"
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              className="text-black hover:text-primary font-medium text-sm transition-colors"
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-DEFAULT font-semibold transition-colors shadow-lg shadow-red-500/30 text-center"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
