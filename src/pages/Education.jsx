function Education() {
  const education = [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Government College of Engineering, Tirunelveli",
      duration: "2020 - 2024",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Kendriya Vidyalaya, Nagercoil",
      duration: "2018 - 2020",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400 text-center mb-16">
        Education
      </h2>

      <div className="space-y-8">
        {education.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900 p-8 rounded-2xl
                       border border-slate-800
                       hover:border-cyan-400
                       hover:shadow-lg hover:shadow-cyan-500/20
                       hover:-translate-y-2
                       transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              {item.degree}
            </h3>

            <p className="text-lg text-gray-300 mb-2">
              {item.institution}
            </p>

            <p className="text-cyan-400 font-semibold">
              {item.duration}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;