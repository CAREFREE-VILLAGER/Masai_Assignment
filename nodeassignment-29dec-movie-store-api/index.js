
const express = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = 3000;


mongoose.connect('mongodb://localhost/movie_store', { useNewUrlParser: true, useUnifiedTopology: true });


const movieSchema = new mongoose.Schema({
  title: String,
  rating: Number,
  releaseDate: Date,
});


const Movie = mongoose.model('Movie', movieSchema);


app.use(express.json());


app.post('/movies', async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a new movie' });
  }
});


app.get('/movies', async (req, res) => {
  try {
    const { title, rating, q, sortBy, page, limit } = req.query;
    const filter = {};

    if (title) filter.title = { $regex: new RegExp(title, 'i') };
    if (rating) filter.rating = rating;
    if (q) filter.$or = [{ title: { $regex: new RegExp(q, 'i') } }];

    const sort = sortBy ? { [sortBy]: 1 } : {};

    const movies = await Movie.find(filter)
      .sort(sort)
      .skip(parseInt(page) * parseInt(limit))
      .limit(parseInt(limit));

    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve movies' });
  }
});

app.get('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      res.status(404).json({ error: 'Movie not found' });
    } else {
      res.json(movie);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve the movie' });
  }
});


app.put('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!movie) {
      res.status(404).json({ error: 'Movie not found' });
    } else {
      res.json(movie);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the movie' });
  }
});


app.delete('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      res.status(404).json({ error: 'Movie not found' });
    } else {
      res.json({ message: 'Movie deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the movie' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
