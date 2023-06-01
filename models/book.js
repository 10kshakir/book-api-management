const mongoose = require("mongoose");

const schema = mongoose.Schema({
      title: {
      type: String,
      required: true,     
      trim: true,
    },
    author: {
      type: String,
      required: true,
      maxlength: 100,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      maxlength: 1000,
      trim: true,
      
    },
    publishedYear: {
      type: Number,
      default:0,
      required: false,
    },
});

module.exports = mongoose.model("books", schema);