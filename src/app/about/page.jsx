import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 items-center">
        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
            alt="Travel Team"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are passionate about creating unforgettable travel experiences. 
            Our team handpicks destinations, designs custom packages, and ensures 
            every journey is seamless and memorable. From tropical beaches to 
            cultural adventures, we make your travel dreams come true.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            With years of experience, we prioritize customer satisfaction and 
            quality service. Our guides, local partners, and support team work 
            tirelessly to provide the best travel experience.
          </p>
          <button className="mt-4 w-48 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Mission / Values Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl text-black font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To make travel accessible, safe, and inspiring for everyone.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl text-black font-bold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted travel partner, delivering unforgettable memories.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl text-black font-bold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Passion, Integrity, Excellence, and Customer Delight in every trip.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
