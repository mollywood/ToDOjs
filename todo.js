class Todo {
    constructor(title, priority, dateCreated, dateCompleted, isCompleted) {
        this.title = title
        this.priority = priority
        this.dateCreated = dateCreated
        this.dateCompleted = dateCompleted
        this.isCompleted = isCompleted
        this.id = Math.random().toString(26).slice(2)
    }
} 

module.exports = Todo
