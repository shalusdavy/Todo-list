const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  describtion: String,
  title:String,
  Date:Number,
});

const Todo = mongoose.model("Contact", TodoSchema);

module.exports = Todo;
