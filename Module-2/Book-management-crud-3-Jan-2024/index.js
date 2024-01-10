
const express = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = 8080;


mongoose.connect('mongodb://localhost/bookstore', { useNewUrlParser: true, useUnifiedTopology: true });

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  ISBN: String,
});


const Book = mongoose.model('Book', bookSchema);


app.use(express.json());


app.get('/', (req, res) => {
  res.send('WELCOME TO BOOKSTORE MANAGEMENT SYSTEM');
});


app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});


app.post('/books/add', validator, async (req, res) => {
  const { title, author, ISBN } = req.body;

  try {
    const newBook = new Book({ title, author, ISBN });
    await newBook.save();
    res.send('Book has been added successfully');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});


app.get('/books/search', async (req, res) => {
  const query = req.query.q;

  try {
    const results = await Book.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { author: { $regex: query, $options: 'i' } },
      ],
    });

    res.json(results);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});


app.put('/books/update/:id', async (req, res) => {
  const bookId = req.params.id;

  try {
    await Book.findByIdAndUpdate(bookId, req.body);
    res.send(`Book with ID ${bookId} has been updated`);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});


app.delete('/books/delete/:id', async (req, res) => {
  const bookId = req.params.id;

  try {
    await Book.findByIdAndRemove(bookId);
    res.send(`Book with ID ${bookId} has been deleted`);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});


app.use((req, res) => {
  res.status(404).send('Invalid Endpoint');
});


function validator(req, res, next) {
  const { title, author, ISBN } = req.body;

  if (!title || !author || !ISBN) {
    return res.status(400).send('Please provide all book details');
  }

  next();
}


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
