//import
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('../server/Router/userRouter');
const notesRouter = require('../server/Router/notesApp');

//db connection
const DB_Url= process.env.MongoDB_Url;
mongoose.connect(DB_Url, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('were connected!');
});


//middleware
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Routes
app.use('/user', userRouter);
app.use('/api/notes', notesRouter);

app.get('/', (req, res) => {
    res.send('Hello I am from Server');
})

//listen

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('Server is running');
})