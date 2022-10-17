function taskList() {
    this.arr = [];
    this.findIndex = function(index) {
        var idTask;
        for(var id of arr) {
            if (id === index) {
                idTask = id;
                return idTask;
            }
        }
    };
    this.addTask = function(todo) {
        this.arr.push(todo);
    }
    this.removeTask(index) {
        this.arr.splice(index,1);
    }
}