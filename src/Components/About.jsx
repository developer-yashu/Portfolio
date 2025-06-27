export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-16 h-500px bg-gradient-to-br from-green-900 via-black to-gray-900 text-white"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-4xl font-bold mb-6 text-white"
          style={{ fontFamily: "'Poppins', sans-serif", textShadow: '0 0 8px #22c55e' }}
        >
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          I'm a passionate{""}
          <span className="text-green-400 font-semibold">MERN Stack Developer</span> currently
          pursuing my <span className="text-green-300">BCA final year</span> 
          With a strong command over technologies like{" "}
          <span className="text-yellow-300">React</span>,{" "}
          <span className="text-yellow-300">Mongoodb</span>,{" "}
          <span className="text-yellow-300">Node.js</span>, and{" "}
          <span className="text-yellow-300">Tailwind CSS</span>, I enjoy building elegant,
          responsive, and high-performance web applications.
          <br className="my-4" />
          I’ve solved numerous{" "} 
        </p>
      </div>
    </section>
  );
}
