"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div
        className="w-full h-[500px] lg:h-[600px] bg-cover bg-center rounded-xl shadow-lg"
        style={{
          backgroundImage:
            "url('https://www.nationalgeographic.com/content/dam/expeditions/get-inspired/hero-get-inspired-23.jpg')",
        }}
      ></div>

      {/* Overlay Text */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-start pt-12 lg:pt-16 px-6 lg:px-16 text-white">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-3">
          Discover Your Next Great Adventure
        </h1>
        <p className="text-lg lg:text-xl mb-4 max-w-xl">
          Hand-picked travel packages to the most stunning destinations around the world.
        </p>
        <div className="flex gap-4">
          <a
            href="/packages"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Explore Packages
          </a>
          <a
            href="/contact"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
