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

    $(".list").on("click", "span", function(){
        var toBeRemoved = $(this).parent();
        removeTodo(toBeRemoved);
    })
});

function addTodos(todos){
    // add todos to page here
    todos.forEach(function(todo){
        addTodo(todo);
    });
}

function addTodo(todo){
    var newTodo = $("<li class = 'task'>" + todo.name + "<span>X</span></li>");
    newTodo.data("id",todo._id);
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

function removeTodo(todo){
    var clickedId = todo.data("id"); 
    var deleteURL = "/api/todos/" +  clickedId;
    $.ajax({
        method: "DELETE",
        url: deleteURL
    })
    .then(function(data){
        console.log(data);
        todo.remove();
    })
    .catch(function(err){
        console.log(err);
    })
}