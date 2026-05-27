function employeeTable({ employee }) {

    return (
        <div>
            {employee.map(() => {
                <h3 key={employee.id}>{employee.name}</h3>
            })}
        </div>
    )
}
export default employeeTable;