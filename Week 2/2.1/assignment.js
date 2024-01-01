const express = require('express')
const app = express();
const port = 3000;

const returningGet = (req, res) => {
    res.send('GEt is working fine!!!');
}

const returningPost = (req, res) => {
    res.send('sending the username');
}

app.get('/getMethod', returningGet)
app.post('/postMethod', returningPost)

const started = () => {
    console.log(`Running at port ${port}`);
}
app.listen(port, started)