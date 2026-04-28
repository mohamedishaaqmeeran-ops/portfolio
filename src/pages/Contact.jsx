import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 95857 78929",
      link: "tel:+91XXXXXXXXXX",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "ishaaqmeeran1@gmail.com",
      link: "ishaaqmeeran1@gmail.com",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/mohamedishaaq",
      link: "https://linkedin.com/in/mohamedishaaq",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/mohamedishaaqmeeran-ops",
      link: "https://github.com/mohamedishaaqmeeran-ops",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400 text-center mb-16">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800
                       hover:border-cyan-400 hover:shadow-lg
                       hover:shadow-cyan-500/20 hover:-translate-y-2
                       transition-all duration-300 flex items-center gap-6"
          >
            <div className="text-4xl text-cyan-400">
              {contact.icon}
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {contact.title}
              </h3>
              <p className="text-gray-400 break-all">
                {contact.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;