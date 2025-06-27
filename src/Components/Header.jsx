import {  } from "react";

export default function Header() {
  // const [showContact, setShowContact] = useState(false);

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // useEffect(() => {
  //   document.body.classList.add("animate-fadeIn");
  // }, []);

  return (
    <header
      id="header"
      className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br bg-gray-600 text-white overflow-hidden px-6"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Background Animated Blobs */}
       <div className="absolute w-[500px] h-[500px] bg-white opacity-10 rounded-full blur-2xl animate-pulse-slow -z-10 bottom-10 right-20" />

      {/* Developer Name */}
      <h1
         className=" text-6xl sm:text-7xl font-bold text-white "
         
        title="Click to toggle contact info"
      >
        YAHSHU SHARMA
      </h1>

     

      {/* Subtitle */}
      <p
        className="text-xl sm:text-2xl text-green-300 mb-8 tracking-wider font-medium"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        MERN Stack Developer  
      </p>

      {/* CTA Button */}
      <button
        onClick={scrollToProjects}
        className="relative group inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg text-white text-lg font-semibold transition-transform duration-300 ease-in-out hover:scale-105 hover:from-green-400 hover:to-green-500 overflow-hidden"
      >
        <span className="relative z-10">View Projects</span>
        <span className="absolute inset-0 bg-white opacity-5 group-hover:opacity-15 animate-shimmer"></span>
      </button>
 
      {/* Optional Scroll Down Indicator */}
      <div className="absolute bottom-6 animate-bounce">
        <svg
          className="w-6 h-6 text-green-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Glow Pulse Animation */}
      
    </header>
  );
}
