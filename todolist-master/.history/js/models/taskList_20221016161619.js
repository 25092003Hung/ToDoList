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
    }
}