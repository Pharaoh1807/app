const express = require('express');
const expressHandlebars = require('express-handlebars');
const handlebars = expressHandlebars.engine;
const morgan = require('morgan');
const path = require('path')

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'resource/publice')));

// HTTP Logger
app.use(morgan('combined'));

//templet engine

app.engine('hbs', handlebars());
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'))

//API
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});