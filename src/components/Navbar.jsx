"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await logOut();
      alert("Logged out successfully");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            <li className="text-black">
              <Link href="/">Home</Link>
            </li>
            <li className="text-black">
              <Link href="/packages">Packages</Link>
            </li>
            <li className="text-black">
              <Link href="/about">About</Link>
            </li>
            <li className="text-black">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-black text-xl">
          TravelGo
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          <li className="text-black">
            <Link href="/">Home</Link>
          </li>
          <li className="text-black">
            <Link href="/packages">Packages</Link>
          </li>
          <li className="text-black">
            <Link href="/about">About</Link>
          </li>
          <li className="text-black">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="text-black">
            <Link href="/addpackages">Add Packages</Link>
          </li>
          <li className="text-black">
            <Link href="/mypackages">My Packages</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        {!user ? (
          <>
            <Link href="/login" className="btn btn-sm">
              Login
            </Link>
            <Link href="/register" className="btn btn-sm btn-primary">
              Register
            </Link>
          </>
        ) : (
          <div className="relative">
            {/* Avatar */}
            <img
              src={user.photoURL || "https://i.ibb.co/3rYVZ7H/default-user.png"}
              alt="User Avatar"
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-purple-400"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-3 z-50">
                <p className="font-semibold text-center text-gray-700 mb-2">
                  {user.displayName || "Unnamed User"}
                </p>
                <Link
                  href="/profile"
                  className="block w-full text-center py-1 hover:bg-gray-100 rounded-md"
                >
                  Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="mt-2 w-full btn btn-sm bg-red-500 hover:bg-red-600 text-white"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
