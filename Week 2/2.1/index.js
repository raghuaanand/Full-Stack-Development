// Express - one library that lets you create a HTTP Server 
// importing express
// what is HTTP server --> it is what that runs on backend machine and listens to the external requests.

const express = require("express"); 
const app = express();
const PORT = 3000;


// mostly input to this function is provided by the end user and this this case it is browser. We do it in 3 ways i) query params ii) header  iii) body
function sum(counter){
    var sum = 0;
    for(let i = 0; i < counter; i++){
        sum = sum + i;
    }
    return sum;
}

// req --> has everything like body params, header, body

function handleFirstRequest(req, res){

    // taking the input from the end user and work acording to that 
    var counter = req.query.counter;
    const calculatedSum = sum(counter);
    // console.log(calculatedSum);
    const ans = 'The calculated sum is ' + calculatedSum; 
    res.send(ans);
}

// at what route should the call back function go is what meant by the first argument below.
app.get('/handleSum', handleFirstRequest)

function createUserName(req, res){
    res.send('Haan bhai aa gaya!')
    console.log('Hello World!');
}
app.post('/createUser', createUserName)

function started(){
    console.log(`Example app listening on port ${PORT}`);
}

//exposes our http server on the port and also makes sure that our process runs indefinitly
app.listen(PORT, started);

