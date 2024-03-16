const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    firstname:{
        type:String,
        required:true,
        unique:true
    },
    lastname:{
        type:String,
        required:true,
        unique:true
    } ,
    createdat:{
        type:date,
        default:Date.now
    }
}) 

const user = mongoose.model("User",userschema);
modules.export = user;