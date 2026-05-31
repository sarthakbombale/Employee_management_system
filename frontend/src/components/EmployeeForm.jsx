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
      await axios.post("http://localhost:3000/api/employees", formData);
      
      // Reset form on success
      setFormData({ name: "", email: "", role: "", department: "" });
      fetchEmployees();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <br />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <br />

        {/* Role Dropdown */}
        <select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          required
        >
          <option value="" disabled>Select Role</option>
          <option value="Intern">Intern</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Senior Engineer">Senior Engineer</option>
          <option value="Manager">Manager</option>
          <option value="Director">Director</option>
          <option value="IT Services">IT Services</option>
        </select>
        <br />

        {/* Department Dropdown */}
        <select
          value={formData.department}
          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
          required
        >
          <option value="" disabled>Select Department</option>
          <option value="Engineering">Engineering</option>
          <option value="Product">Product</option>
          <option value="HR">HR</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="IT">IT</option>
        </select>
        <br />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
