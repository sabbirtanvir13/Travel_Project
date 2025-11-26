"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  const { createUser, signInWithGoogle } = useAuth();
  const router = useRouter();

  // Email/Password Register
  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await createUser(email, password);
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        timer: 1500,
        showConfirmButton: false,
      });
      router.push("/login");
    } catch (err) {
      Swal.fire({ icon: "error", title: "Register Failed", text: err.message });
    }
  };

  // Google Register/Login
  const handleGoogleRegister = async () => {
    try {
      const result = await signInWithGoogle();
      Swal.fire({
        icon: "success",
        title: "Google Login Successful",
        timer: 1500,
        showConfirmButton: false,
      });
      router.push("/"); // redirect to homepage after Google login
    } catch (err) {
      Swal.fire({ icon: "error", title: "Google Login Failed", text: err.message });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Register</h1>

        {/* Email/Password Form */}
        <form onSubmit={handleRegister} className="flex flex-col gap-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="input input-bordered"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="input input-bordered"
          />
          <button type="submit" className="btn btn-neutral mt-2 w-full">
            Register
          </button>
        </form>

        <div className="divider">OR</div>

        {/* Google Button */}
        <button
          onClick={handleGoogleRegister}
          className="btn btn-outline w-full flex items-center justify-center gap-2"
        >
          <FcGoogle /> Register with Google
        </button>

        <p className="text-center mt-2">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:text-blue-800">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
