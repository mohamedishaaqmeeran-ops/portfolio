import ishaaq1 from "../assets/ishaaq1.jpeg";
function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 mb-2">
      <img
        src={ishaaq1}
        
        alt="Profile"
        className="w-44 h-44 rounded-full border-4 border-cyan-400 shadow-2xl mb-8"
      />

      <h1 className="text-3xl sm:text-6xl font-extrabold mb-4">
        Hi, I'm{" "}
        <span className="text-cyan-400">
          Mohamed Ishaaq Meeran N
        </span>
      </h1>

      <p className="text-2xl text-gray-300 mb-8">
        Full Stack Developer | MERN
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        
        <a
          href="/mohamedishaaqmeerann_pdf.pdf"
          download="Mohamed_Ishaaq_Meeran_Resume.pdf"
          type="application/pdf"
          className="px-8 py-3 bg-cyan-500 rounded-full hover:bg-cyan-600 transition duration-300"
        >
          Download Resume
        </a>

        <a
          href="https://github.com/mohamedishaaqmeeran-ops"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border border-cyan-500 rounded-full hover:bg-cyan-500 transition duration-300 "
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Home;