 import React from 'react'
 import { BrowserRouter,Route,Routes } from 'react-router-dom'
 import Signup from './Commponents/Signup';
import Login from './Commponents/Login';
import Home from './Commponents/Home';
import Search from './Commponents/Search';
import Fetch from './Commponents/Fetch';
const App = () => {
   return (
     <div>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/fetch' element={<Fetch/>}/>
            </Routes>
        </BrowserRouter>

     </div>
   )
 }
 
 export default App
 