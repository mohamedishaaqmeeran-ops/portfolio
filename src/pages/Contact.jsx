import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 95857 78929",
      link: "tel:+919585778929",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "ishaaqmeeran1@gmail.com",
      link: "mailto:ishaaqmeeran1@gmail.com",
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

      <div className="grid lg:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div className="grid gap-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 p-6 rounded-2xl border border-slate-800
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

        
        <div
          className="bg-slate-900 p-8 rounded-2xl border border-slate-800
                     hover:border-cyan-400 transition-all duration-300"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Send Message
          </h3>

          
          <form
            action="https://formspree.io/f/mzdowwkj"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="block text-gray-300 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-slate-800
                           border border-slate-700 text-white
                           focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-slate-800
                           border border-slate-700 text-white
                           focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                required
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl bg-slate-800
                           border border-slate-700 text-white
                           focus:outline-none focus:border-cyan-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-cyan-500 text-white font-semibold
                         rounded-xl hover:bg-cyan-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;