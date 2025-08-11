import React, { useState } from 'react'

const Dropdown = () => {

    const [country,setCountry] =useState('');
    const [stssssss,setstssssss]=useState('')
    const[cy,setCy]=useState('');
       const data = {
  india: {
    states: {
      Maharashtra: ["Mumbai", "Pune", "Nagpur"],
      Karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
      TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
      Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
      Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
      WestBengal: ["Kolkata", "Siliguri", "Durgapur"],
      Punjab: ["Chandigarh", "Amritsar", "Ludhiana"],
      Haryana: ["Gurugram", "Faridabad", "Panipat"],
      Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
      UttarPradesh: ["Lucknow", "Kanpur", "Agra"],
      Bihar: ["Patna", "Gaya", "Bhagalpur"],
      Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
    },
  },
  usa: {
    states: {
      California: ["Los Angeles", "San Francisco", "San Diego"],
      NewYork: ["New York City", "Buffalo", "Rochester"],
    },
  },
  germany: {
    states: {
      Bavaria: ["Munich", "Nuremberg", "Augsburg"],
      Berlin: ["Berlin", "Potsdam", "Cottbus"],
    },
  },
};

const countrys=Object.keys(data)
console.log(">>>>>>>>>>>>>>>countrys",countrys);
 
let statess=[];
let city=[];
if(country){
    statess=Object.keys(data[country].states)
console.log(`states>>>>>>>>>>`,statess);
}

if(country && stssssss){
    // const [stssssss,setstssssss]=useState('')
    city= data[country].states[stssssss];
    console.log('>>>>>>>city',city);
    
}


    return (
    <div>
        <select value={country} onChange={(e)=>setCountry(e.target.value)}>
            <option>select</option>
            {countrys.map((sy)=>
            <option value={sy}>{sy}</option>
            )}
        </select>
            <p>{`Country: ${country}`}</p>
        
         <select value={stssssss} onChange={(e)=>setstssssss(e.target.value)} >
            <option>select</option>
            {statess.map((st)=>
            <option value={st}>{st}</option>
            )}
        </select>
            <p>{`State: ${stssssss}`}</p>


          <select value={cy} onChange={(e)=>setCy(e.target.value)} >
            <option>select</option>
            {city && city.map((ct)=>
            <option value={ct}>{ct}</option>
            )}
        </select>
            <p>{`City: ${cy}`}</p>
    </div>
  )
}

export default Dropdown
