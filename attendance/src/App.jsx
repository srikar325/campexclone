import { useState,useEffect } from 'react'

function App() {


  let [answer,setanswer]=useState(null);
useEffect(()=>{
async function go(){
let res=await fetch("https://attendancetracker-6pzj.onrender.com");
answer=await res.json();
answer?console.log(answer):console.log(" ..loading");
}
go();
},[])
 return( 
  <h1>home</h1>  
 );
}

export default App
