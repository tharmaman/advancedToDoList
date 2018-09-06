var mongoose    = require('mongoose'),
    url         = process.env.DATABASEURL || "mongodb://localhost/todo-api";

mongoose.set("debug", true);
mongoose.connect(url, { useNewUrlParser: true });

// use promises
mongoose.Promise = Promise;

// grab todo
module.exports.Todo = require("./todo");