let mongoose=require("mongoose");
let allsubjectschema= new mongoose.Schema({
    subjectname:String
})
let timetableschema= new mongoose.Schema({
    duration:{
        startdate:Date,
        enddate:Date
    },
    monday:[
        {
            time:String,
            subjectname:String
        }
    ],
     tuesday:[
        {
            time:String,
            subjectname:String
        }
    ],
     wednesday:[
        {
            time:String,
            subjectname:String
        }
    ],
     thursday:[
        {
            time:String,
            subjectname:String
        }
    ],
     friday:[
        {
            time:String,
            subjectname:String
        }
    ],
     saturday:[
        {
            time:String,
            subjectname:String
        }
    ],
     sunday:[
        {
            time:String,
            subjectname:String
        }
    ]
})
let depschema= new mongoose.Schema({
    depname:String,
    section:String,
    allsubject:[allsubjectschema],
    timetable:[timetableschema]

})
module.exports= mongoose.model("department",depschema);