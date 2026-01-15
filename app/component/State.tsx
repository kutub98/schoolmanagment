'use client';

import { AcademicCapIcon, CalendarIcon, DocumentTextIcon, TrophyIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";


const stats = [
  { icon: AcademicCapIcon, label: "Courses", value: 30 },
  { icon: UserGroupIcon, label: "Students", value: 1200 },
  { icon: DocumentTextIcon, label: "Certificates", value: 500 },
  { icon: CalendarIcon, label: "Events", value: 15 },
  { icon: TrophyIcon, label: "Achievements", value: 120 },
];

export default function StatsPremium() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const increment = Math.ceil(end / 100);
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCounts(prev => prev.map((c, idx) => idx === i ? start : c));
      }, 20);
    });
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto grid md:grid-cols-5 gap-8 text-center">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition transform">
              <Icon className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
              <h3 className="text-3xl font-bold">{counts[idx]}</h3>
              <p className="text-gray-500 mt-2">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
