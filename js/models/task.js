'use strict';
// Task Model

const Task = (function() {
  var counter = 1
  return class {
    constructor(description, priority, listId){
    this.description = description;
    this.priority = priority;
    this.listId = listId
    this.id = counter++;
    Store.tasks.push(this)

  }

  list(){
    Store.lists.find((l) => {l.id === this.listId})
  }
}
}())
