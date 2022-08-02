const express = require('express');
const app = express();

app.use('/', require('./login/login'));
app.use('/', require('./register/register'));

app.get("/", (req, res) => {
    res.json({
        eu: 'eu'
    })
})

module.exports = app;
