"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Forgot Password
        </h2>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-gray-600 text-center">
              Enter your registered email. We’ll send you a reset link.
            </p>

            <div>
              <label className="font-medium text-gray-600">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-3 rounded-xl border focus:border-indigo-600 outline-none transition"
                placeholder="you@example.com"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-3 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-green-600 font-semibold mb-4">
              ✔ Password reset link has been sent!
            </p>
            <p className="text-gray-600">
              Please check your email inbox to continue.
            </p>
          </div>
        )}

        <div className="text-center mt-6 text-gray-600">
          <Link href="/login" className="text-indigo-600 font-semibold">
            Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
