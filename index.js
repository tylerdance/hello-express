const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello, SEI')
})

app.get('/about', function(req, res) {
    res.send('About page')
})

app.get('/blog', (req, res) => {
    res.send('welcome to my blog')
})

app.listen(8000)


