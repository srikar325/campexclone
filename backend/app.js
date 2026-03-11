require("dotenv").config()
let mongoose=require("mongoose");
let express=require("express");
let app=express();
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("server started")
})
let department=require("./models/depmodel");
let student=require("./models/student");
let session=require("express-session");
app.use(session({
    secret:"mcdonalds",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:180*24*60*60*10000
    }
}))

let passport=require("passport");
let localstrat=require("passport-local");
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localstrat(student.authenticate()));
passport.serializeUser(student.serializeUser());
passport.deserializeUser(student.deserializeUser());
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
    if(req.isAuthenticated()){
        next()
    }else{
        res.json({logged:false})
    }
}
app.get("/",islogged,(req,res)=>{
res.json({logged:true});
})
app.post("/signup",(req,res)=>{
    console.log(req.body);

})

