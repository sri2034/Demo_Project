const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name: {type:String},
    email: {type:String},
    rollNo:{type:Number}
},{
    collection: "student"
});

module.exports = mongoose.model("schemaName",schema);