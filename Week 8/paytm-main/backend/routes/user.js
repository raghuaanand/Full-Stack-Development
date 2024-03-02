const express = require('express');
const { userSignup, userSignin } = require('../types');
const User = require('../db');
const { JWT_SECRECT } = require('../config');

const router = express.Router();


//   router to sign up

router.post('/signup', async (res, req) => {
    const success = userSignup.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: 'Incorrect inputs'
        });
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if(existingUser){
        return res.status(411).json({
            message: 'Email already exits'
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRECT)

    res.json({
        message:'User created successfully',
        token: token
    })
});


// router to sign in

router.post('/signin', async (res, req) => {
    const success = userSignin.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message:'Invalid inputs'
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if(user){
        const token = jwt.sign({
            userId: user._id,

        }, JWT_SECRECT)

        res.json({
            token:token
        })
        return;
    }

    res.status(411).json({
        message:'Error while loging in'
    })
})

module.exports = router;