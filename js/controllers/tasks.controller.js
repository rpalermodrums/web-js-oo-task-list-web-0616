'use strict';
// Tasks Controller
function tasksController() {
  var description = $('#task_description').val()
  var priority = $('#task_priority').val()
  var listId = $('#select_list').val()

  var task = new Task(description, priority, listId)
  $(`#list-${listId}`).append(`<li>${description}, ${priority}</li>`)

  var list = task.list()



}
