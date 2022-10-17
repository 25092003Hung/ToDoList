var todoList = new taskList();

// var textToDo = document.getElementById('newTask').value;

function addTask() {
    var txtToDo = document.getElementById('newTask').value;
    var ulToDo = document.getElementById('todo');
    if (txtToDo !== ""){
        var td = new task(txtToDo,'todo');
        todoList.addTask(td);
    }
    console.log(td);
}

function showToDoList(ulToDo) {
    ulToDo.innerHTML = todoList.renderTask();
}

document.getElementById('addItem').onclick = function() {
    addTask();
}