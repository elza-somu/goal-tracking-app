const express = require('express');
const morgan = require('morgan');
const router = require('./backend/routes/router');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

// parse application
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// connecting mongoose to database
mongoose.connect('mongodb+srv://elza:@cluster0.oxzbn.mongodb.net/vtracker?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connect to db")
});

// All middlewares
// Public Folders route
app.use(express.static(path.join(__dirname, 'public')));
// To log server req/response
app.use(morgan('tiny'));

// Load view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));


// load routers from router.js
app.use('/',router);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
