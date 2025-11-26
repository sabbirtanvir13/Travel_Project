import React from "react";

const inspirations = [
  {
    title: "Adventure Trails",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cultural Discoveries",
    img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Food & Lifestyle",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
];

export default function TravelInspirations() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">🌍 Travel Inspirations</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {inspirations.map((insp, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={insp.img}
              alt={insp.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
              <h3 className="text-lg font-bold text-white drop-shadow">
                {insp.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
