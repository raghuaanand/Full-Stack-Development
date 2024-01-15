const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

// lets requests to come from anywhere, not secure
// const cors = require('cors');

app.use(bodyParser.json());
// app.use(cors());

function findIndex(arr, id){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].id === id) return i;
    }
    return -1;
}

function removeAtIndex(arr, index){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(i !== index) newArray.push(arr[i]);
    }
    return newArray;
}


// gets all the current todos stored
app.get('/todos', (req, res) => {
    res.json(todos);
});


// to get a particular todo from the todo list
app.get('/todos/:id', (req, res) => {
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if(todoIndex === -1){
        res.status(404).send();
    }else{
        res.json(todos[todoIndex]);
    }
});

// posting todos into the backend

app.post('/todos', (req,res) => {
    const newTodo = {
        id: Math.floor(Math.random() * 1000000), // a randomly generated unique id
        title: req.body.title,
        description: req.body.description
    };
    todos.push(newTodo);
    res.status(200).json(newTodo);
});

// deleting the todos created

app.delete('/todos/:id', (req, res) => {
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if(todoIndex === -1){
        res.status(404).send();
    }else{
        todos = removeAtIndex(todos, todoIndex);
        res.status(200).send();
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000);