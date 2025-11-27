

"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useRouter } from "next/navigation";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login"); // ✔ safe inside useEffect
    }
  }, [loading, user, router]);

  if (loading) return <p>Loading...</p>;

  if (!user) return null; // block render until redirect

  return children;
}
