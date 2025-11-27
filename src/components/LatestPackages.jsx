"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const LatestPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("https://travelbackend-three.vercel.app/latest-packages")
      .then((res) => res.json())
      .then((data) => setPackages(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-12 px-4 lg:px-16 bg-gray-50">
      <h1 className="text-3xl font-bold mb-10 text-center">Latest Packages</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition border"
          >

            <img
              src={pkg.img}
              alt={pkg.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold text-black mb-2">{pkg.title}</h2>

              <p className="text-black text-sm line-clamp-2 mb-3">
                {pkg.shortDescription.length > 80
                  ? pkg.shortDescription.slice(0, 80) + "..."
                  : pkg.shortDescription}
              </p>

          
              <div className="text-gray-500 text-sm mb-3 space-y-1">
                <p>Date :<span className="font-medium">{new Date(pkg.date).toLocaleDateString()}</span></p>
                <p> location: {pkg.location}</p>
                <p> Priority: {pkg.priority}</p>
              </div>

              <p className="text-lg font-bold text-blue-600 mb-4">
                {pkg.price}
              </p>

             <Link
                   href={`/travel/${pkg._id}`} 
                   className="btn btn-sm mt-2 bg-blue-500 hover:bg-blue-600 text-white"
                 >
                   View Details
                 </Link>
            </div>
          </div>
        ))}
      </div>


      <div className="flex justify-center mt-10">

     
          <Link href='/packages'>
             <button className="btn btn-primary btn-md">All Packages</button>
          </Link>
      </div>
    </section>
  );
};

export default LatestPackages;
