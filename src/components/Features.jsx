"use client";

import React from "react";
import { AirPlane, AlarmClock, UserCheck, CreditCard } from "@deemlol/next-icons";

const features = [
  { title: "24/7 Support", icon: <AirPlane size={48} color="#FBBF24" /> },
  { title: "Custom Packages", icon: <AlarmClock size={48} color="#FBBF24" /> },
  { title: "Expert Guides", icon: <UserCheck size={48} color="#FBBF24" /> },
  { title: "Best Prices", icon: <CreditCard size={48} color="#FBBF24" /> },
];

export default function Features() {
  return (
    <section className="py-16 px-6 lg:px-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-2xl transition transform hover:scale-105"
          >
            <div className="flex justify-center mb-4">
              {f.icon}
            </div>
            <h3 className="text-xl font-semibold">{f.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
