// Initialize

const Store = {
  tasks: [],
  lists: []
}



$(document).ready(function(){
  $('#add_list').on('submit', function(){
    event.preventDefault();
    listsController.create()
    $("#add_list input[type='text']").val('')

    $('button').on('click', function(){
      alert(event.target.value)
      listsController.destroy();
    })
  })
  $('#add_task').on('submit', function() {
    event.preventDefault();
    tasksController()
    $("#add_task input[type='text']").val('')
    $("#select_list").val('1')
  })

})



// $(function() { // on document ready
//   listController = new listsController();
//   listController.init();
//   tasksController = new tasksController();
//   tasksController.init();
// });
