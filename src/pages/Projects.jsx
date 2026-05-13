const projects = [
  {
    title: "Real-Time News Application",
    link: "https://ancnews.netlify.app",
    githubFrontend:
      "https://github.com/mohamedishaaqmeeran-ops/News_Frontend",
    githubBackend:
      "https://github.com/mohamedishaaqmeeran-ops/News_Backend",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    desc: "Built a full-stack dynamic news platform featuring real-time data fetching and a centralized content management system. Managed MongoDB schemas for efficient storage and retrieval of daily news articles.",
  },
  {
    title: "Tour Package Booking System",
    link: "https://auraholiday.netlify.app",
    githubFrontend:
      "https://github.com/mohamedishaaqmeeran-ops/Tourist_Frontend",
    githubBackend:
      "https://github.com/mohamedishaaqmeeran-ops/Tourist_Backend",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    desc: "A full-stack web application for browsing, booking, and managing tour packages with user authentication, dynamic listings, and real-time booking management.",
  },
  {
    title: "E-Commerce Platform",
    link: "https://aurashops.netlify.app",
    githubFrontend:
      "https://github.com/mohamedishaaqmeeran-ops/E-Commerce_Frontend",
    githubBackend:
      "https://github.com/mohamedishaaqmeeran-ops/E-Commerce_Backend",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Razorpay",
      "Tailwind CSS",
    ],
    desc: "A MERN-based e-commerce platform with product management, cart system, secure authentication, and online payment integration.",
  },
  {
    title: "Invoice Builder Pro",
    link: "https://invoicebuilderpro.netlify.app",
    githubFrontend:
      "https://github.com/mohamedishaaqmeeran-ops/invoice_builder",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    desc: "Designed a productivity tool that allows users to generate professional invoices with dynamic calculation logic. Optimized styling using Tailwind CSS for better performance.",
  },
  {
    title: "Movie Review Project",
    link: "https://moviereviewproj.netlify.app",
    githubFrontend:
      "https://github.com/mohamedishaaqmeeran-ops/Movie_Review",
    techStack: ["React", "REST API", "CSS", "JavaScript"],
    desc: "Integrated external movie databases via REST APIs to provide live film data, ratings, and reviews. Implemented seamless SPA navigation and state management.",
  },
  {
    title: "Alaura",
    link: "https://alaura.in",
    githubFrontend:
      "https://github.com/mohamedishaaqmeeran-ops/AL_AURA",
    techStack: ["React", "Tailwind CSS", "MUI"],
    desc: "Developed a corporate website with a scalable component-based architecture. Enhanced front-end performance for a professional UI and smooth navigation.",
  },
];

function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400 text-center mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-800
                       hover:border-cyan-400 hover:shadow-cyan-500/20
                       hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 leading-relaxed mb-5">
              {project.desc}
            </p>

            
            <div className="flex flex-wrap gap-3 mb-6">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-cyan-500/10 text-cyan-400
                             border border-cyan-500/20 rounded-full
                             text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

          
            <div className="flex flex-wrap gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-3 bg-cyan-500 text-white rounded-full
                           hover:bg-cyan-600 transition duration-300"
              >
                Live Demo
              </a>

              <a
                href={project.githubFrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-3 bg-slate-700 text-white rounded-full
                           hover:bg-slate-600 transition duration-300"
              >
                Frontend Code
              </a>

              {project.githubBackend && (
                <a
                  href={project.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-3 bg-slate-700 text-white rounded-full
                             hover:bg-slate-600 transition duration-300"
                >
                  Backend Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;