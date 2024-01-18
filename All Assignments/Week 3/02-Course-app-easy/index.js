const express = require('express');
const app = express();

app.use(express.json()); // get to know why

let ADMINS = [];
let USERS = [];
let COURSES = [];


app.post('/admin/signup', (req, res) => {
    const admin  = req.body;
    const existingAdmin = ADMINS.find( a => a.username === admin.username);
    if(existingAdmin){
        res.status(403).json({message: 'Admin already exits'});
    }else{
        ADMINS.push(admin);
        res.json({message: 'Admin created successfully'})
    }
});