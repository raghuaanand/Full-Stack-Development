const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose  = require('mongoose');
const app = express();

app.use(express.json()); // get to know why


const SECRET = 'SuperS3cr3t1'; //replace this with any secret key


// ------------------DEFINE MONGOOSE SCHCEMAS---------------------

const userSchema = new mongoose.Schema({
    username: String,
    password: String,


    /* purchasedCourses: This is a field name in the schema, and it is meant to store an array of references to documents in another collection. In this case, it seems to be used to store references to Course documents.

[{type: mongoose.Schema.Types.ObjectId, ref:'Course'}]: This part specifies the type and reference of the elements in the purchasedCourses array.

type: mongoose.Schema.Types.ObjectId: This indicates that each element in the array should be of type ObjectId. In MongoDB, ObjectId is a data type commonly used for unique identifiers assigned to documents.

ref: 'Course': This specifies that the ObjectId references documents in the 'Course' collection. The 'Course' is likely the name of another Mongoose model or the name of a MongoDB collection that contains documents representing courses. */


    purchasedCourses: [{type: mongoose.Schema.Types.ObjectId, ref:'Course'}]
});

const adminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const coursesSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});


// ----------------DEFINE MONGOOSE MODEL-------------------

const User = mongoose.model('User', userSchema); // creates a user collection in the database that has userSchema.
const Admin = mongoose.model('Admin', adminSchema);
const Course = mongoose.model('Course', coursesSchema);


// creates token using the sign method

const generateJWT = (user) => {
    const payload = { username: user.username};
    return jwt.sign(payload, SECRET, {expiresIn: '1h'}); // this token will expire in one hour
}

// verifies the token using the verify method
// now you can see that this is same for the admin and user routes

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(authHeader){
        const token = authHeader.split(' ')[1]; 

        jwt.verify(token, SECRET, (err, user) =>{
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


// --------------------CONNECT MONGOOSE-----------------
mongoose.connect('mongodb+srv://raghucuchd:u2r4L6NT206L3riE@cluster0.pqlbxv3.mongodb.net/courses',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } );

/* ---------------------------ADMIN----------------------- */
//  SIGNUP

app.post('/admin/signup', async (req, res) => {
    const {username, password} = req.body;
    const admin = await Admin.findOne({username});
    if(admin){
        res.status(403).json({message: 'Admin already exits'});
    }else{
        const newAdmin = new Admin({username, password});
        await newAdmin.save();
        const token = jwt.sign({username, role: 'admin'}, SECRET, {expiresIn: '1h'});
        res.json({message: 'Admin created successfully', token})
    }
});

// LOGIN

app.post('/admin/login', async (req, res) => {
    const {username, password} = req.headers;
    const admin = await Admin.findOne({username, password})
    if(admin){
        const token = jwt.sign({username, role: 'admin'}, SECRET, {expiresIn: '1h'});
        res.json({message: 'Logged in successfully', token});
    }else{
        res.status(403).json({message:'Invalid username or password'})
    }
})
  

// ADDING COURSES  


app.post('/admin/courses', authenticateJWT , async (req, res) => {
    const course = new Course(req.body);
    await course.save(course);
    res.json({message: 'courses added successfully', courseId: course.id});
});


//  UPDATING COURSES

app.put('/admin/courses/:courseID', authenticateJWT , async (req, res) => {

    // findOneAndUpdate function -> takes three parameters i) first one find the course to be updated by course ID.  ii) second parameters contains the updates to be applied.  iii) third parameter is the option object that specifies that the method should return the modified document rather than the original document.


    const course =await Course.findOneAndUpdate(req.params._id, req.body, {new: true});
    if(course){ 
        res.json({message: 'courses updated successfully'});
    }else{
        res.status(404).json({message:'course is not found'});
    }
});

// GETTING ALL THE COURSES

app.get('/admin/courses', authenticateJWT ,async (req, res) => {

    //  we could give condition here like .find({price:5999})  --> to get the courses of price 5999.
    const course = await Course.find({});
    res.json({course});
})


/* -------------------USERS---------------- */

// USER SIGNUP

app.post('/user/signup', async (req, res) => {
    const {username, password}= req.body;
    const user = await User.findOne({username});
    if(user){
        res.json({message:'User already exists'});
    }else{
        const newUser = new User({username, password})
        await newUser.save();
        const token = jwt.sign({username, role: 'user'}, SECRET, {expiresIn: '1h'})
        res.json({message:'User created successfully', token});
    }
});


// USER LOGIN

app.post('/user/login' , async (req, res) => {
    const {username, password} = req.header;
    const user = User.findOne({username, password});
    if(user){
        const token = jwt.sign({username, role: 'user'}, SECRET, {expiresIn: '1h'})
        res.json({message:'logged in successfully', token});
    }else{
        res.status(403).json({message:'User authentication failed'})
    }
}); 

// GET COURSES OF THE USER

app.get('/user/courses', authenticateJWT , async (req, res) => {

    const course = await Course.find({published:'true'});
    res.json({course});
})


// USER COURSE PURCHASED

app.post('/user/courses/:courseId', authenticateJWT , async (req, res) => {
    const course = await Course.findById(req.params.courseId);
    if(course){
        const user = await User.findOne({username: req.user.username});
        if(user){
            user.purchasedCourses.push(course);
            await user.save();
            res.json({message:'Course purchased successfully'});
        }
    }else{
        res.status(404).json({message:'Course not found or available'})
    }
})

// GET USERS PURCHASED COURSES

app.get('/user/purchasedCourses', authenticateJWT , async (req, res) => {
    const user = await User.findOne({username: req.user.username}).populate('purchasedCourses')
    if(user){
        res.json({purchasedCourses: user.purchasedCourses || []});
    }else{
        res.status(403).json({message:'user not found'})
    }
});



app.listen(3000, () => {
    console.log('successfully started at 3000');
})