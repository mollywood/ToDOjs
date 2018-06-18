let title = document.getElementById('title')
let priority = document.getElementById('priority')
let dateCreated = document.getElementById('dateCreated')
let taskForm = document.getElementById('taskForm')

taskForm.addEventListener('submit', function(e){
    e.preventDefault()
    var title = e.target.title.value
    var priority = e.target.priority.value
    var dateCreated = e.target.dateCreated.value
    fetch('http://localhost:3000/tasks',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            title : title, priority : priority, dateCreated : dateCreated
        })
    }).then(function(response){
        return response.json()
    }).then(function(response){
        displayTodos(response.tasks)
    })

})

function removeTodoItem(taskID) {
    todos["/tasks"].splice(taskID, 1)
  }

function displayTodos(todos) {

    let html = ''

    todos.forEach(function(todoItem){
        html += `<li><input type="checkbox"> ${todoItem.title} - Priority: ${todoItem.priority} - Date Created: ${todoItem.dateCreated}</li><button onclick="removeTodoItem('${todoItem.taskID}')">Remove</button>`
    })

    todoList.innerHTML = html
}