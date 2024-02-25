const { createAlbum,getAlbum,deleteSong,addSongToAlbum, getAlbum, updateAlbum, deleteAlbum } = require('./albumsService');

async function createAlbumHandler(req, res) {
  try {
    const albumData = req.body;
    const newAlbum = await createAlbum(albumData);
    res.status(201).json(newAlbum);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAlbumHandler(req, res) {
  try {
    const albumId = req.params.id;
    const album = await getAlbum(albumId);
    res.status(200).json(album);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function updateAlbumHandler(req, res) {
  try {
    const albumId = req.params.id; 
    const albumData = req.body;
    const updatedAlbum = await updateAlbum(albumId, albumData);
    res.status(200).json(updatedAlbum);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function deleteAlbumHandler(req, res) {
  try {
    const albumId = req.params.id;
    const deletedAlbum = await deleteAlbum(albumId);
    res.status(200).json(deletedAlbum);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}
async function addSongToAlbumHandler(req, res) {
    try {
      const albumId = req.params.albumId;
      const songData = req.body; 
      const newSong = await addSongToAlbum(albumId, songData);
  
      res.status(201).json(newSong);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async function deleteSongFromAlbumHandler(req, res) {
    try {
      const albumId = req.params.albumId;
      const songId = req.params.songId; 
      const deletedSong = await deleteSong(songId);
  
      res.status(200).json(deletedSong);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async function getAlbumByIdHandler(req, res) {
    try {
      const albumId = req.params.albumId;
  
      const album = await getAlbum(albumId);
  
      const basicAlbumInfo = {
        id: album._id,
        title: album.title,
        artist: album.artist,
      };
  
      res.status(200).json(basicAlbumInfo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

module.exports = {
  createAlbumHandler,
  getAlbumHandler,
  updateAlbumHandler,
  deleteAlbumHandler,
  addSongToAlbumHandler,
  deleteSongFromAlbumHandler,
  getAlbumByIdHandler
};
