"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  "/slide1.jpg",
  "/slide2.jpg",
  "/slide3.jpg",
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-zinc-50 dark:bg-black">

      {/* ✅ HEADER */}
      <header className="w-full flex items-center justify-between px-10 py-4 bg-white dark:bg-black shadow">
        <h1 className="text-xl font-bold">BoldStride</h1>
        <nav className="flex gap-6 text-sm">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* ✅ BANNER / HERO */}
      <section className="w-full h-[400px] flex items-center justify-center bg-gradient-to-r from-black to-gray-800 text-white text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Elevate Your Style with BoldStride
          </h1>
          <p className="text-lg mb-6">
            Premium fashion designed for confidence & comfort
          </p>
          <button className="px-6 py-3 bg-white text-black rounded-full font-semibold">
            Shop Now
          </button>
        </div>
      </section>

      {/* ✅ SLIDER */}
      <section className="w-full py-16 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6">Featured Collection</h2>

        <div className="relative w-[90%] max-w-3xl h-[300px] overflow-hidden rounded-xl">
          {slides.map((slide, index) => (
            <Image
              key={index}
              src={slide}
              alt={`Slide ${index}`}
              fill
              className={`object-cover transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ✅ FOOTER */}
      <footer className="mt-auto w-full bg-black text-white py-8 px-10 text-center">
        <h2 className="text-lg font-semibold mb-2">BoldStride</h2>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} BoldStride. All rights reserved.
        </p>
      </footer>
    </div>
  );
}