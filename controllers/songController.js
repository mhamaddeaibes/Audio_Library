const { addSongToAlbum } = require('./songsService');

async function createSong(req, res) {
  try {
    const albumId = req.params.albumId;

    const songData = req.body;

    const newSong = await addSongToAlbum(albumId, songData);

    res.status(201).json(newSong);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createSong
};
