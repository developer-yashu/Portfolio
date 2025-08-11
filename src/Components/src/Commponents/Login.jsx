// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import { data } from "react-router-dom";

// const Login = () => {
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//     const navigate=useNavigate()

//   const loginHandler = (e) => {
//     e.preventDefault();
//     const data = { email, password };
//     console.log(">>>>data", data);

//     const logindata = JSON.parse(localStorage.getItem("userdata"));

//     if (data.email === logindata.Email &&data.password === logindata.Password){
//         navigate('/search')
//       alert("User login Successfully!!");
//     }
//      else if (data.email !== logindata.Email && data.password !== logindata.Password){
//       alert(" both email and password are incorrect.");
//     } 
//     else if (!(data.email === logindata.Email)) {
//       alert("Email is increect ");
//     }
//      else if (!(data.password === logindata.Password)) {
//       alert("Password is increect ");
//     }
//   };
//   const removeData = () => {
//     const loginData = JSON.parse(localStorage.getItem("userdata"));
//     if (loginData) {
//       localStorage.clear();
//     } else if (!loginData) {
//       alert("Please Signup First");
//     }
//     setemail("");
//     setpassword("");
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={loginHandler}>
//         <div>
//           <input
//             type="email"
//             placeholder="Enter the Email"
//             value={email}
//             onChange={(e) => setemail(e.target.value)}
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             placeholder="Enter the Password"
//             value={password}
//             onChange={(e) => setpassword(e.target.value)}
//           />
//         </div>
//         <button onClick={removeData}>removeData</button>
//         <button>Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    const data = { email, password };
    console.log(">>>>data", data);

    const logindata = JSON.parse(localStorage.getItem("userdata"));

    if (data.email === logindata.Email && data.password === logindata.Password) {
      navigate("/search");
      alert("User login Successfully!!");
    } else if (data.email !== logindata.Email && data.password !== logindata.Password) {
      alert("Both email and password are incorrect.");
    } else if (!(data.email === logindata.Email)) {
      alert("Email is incorrect");
    } else if (!(data.password === logindata.Password)) {
      alert("Password is incorrect");
    }
  };

  const removeData = () => {
    const loginData = JSON.parse(localStorage.getItem("userdata"));
    if (loginData) {
      localStorage.clear();
    } else if (!loginData) {
      alert("Please Signup First");
    }
    setemail("");
    setpassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>

        <form onSubmit={loginHandler} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Enter the Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter the Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-between gap-2">
            <button
              type="button"
              onClick={removeData}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
            >
              Remove Data
            </button>

            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;



//  const toggelHandel = () => {
//   setToggel(!toggel);
//   if (toggel) {
//     setUser((prev) => prev + 1);
//   } else {
//     setUser((prev) => prev - 1);
//   }
// };


{/* <div className="px-5 py-2 bg-green-400 hover:bg-green-800 cursor-pointer rounded-sm text-center mt-2 w-1/2">

             <button onClick={() => toggelHandel(item.id)}>
  {toggel[item.id] ? "remove from cart" : "add to cart"}
</button>
              </div> */}