require("dotenv").config()
let mongoose=require("mongoose");
let express=require("express");
let app=express();
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{

    console.log("server started")
})
let department=require("./models/depmodel");

let cors=require("cors")
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json());
mongoose.connect(process.env.mongoose_url).then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log("err:",err)
})
let islogged=(req,res,next)=>{
    if(req.isAutenticated){
        res.json({logged:true})
        next()
    }else{
        res.json({logged:false})
    }
}
app.get("/",islogged,(req,res)=>{
res.json({messsage:"home"});
})

