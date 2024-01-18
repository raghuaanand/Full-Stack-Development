const express = require('express');
const app = express();

app.use(express.json()); // get to know why

let ADMINS = [];
let USERS = [];
let COURSES = [];


//  this is the middleware which checks the authentication and then the control reaches the routes if the authentication is successful, if the authentication is correct middleware forwards the http requests.

const adminAuthentication = (req, res, next) => {
    const username = req.headers.username;
    const password = req.headers.password;

    //  an alternate for the above code is
    // const {username,password} = req.headers;

    const admin = ADMINS.find(a => a.username === username && a.password === password);
    if(admin){
        next();
    }else{
        res.status(403).json({message: 'Admin authentication falied'})
    }
}

//  SIGNUP

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

// LOGIN

app.post('/admin/login', adminAuthentication, (req, res) => {
    res.json({message: 'Logged in successfully'});
})
  

// ADDING COURSES  


app.post('/admin/courses', adminAuthentication, (req, res) => {
    const course = req.body;
    // if(!course.title){
    //     return res.json(411).send({message: 'please send me the correct title'})
    // }
    course.id = Date.now();  // using time stamp as the ID
    COURSES.push(course);
    res.json({message: 'courses added successfully', courseId: course.id});
});


//  UPDATING COURSES

app.put('/admin/courses/:courseID', adminAuthentication, (req, res) => {
    const courseId = parseInt(req.params.courseID);
    const course = COURSES.find(c => c.id === courseId);
    if(course){
        Object.assign(course, req.body);  // method in JavaScript is used to copy the values of all enumerable own properties from one or more source objects to a target object --> here course is the target and req.body is sources. we can have more than one sources as well.
        res.json({message: 'courses updated successfully'});
    }else{
        res.status(404).json({message:'course is not found'});
    }
});

// GETTING ALL THE COURSES

app.get('/admin/courses', adminAuthentication, (req, res) => {
    res.json({courses: COURSES});
})


/* -------------------USERS---------------- */

// USER SIGNUP

app.post('/user/signup', (req, res) => {
    const user = {...req.body, purchasedCourses: []}  // this is the spread syntax -> it essentially takes all properties of the req.body and adds them to new object

    /* 
        the above one line is equal to the below four lines of code. Google it.

        const user = {
            username: req.body.username,
            password: req.body.password,
            purchasedCourses: []
        }
    */
})
app.listen(3000, () => {
    console.log('successfully started at 3000');
})