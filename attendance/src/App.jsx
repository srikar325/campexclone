import { useState,useEffect } from 'react'

import './App.css'

useEffect(()=>{
async function go(){
let res=await fetch("https://attendancetracker-6pzj.onrender.com");
let ans=await res.json();
console.log(ans);
}
go();
},[])
function App() {
 return( 
  <h1>home</h1>  
 );
}

export default App
