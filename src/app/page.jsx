// import FeaturedPackages from "@/components/FeaturedPackages";
// import Hero from "@/components/Hero";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//     <Hero></Hero>
//    <div className="mt-16">
//     <FeaturedPackages />
//   </div>
//     </div>
//   );
// }


"use client";

import Hero from "@/components/Hero";
import FeaturedPackages from "@/components/FeaturedPackages";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
// import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="flex flex-col bg-base-100 font-sans text-base-content">
      <Hero />
      <div className="mt-16">
        <FeaturedPackages />
      </div>
      <div className="mt-16">
        <Testimonials />
      </div>
     
      <div className="mt-16">
        <Features />
      </div>

      {/* <div className="mt-16">
        <CTA />
      </div>  */}
    </div>
  );
}
