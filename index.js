const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

mongoose.connect('mongodb://localhost/tasks');
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
// parse request using body-parser to read the params from request
app.use(bodyparser.urlencoded({extended:true}));


// Load view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));


app.get('/', (req, res) => {
  let tasks =[
    {
      title: 'Learn to Code',
      id: 1,
      hashtag : 'Programming',
      date_created : '2020-Dec-06',
      date_completed : '2020-Dec-06',
      completed : true,
      time_on_task: 5
    }
  ];
  res.render('index',{
    tasks:tasks
  });
}); 
app.get('/add', (req, res) => {
  res.render('add');
});
app.get('/track', (req, res) => {
  res.render('track');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});