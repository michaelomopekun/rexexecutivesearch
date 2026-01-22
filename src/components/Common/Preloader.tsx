"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFading(true);
      // Wait for fade out animation to complete before removing from DOM
      setTimeout(() => {
        setLoading(false);
      }, 500); // 500ms matches the duration-500 class
    };

    // Check if document is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background-light dark:bg-background-dark transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="w-full h-full bg-pill-grid bg-repeat animate-slow-zoom origin-center opacity-60 dark:opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-light/80 to-transparent dark:from-background-dark/80 z-0"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg p-8">
        <div className="flex flex-col items-start mb-12 animate-logo-pulse select-none transform transition-transform duration-500 hover:scale-105 cursor-default">
          <h1 className="text-7xl md:text-8xl font-extrabold text-primary leading-[0.85] tracking-tight font-display">
            Rex
          </h1>
          <div className="w-full">
            <span className="block text-4xl md:text-5xl text-gray-600 dark:text-gray-300 font-normal tracking-tight -mt-1 md:-mt-2 font-display">
              executive
            </span>
          </div>
          <div className="w-full flex justify-end -mt-1">
            <span className="text-3xl md:text-4xl font-bold text-primary tracking-widest uppercase font-display">
              SEARCH
            </span>
          </div>
        </div>
        
        <div className="w-64 md:w-80 h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden shadow-sm relative">
          <div className="absolute top-0 bottom-0 left-0 bg-primary h-full rounded-full animate-load-progress shadow-[0_0_10px_rgba(178,30,41,0.5)]"></div>
        </div>
        
        <p className="mt-4 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest animate-pulse font-display">
          Loading Resources
        </p>
      </div>
    </div>
  );
}
