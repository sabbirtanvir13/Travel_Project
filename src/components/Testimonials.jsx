"use client";

import React from "react";

const testimonials = [
  { name: "Alice", text: "Best travel experience ever!", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Bob", text: "Amazing service and beautiful destinations.", img: "https://randomuser.me/api/portraits/men/34.jpg" },
  { name: "Charlie", text: "Highly recommend for adventure seekers!", img: "https://randomuser.me/api/portraits/men/55.jpg" },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 lg:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">What Our Travelers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center">
            {/* Avatar */}
            <img
              src={t.img}
              alt={t.name}
              className="w-20 h-20 rounded-full mb-4 object-cover shadow-md"
            />
            <p className="mb-4">"{t.text}"</p>
            <p className="font-bold">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
