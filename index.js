const express = require('express');
const datastore = require('nedb');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Starting server at ${port}`));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const db = new datastore('logs.db');
db.loadDatabase();

app.get('/weather/:latlon', async(req, res) => {
    const latlon = req.params.latlon;

    //db.insert(data);

    const apiKey = process.env.API_KEY;
    const lang = 'sr';
    const units = 'si';
    const apiURL = `https://api.darksky.net/forecast/${apiKey}/${latlon}?lang=${lang}&units=${units}&exclude=flags`;
    const ans = await fetch(apiURL);
    const json = await ans.json();

    res.json({ json });
});