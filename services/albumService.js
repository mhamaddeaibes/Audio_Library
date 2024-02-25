const Album = require('./albumsModel'); // Assuming your Album model is defined in albumsModel.js

async function createAlbum(albumData) {
  try {
    const newAlbum = new Album(albumData);
    const savedAlbum = await newAlbum.save();
    return savedAlbum;
  } catch (error) {
    throw new Error(`Error creating album: ${error.message}`);
  }
}

async function getAlbum(albumId) {
  try {
    const album = await Album.findById(albumId);
    if (!album) {
      throw new Error('Album not found');
    }
    return album;
  } catch (error) {
    throw new Error(`Error getting album: ${error.message}`);
  }
}

async function updateAlbum(albumId, albumData) {
  try {
    const updatedAlbum = await Album.findByIdAndUpdate(albumId, albumData, { new: true });
    if (!updatedAlbum) {
      throw new Error('Album not found');
    }
    return updatedAlbum;
  } catch (error) {
    throw new Error(`Error updating album: ${error.message}`);
  }
}

async function deleteAlbum(albumId) {
  try {
    const deletedAlbum = await Album.findByIdAndDelete(albumId);
    if (!deletedAlbum) {
      throw new Error('Album not found');
    }
    return deletedAlbum;
  } catch (error) {
    throw new Error(`Error deleting album: ${error.message}`);
  }
}

module.exports = {
  createAlbum,
  getAlbum,
  updateAlbum,
  deleteAlbum
};
