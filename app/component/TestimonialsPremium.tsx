
'use client'
import { useState } from "react";
import { StarIcon } from '@heroicons/react/24/solid';

const reviews = [
  { name: "John Doe", text: "ABC School changed my child’s life!", rating: 5, avatar: "/avatars/john.jpg" },
  { name: "Jane Smith", text: "Excellent teachers and great facilities.", rating: 4, avatar: "/avatars/jane.jpg" },
  { name: "Mark Lee", text: "We love the supportive environment.", rating: 5, avatar: "/avatars/mark.jpg" },
];

export default function TestimonialsPremium() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto text-center relative">
        <h2 className="text-3xl font-bold mb-8">What Parents Say</h2>
        <div className="bg-white rounded-xl shadow-xl p-8 max-w-xl mx-auto">
          <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full mx-auto mb-4"/>
          <p className="text-gray-700 mb-4">&ldquo;{review.text}&rdquo;</p>
          <div className="flex justify-center mb-4">
            {Array(5).fill(0).map((_, i) => (
              <StarIcon key={i} className={`w-5 h-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`} />
            ))}
          </div>
          <h3 className="font-semibold">{review.name}</h3>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <button onClick={() => setIndex((index - 1 + reviews.length) % reviews.length)} className="bg-indigo-600 text-white p-2 rounded-full">‹</button>
          <button onClick={() => setIndex((index + 1) % reviews.length)} className="bg-indigo-600 text-white p-2 rounded-full">›</button>
        </div>
      </div>
    </section>
  );
}
