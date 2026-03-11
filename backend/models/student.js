let mongoose=require("mongoose");
let passportlm=require("passport-local-mongoose").default;
let subjectschema= new mongoose.Schema({
    subjectname:String,
    present:{
        type:Number,
        default:0
    },
        absent:{
        type:Number,
        default:0
    }
})
let studentschema= new mongoose.Schema({
    username:String,
    email:String,
    depname:String,
    section:String,
    subjects:[subjectschema]

})
studentschema.plugin(passportlm);
module.exports=mongoose.model("student",studentschema);