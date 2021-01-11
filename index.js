const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const router = require('./backend/routes/router');
const app = express();
const port = 3000;
const path = require('path');

// All middlewares
// Public Folders route
app.use(express.static(path.join(__dirname, 'public')));
// To log server req/response
app.use(morgan('tiny'));
// parse request using body-parser to read the params from request
app.use(bodyparser.urlencoded({extended:true}));


// Load view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));

// load routers from router.js
app.use('/',router);

app.listen(port, () => {
  console.log(`Server running on port number ${port}`);
});