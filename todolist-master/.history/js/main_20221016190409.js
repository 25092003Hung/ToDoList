var todoList = new taskList();
var completeList = new taskList();

//them task
function addTask() {
    var txtToDo = document.getElementById('newTask').value;
    var ulToDo = document.getElementById('todo');
    if (txtToDo !== "" && !(textToDo in todoList) && !(textToDo in todoList)) {
        var td = new task(txtToDo,'todo');
        todoList.addTask(td);
    }
    console.log(td);
    showToDoList(ulToDo);
    document.getElementById('newTask').value = "";
}
// Hien thi 
function showToDoList(ulToDo) {
    ulToDo.innerHTML = todoList.renderTask();
}
function showCompleteList(ulComplete) {
    ulComplete.innerHTML =  completeList.renderTask();
}

// xoa task


document.getElementById('addItem').onclick = function() {
    addTask();
}