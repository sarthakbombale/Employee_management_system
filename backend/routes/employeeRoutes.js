const express = require('express');
const router = express.Router();

const { getEmployees, createEmployee, deleteEmployee ,updateEmployee} = require('../controllers/employeeController.js');


router.get('/', getEmployees);
router.post('/', createEmployee);
router.delete('/:id', deleteEmployee);
router.put('/:id',updateEmployee)

module.exports = router;