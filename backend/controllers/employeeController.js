const db = require('../config/db');

// GET all employees
const getEmployees = async (req, res) => {
    try {

        const [rows] = await db.query(
            'SELECT * FROM employee'
        );

        res.status(200).json(rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Server Error'
        });

    }
};

// CREATE employee
const createEmployee = async (req, res) => {

    try {

        const { name, email, role, department } = req.body;

        // Validation
        if (!name || !email || !role || !department) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        const [result] = await db.query(
            `INSERT INTO employee 
      (name, email, role, department)
      VALUES (?, ?, ?, ?)`,
            [name, email, role, department]
        );

        res.status(201).json({
            message: 'Employee created successfully',
            employeeId: result.insertId
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Server Error',
            mysqlError: error.message
        });

    }

};

const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.query(`DELETE FROM employee WHERE id = ?`, id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json({ message: "Employee deleted successfully" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" })
    }
}

module.exports = {
    getEmployees,
    createEmployee,
    deleteEmployee
};