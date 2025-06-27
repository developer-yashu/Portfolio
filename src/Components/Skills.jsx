export default function Skills() {
  const skills = [
    "C",
    "C++",
    "HTML",
    "tailwind.css",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
     
  ];

  return (
    <section
      id="skills"
      className="px-6 py-20 bg-gradient-to-br from-gray-800 via-black to-gray-900 text-white"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-5xl font-extrabold mb-14 text-white tracking-wide font-sans drop-shadow-lg"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-gray-800 text-white font-semibold rounded-2xl px-6 py-3 shadow-lg border-2 border-green-600 hover:bg-green-700 transition duration-300 cursor-default select-none text-lg sm:text-xl md:text-2xl font-mono"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
