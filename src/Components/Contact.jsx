export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-green-900 via-black to-gray-900 text-white px-6 py-20"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-5xl font-bold text-white drop-shadow-md"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Contact Me
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
            I’d love to hear from you — let’s build something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              label: "Email",
              content: (
                <a
                  href="ys4531104@gmail.com"
                  className="text-lg text-green-400 font-semibold hover:underline hover:text-green-300 break-words"
                >
                  ys4531104@gmail.com
                </a>
              ),
            },
            {
              label: "Phone",
              content: <p className="text-lg text-gray-300 font-medium">+91 7665733214  </p>,
            },
            {
              label: "LinkedIn",
              content: (
                <a
                  href="https://www.linkedin.com/in/yashu-sharma-095416332/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-green-400 font-semibold hover:underline hover:text-green-300"
                >
                  View LinkedIn Profile
                </a>
              ),
            },
            {
              label: "GitHub",
              content: (
                <a
                  href="https://gist.github.com/developer-yashu/94b7a48354f1f61fb240b35fc65b4264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-green-400 font-semibold hover:underline hover:text-green-300"
                >
                  View GitHub Profile
                </a>
              ),
            },
          ].map(({ label, content }, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-green-400 transition duration-300"
            >
              <h4 className="text-gray-400 text-sm mb-1">{label}</h4>
              {content}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-16 border-t border-gray-700" />

        {/* Contact Form */}
        <div className="text-center mb-10">
          <h3
            className="text-2xl font-semibold text-green-400 mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Send Me a Message
          </h3>
          <p className="text-gray-300 max-w-xl mx-auto text-base">
            Use the form below to reach out directly. I’ll respond as soon as possible.
          </p>
        </div>

        <form className="grid gap-6 md:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 md:col-span-2"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 md:col-span-2"
          ></textarea>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-20 text-center text-sm text-gray-600">
          &copy; 2025 Yahsu Sharma. All rights reserved.
        </div>
      </div>
    </section>
    );
}
