require("dotenv").config()
let mongoose=require("mongoose");
let express=require("express");
let app=express();
app.listen(3000,()=>{
    console.log("server started")
})
let cors=require("cors")
app.use(cors({
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