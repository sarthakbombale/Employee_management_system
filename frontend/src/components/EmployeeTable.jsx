function employeeTable({ employees }) {

    return (
        <div>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Department</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        employees?.map((employee) => (

                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.role}</td>
                                <td>{employee.department}</td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
export default employeeTable;