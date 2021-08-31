const express = require('express');

const app = express();
const PORT = 1337;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html')
})

app.get('/unicorn.css', (req, res) => {
    res.sendFile(__dirname + '/frontend/unicorn.css')
})

app.listen(PORT, () => {
    console.log('server is listening on port ' + PORT);
})