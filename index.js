require('dotenv').config();

var express     = require('express'),
    app         = express(),
    bodyParser  = require("body-parser"),
    port        = process.env.PORT || 3000;

var todoRoutes = require("./routes/todos");

// enable apps
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// use dirname at all-times to be as specific as possible
// __dirname is where you're starting the server up from
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){
    res.sendFile("index.html");
})

// to use route which has a get route under it
app.use("/api/todos", todoRoutes);

// enable listener
app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
})

