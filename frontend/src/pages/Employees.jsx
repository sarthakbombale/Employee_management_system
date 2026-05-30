import { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeTable from '../components/EmployeeTable'
import EmployeeForm from '../components/EmployeeForm';

function Employees({ fetchEmployees }) {
    const [employees, setEmployees] = useState([]);


    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/employees");
                setEmployees(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchEmployee();
    }, [])
    return (


        <div>
            <h1>Employees</h1>
            <EmployeeForm fetchEmployees={fetchEmployees} />
            <EmployeeTable employees={employees} />

        </div>
    )

}
export default Employees