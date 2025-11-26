"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Link from "next/link";

export default function Login() {
  const { signInUser, signInWithGoogle } = useAuth();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInUser(email, password);
      Swal.fire({
        icon: "success",
        title: "Welcome Back!",
        text: "Login successful",
        timer: 1500,
        showConfirmButton: false,
      });
      router.push("/dashboard");
    } catch (err) {
      Swal.fire({ icon: "error", title: "Login Failed", text: err.message });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      Swal.fire({
        icon: "success",
        title: "Google Login successful",
        timer: 1500,
        showConfirmButton: false,
      });
      router.push("/dashboard");
    } catch (err) {
      Swal.fire({ icon: "error", title: "Google Login Failed", text: err.message });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input type="email" name="email" placeholder="Email" required className="input input-bordered" />
          <input type="password" name="password" placeholder="Password" required className="input input-bordered" />
          <button type="submit" className="btn btn-neutral mt-2 w-full">Login</button>
        </form>
        <p className="text-center mt-2">
          Don’t have an account? <Link href="/register" className="text-blue-600 hover:text-blue-800">Register</Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full flex items-center justify-center gap-2">
          <FcGoogle /> Login with Google
        </button>
      </div>
    </div>
  );
}
