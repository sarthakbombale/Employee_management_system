const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    password: process.env.DB_PASSWORD || '',
    user: process.env.DB_USER || 'root',
    database: process.env.DB_NAME || 'employee_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

(async () => {
    try {
        const connection = await pool.getConnection();
        console.log("Database Connnected Successfully✅");
        connection.release();
    } catch (error) {
        console.error("Database Connection Failed❌", error.message);
    }
})();
module.exports = pool;