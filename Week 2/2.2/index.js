const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 8000;


app.use(bodyParser.json())

//  middleware in function has 3 parameters

/* function middleware1(req, res, next){
    console.log('from inside the middleware' + req.headers.counter)
    next();     
}

app.use(middleware1); */


function calculateSum(counter) {
    var sum = 0;
    for(var i = 0; i < counter; i++){
        sum = sum + i;
    }
    return sum;
}

function calculateMul(counter) {
    var mul = 1;
    for(var i = 0; i < counter; i++){
        mul = mul + i;
    }
    return mul;
}


function callbackPost (req, res){

    // const counter = req.query.counter;

    // second way of sednig data along with request is with using headers
    // const counter = req.headers.counter;

    // in real projects 95 percent of the time we send data in body
    // console.log(req.body);
    const counter = req.body.counter;
    const sum = calculateSum(counter);
    const mul = calculateMul(counter)
    // const result = 'The sum is ' + ans;
    // res.send(result);

    //  for sending json as response of the body
    // 99 percent of the time we return json object
    var answerObject = {
        sum: sum,
        mul: mul
    }
    
    res.send(answerObject);
}


// app.get('/postMethod', callbackPost)
app.post('/postMethod', callbackPost)




function sendPage(req, res){
/*     res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">x
        <title>Document</title>
    </head>
    <body>
        <b>Hello there</b>
    </body>
    </html>`) */

    // we can directly send the file 
    res.sendFile(__dirname + '/index.html')
}

app.get('/', sendPage);






function started() {
    console.log(`port started at ${port}`)
}
app.listen(port, started);