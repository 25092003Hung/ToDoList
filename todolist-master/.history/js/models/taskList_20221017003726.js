function taskList() {
    this.arr = [];
    this.findIndex = function(id) {
        var indexTask;
        for(var [key,value] of this.arr.entries()) {
            if (value.id === id) {
                indexTask = key;
                return indexTask;
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
        var key = this.findIndex(index);
        this.arr[key];
    };
    this.update = function(id,status) {
        for (var value of this.arr.entries()){

        }
    }
}