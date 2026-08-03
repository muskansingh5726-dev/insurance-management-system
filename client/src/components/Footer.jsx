import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full -top-20 -left-20"></div>

      <div className="absolute w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full bottom-0 right-0"></div>

      <div className="relative max-w-7xl mx-auto px-8 py-24">

        <div className="grid lg:grid-cols-4 gap-14">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">

                <FaShieldAlt className="text-2xl text-white" />

              </div>

              <div>

                <h2 className="text-3xl font-black">
                  InsureHub
                </h2>

                <p className="text-slate-400 text-sm">
                  Smart Insurance Platform
                </p>

              </div>

            </div>

            <p className="mt-8 text-slate-400 leading-8">

              A next-generation insurance platform
              built to simplify policy management,
              premium payments, claims processing
              and customer services.

            </p>

            <div className="flex gap-4 mt-8">

              <div className="w-12 h-12 rounded-xl bg-slate-900 hover:bg-cyan-500 transition flex items-center justify-center cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-12 h-12 rounded-xl bg-slate-900 hover:bg-pink-500 transition flex items-center justify-center cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-12 h-12 rounded-xl bg-slate-900 hover:bg-blue-600 transition flex items-center justify-center cursor-pointer">
                <FaLinkedinIn />
              </div>

              <div className="w-12 h-12 rounded-xl bg-slate-900 hover:bg-white hover:text-black transition flex items-center justify-center cursor-pointer">
                <FaGithub />
              </div>

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="text-xl font-bold mb-8">
              Product
            </h3>

            <div className="space-y-5">

              <Link className="block text-slate-400 hover:text-cyan-400 transition">
                Dashboard
              </Link>

              <Link className="block text-slate-400 hover:text-cyan-400 transition">
                Customers
              </Link>

              <Link className="block text-slate-400 hover:text-cyan-400 transition">
                Policies
              </Link>

              <Link className="block text-slate-400 hover:text-cyan-400 transition">
                Claims
              </Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-bold mb-8">
              Company
            </h3>

            <div className="space-y-5">

              <a href="#" className="block text-slate-400 hover:text-cyan-400 transition">
                About Us
              </a>

              <a href="#" className="block text-slate-400 hover:text-cyan-400 transition">
                Careers
              </a>

              <a href="#" className="block text-slate-400 hover:text-cyan-400 transition">
                Blog
              </a>

              <a href="#" className="block text-slate-400 hover:text-cyan-400 transition">
                Contact
              </a>

            </div>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="text-xl font-bold mb-8">
              Stay Updated
            </h3>

            <p className="text-slate-400 mb-6">

              Subscribe to receive the latest insurance news and updates.

            </p>

            <div className="flex">

              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-slate-900 border border-slate-700 rounded-l-xl px-4 py-3 outline-none focus:border-cyan-400"
              />

              <button className="px-5 bg-cyan-500 rounded-r-xl hover:bg-cyan-400 transition">

                <FaArrowRight />

              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-20 pt-8 flex flex-col lg:flex-row justify-between items-center">

          <p className="text-slate-500">

            © 2026 InsureHub. All rights reserved.

          </p>

          <div className="flex gap-8 mt-5 lg:mt-0">

            <a href="#" className="text-slate-500 hover:text-cyan-400">
              Privacy Policy
            </a>

            <a href="#" className="text-slate-500 hover:text-cyan-400">
              Terms
            </a>

            <a href="#" className="text-slate-500 hover:text-cyan-400">
              Cookies
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;