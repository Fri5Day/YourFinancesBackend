require('dotenv').config();

async function query(sql) {
    const conn = await connect();
    const [rows] = await conn.query(sql);
    return rows;
}

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://" + process.env.DB_USERNAME + ":" + process.env.DB_PASSWORD + "@" + process.env.DB_HOST + ":" + process.env.DB_PORT + "/" + process.env.DB_NAME);
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

module.exports = { query }
