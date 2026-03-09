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
let department=require("./models/depmodel");
app.get("/dep",async (req,res)=>{
let dep = new department({
  depname: "aids",
  section: "c",

  allsubject: [
    { subjectname: "introduction to datascience" },
    { subjectname: "probability and statistics" },
    { subjectname: "software engineering" },
    { subjectname: "database management systems" },
    { subjectname: "management science" },
    { subjectname: "environmental science" },
    { subjectname: "introduction to datasciencelab" },
    { subjectname: "database management systemslab" },
    { subjectname: "software engineeringlab" },
    { subjectname: "advanced javaprogramminglab" }
  ],

  timetable: [

    // OLD TIMETABLE
    {
      duration: {
        startdate: new Date("2025-12-10"),
        enddate: new Date("2026-01-18")
      },

      monday: [
        { subjectname: "introduction to datascience", time: "10:05am-10:55am" },
        { subjectname: "software engineeringlab", time: "10:55am-12:35pm" },
        { subjectname: "management science", time: "1:30pm-2:20pm" },
        { subjectname: "software engineering", time: "2:20pm-3:10pm" },
        { subjectname: "probability and statistics", time: "3:10pm-4:00pm" }
      ],

      tuesday: [
        { subjectname: "software engineering", time: "10:05am-10:55am" },
        { subjectname: "database management systems", time: "10:55am-11:45am" },
        { subjectname: "management science", time: "11:45am-12:35pm" },
        { subjectname: "probability and statistics", time: "1:30pm-2:20pm" },
        { subjectname: "advanced javaprogramminglab", time: "2:20pm-4:00pm" }
      ],

      wednesday: [
        { subjectname: "software engineering", time: "10:05am-10:55am" },
        { subjectname: "database management systemslab", time: "10:55am-12:35pm" },
        { subjectname: "database management systems", time: "1:30pm-2:20pm" },
        { subjectname: "introduction to datascience", time: "2:20pm-3:10pm" }
      ],

      thursday: [
        { subjectname: "probability and statistics", time: "9:15am-10:05am" },
        { subjectname: "database management systems", time: "10:05am-10:55am" },
        { subjectname: "introduction to datascience", time: "10:55am-11:45am" },
        { subjectname: "software engineering", time: "11:45am-12:35pm" },
        { subjectname: "environmental science", time: "1:30pm-2:20pm" },
        { subjectname: "probability and statistics", time: "2:20pm-3:10pm" }
      ],

      friday: [
        { subjectname: "introduction to datasciencelab", time: "9:15am-10:05am" },
        { subjectname: "database management systems", time: "10:55am-11:45am" },
        { subjectname: "introduction to datascience", time: "11:45am-12:35pm" },
        { subjectname: "environmental science", time: "1:30pm-2:20pm" },
        { subjectname: "management science", time: "2:20pm-3:10pm" },
        { subjectname: "introduction to datascience", time: "3:10pm-4:00pm" }
      ],

      saturday: [
        { subjectname: "software engineering", time: "9:15am-10:05am" },
        { subjectname: "database management systems", time: "10:05am-10:55am" },
        { subjectname: "management science", time: "10:55am-11:45am" },
        { subjectname: "probability and statistics", time: "11:45am-12:35pm" }
      ],

      sunday: []
    },


    // NEW TIMETABLE
    {
      duration: {
        startdate: new Date("2026-01-19"),
        enddate: new Date("2026-05-16")
      },

      monday: [
        { subjectname: "introduction to datascience", time: "9:15am-10:05am" },
        { subjectname: "management science", time: "10:05am-10:55am" },
        { subjectname: "software engineeringlab", time: "10:55am-12:35pm" },
        { subjectname: "software engineering", time: "2:20pm-3:10pm" },
        { subjectname: "probability and statistics", time: "3:10pm-4:00pm" }
      ],

      tuesday: [
        { subjectname: "software engineering", time: "10:05am-10:55am" },
        { subjectname: "probability and statistics", time: "10:55am-11:45am" },
        { subjectname: "management science", time: "11:45am-12:35pm" },
        { subjectname: "probability and statistics", time: "1:30pm-2:20pm" },
        { subjectname: "advanced javaprogramminglab", time: "2:20pm-4:00pm" }
      ],

      wednesday: [
        { subjectname: "software engineering", time: "10:05am-10:55am" },
        { subjectname: "database management systemslab", time: "10:55am-12:35pm" },
        { subjectname: "database management systems", time: "1:30pm-2:20pm" },
        { subjectname: "introduction to datascience", time: "2:20pm-3:10pm" },
        { subjectname: "database management systems", time: "3:10pm-4:00pm" }
      ],

      thursday: [
        { subjectname: "probability and statistics", time: "9:15am-10:05am" },
        { subjectname: "database management systems", time: "10:05am-10:55am" },
        { subjectname: "introduction to datascience", time: "10:55am-11:45am" },
        { subjectname: "software engineering", time: "11:45am-12:35pm" },
        { subjectname: "environmental science", time: "1:30pm-2:20pm" },
        { subjectname: "introduction to datascience", time: "2:20pm-3:10pm" }
      ],

      friday: [
        { subjectname: "introduction to datasciencelab", time: "9:15am-10:05am" },
        { subjectname: "database management systems", time: "10:55am-11:45am" },
        { subjectname: "introduction to datascience", time: "11:45am-12:35pm" },
        { subjectname: "environmental science", time: "1:30pm-2:20pm" },
        { subjectname: "management science", time: "2:20pm-3:10pm" }
      ],

      saturday: [
        { subjectname: "software engineering", time: "9:15am-10:05am" },
        { subjectname: "database management systems", time: "10:05am-10:55am" },
        { subjectname: "management science", time: "10:55am-11:45am" },
        { subjectname: "probability and statistics", time: "11:45am-12:35pm" }
      ],

      sunday: []
    }

  ]
})

await dep.save()
res.send("done")
})