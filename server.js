const express = require('express');
const cors = require('cors')
const mongoose = require ('mongoose');
const dotenv = require('dotenv')
const booksController = require('./controllers/books_controller');

dotenv.config();
const PORT = process.env.PORT
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.Mongo_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connected to MongoDB on:', process.env.Mongo_URI);
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    })

app.get('/', (req, res) => {
    res.send('hello world');
})

app.use('/books', booksController);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});