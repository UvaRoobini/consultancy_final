const mongoose = require("mongoose")

const SuccessModel = new mongoose.Schema(
    {
        story_name : {type : String},
        img1 : {type : String},
        img2 : {type : String},
        description : {type : String},
    }
)
module.exports = mongoose.model("successtories",SuccessModel);