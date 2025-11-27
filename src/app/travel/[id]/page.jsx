
// "use client";

// import React, { use } from "react";
// import TravelDetail from "./TravelDetail";
// import PrivateRoute from "@/context/PrivateRoute";


// export default function Page({ params }) {
//   const { id } = use(params); 
//   return <PrivateRoute>
//     <TravelDetail id={id} />;
//   </PrivateRoute>
// }


"use client";
import React, { use } from "react";
import TravelDetail from "./TravelDetail";
import PrivateRoute from "@/context/PrivateRoute";

export default function Page({ params }) {
  const { id } = use(params);

  return (
    <PrivateRoute>
      <TravelDetail id={id} />
    </PrivateRoute>
  );
}

