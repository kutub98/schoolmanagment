"use client"; // for Next.js 13+ App Router with client-side interactivity
import { motion } from "framer-motion";

const courses = [
  {
    name: "Mathematics",
    description: "Advanced math lessons to sharpen problem-solving skills",
    image: "/images/math.jpg",
    link: "/courses/mathematics"
  },
  {
    name: "Science",
    description: "Hands-on experiments and scientific reasoning",
    image: "/images/science.jpg",
    link: "/courses/science"
  },
  {
    name: "English",
    description: "Grammar, literature, and communication skills",
    image: "/images/english.jpg",
    link: "/courses/english"
  },
  {
    name: "History",
    description: "World and national history with interactive sessions",
    image: "/images/history.jpg",
    link: "/courses/history"
  },
  {
    name: "Computer Science",
    description: "Programming, robotics, and AI fundamentals",
    image: "/images/computer.jpg",
    link: "/courses/computer-science"
  },
];

export default function CoursesCarouselPremium() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>

        <div className="relative">
          <div className="flex gap-8 overflow-x-scroll scrollbar-hide px-4">
            {courses.map((course, i) => (
              <motion.a
                key={course.name}
                href={course.link}
                className="relative min-w-[300px] md:min-w-[350px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer flex-shrink-0 hover:scale-105 transition-transform"
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
                  <h3 className="text-xl font-bold">{course.name}</h3>
                  <p className="text-sm mt-1">{course.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
