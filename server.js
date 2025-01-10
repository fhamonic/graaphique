"use strict";

let express = require('express');
let mustache = require('mustache-express');
var path = require('path');
let fs = require('fs');

let app = express();

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', './views');

app.set('view engine', 'html');
app.use("/", express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(8000, () => {
    console.log('Listening http://localhost:3000 !');
});