const Todo = require('./todo.js')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

var task1 = new Todo("vacuum", "high", "j;eagkja", "faehulfw", false)
var task2 = new Todo("vacuum", "high", "j;eagkja", "faehulfw", false)
task1.id = "test"
task2.id = "test2"

var tasks = [task1 , task2]
console.log(tasks)

app.get("/tasks", function(req,res,next) {
    res.json({tasks: tasks})
})

app.get("/tasks", function(req,res,next){
    res.json({
        tasks: tasks
    })
})

app.post("/tasks", function(req,res,next){
    var taskData = req.body
    
    if(taskData){
        var {title,priority,dateCreated} = taskData
        var newTask = new Todo(title,priority,dateCreated,null,false)
        tasks.push(newTask)
        console.log(tasks)
        res.json({
            tasks: tasks
        })
    } else {
        res.json({})
    }
    res.end()
})

app.delete("/tasks/:id", function(req,res,next){
    var taskID = req.params.id
    console.log(taskID)
    tasks = tasks.filter(function(task){
        if(task.id != taskID) {
            return task
        }
    }) 
    console.log(tasks)
    res.end()
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.use(express.static('public'))