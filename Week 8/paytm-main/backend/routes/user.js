const express = require('express');
const { userSignup, userSignin, updateBody } = require('../types');
const { JWT_SECRECT } = require('../config');
const { User } = require('../db');
const router = express.Router();


//   router to sign up

console.log('User routes loaded');

// router.post('/signup', async (req, res) => {
//     console.log('Signup route hit!'); 
    
//     const success = userSignup.safeParse(req.body);
//     if(!success){
//         res.status(411).json({
//             message:'Invalid inputs'
//         })
//     }

//     console.log('success done')
//     // const existingUser = await User.findOne({
//     //     username: req.body.username
//     // })
//     // if(existingUser){
//     //     res.status(411).json({ message: 'User already exists' }); 
//     // }
    
// });



router.post('/signup', async (res, req) => {
    const existingUser = await User.findOne({
        username: req.body.username
    })
    if(existingUser){
        res.status(411).json({ message: 'User already exists' }); 
    }
    
});

// router.post('/signup', async (req, res) => {
//     console.log('Signup route hit!'); 
//     res.status(200).json({ message: 'Signup route hit!' }); 
// });



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
});

// update user

router.put('/user', async (res, req) => {
    const success = updateBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message: 'Invalid inputs'
        })
    }

        await User.findByIdAndUpdate({_id: req.userId}, req.body);
    res.json({
        message: 'Updated successfully'
    })
    
});

// to search friends

router.get('/user/bulk', async (res, req) => {
    const filter = req.query.filter || ' ';

    const users = await User.find({
        $or: [{
            firstName: {
                // TODO -> know about this
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map( user => ({
            username : user.username,
            firstName: user.firstName,
            lastName : user.lastName,
            _id: user._id
        }))
    })
});

module.exports = router;