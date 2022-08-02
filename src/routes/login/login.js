const express = require('express');
const app = express();

app.post("/login", (req, res) => {
    res.json({
        eu: 'eu'
    })
})

module.exports = app;
