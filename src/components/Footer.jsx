import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Brand / About */}
          <div className="max-w-sm">
            <h2 className="text-xl font-semibold text-white">TravelGo</h2>
            <p className="mt-3 text-sm">
              Providing quality services with a focus on modern design,
              reliability, and user experience.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h3 className="font-semibold text-white mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/packages" className="hover:text-white">Packages</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex gap-4 text-lg">
              <Link href="https://facebook.com" className="hover:text-white">
                <FaFacebookF />
              </Link>
              <Link href="https://github.com" className="hover:text-white">
                <FaGithub />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-white">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
