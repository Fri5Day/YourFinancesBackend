const express = require('express');
const app = express(); 
const bcrypt = require('bcrypt');
const db = require('./../../config/connection')

app.post("/register", async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await db.query(`insert into tbl_users(nome, pass) values("${req.body.name}", "${hashedPassword}")`);
        res.status(201).json({
            message: 'Usuario criado com sucesso!'
        })
    }catch(error){
        return res.status(500).json({
            message: error.message
        })    
    }
})

module.exports = app;
