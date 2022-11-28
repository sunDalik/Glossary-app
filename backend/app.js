const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')

const server = app.listen(port, () => {
    console.log(`Node.js server is listening at port ${port}`);
});

app.use(cors())

app.get('/', (req, res) => {
    res.send('sundalik');
});


app.get('/login/', (req, res) => {
    res.send('sundalik');
});