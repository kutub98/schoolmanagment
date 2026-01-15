"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

interface CartItem {
  name: string;
  qty: number;
  price: number;
}

interface CartSlideOverProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems?: CartItem[];
}

export default function CartSlideOver({ isOpen, onClose, cartItems = [] }: CartSlideOverProps) {
  // Example cart items if none passed
  const items = cartItems.length ? cartItems : [
    { name: "Mathematics Course", qty: 1, price: 50 },
    { name: "Science Course", qty: 1, price: 60 },
  ];

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Slide-over Panel */}
          <motion.div
            className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 p-6 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-indigo-600">Your Cart</h2>
              <button onClick={onClose}>
                <XMarkIcon className="w-6 h-6 text-indigo-600" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto space-y-4">
              {items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-500 text-sm">x{item.qty}</p>
                  </div>
                  <p className="font-semibold">${item.price * item.qty}</p>
                </div>
              ))}
            </div>

            {/* Total & Checkout */}
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between font-semibold mb-4">
                <span>Total</span>
                <span>${total}</span>
              </div>
              <button className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
