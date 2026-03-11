import "./signup.css"
import{useState} from "react";
import TextField from "@mui/material/TextField";
import {  InputLabel, Select, MenuItem } from "@mui/material";


function Signup (){
   let[formdata,setformdata]=useState({
      username:"",
      name:"",
      email:"",
      department:"",
      section:"",
      password:""
   })
   let[formsubmit,setformsubmit]=useState(false);
   function submit(event){
            setformsubmit(true);
      event.preventDefault();
      console.log(formdata);
   }
   function change(event){
      setformdata((prev)=>{
         return{...prev,[event.target.name]:event.target.value}
      })
   }
   return(
      <div className="main">
         <div className="signup">
            <form onSubmit={submit}>
               <input placeholder="enter rollno" ></input>
                              <input placeholder="enter name"></input>
               <input placeholder="enter password"></input>
               <input placeholder="enter email"></input>

            </form>
         </div>
      </div>
   );
}
export default Signup;