"use client"; // Next.js 13+ client component
import { useRef, RefObject } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const courses = [
  {
    name: "Mathematics",
    description: "Advanced math lessons to sharpen problem-solving skills",
    image: "/images/math.jpg",
    link: "/courses/mathematics",
    badge: "Popular"
  },
  {
    name: "Science",
    description: "Hands-on experiments and scientific reasoning",
    image: "/images/science.jpg",
    link: "/courses/science",
    badge: "New"
  },
  {
    name: "English",
    description: "Grammar, literature, and communication skills",
    image: "/images/english.jpg",
    link: "/courses/english",
    badge: "Top Rated"
  },
  {
    name: "History",
    description: "World and national history with interactive sessions",
    image: "/images/history.jpg",
    link: "/courses/history",
    badge: "Trending"
  },
  {
    name: "Computer Science",
    description: "Programming, robotics, and AI fundamentals",
    image: "/images/computer.jpg",
    link: "/courses/computer-science",
    badge: "Hot"
  },
];

export default function CoursesCarouselPro() {
  const carouselRef = useRef<HTMLDivElement>(null);

  interface ScrollDirection {
    direction: "left" | "right";
  }

  const scroll = ({ direction }: ScrollDirection): void => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>

        {/* Carousel */}
        <div className="relative">
          {/* Left / Right arrows */}
          <button
            onClick={() => scroll({ direction: "left" })}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-20 hover:bg-gray-100 transition"
          >
            <ChevronLeftIcon className="w-6 h-6 text-indigo-600" />
          </button>
          <button
            onClick={() => scroll({ direction: "right" })}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-20 hover:bg-gray-100 transition"
          >
            <ChevronRightIcon className="w-6 h-6 text-indigo-600" />
          </button>

          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide px-4 scroll-smooth"
          >
            {courses.map((course, i) => (
              <motion.a
                key={course.name}
                href={course.link}
                className="relative min-w-[280px] md:min-w-[320px] rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                whileHover={{ scale: 1.07 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Course Image */}
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-64 object-cover"
                />

                {/* Badge */}
                <span className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {course.badge}
                </span>

                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="text-xl font-bold">{course.name}</h3>
                  <p className="text-sm mt-1">{course.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 bg-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
