// Projects.jsx
const projects = [
  {
    title:"Expense-Tracker",
    desc:"A lightweight and user-friendly web application to help users track their daily income and expenses. Built without any external libraries or frameworks, this project focuses on core web development skills and JavaScript logic.",
   },
  {
    title: "Cromax Website Clone",
    desc: "React + Tailwind based UI clone of Cromax website.",
   },
  {
    title: "Quiz App",
    desc: "Quiz app built with React and Node.js.",
   },
  
  
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-16 bg-gradient-to-br from-gray-900 via-black to-green-900 text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-green-400 transition duration-300 text-left"
            >
              <h3 className="text-2xl font-semibold text-red-300 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-300 mb-4">{proj.desc}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 font-medium hover:underline"
              >
               
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
