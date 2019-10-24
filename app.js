var express = require('express')
var todoController = require('./controllers/todoController');


var app = express();

//set Template Engine

app.set('view engine', 'ejs')

//static files
app.use(express.static('./public'))


//fire Controller

todoController(app)




app.listen ('3000')

console.log('Working on Port: 3000')