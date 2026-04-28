function Languages() {
  const languages = ["English", "Tamil", "Malayalam", "Hindi"];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-12 text-center">
        Languages Known
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {languages.map((lang) => (
          <div
            key={lang}
            className="bg-slate-900 p-8 rounded-2xl text-center text-xl font-semibold
                       border border-slate-800
                       hover:border-cyan-400
                       hover:shadow-lg hover:shadow-cyan-500/20
                       hover:-translate-y-2 hover:scale-105
                       transition-all duration-300 cursor-pointer"
          >
            {lang}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Languages;