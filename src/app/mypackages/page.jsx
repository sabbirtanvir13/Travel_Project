// "use client";

// import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from "@/context/AuthContext";
// import Swal from "sweetalert2";
// import "sweetalert2/dist/sweetalert2.min.css";

// export default function MyPackages() {
//   const { user } = useContext(AuthContext); // use lowercase `user` according to your context
//   const [packages, setPackages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [updateData, setUpdateData] = useState(null);

//   // Fetch packages added by the logged-in user
//   const fetchPackages = () => {
//     if (!user?.email) {
//       setPackages([]);
//       setLoading(false);
//       return;
//     }
//     setLoading(true);
//     fetch(`http://localhost:5000/my-packages?email=${user.email}`)
//       .then((res) => res.json())
//       .then((data) => setPackages(data))
//       .catch(console.error)
//       .finally(() => setLoading(false));
//   };

//   useEffect(() => fetchPackages(), [user]);

//   // Delete package
//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "This package will be permanently deleted!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:5000/Packages/${id}`, { method: "DELETE" })
//           .then((res) => res.json())
//           .then(() => {
//             Swal.fire("Deleted!", "Package has been deleted.", "success");
//             fetchPackages();
//           })
//           .catch((err) => {
//             console.error(err);
//             Swal.fire("Error", "Failed to delete package.", "error");
//           });
//       }
//     });
//   };

//   // Set package to update
//   const handleEdit = (pkg) => setUpdateData(pkg);

//   // Update package
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     if (!updateData?._id) return; // safeguard

//     const form = e.target;
//     const updatedPackage = {
//       title: form.title.value,
//       shortDescription: form.shortDescription.value,
//       img: form.img.value,
//       date: form.date.value,
//       priority: form.priority.value,
//       price: form.price.value,
//     };

//     try {
//       const res = await fetch(`http://localhost:5000/Packages/${updateData._id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updatedPackage),
//       });
//       if (res.ok) {
//         Swal.fire("Updated!", "Package has been updated.", "success");
//         setUpdateData(null);
//         fetchPackages();
//       } else {
//         Swal.fire("Error", "Failed to update package.", "error");
//       }
//     } catch (err) {
//       console.error(err);
//       Swal.fire("Error", "Something went wrong!", "error");
//     }
//   };

//   if (loading) return <p className="text-center mt-10">Loading...</p>;

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-center">My Packages</h1>

//       {/* Packages grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {packages.map((pkg) => (
//           <div key={pkg._id} className="bg-white shadow rounded-lg p-4 flex flex-col">
//             <img
//               src={pkg.img || "https://i.ibb.co/3rYVZ7H/default-user.png"}
//               alt={pkg.title}
//               className="w-full h-40 object-cover rounded mb-3"
//             />
//             <h2 className="text-lg font-bold mb-1">{pkg.title}</h2>
//             <p className="text-sm mb-2">{pkg.shortDescription}</p>
//             <p className="text-sm mb-2">Price: ${pkg.price}</p>
//             <p className="text-sm mb-2">Priority: {pkg.priority}</p>

//             <div className="mt-auto flex gap-2">
//               <button
//                 className="btn btn-sm btn-info"
//                 onClick={() => Swal.fire(pkg.title, pkg.shortDescription, "info")}
//               >
//                 View
//               </button>
//               <button className="btn btn-sm btn-warning" onClick={() => handleEdit(pkg)}>
//                 Update
//               </button>
//               <button className="btn btn-sm btn-error" onClick={() => handleDelete(pkg._id)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Update modal */}
//       {updateData?._id && (
//         <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
//             <h2 className="text-2xl font-bold mb-4">Update Package</h2>
//             <form onSubmit={handleUpdate} className="space-y-3">
//               <input
//                 type="text"
//                 name="title"
//                 defaultValue={updateData.title}
//                 className="input input-bordered w-full"
//                 required
//               />
//               <input
//                 type="text"
//                 name="shortDescription"
//                 defaultValue={updateData.shortDescription}
//                 className="input input-bordered w-full"
//                 required
//               />
//               <input
//                 type="text"
//                 name="img"
//                 defaultValue={updateData.img}
//                 className="input input-bordered w-full"
//               />
//               <input
//                 type="date"
//                 name="date"
//                 defaultValue={updateData.date?.split("T")[0]}
//                 className="input input-bordered w-full"
//               />
//               <input
//                 type="text"
//                 name="priority"
//                 defaultValue={updateData.priority}
//                 className="input input-bordered w-full"
//               />
//               <input
//                 type="number"
//                 name="price"
//                 defaultValue={updateData.price}
//                 className="input input-bordered w-full"
//               />
//               <div className="flex justify-end gap-2 mt-2">
//                 <button
//                   type="button"
//                   className="btn btn-outline"
//                   onClick={() => setUpdateData(null)}
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Update
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export default function MyPackagesTable() {
  const { user } = useContext(AuthContext);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateData, setUpdateData] = useState(null);

  // Fetch packages added by logged-in user
  const fetchPackages = () => {
    if (!user?.email) return setLoading(false);
    setLoading(true);
    fetch(`http://localhost:5000/my-packages?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setPackages(data))
      .finally(() => setLoading(false));
  };

  useEffect(() => fetchPackages(), [user]);

  // Delete package
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This package will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/Packages/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Package has been deleted.", "success");
            fetchPackages();
          });
      }
    });
  };

  // Open update modal
  const handleEdit = (pkg) => setUpdateData(pkg);

  // Update package
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!updateData?._id) return;

    const form = e.target;
    const updatedPackage = {
      title: form.title.value,
      shortDescription: form.shortDescription.value,
      img: form.img.value,
      date: form.date.value,
      priority: form.priority.value,
      price: form.price.value,
    };

    try {
      const res = await fetch(`http://localhost:5000/Packages/${updateData._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPackage),
      });
      if (res.ok) {
        Swal.fire("Updated!", "Package has been updated.", "success");
        setUpdateData(null);
        fetchPackages();
      } else {
        Swal.fire("Error", "Failed to update package.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow rounded">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">
        My Packages
      </h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead className="bg-gray-200 text-black">
            <tr>
              <th className="px-4  py-2 border">Image</th>
              <th className="px-4 text-black py-2 border">Title</th>
              <th className="px-4 text-black py-2 border">Short Description</th>
              <th className="px-4 text-black py-2 border">Price</th>
              <th className="px-4 text-black py-2 border">Priority</th>
              <th className="px-4 text-black  py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <tr key={pkg._id} className="hover:bg-gray-50">
                <td className="border px-2 py-1">
                  <img
                    src={pkg.img || "https://i.ibb.co/3rYVZ7H/default-user.png"}
                    alt={pkg.title}
                    className="w-20 h-16 object-cover rounded"
                  />
                </td>
                <td className="border text-black px-4 py-2">{pkg.title}</td>
                <td className="border text-black px-4 py-2">{pkg.shortDescription}</td>
                <td className="border text-black px-4 py-2">{pkg.price}</td>
                <td className="border text-black px-4 py-2">{pkg.priority}</td>
                <td className="border text-black px-4 py-2 flex gap-2">
                  <button
                    className="btn btn-sm btn-info"
                    onClick={() =>
                      Swal.fire(pkg.title, pkg.shortDescription, "info")
                    }
                  >
                    View
                  </button>
                  <button
                    className="btn btn-sm btn-warning"
                    onClick={() => handleEdit(pkg)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(pkg._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {packages.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-4 text-black">
                  No packages found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Update modal */}
      {updateData?._id && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <h2 className="text-2xl font-bold mb-4 text-black">Update Package</h2>
            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                type="text"
                name="title"
                defaultValue={updateData.title}
                className="input input-bordered w-full text-black"
                required
              />
              <input
                type="text"
                name="shortDescription"
                defaultValue={updateData.shortDescription}
                className="input input-bordered w-full text-black"
                required
              />
              <input
                type="text"
                name="img"
                defaultValue={updateData.img}
                className="input input-bordered w-full text-black"
              />
              <input
                type="date"
                name="date"
                defaultValue={updateData.date?.split("T")[0]}
                className="input input-bordered w-full text-black"
              />
              <input
                type="text"
                name="priority"
                defaultValue={updateData.priority}
                className="input input-bordered w-full text-black"
              />
              <input
                type="number"
                name="price"
                defaultValue={updateData.price}
                className="input input-bordered w-full text-black"
              />
              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setUpdateData(null)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
