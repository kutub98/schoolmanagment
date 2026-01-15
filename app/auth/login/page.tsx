"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadows-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-3 rounded-xl border focus:border-indigo-600 outline-none transition"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-3 rounded-xl border focus:border-indigo-600 outline-none transition"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-3 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <Link href="/register" className="text-indigo-600 font-semibold">
            Register
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
