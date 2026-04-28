const certifications = [
  {
    title: "Full Stack Development with AI",
    organization: "GUVI",
    duration: "December 2024 – May 2025",
  },
  {
    title: "Full Stack Development",
    organization: "Fortura Tech",
    duration: "November 2025 – November 2025",
  },
  {
    title: "Web Development Internship",
    organization: "AK Infopark",
    duration: "August 2022 – August 2022",
  },
];

function Certifications() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400 text-center mb-12 sm:mb-16">
        Certifications
      </h2>

      <div className="space-y-6 sm:space-y-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-slate-900 p-6 sm:p-8 rounded-2xl
                       border border-slate-800
                       hover:border-cyan-400
                       hover:shadow-xl hover:shadow-cyan-500/20
                       hover:-translate-y-2
                       transition-all duration-300"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 leading-snug">
              {cert.title}
            </h3>

            <p className="text-base sm:text-lg text-cyan-400 mb-2">
              {cert.organization}
            </p>

            <p className="text-sm sm:text-base text-gray-400 font-medium">
              Duration: {cert.duration}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;