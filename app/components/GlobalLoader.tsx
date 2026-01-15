"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GlobalLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake delay — you can remove or reduce this
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 bg-white flex items-center justify-center z-[9999]"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.5, 1]
        }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="text-4xl font-bold text-indigo-600"
      >
        Loading...
      </motion.div>
    </motion.div>
  );
}
