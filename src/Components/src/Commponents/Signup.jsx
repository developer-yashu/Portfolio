// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [Name, setName] = useState("");
//   const [Email, setEmail] = useState("");
//   const [Password, setPassword] = useState("");
//   const [Phone, setPhone] = useState("");
//   const [error, setError] = useState({});
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = { Name, Email, Password, Phone };
//     console.log(">>>>>.", data);

//     // if (!(Name && Email && Password && Phone)) {
//     //   setError({ ...error });
//     //   alert("all filde is requrde");
//     //   return;
//     // }

//     if (Name && Email && Password && Phone) {
//       navigate("/Login");
//     }

//     const allError = {};
//     if (!Name) allError.Name = "Name is required";
//     if (!Email) allError.Email = "Email is required";
//     if (!Password) allError.Password = "Password is required";
//     if (!Phone) allError.Phone = "Phone is required";

//     setError(allError);
//     setName("");
//     setEmail("");
//     setPassword("");
//     setPhone("");

//     localStorage.setItem("userdata", JSON.stringify(data));
//   };

//   return (
//     <div>
//       <h3>signup</h3>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter the Name"
//             value={Name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <p className="text-red-600">{error.Name}</p>
//         </div>

//         <div>
//           <input
//             type="email"
//             placeholder="Enter the Email"
//             value={Email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <p className="text-red-600">{error.Email}</p>
//         </div>

//         <div>
//           <input
//             type="text"
//             placeholder="Enter the Password"
//             value={Password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <p className="text-red-600">{error.Password}</p>
//         </div>

//         <div>
//           <input
//             type="text"
//             placeholder="Enter the Phone"
//             value={Phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//           <p className="bg-read-600">{error.Phone}</p>
//         </div>

//         <button className="">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
  


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { Name, Email, Password, Phone };
    console.log(">>>>>.", data);

    if (Name && Email && Password && Phone) {
      navigate("/Login");
    }

    const allError = {};
    if (!Name) allError.Name = "Name is required";
    if (!Email) allError.Email = "Email is required";
    if (!Password) allError.Password = "Password is required";
    if (!Phone) allError.Phone = "Phone is required";

    setError(allError);
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");

    localStorage.setItem("userdata", JSON.stringify(data));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h3 className="text-2xl font-bold mb-6 text-center text-blue-600">Signup</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter the Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="text-red-600 text-sm">{error.Name}</p>
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter the Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="text-red-600 text-sm">{error.Email}</p>
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter the Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="text-red-600 text-sm">{error.Password}</p>
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter the Phone"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="text-red-600 text-sm">{error.Phone}</p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
