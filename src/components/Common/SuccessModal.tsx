import Link from 'next/link';
import React from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  title = "Message Sent Successfully!",
  message = "Thank you for reaching out. One of our executive search consultants will be in touch within 24 hours.",
  buttonText = "Back to Home",
  buttonHref = "/"
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-white/50 dark:border-gray-700 transform transition-all animate-fade-in-up">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30 ring-4 ring-emerald-500/20">
          <span
            className="material-symbols-outlined text-5xl text-white"
            style={{ fontVariationSettings: "'wght' 700" }}
          >
            check
          </span>
        </div>
        <h2 className="mb-3 text-2xl font-display font-extrabold text-gray-800 dark:text-white md:text-3xl">
          {title}
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          {message}
        </p>
        <Link
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-primary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          href={buttonHref}
          onClick={onClose}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
