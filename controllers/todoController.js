//Call and use bodyParser

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })


// Call mongoose
const mongoose = require('mongoose');

// Connect to DB
mongoose.connect('mongodb://ayoub:123456789.@cluster0-shard-00-00-dccmk.mongodb.net:27017,cluster0-shard-00-01-dccmk.mongodb.net:27017,cluster0-shard-00-02-dccmk.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  } );

 
  const Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;

   // Bleuprint to DB

   const todoSchema = new Schema({
    id: ObjectId,
    title: String,
   
  });
  const todoit = mongoose.model('todo', todoSchema);


var data =[{item:'Eat dinner'},{item:'walk'},{item:'Eat dinner'}]

//App from app.js
module.exports  = function(app){


//set Routes


app.get('/todo',function(req,res){

    res.render('index',{todo : data})
    
})


app.post('/todo',urlencodedParser,function(req,res){

    data.push(req.body)
   
    res.json(data)
    
})


app.delete('/todo/:item',function(req,res){

    data = data.filter(function(todo){
        return todo.item.replace(/ /g, "-") !== req.params.item
    })

    res.json(data)
    
})







}