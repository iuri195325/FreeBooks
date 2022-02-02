const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Category = require('./controllers/categoriesController/categorys');
const Livros = require('./controllers/livrosController/livros');
const homeController = require('./controllers/livrosController/home');
const categoriesController = require('./controllers/categoriesController/controllerCategory')


app.set('views', './views');
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', homeController);
app.use('/', categoriesController);

app.listen(8181, () => {
    console.log("Iniciado");
});
