const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mysql2 = require('mysql2');
const db = require('./config/db.js');
const Port = process.env.PORT || 4000;


app.use(express.json());
app.use(cors());

app.listen(Port, () => {
    console.log(`server is listening on Port ${Port}`);
})