'use strict';
// Lists Controller
var listsController = (function (){
  function create (){
    var title = $('#list_title').val()
    var list = new List(title)
    $('#lists').append(`<div class="list"> <button class='delete_list' value='${list.id}'>X</button><h2> ${title} </h2><ul id='list-${list.id}'></ul> </div> `)
    $('#select_list').append(`<option value = ${list.id}>${title}</option>`)
  }

  function destroy(){
    // debugger
    var textId = event.target.value
    // debugger
    var id = parseInt(textId)
    delete Store.lists[id - 1]
  }

  return{
    create,
    destroy
  }
}())
