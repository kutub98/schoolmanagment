export default function EnrollmentPremium() {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/school.mp4"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <div className="relative z-10 text-center space-y-6">
        <h2 className="text-4xl font-bold">Join Our School Today</h2>
        <p className="text-lg max-w-xl mx-auto">Enroll now and give your child the education they deserve.</p>
        <button className="bg-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
          Apply Now
        </button>
      </div>
    </section>
  );
}
