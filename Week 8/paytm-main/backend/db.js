import mongoose, { Schema } from "mongoose";

mongoose.connect('mongodb://localhost:27017/paytm');

// const userSchema = mongoose.Schema({
//     username: String,
//     password: String,
//     firstName: String,
//     lastName: String,
// });



// elegeant solution



const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLenght: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 3,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLenght: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLenght: 50
    },

});



const User = mongoose.model("User", userSchema);

module.exports = {
    User
}