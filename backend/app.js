const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

const server = app.listen(port, () => {
    console.log(`Node.js server is listening at port ${port}`);
});

//app.use(cors())

const dictionary = {};

app.get('/', (req, res) => {
    res.send('sundalik');
});

function isValidQueryValue(value) {
    return value !== undefined && value !== null && value !== "";
}

// TODO change to post
// /add?key=persona&value=awake
app.get('/add', (req, res) => {
    const key = req.query.key;
    const value = req.query.value;
    if (!isValidQueryValue(key) || !isValidQueryValue(value)) {
        res.sendStatus(400);
        return;
    }
    dictionary[key] = value;
    res.sendStatus(200);
});

app.get('/read', (req, res) => {
    const searchString = isValidQueryValue(req.query.search) ? req.query.search : '';
    const limit = isValidQueryValue(req.query.limit) ? req.query.limit : 1000;
    res.send(JSON.stringify(dictionary));
});

app.get('/author/', (req, res) => {
    res.send('sundalik');
});