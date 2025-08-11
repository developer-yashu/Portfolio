// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Gif from "./Gif";

// const Search = () => {
//   const [data, setData] = useState([]);
//   const [product, setProduct] = useState("");
//   const [loding, setLoding] = useState(true);

//   const axiosdata = async () => {
//     const result = await axios.get("https://fakestoreapi.com/products");
//     console.log(">>>>>>>result", result.data);
//     setData(result.data);
//     console.log(">>>>>>>>>loding", loding);

//     setLoding(false);

//     console.log(">>>>>>>>>loding", loding);
//   };
//   useEffect(() => {
//     axiosdata();
//   }, []);

//   const filterProduct = data.filter((item) => {
//     const fullldata = `${item.id} ${item.title} ${item.price} ${item.category}`;
//     return fullldata.toLowerCase().includes(product.toLowerCase());
//   });
//   console.log(">>>>>>  filterProduct", filterProduct);

//   const ascendingHandle = () => {
//     const asc = filterProduct.sort((a, b) => a.price - b.price);
//     console.log(">asc", asc);

//     setData(asc);
//   };

//   const descendingHandle = () => {
//     const des = filterProduct.sort((a, b) => b.price - a.price);
//     console.log(">>des", des);

//     setData(des);
//   };

//   const ElectronicHandel = () => {
//     const Electronidata = filterProduct.filter(
//       (item) => item.category === "electronics"
//     );
//     console.log(">>>>>>>>>>>Electronidata", Electronidata);
//     setData(Electronidata);
//   };

//   const MensHandel = () => {
//     const Mensdata = filterProduct.filter(
//       (item) => item.category === "men's clothing"
//     );
//     console.log(">>>>>>>>>>>Mensdata", Mensdata);
//     setData(Mensdata);
//   };

//   const WomensHandel = () => {
//     const Womensdata = filterProduct.filter(
//       (item) => item.category === "women's clothing"
//     );
//     console.log(">>>>>>>>>>>Womensdata", Womensdata);
//     setData(Womensdata);
//   };

//   const JeweleryHandel = () => {
//     const Jewelerydata = filterProduct.filter(
//       (item) => item.category === "jewelery"
//     );
//     console.log(">>>>>>>>>>>Jewelerydata", Jewelerydata);
//     setData(Jewelerydata);
//   };
//   const inputHandle = (e) => {
//     if (e.target.value === "asc") {
//       const asc = filterProduct.sort((a, b) => a.price - b.price);
//       setData(asc);
//     } else if (e.target.value === "des") {
//       const des = filterProduct.sort((a, b) => b.price - a.price);
//       setData(des);
//     } else if (e.target.value === "az") {
//       const az = filterProduct.sort((a, z) => a.title.localeCompare(z.title));
//       setData(az);
//     } else if (e.target.value === "za") {
//       const za = filterProduct.sort((a, z) => z.title.localeCompare(a.title));
//       setData(za);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           placeholder="🔍Search product"
//           value={product}
//           onChange={(e) => setProduct(e.target.value)}
//           className="border p-2"
//         />
//       </div>

//       <div>
//         <button onClick={ascendingHandle}>Asending</button>

//         <button onClick={descendingHandle}>descending</button>
//       </div>

//       <div>
//         <button onClick={ElectronicHandel}>Electronic</button>
//         <button onClick={MensHandel}>Mens</button>
//         <button onClick={WomensHandel}>Womens</button>
//         <button onClick={JeweleryHandel}>Jewelery</button>
//       </div>

//       <div>
//         <select value={data} onChange={inputHandle}>
//           <option>search</option>
//           <option value="asc">low to high</option>
//           <option value="des">high to low</option>
//           <option value="az">a to z</option>
//           <option value="za">z to a</option>
//         </select>
//       </div>

//       <div>
//         {loding ? (
//           <p><Gif/></p>
//         ) : filterProduct && filterProduct.length > 0 ? (
//           filterProduct.map((item) => (
//             <div>
//               <p>{`Id ${item.id}`}</p>
//               <p>{`Category: ${item.category}`}</p>
//               <p>{`Title: ${item.title}`}</p>
//               <img src={item.image} alt="" />
//               <p>{`Price: ₹${item.price}`}</p>
//               <p>{`Rating ${item.rating.rate}⭐`}</p>
//               <p>{`description ${item.description}`}</p>
//             </div>
//           ))
//         ) : (
//           <div>data not found</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Search;



import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState("");
  const [loding, setLoding] = useState(true);
  const [mens,setMens]=useState([]);
   const [cartItems, setCartItems] = useState([]);

  const axiosdata = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log(">>>>>>>result", result.data);
    setData(result.data);
    setMens(result.data)
    setLoding(false);
  };
  console.log('>>>>>>>mens',mens);
  

  useEffect(() => {
    axiosdata();
  }, []);

  const filterProduct = mens.filter((item) => {
    const fullldata = `${item.id} ${item.title} ${item.price} ${item.category}`;
    return fullldata.toLowerCase().includes(product.toLowerCase());
  });

  const ascendingHandle = () => {
    const asc = filterProduct.sort((a, b) => a.price - b.price);
    setData(asc);
  };

  const descendingHandle = () => {
    const des = filterProduct.sort((a, b) => b.price - a.price);
    setData(des);
  };

  const ElectronicHandel = () => {
    const Electronidata = data.filter(
      (item) => item.category === "electronics"
    );
    setMens(Electronidata);
  };

  const MensHandel = () => {
    const Mensdata = data.filter(
      (item) => item.category === "men's clothing"
    );
    setMens(Mensdata);
  };

  const WomensHandel = () => {
    const Womensdata = data.filter(
      (item) => item.category === "women's clothing"
    );
    setMens(Womensdata);
  };

  const JeweleryHandel = () => {
    const Jewelerydata = data.filter(
      (item) => item.category === "jewelery"
    );
    setMens(Jewelerydata);
  };
 

const addHandel = (id) => {
    if (cartItems.includes(id)) {
     const addCart=  cartItems.filter((item) => item !== id);
     setCartItems(addCart)
    } else {
      setCartItems([...cartItems, id]);
    }
  };

  const inputHandle = (e) => {
    if (e.target.value === "asc") {
      const asc = filterProduct.sort((a, b) => a.price - b.price);
      setMens(asc);
    } else if (e.target.value === "des") {
      const des = filterProduct.sort((a, b) => b.price - a.price);
      setMens(des);
    } else if (e.target.value === "az") {
      const az = filterProduct.sort((a, z) => a.title.localeCompare(z.title));
      setMens(az);
    } else if (e.target.value === "za") {
      const za = filterProduct.sort((a, z) => z.title.localeCompare(a.title));
      setMens(za);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="🔍 Search product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Sort Buttons */}
      <div className="flex flex-wrap gap-4 mb-4">
        <button
          onClick={ascendingHandle}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Ascending
        </button>
        <button
          onClick={descendingHandle}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Descending
        </button>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-4">
        <button
          onClick={ElectronicHandel}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Electronic
        </button>
        <button
          onClick={MensHandel}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Men's
        </button>
        <button
          onClick={WomensHandel}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          Women's
        </button>
        <button
          onClick={JeweleryHandel}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Jewelery
        </button>

        <span className="bg-red-500 text-white px-3 py-1 rounded">Cart: {cartItems.length}</span>
      </div>

      {/* Sorting Dropdown */}
      <div className="mb-4">
        <select
          onChange={inputHandle}
          className="border border-gray-300 px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option>search</option>
          <option value="asc">Low to High</option>
          <option value="des">High to Low</option>
          <option value="az">A to Z</option>
          <option value="za">Z to A</option>
        </select>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loding ? (
          <p className="text-center text-xl font-semibold">...loading</p>
        ) : filterProduct && filterProduct.length > 0 ? (
          filterProduct.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-contain mb-2"
              />
              <p className="font-semibold text-lg">{item.title}</p>
              <p className="text-gray-600">Category: {item.category}</p>
              <p className="text-green-600 font-bold">₹{item.price}</p>
              <p>⭐ {item.rating.rate}</p>
              <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                {item.description}
              </p>
              
              {/* add to cart */}
               <button onClick={() => addHandel(item.id)}>
                {cartItems.includes(item.id) ? "Remove from Cart" : "Add to Cart"}
              </button>

            </div>
          ))
        ) : (
          <div className="text-red-500 font-semibold">Data not found</div>
        )}
      </div>
    </div>
  );
};

export default Search;
