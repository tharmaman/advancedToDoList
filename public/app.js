$(document).ready(function(){
    // request /api/todos
    $.getJSON("/api/todos")
    .then(addTodos)
    .catch(handleErr(handleErr))

    $("#todoInput").keypress(function(event){
        if (event.which === 13){
            createTodo();
        }
    })
});

function addTodos(todos){
    // add todos to page here
    todos.forEach(function(todo){
        addTodo(todo);
    });
}

function addTodo(todo){
    var newTodo = $("<li class = 'task'>" + todo.name + "</li>");
    if(todo.completed){
        newTodo.addClass("done");
    }
    $(".list").append(newTodo); 
}

function handleErr(err){
    console.log(err);
}

function createTodo(){
    var userInput = $("#todoInput").val();
    // post to /api/todos
    $.post('/api/todos', {name: userInput})
    .then(function(newTodo){
        $("#todoInput").val('');
        addTodo(newTodo);
    })
    .catch(function(err){
        console.log(err);
    })
}