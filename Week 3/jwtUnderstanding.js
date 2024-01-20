const jwt = require('jsonwebtoken');

const secret = 'Supers3cr3t1';

let ans = jwt.sign({
    username:'raghu@gmail.com',
    password:'1234567'
}, secret);

console.log(ans);

jwt.verify(ans, secret, (err, originalString) => {
    console.log(originalString);
})