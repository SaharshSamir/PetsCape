const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const requestSchema = new mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "USER",
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    from:{
        date:{
            type:String,
            required:true,
        },
        time:{
            type:Number,
            required:true
        },
    },
    to:{
        date:{
            type:String,
            required:true,
        },
        time:{
            type:Number,
            required:true
        },
    },
    price:{
        total:{
            type:Number,
        },
        rate:{
            type:Number,
        },
    },
    workedHours:{
        type:Number
    },
    isComplete:{
        type:Boolean
    },
    review:{
        type: Schema.Types.ObjectId,
        ref: "RATING",
    }
});

const Request = mongoose.model("REQUEST", requestSchema);

module.exports = Request;