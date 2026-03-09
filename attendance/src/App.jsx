import { useState,useEffect } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import{motion} from "motion/react"
import Protected from './projected.jsx';
import Home from "./homepage/home.jsx"
import Signup from './signup/signup.jsx';
function App() {
  let [answer,setanswer]=useState(null);
useEffect(()=>{
async function go(){
let res=await fetch("https://attendancetracker-6pzj.onrender.com");
let data=await res.json();
setanswer(data);
console.log(data);
}
go();
},[])
 return( 
  <BrowserRouter>
  <Routes>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/" element={<Protected islogged={false}><Home/></Protected>}></Route>
    </Routes></BrowserRouter>
 );
}

export default App
