const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    name: {
        type: String,
        required: true
      },
      description: String,
      showNbTracks: {
        type: Boolean,
        default: false
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default: Date.now
      },
      lastSongAddedAt: Date
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;
