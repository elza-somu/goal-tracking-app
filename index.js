const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Public Folders route
app.use(express.static(path.join(__dirname, 'public')));

// Load view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {});
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});