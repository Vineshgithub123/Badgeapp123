const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Testimony");

const Schema = mongoose.Schema;

const TestimonySchema = new Schema({


    name: String,
    review: String,
    imageurl: String

});

var Testimony = mongoose.model("Testimony", TestimonySchema);

module.exports = Testimony;