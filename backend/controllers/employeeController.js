const db = require('../config/db.js');


const  getEmployees  = async (req, res) => {
    try {
        const [rows] = await db.query(`SELECT * FROM employee`)
        res.status(200).json(rows)

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "server error "});
    }
};


module.exports = { getEmployees };