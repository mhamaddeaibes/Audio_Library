const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;
const { addCategory } = require('./services/categoryService');
const { createAlbum, deleteAlbum, updateAlbum } = require('./albumService');
const { addSongToAlbum, deleteSong } = require('./songService');
const mongoConnect = require('./util/database');
const categoryRoutes = require('./categoryRoutes');
const categoryModel = require('./categoryModels');
app.use('/api/categories', categoryRoutes);

mongoose.connect('mongodb://localhost:27017/audio_library', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.get('/', (req, res) => {
    res.send('Welcome to the Audio Library!');
  });
  
  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
  mongoConnect(client => {
    console.log(client);
    app.listen(3000);
  });
  //test case
  async function testCase() {
    try {
      //Create a category in the DB named "Pop" with any description
      const popCategory = await addCategory({ name: 'Pop', description: 'Pop music category' });
      console.log('Created Pop category:', popCategory);
      //Create a category in the DB named "Jazz" with any description.
      const jazzCategory = await addCategory({ name: 'Jazz', description: 'Jazz music category' });
      console.log('Created Jazz category:', jazzCategory);
  
      //Create an album in the DB named "My Album" with any description and add 3 songs to it with the category "pop".
      const myAlbum = await createAlbum({ title: 'My Album', description: 'My Album description' });
      console.log('Created My Album:', myAlbum);
      //Create an album in the DB name "Temp Album"  with any description and add 3 songs to it with the category "Jazz".
      const tempAlbum = await createAlbum({ title: 'Temp Album', description: 'Temp Album description' });
      console.log('Created Temp Album:', tempAlbum);
  
      //adding
      for (let i = 0; i < 3; i++) {
        const songData = {
          title: `Song ${i + 1}`,
          artist: 'Artist Name',
          category: popCategory._id // Assigning Pop category to songs
        };
        const newSong = await addSongToAlbum(myAlbum._id, songData);
        console.log(`Added Song ${i + 1} to My Album:`, newSong);
      }
  
      // Add songs to Temp Album with category "Jazz"
      for (let i = 0; i < 3; i++) {
        const songData = {
          title: `Song ${i + 1}`,
          artist: 'Artist Name',
          category: jazzCategory._id // Assigning Jazz category to songs
        };
        const newSong = await addSongToAlbum(tempAlbum._id, songData);
        console.log(`Added Song ${i + 1} to Temp Album:`, newSong);
      }
  
      // Update albums when adding songs (Not explicitly needed if updating the necessary fields during song addition)
  
      //Delete the second album
      const deletedAlbum = await deleteAlbum(tempAlbum._id);
      console.log('Deleted Temp Album:', deletedAlbum);
  
      //Delete the final song of the first album
      const myAlbumSongs = await getAlbumSongs(myAlbum._id); // Assuming you have a function to get songs of an album
      const lastSongId = myAlbumSongs[myAlbumSongs.length - 1]._id;
      const deletedSong = await deleteSong(lastSongId);
      console.log('Deleted final song of My Album:', deletedSong);
    } catch (error) {
      console.error('Error in testCase:', error);
    }
  }

  testCase();
  