const mongoose = require("mongoose");

const commentsForNewsChema = mongoose.Schema({
  name: String,
  text: String,
  newsId : {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'News'
  }
});


const Comments = mongoose.model('Comments', commentsForNewsChema);

module.exports = Comments;