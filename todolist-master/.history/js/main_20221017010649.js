var todoList = new taskList();
var completeList = new taskList();

//them task
function addTask() {
  var txtToDo = document.getElementById("newTask").value;
  var ulToDo = document.getElementById("todo");
  var isTaskName = false;
  for (var value of todoList.arr) {
    if (value.taskName === txtToDo) {
      isTaskName = true;
      break;
    }
  }
  for (var value of completeList.arr) {
    if (value.taskName === txtToDo) {
      isTaskName = true;
      break;
    }
  }
  if (txtToDo !== "" && isTaskName == false) {
    var td = new task(txtToDo, "todo");
    todoList.addTask(td);
    setLocalStorage();
  }
  // console.log(todoList.arr);
  showToDoList();
  ulToDo.innerHTML = renderTask(todoList.arr);
  document.getElementById("newTask").value = "";
}
// Hien thi
function showToDoList() {
  var ulToDo = document.getElementById("todo");
  ulToDo.innerHTML = renderTask(todoList.arr);
}
function showCompleteList() {
  var ulComplete = document.getElementById("completed");
  ulComplete.innerHTML = renderTask(completeList.arr);
}

function setLocalStorage() {
  var stringArrToDo = JSON.stringify(todoList.arr);
  var stringArrComplete = JSON.stringify(completeList.arr);

  localStorage.setItem("todoList", stringArrToDo);
  localStorage.setItem("completeList", stringArrComplete);
}

function getLocalStorage() {
  if (localStorage.getItem("todoList")) {
    var stringArrToDo = localStorage.getItem("todoList");
    todoList.arr = JSON.parse(stringArrToDo);
    showToDoList();
  }
  if (localStorage.getItem("completeList")) {
    var stringArrComplete = localStorage.getItem("completeList");
    completeList.arr = JSON.parse(stringArrComplete);
    showCompleteList();
  }
}

function renderTask(arrTask) {
  var content = "";
  //Duyệt mảng từ phải qua trái (bắt đầu ở phần tử cuối mảng)
  content = arrTask.reduceRight((tdContent, item, index) => {
    //tdContent = tdContent(noi dung cũ) + `nội dung mới`;
    tdContent += `
           <li>
               <span>${item.taskName}</span>
               <div class="buttons">
                   <button class="remove" data-index="${index}" data-status="${item.status}" onclick="deleteToDo(${item.id},event)">
                       <i class="fa fa-trash-alt"></i>
                   </button>
                   <button class="complete" data-index="${index}"  data-status="${item.status}" onclick="completeToDo(${item.id}, event)">
                       <i class="far fa-check-circle"></i>
                       <i class="fas fa-check-circle"></i>
                   </button>
               </div>
           </li>
       `;
    return tdContent;
  }, "");
  return content;
}
function completeToDo(id, e) {
    var status = e.currentTarget.getAttribute("data-status");
    if (status == "todo") {
        var keyToDo = todoList.findIndex(id);
        var completedItem = todoList.arr.slice(keyToDo, keyToDo + 1);
        var objToDo = new task(completedItem[0].taskName,"completed");
        moveToDo(todoList,completeList,objToDo, keyToDo);
        showToDoList();
        showCompleteList();
    }

    if (status == "completed") {
        var keyComplete = completeList.findIndex(id);
        var todoItem = completeList.arr.slice(keyComplete, keyComplete+1);
        var objComplete = new task(todoItem[0].taskName,"todo");
        moveToDo(completeList,todoList,objComplete, keyComplete);
        showToDoList();
        showCompleteList();
    }
    setLocalStorage();
}

function moveToDo(sour,des,obj, index) {
    sour.deleteTask(index);
    des.addTask(obj);
}




// xoa task
function deleteToDo(id, e) {
  var taskStatus = e.currentTarget.getAttribute("data-status");
  if (taskStatus == "todo") {
    var key = todoList.findIndex(id);
    todoList.deleteTask(key);
    showToDoList();
  }
  if (taskStatus == "completed") {
    var key = completeList.findIndex(id);
    completeList.deleteTask(key);
    showCompleteList();
  }
  setLocalStorage();
}



document.getElementById("addItem").onclick = function () {
  addTask();
};

getLocalStorage();
