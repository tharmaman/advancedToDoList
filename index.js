require('dotenv').config();

var express = require('express'),
    app     = express(),
    port    = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send({message: "HI FROM JS OBJECT!"});
})

app.get('/happy', function(req, res){
    res.send(":)");
})

app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
})

