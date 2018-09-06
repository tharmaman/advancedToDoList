require('dotenv').config();

var express     = require('express'),
    app         = express(),
    bodyParser  = require("body-parser"),
    port        = process.env.PORT || 3000;

var todoRoutes = require("./routes/todos");

// enable body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.send("HELLO FROM THE ROOT ROUTE");
})

// to use route which has a get route under it
app.use("/api/todos", todoRoutes);

// enable listener
app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
})

