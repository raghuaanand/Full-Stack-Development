const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());


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
    fs.readFile('todo.json', 'utf-8', (err, data) => {
        if(err) throw err;
        // we use json.parse so that the we return the object otherwise it will return string, do it once by just pasing the data without parsing it.
        res.json(JSON.parse(data));
    })
});




// posting todos into the backend

app.post('/todos', (req,res) => {
    const newTodo = {
        id: Math.floor(Math.random() * 1000000), // a randomly generated unique id
        title: req.body.title,
        description: req.body.description
    };

    fs.readFile('todo.json','utf-8', (err, data) => {
        if(err) throw err;
        const todos = JSON.parse(data);
        todos.push(newTodo);
        fs.writeFile('todo.json', JSON.stringify(todos), (err) => {
            if(err) throw err;
            res.status(201).json(newTodo)
        });
    });
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

app.listen(3000);