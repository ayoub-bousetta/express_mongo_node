//Call and use bodyParser

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })



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