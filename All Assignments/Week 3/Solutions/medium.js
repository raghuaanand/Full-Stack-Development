const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json()); // get to know why

let ADMINS = [];
let USERS = [];
let COURSES = [];


const secretKey = 'SuperS3cr3t1'; //replace this with any secret key


// creates token using the sign method

const generateJWT = (user) => {
    const payload = { username: user.username};
    return jwt.sign(payload, secretKey, {expiresIn: '1h'}); // this token will expire in one hour
}

// verifies the token using the verify method
// now you can see that this is same for the admin and user routes

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(authHeader){
        const token = authHeader.split(' ')[1]; 

        jwt.verify(token, secretKey, (err, user) =>{
            if(err){
                return res.sendStatus(403);
            }else{
                req.user = user;
                next();
            }
        });
    }else{
        res.sendStatus(401);
    }
}

/* ---------------------------ADMIN----------------------- */
//  SIGNUP

app.post('/admin/signup', (req, res) => {
    const admin  = req.body;
    const existingAdmin = ADMINS.find( a => a.username === admin.username);
    if(existingAdmin){
        res.status(403).json({message: 'Admin already exits'});
    }else{
        ADMINS.push(admin);
        const token = generateJWT(admin);
        res.json({message: 'Admin created successfully', token})
    }
});

// LOGIN

app.post('/admin/login', (req, res) => {
    const {username, password} = req.headers;
    const admin = ADMINS.find(a => a.username === username && a.password === password);
    if(admin){
        const token = generateJWT(admin);
        res.json({message: 'Logged in successfully', token});
    }else{
        res.status(403).json({message:'Admin Authentication Failed'})
    }
})
  

// ADDING COURSES  


app.post('/admin/courses', authenticateJWT , (req, res) => {
    const course = req.body;

    /* if(!course.title){
        return res.json(411).send({message: 'please send me the correct title'})
    } */

    course.id = Date.now();  // using time stamp as the ID
    COURSES.push(course);
    res.json({message: 'courses added successfully', courseId: course.id});
});


//  UPDATING COURSES

app.put('/admin/courses/:courseID', authenticateJWT , (req, res) => {
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

app.get('/admin/courses', authenticateJWT , (req, res) => {
    res.json({courses: COURSES});
})


/* -------------------USERS---------------- */

// USER SIGNUP

app.post('/user/signup', (req, res) => {
    const user = {...req.body, purchasedCourses: []}  // this is the spread syntax -> it essentially takes all properties of the req.body and adds them to new object, here purchasedCourse array is to store the courses that the user has purchased.

    /* 
        the above one line is equal to the below four lines of code. Google it.

        const user = {
            username: req.body.username,
            password: req.body.password,
            purchasedCourses: []
        }
    */

        USERS.push(user);
        res.json({message:'signed up successfully'})
});


// USER LOGIN

app.post('/user/login', authenticateJWT , (req, res) => {
    res.json({message:'logged in successfully'});
}); 

// GET COURSES OF THE USER

app.get('/user/courses', authenticateJWT , (req, res) => {

    // we go into the COURSES array and check for the courses with property published in it.
    res.json({courses: COURSES.filter(c => c.published)});
})


// USER COURSE PURCHASED

app.post('/user/courses/:courseId', authenticateJWT , (req, res) => {
    const courseId = parseInt(req.params.courseId);
    const course = COURSES.find(c => c.id === courseId && c.published);
    if(course){

        // we used the req.user in userAuthenticatio, now we are using that info here to change the user infornmation in the global USERS array.
        req.user.purchasedCourses.push(courseId);
        res.json({message:'Course purchased successfully'});
    }else{
        res.status(403).json({message:'Course not found or available'})
    }
})

// GET USERS PURCHASED COURSES

app.get('/user/purchasedCourses', authenticateJWT , (req, res) => {
    // we need to extract the complete course object from the COURSES which have ids which are present in eq.user.purchasedCourses
    const purchasedCourses = COURSES.filter(c => req.user.purchasedCourses.includes(c.id));

    // an alternate way of doing it

  /*   var purchasedCoursesId = [];
    for(let i = 0; i < COURSES.length; i++){
        if(purchasedCoursesId.indexOf(COURSES[i].id) != -1){
            purchasedCourses.push(COURSES[i]);
        }
    } */
    res.json({purchasedCourses});
});



app.listen(3000, () => {
    console.log('successfully started at 3000');
})