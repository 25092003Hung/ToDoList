var todoList = new taskList();

var textToDo = document.getElementById('newTask').value;

document.getElementById('addItem').onclick = function() {
    console.log(textToDo);
}