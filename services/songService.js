const Song = require('./songModel');

async function addSongToAlbum(albumId, songData) {
  try {
    const newSong = new Song({ ...songData, album: albumId });

    const savedSong = await newSong.save();

    return savedSong;
  } catch (error) {
    throw new Error(`Error adding song to album: ${error.message}`);
  }
}

module.exports = {
  addSongToAlbum
};
