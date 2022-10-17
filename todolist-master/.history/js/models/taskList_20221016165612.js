function taskList() {
    this.arr = [];
    this.findIndex = function(index) {
        var idTask;
        for(var [id,value] of arr.entries()) {
            if (value.id === index) {
                idTask = id;
                return idTask;
            }
        }
    };
    this.addTask = function(todo) {
        this.arr.push(todo);
    }
    this.deleteTask = function(index) {
        this.arr.splice(index,1);
    };
    this.getTaskById = function(index) {
        return arr[index];
    };
    this.renderTask = function() {
        var content = '';
         //Duyệt mảng từ phải qua trái (bắt đầu ở phần tử cuối mảng)
         content = this.arr.reduceRight((tdContent, item, index) => {
            //tdContent = tdContent(noi dung cũ) + `nội dung mới`;
            tdContent += `
                <li>
                    <span>${item.taskName}</span>
                    <div class="buttons">
                        <button class="remove" data-index="${index}" data-status="${item.status}" onclick="deleteToDo(${this.arr.id})">
                            <i class="fa fa-trash-alt"></i>
                        </button>
                        <button class="complete" data-index="${index}"  data-status="${item.status}" onclick="completeToDo(event)" >
                            <i class="far fa-check-circle"></i>
                            <i class="fas fa-check-circle"></i>
                        </button>
                    </div>
                </li>
            `;
            return tdContent;
        }, '');
        return content;
    }
}