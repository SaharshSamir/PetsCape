const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const requestSchema = new mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "USER",
        required:true
    },
    requirement:{
        type:String,
        required:true
    }
});

const Request = mongoose.model("REQUEST", requestSchema);

module.exports = Request;