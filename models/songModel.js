const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    name: {
        type: String,
        required: true
      },
      singer: String,
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
      },
      album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album'
      }
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
