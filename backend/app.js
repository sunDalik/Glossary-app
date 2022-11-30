const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const path = require('path');

const server = app.listen(port, () => {
    console.log(`Node.js server is listening at port ${port}`);
});

app.use(cors())
const buildPath = path.normalize(path.join(__dirname, '../frontend/build'));
app.use(express.static(buildPath));



const mongoose = require('mongoose');
const GlossariesModel = mongoose.model('Glossaries', new mongoose.Schema({}, { strict: false }));

// address 'mongodb' was defined in docker-compose
// mydb is the database name, it will be created automatically if it doesn't exist
mongoose.connect('mongodb://mongodb:27017/mydb', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error!'));
db.once('open', async () => {
    console.log('Connected!');
    const count = await GlossariesModel.countDocuments();
    if (count == 0) await GlossariesModel.insertMany([{}]);
})


app.get('/', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

function isValidQueryValue(value) {
    return value !== undefined && value !== null && value !== "";
}

// /add?key=persona&value=awake
app.post('/add', async (req, res) => {
    const key = req.query.key;
    const value = req.query.value;
    if (!isValidQueryValue(key) || !isValidQueryValue(value)) {
        res.sendStatus(400);
        return;
    }
    await GlossariesModel.updateOne({}, { [key]: value });
    res.sendStatus(200);
});

app.get('/read', async (req, res) => {
    const searchString = isValidQueryValue(req.query.search) ? req.query.search : '';
    const limit = isValidQueryValue(req.query.limit) ? req.query.limit : 1000;
    const dictionary = await GlossariesModel.findOne();
    console.log(dictionary);
    res.send(JSON.stringify(dictionary));
});

app.get('/author/', (req, res) => {
    res.send('sundalik');
});