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
  //   showToDoList(ulToDo);
  ulToDo.innerHTML = renderTask(todoList.arr);
  document.getElementById("newTask").value = "";
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
    document.getElementById("todo").innerHTML = renderTask(todoList.arr);
  }
  if (localStorage.getItem("completeList")) {
    var stringArrComplete = localStorage.getItem("completeList");
    completeList.arr = JSON.parse(stringArrComplete);
    document.getElementById("completed").innerHTML = renderTask(
      completeList.arr
    );
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
                   <button class="complete" data-index="${index}"  data-status="${item.status}" onclick="completeToDo(${item.id})" >
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

// xoa task
function deleteToDo(id, e) {
  var taskStatus = e.currentTarget.getAttribute("data-status");
  var ulToDo = document.getElementById("todo");
  var ulComplete = document.getElementById("completed");
  if (taskStatus == "todo") {
    var key = todoList.findIndex(id);
    todoList.deleteTask(key);
    showToDoList(ulToDo);
  }
  if (taskStatus == "completed") {
    var key = completeList.findIndex(id);
    todoList.deleteTask(key);
    showCompleteList(ulComplete);
  }
  setLocalStorage();
}

document.getElementById("addItem").onclick = function () {
  addTask();
};

getLocalStorage();
