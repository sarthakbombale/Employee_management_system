import { useState } from "react";
import axios from "axios";

function EmployeeForm({ fetchEmployees }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    department: ""
  });

const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    await axios.post(
      "http://localhost:3000/api/employees",
      formData
    );

    fetchEmployees();

  } catch (error) {

    console.error(error);

  }

};

  return (
    <div>

      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value
            })
          }
        />

        <br />

        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value
            })
          }
        />

        <br />

        <input
          type="text"
          placeholder="Enter your role"
          value={formData.role}
          onChange={(e) =>
            setFormData({
              ...formData,
              role: e.target.value
            })
          }
        />

        <br />

        <input
          type="text"
          placeholder="Enter your department"
          value={formData.department}
          onChange={(e) =>
            setFormData({
              ...formData,
              department: e.target.value
            })
          }
        />

        <br />

        <button type="submit">
          Add Employee
        </button>

      </form>

    </div>
  );
}

export default EmployeeForm;