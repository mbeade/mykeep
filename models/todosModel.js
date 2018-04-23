const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo: String,
    isDone: Boolean
});

const todoListSchema = new Schema({
    listName: String,
    todos: [todoSchema],
    isComplete: Boolean,
    isImportant: Boolean
});


const TodoList = mongoose.model('TodoList', todoListSchema);

module.exports = TodoList;
