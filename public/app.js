$(document).ready(function(){
    // request /api/todos
    $.getJSON("/api/todos")
    .then(addTodos)
    .catch(handleErr(err))
});

function addTodos(todos){
    // add todos to page here
    todos.forEach(function(todo){
        var newTodo = $("<li class = 'task'>" + todo.name + "</li>");
        $(".list").append(newTodo); 
    });
}

function handleErr(err){
    res.send(err);
}