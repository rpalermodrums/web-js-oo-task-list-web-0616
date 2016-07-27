'use strict';
// List Model


const List = (function(){
  var counter = 1
  return class {
    constructor(title){
      this.title = title;
      this.id = counter++;
      this.tasks = [];
      Store.lists.push(this)

    }

    find_by_id(id){
      return Store.lists.find((l) => {return l.id === id})
    }

  }
}())
