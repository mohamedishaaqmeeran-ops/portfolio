const projects = [
  {
    title: "Real-Time News Application",
    link: "https://ancnews.netlify.app",
    desc: "Built a full-stack dynamic news platform featuring real-time data fetching and a centralized content management system. Managed MongoDB schemas for efficient storage and retrieval of daily news articles.",
  },
  {
    title: "Invoice Builder Pro",
    link: "https://invoicebuilderpro.netlify.app",
    desc: "Designed a productivity tool that allows users to generate professional invoices with dynamic calculation logic. Optimized styling using Tailwind CSS for better performance.",
  },
  {
    title: "Movie Review Project",
    link: "https://moviereviewproj.netlify.app",
    desc: "Integrated external movie databases via REST APIs to provide live film data, ratings, and reviews. Implemented seamless SPA navigation and state management.",
  },
  {
    title: "Alaura",
    link: "https://alaura.in",
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

            <p className="text-gray-400 leading-relaxed mb-6">
              {project.desc}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-full
                         hover:bg-cyan-600 transition duration-300"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;