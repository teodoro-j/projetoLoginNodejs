const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require("body-parser");
const path = require('path');
const use = require('./routes/login');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 8080;
app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}`)
});

app.get('/', (req,res) => {
    res.render('index');
})

app.get('/senha', (req, res) => {
    res.render('password')
});

app.get('/login/senha', (req, res) => {
    res.render('sendEmail')
});

app.get('/inside/site', (req, res) => {
    res.render('site')
});

app.use("/", require('./routes/login'));
