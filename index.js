require('dotenv').config();

var express = require('express'),
              app = express();


app.listen(process.env.PORT, function(){
    console.log("APP IS RUNNING ON PORT " + process.env.PORT);
})

