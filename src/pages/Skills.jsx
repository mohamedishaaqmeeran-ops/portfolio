import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiMui,
} from "react-icons/si";

const skills = [
  { name: "React JS", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Python", icon: <FaPython /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "MUI", icon: <SiMui /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Git & GitHub", icon: <><FaGitAlt /> <FaGithub /></> },
];

function Skills() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400 text-center mb-16">
        Skills
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-slate-900 p-8 rounded-2xl text-center
                       border border-slate-800
                       hover:border-cyan-400
                       hover:shadow-lg hover:shadow-cyan-500/20
                       hover:-translate-y-2 hover:scale-105
                       transition-all duration-300 cursor-pointer"
          >
            <div className="text-5xl text-cyan-400 flex justify-center gap-2 mb-5">
              {skill.icon}
            </div>

            <h3 className="text-xl font-semibold text-white">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;