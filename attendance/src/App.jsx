import { useState,useEffect } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Protected from './projected.jsx';
import Home from "./homepage/home.jsx"
import Signup from './signup/signup.jsx';
function App() {
  let[log,setlog]=useState(null)
useEffect(()=>{
async function go(){
let res=await fetch("https://attendancetracker-6pzj.onrender.com");
let data=await res.json();
setlog(data.logged)
}
go();
},[])
useEffect(()=>{
console.log("log:",log)
},[log])
if(log===null) return<div>...loading</div>
 return( 
  <BrowserRouter>
  <Routes>
    
    <Route path="/" element={<Protected islogged={log}><Home/></Protected>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>

    </Routes></BrowserRouter>
 );
}

export default App
