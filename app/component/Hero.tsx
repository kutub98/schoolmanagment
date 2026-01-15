export default function HeroPremium() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-0 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold animate-fadeIn">
            Empowering Students, Transforming Futures
          </h1>
          <p className="text-lg md:text-xl text-gray-200 animate-fadeIn delay-200">
            Join a community of excellence, innovation, and personalized learning.
          </p>
          <div className="flex space-x-4 animate-fadeIn delay-400">
            <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition transform">
              Enroll Now
            </button>
            <button className="bg-transparent border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Floating Feature Cards */}
        <div className="md:w-1/2 relative mt-10 md:mt-0">
          <div className="absolute top-0 left-1/4 bg-white text-indigo-600 rounded-xl shadow-xl p-6 w-60 transform rotate-6 hover:rotate-0 transition duration-500">
            <h3 className="font-bold text-lg mb-2">1200+ Students</h3>
            <p className="text-sm text-gray-600">Learning & thriving</p>
          </div>
          <div className="absolute top-32 right-0 bg-white text-indigo-600 rounded-xl shadow-xl p-6 w-60 transform -rotate-6 hover:rotate-0 transition duration-500">
            <h3 className="font-bold text-lg mb-2">75 Teachers</h3>
            <p className="text-sm text-gray-600">Experienced & passionate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
