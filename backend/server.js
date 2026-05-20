const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db.js');
const PORT = process.env.PORT || 4000;

const employeeRoutes = require('./routes/employeeRoutes.js');
app.use(express.json());
app.use(cors());


app.use('/api/employees', employeeRoutes);

app.listen(PORT, () => {
    console.log(`server is listening on Port ${PORT}`);
})