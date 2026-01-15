export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img src="/images/school-building.jpg" alt="School" className="rounded-2xl shadow-lg" />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">About ABC School</h2>
          <p className="text-gray-700">ABC School has been delivering quality education for over 20 years, focusing on academics, innovation, and student development.</p>
          <a href="#programs" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
}
