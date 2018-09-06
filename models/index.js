var mongoose    = require('mongoose'),
    url         = process.env.DATABASEURL || "mongodb://localhost/todo-api";

mongoose.set("debug", true);
mongoose.connect(url);

// use promises
mongoose.Promise = Promise;

// grab todo
module.exports.Todo = require("./todo");
