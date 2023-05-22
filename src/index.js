const express = require('express');
const expressHandlebars = require('express-handlebars');
const handlebars = expressHandlebars.engine;
const morgan = require('morgan');
const path = require('path');
const db = require('./config/db')

// Connect to DB
db.connect();


const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'resource/publice')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// HTTP Logger
// app.use(morgan('combined'));

//templet engine

app.engine('hbs', handlebars());
app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource','views'));

//Routes init

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
