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
    this.removeTask = function(index) {
        this.arr.splice(index,1);
    };
}