"use client";
import React, { useEffect, useState } from "react";

const TravelDetail = ({ id }) => {
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://travelbackend-three.vercel.app/Packages/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setPkg(data.result);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!pkg) return <p className="text-center mt-10">Package not found!</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto shadow-lg rounded-lg bg-white mt-10">
      <h1 className="text-3xl text-black font-bold mb-4">{pkg.title}</h1>
      <img
        src={pkg.img || "https://i.ibb.co/3rYVZ7H/default-user.png"}
        alt={pkg.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <p className="mb-2 text-black"><strong>Description:</strong> {pkg.fullDescription}</p>
      <p className="mb-2 text-black"><strong>Price:</strong> ${pkg.price}</p>
      <p className="mb-2 text-black"><strong>priority:</strong> {pkg.priority}</p>
    </div>
  );
};

export default TravelDetail;
