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
    }
    for (var value of completeList.arr) {
        if(value.taskName === txtToDo){
            isTaskName = true;
            break;
        }
    }
    if (txtToDo !== "" && isTaskName == false) {
        var td = new task(txtToDo,'todo');
        todoList.addTask(td);
    }
    // console.log(todoList.arr);
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
function deleteToDo(id,e) {
    var taskStatus = currentTarget.getAttribute('data-status');
    var ulToDo = document.getElementById('todo');
    var ulComplete = document.getElementById('completed');
    if (taskStatus == "todo"){
        var key = todoList.findIndex(id);
        todoList.deleteTask(key);
        showToDoList(ulToDo);
    }
    if(taskStatus == "completed"){
        var key = completeList.findIndex(id);
        todoList.deleteTask(key);
        showCompleteList(ulComplete);
    }
}


document.getElementById('addItem').onclick = function() {
    addTask();
}
