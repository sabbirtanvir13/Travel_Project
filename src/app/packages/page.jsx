// export default async function PackagesPage() {
//   const res = await fetch("http://localhost:5000/Packages")

//   const data = await res.json();

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-8 text-center">All Travel Packages</h1>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {data.map((pkg, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition border"
//           >
//             {/* Image */}
//             <img
//               src={pkg.img}
//               alt={pkg.title}
//               className="w-full h-48 object-cover"
//             />

//             {/* Content */}
//             <div className="p-5">
//               <h2 className="text-xl text-black font-bold mb-1">{pkg.title}</h2>

//               <p className="text-black text-sm line-clamp-2 mb-3">
//                 {pkg.shortDescription}
//               </p>

//               {/* Meta Data */}
//               <div className="text-gray-500 text-sm mb-3">
//                 <p>📅 <span className="font-medium">{pkg.date}</span></p>
//                 <p>⏳ {pkg.meta.duration}</p>
//                 <p>⚡ Priority: {pkg.priority}</p>
//               </div>

//               <p className="text-lg font-bold text-blue-600 mb-4">
//                 {pkg.price}
//               </p>

//               {/* Button */}
//               <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
//                 View Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function PackagesPage() {
  const [packages, setPackages] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("http://localhost:5000/Packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);


  const filteredPackages = packages.filter((pkg) => {
    const matchSearch =
      pkg.title.toLowerCase().includes(search.toLowerCase()) ||
      pkg.shortDescription.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "all" ? true : pkg.priority === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="p-10 bg-gray-50 min-h-screen">

      <h1 className="text-3xl text-black font-bold mb-8 text-center">
        All Travel Packages
      </h1>

  
      <div className="max-w-4xl mx-auto mb-10 grid md:grid-cols-2 gap-6">


        <input
          type="text"
          placeholder="Search packages..."
          className="input text-black  input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

   
        <select
          className="select select-bordered text-black w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPackages.map((pkg, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition border"
          >
            {/* Image */}
            <img
              src={pkg.img}
              alt={pkg.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl text-black font-bold mb-1">
                {pkg.title}
              </h2>

              <p className="text-black text-sm line-clamp-2 mb-3">
                {pkg.shortDescription}
              </p>

              {/* Meta Data */}
              <div className="text-gray-500 text-sm mb-3">
                <p>📅 {pkg.date}</p>
                <p>⏳ {pkg.meta?.duration}</p>
                <p>⚡ Priority: {pkg.priority}</p>
              </div>

              <p className="text-lg font-bold text-blue-600 mb-4">
                {pkg.price}
              </p>

               {/* View Details Button */}
     <Link
        href={`/travel/${pkg._id}`}  // এখানে _id দিয়ে route বানানো হচ্ছে
        className="btn btn-sm mt-2 bg-blue-500 hover:bg-blue-600 text-white"
      >
        View Details
      </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredPackages.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No packages found 
        </p>
      )}
    </div>
  );
}
