var todoList = new taskList();

// var textToDo = document.getElementById('newTask').value;

function addTask() {
    var txtToDo = document.getElementById('newTask').value;
    var ulToDo = document.getElementById('todo');
    if (txtToDo !== ""){
        var td = new task(txtToDo,'todo');
        taskList.addToDo(td);
    }
}

document.getElementById('addItem').onclick = function() {
    console.log(textToDo);
}