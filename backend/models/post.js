const mongoose = require('mongoose');

//Schema is the blueprint
//Schema() takes an js object that contains custom config
const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema);

