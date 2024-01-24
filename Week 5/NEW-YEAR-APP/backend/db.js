const mongoose = require('mongoose');
 
mongoose.connect('mongodb+srv://raghucuchd:u2r4L6NT206L3riE@cluster0.pqlbxv3.mongodb.net/todos')
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}