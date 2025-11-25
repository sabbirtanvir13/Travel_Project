import React from 'react';
const packages = [
  { title: "Cox’s Bazar Trip", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e2/f8/43/longest-sea-beach-in.jpg?w=1100&h=1100&s=1", price: "$200" },

  { title: "Saint Martin Island", img: "https://www.travelweek.ca/wp-content/uploads/2024/03/Saint-Martin_03.27_main.jpg", price: "$250" },

  { title: "Nepal Adventure", img: "https://media.nepaltrekadventures.com/uploads/package/bungee-jumping.webp", price: "$300" },

  { title: "Thailand Tour", img: "https://img.freepik.com/free-photo/landmark-pagoda-doi-inthanon-national-park-chiang-mai-thailand_335224-779.jpg?semt=ais_hybrid&w=740&q=80", price: "$500" },
];
const FeaturedPackages = () => {
    return (
        <section className="py-16 px-6 lg:px-16 bg-base-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition transform"
          >
            <img src={pkg.img} alt={pkg.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{pkg.title}</h3>
              <p className="mt-2 font-bold">{pkg.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
};

export default FeaturedPackages;