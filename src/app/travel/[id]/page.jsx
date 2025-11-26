// page.jsx
"use client";

import React, { use } from "react";
import TravelDetail from "./TravelDetail";


export default function Page({ params }) {
  const { id } = use(params); // unwrap the params

  return <TravelDetail id={id} />;
}
