const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const router = require('./backend/routes/router');
const connectDB = require('./backend/database/connection');
const app = express();
dotenv.config({path:'config.env'});
const port = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//connection mongodb
connectDB()

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
