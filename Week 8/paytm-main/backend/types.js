const zod = require('zod');

const userSignup = zod.object({
    username: zod.string().email(),
    password: Zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
});

const userSignin = zod.object({
    username: zod.string().email(),
    password: password.string()
})

module.exports = {
    userSignup: userSignup,
    userSignin: userSignin
}