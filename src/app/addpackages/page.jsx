// "use client";

// import React, { useState, useContext } from "react";
// import { AuthContext } from "@/context/AuthContext";

// export default function AddPackagesPage() {
//   const [loading, setLoading] = useState(false);
//   const { user } = useContext(AuthContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!User || !User.email) {
//       alert("User not logged in properly or email not available.");
//       setLoading(false);
//       return;
//     }

//     const form = e.target;

//     const newPackage = {
//       title: form.title.value,
//       shortDescription: form.shortDescription.value,
//       price: form.price.value,
//       img: form.img.value,
//       date: form.date.value,
//       userName: user.displayName || "Anonymous",
//       userEmail: user.email,
//       priority: form.priority.value,
//       createdAt: new Date(),
//     };

//     try {
//       const res = await fetch("http://localhost:5000/Packages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newPackage),
//       });

//       const data = await res.json();

//       if (data.success) {
//         alert("Package added successfully!");
//         form.reset();
//       } else {
//         alert("Failed to add package. Try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="max-w-xl w-full bg-white p-6 rounded-xl shadow-lg">
//         <h1 className="text-3xl font-bold text-black mb-6 text-center">
//           Add New Package
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="title"
//             placeholder="Package Title"
//             className="input input-bordered w-full text-black bg-gray-200"
//             required
//           />

//           <input
//             type="text"
//             name="img"
//             placeholder="Image URL"
//             className="input input-bordered w-full text-black bg-gray-200"
//           />

//           <input
//             type="date"
//             name="date"
//             className="input input-bordered w-full text-black bg-gray-200"
//           />

//           <input
//             type="text"
//             name="priority"
//             placeholder="Priority (High/Medium/Low)"
//             className="input input-bordered w-full text-black bg-gray-200"
//           />

//           <textarea
//             name="shortDescription"
//             placeholder="Short Description"
//             className="textarea textarea-bordered w-full text-black bg-gray-200"
//             required
//           />

//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             className="input input-bordered w-full text-black bg-gray-200"
//           />

//           <input
//             type="text"
//             name="userName"
//             value={user?.displayName || ""}
//             readOnly
//             className="input input-bordered w-full text-black bg-gray-200"
//           />

//           <input
//             type="email"
//             name="userEmail"
//             value={user?.email || ""}
//             readOnly
//             className="input input-bordered w-full text-black bg-gray-200"
//           />

//           <button
//             type="submit"
//             className="btn w-full bg-blue-600 text-white hover:bg-blue-700"
//             disabled={loading}
//           >
//             {loading ? "Adding..." : "Add Package"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function AddPackagesPage() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.email) {
      alert("User not logged in properly or email not available");
      return;
    }

    setLoading(true);
    const form = e.target;

    const newPackage = {
      title: form.title.value,
      shortDescription: form.shortDescription.value,
      price: form.price.value,
      img: form.img.value,
      date: form.date.value,
      priority: form.priority.value,
      userName: user.displayName || "Anonymous",
      userEmail: user.email,
      createdAt: new Date(),
    };

    try {
      const res = await fetch("http://localhost:5000/Packages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPackage),
      });
      const data = await res.json();

      if (data.success) {
        alert("Package added successfully!");
        form.reset();
      } else {
        alert("Failed to add package.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">Add New Package</h1>
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <input type="text" name="title" placeholder="Package Title" className="input input-bordered w-full text-black bg-white" required />
          <input type="text" name="img" placeholder="Image URL" className="input input-bordered w-full text-black bg-white" />
          <input type="date" name="date" className="input input-bordered w-full text-black bg-white" />
          <input type="text" name="priority" placeholder="Priority (High/Medium/Low)" className="input input-bordered w-full text-black bg-white" />
          <textarea name="shortDescription" placeholder="Short Description" className="textarea textarea-bordered w-full text-black bg-white" required />
          
        <label > $ <input type="number" name="price" placeholder="Price" className="input input-bordered w-full text-black bg-white" /></label>

          <input type="text" value={user?.displayName || ""} readOnly className="input input-bordered w-full text-black bg-gray-100" />
          <input type="email" value={user?.email || ""} readOnly className="input input-bordered w-full text-black bg-gray-100" />
          <button type="submit" className="btn btn-primary w-full bg-blue-600 text-white hover:bg-blue-700" disabled={loading}>
            {loading ? "Adding..." : "Add Package"}
          </button>
        </form>
      </div>
    </div>
  );
}
