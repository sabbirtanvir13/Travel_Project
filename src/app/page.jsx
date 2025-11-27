

"use client";

import Hero from "@/components/Hero";
import FeaturedPackages from "@/components/FeaturedPackages";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import LatestPackages from "@/components/LatestPackages";
import TravelInspirations from "@/components/TravelInspirations";
import TrendingDestinations from "@/components/TrendingDestinations";
// import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="flex flex-col bg-base-100 font-sans text-base-content">
      <Hero />

      <div className="mt-16">
        <LatestPackages></LatestPackages>
      </div>

      <div className="mt-16">
        <TrendingDestinations></TrendingDestinations>
      </div>


      <div className="mt-16">
        <FeaturedPackages />
      </div>

       
      <div className="mt-16">
        <TravelInspirations></TravelInspirations>
      </div>

       <div className="mt-16">
        <Features />
      </div>


      <div className="mt-16">
        <Testimonials />
      </div>

      
    



    </div>
  );
}
