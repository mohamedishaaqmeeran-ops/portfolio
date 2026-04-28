function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400 text-center mb-16">
        Experience
      </h2>

      <div
        className="bg-slate-900 p-8 rounded-2xl
                   border border-slate-800
                   hover:border-cyan-400
                   hover:shadow-lg hover:shadow-cyan-500/20
                   hover:-translate-y-2
                   transition-all duration-300"
      >
        <h3 className="text-3xl font-bold text-white mb-2">
          Administrator
        </h3>

        <p className="text-xl text-cyan-400 mb-6">
          Jotech Technical Service, Dubai, UAE
        </p>

        <p className="text-gray-400 font-medium mb-8">
          July 2024 – Present
        </p>

        <ul className="space-y-4 text-gray-300 leading-relaxed">
          <li>
            • Managed daily administrative operations, ensuring smooth and
            efficient office workflow.
          </li>

          <li>
            • Maintained records, handled documentation, and performed accurate
            data entry.
          </li>

          <li>
            • Coordinated schedules, meetings, and internal communications
            across departments.
          </li>

          <li>
            • Prepared reports, organized files, and supported management with
            day-to-day operations.
          </li>

          <li>
            • Enhanced operational efficiency through effective administrative
            support and process coordination.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;