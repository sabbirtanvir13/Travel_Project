import React from "react";

const trendingDestinations = [
  {
    title: "Cox’s Bazar",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    desc: "World’s longest sea beach with stunning sunsets.",
  },
  {
    title: "Sajek Valley",
    img: "https://images.unsplash.com/photo-1554948949-64b1e776c2f0?auto=format&fit=crop&w=1200&q=80",
    desc: "Experience the clouds and peaceful tribal lifestyle.",
  },
  {
    title: "Saint Martin",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    desc: "Tropical island with crystal-blue water.",
  },
];

export default function TrendingDestinations() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 space-y-12">
      <h2 className="text-4xl font-bold text-center mb-8">🔥 Trending Destinations</h2>

      <div className="space-y-8">
        {trendingDestinations.map((dest, i) => (
          <div
            key={i}
            className="relative h-80 rounded-xl overflow-hidden group"
          >
            <img
              src={dest.img}
              alt={dest.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center px-6 sm:px-12 lg:px-24 text-white">
              <h3 className="text-3xl font-extrabold mb-2 drop-shadow-lg">{dest.title}</h3>
              <p className="text-lg mb-4 drop-shadow-md">{dest.desc}</p>
              <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition w-max">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
