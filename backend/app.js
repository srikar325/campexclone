require("dotenv").config()
let mongoose=require("mongoose");
let express=require("express");
let app=express();
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{

    console.log("server started")
})

let cors=require("cors")
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
mongoose.connect(process.env.mongoose_url).then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log("err:",err)
})
app.get("/",(req,res)=>{
res.json({messsage:"home"});
})