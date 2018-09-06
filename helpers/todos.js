var db = require("../models");

exports.getTodos = function(req, res){
    db.Todo.find()
    .then(function(todos){
        // check for res.json(todos)
        res.send(todos);
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.createTodo = function(req, res){
    console.log(req.body);
    db.Todo.create(req.body)
    .then(function(newTodo){
        // check for res.json(newTodo())
        // status 201 means created
        res.status(201).send(newTodo);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.getTodo = function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.send(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.updateTodo = function(req, res){
    // default responds with old data unless you add {new:true}
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(foundTodo){
        res.send(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.deleteTodo = function(req, res){
    db.Todo.findByIdAndRemove({_id: req.params.todoId})
    .then(function(){
        res.send({message: "its gone"});
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports = exports;