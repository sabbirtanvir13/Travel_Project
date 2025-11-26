"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { updateProfile } from "firebase/auth";

export default function Register() {
  const { createUser, signInWithGoogle } = useAuth();
  const router = useRouter();

  // Email/Password Register
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value || "https://i.ibb.co/3rYVZ7H/default-user.png";
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const result = await createUser(email, password);

      // Update Firebase user profile
      await updateProfile(result.user, { displayName: name, photoURL });

      Swal.fire({
        icon: "success",
        title: "Registration Successful 🎉",
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
        title: "Google Login Successful 🎉",
        timer: 1500,
        showConfirmButton: false,
      });

      router.push("/"); // redirect to homepage
    } catch (err) {
      Swal.fire({ icon: "error", title: "Google Login Failed", text: err.message });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Register</h1>

        <form onSubmit={handleRegister} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="input text-black input-bordered"
          />
          <input
            type="text"
            name="photoURL"
            placeholder="Profile Image URL (optional)"
            className="input text-black input-bordered"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="input text-black input-bordered"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="input text-black input-bordered"
          />
          <button type="submit" className="btn  btn-neutral mt-2 w-full">
            Register
          </button>
        </form>

        <div className="divider text-black">OR</div>

        <button
          onClick={handleGoogleRegister}
          className="btn btn-outline w-full text-black flex items-center justify-center gap-2"
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
