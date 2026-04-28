import ishaaq from "../assets/ishaaq.jpeg";
function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400 text-center mb-16">
        About Me
      </h2>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="flex justify-center">
          <img
            src={ishaaq}
            alt="Mohamed Ishaaq Meeran"
            className="w-80 h-105 object-cover rounded-3xl
                       border-1 border-cyan-400
                       shadow-2xl shadow-cyan-500/20
                       hover:scale-105 transition duration-500"
          />
        </div>
        <div
          className="bg-slate-900 p-10 rounded-3xl
                     border border-slate-800
                     hover:border-cyan-400
                     hover:shadow-xl hover:shadow-cyan-500/20
                     transition-all duration-300"
        >
          <p className="text-xl leading-relaxed text-gray-300">
            I am a passionate MERN Stack Developer specializing in building
            responsive, scalable, and user-friendly web applications using
            MongoDB, Express.js, React.js, and Node.js.
          </p>

          <p className="text-xl leading-relaxed text-gray-300 mt-6">
            I enjoy transforming ideas into efficient digital solutions, with a
            strong focus on clean code, performance, and exceptional user
            experiences.
          </p>

          <p className="text-xl leading-relaxed text-gray-300 mt-6">
            Continuously learning and adapting, I strive to create innovative
            applications that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;