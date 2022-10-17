var todoList = new taskList();
var completeList = new taskList();

//them task
function addTask() {
    var txtToDo = document.getElementById('newTask').value;
    var ulToDo = document.getElementById('todo');
    var isTaskName = false;
    for (var value of todoList.arr) {
        if(value.taskName === txtToDo){
            isTaskName = true;
            break;
        }
        isTaskName = false;
    }
    for (var value of completeList.arr) {
        if(value.taskName === txtToDo){
            isTaskName = true;
            break;
        }
        isTaskName = false;
    }
    if (txtToDo !== "" && isTaskName == false) {
        var td = new task(txtToDo,'todo');
        todoList.addTask(td);
    }
    console.log(todoList.arr);
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
