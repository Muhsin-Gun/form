import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddStudent = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Submitting data:", formData);
      const response = await axios.post(
        "http://localhost:4000/api/addStudent",
        formData
      );
      console.log("Response from backend:", response.data);
      toast.success("✅ Student added successfully");
      setFormData({ firstname: "", lastname: "", gender: "" });
    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
      toast.error(
        error.response?.data?.error?.message || "Failed to add student."
      );
    }
  };

  return (
    <div className="register-container">
      <h2>Add Student</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            name="firstname"
            type="text"
            placeholder="Enter firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="lastname"
            type="text"
            placeholder="Enter lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">Register</Button>
      </Form>

      <p className="mt-3">
        Already a user? <Link to="/">Login</Link>
      </p>

      <ToastContainer />
    </div>
  );
};

export default AddStudent;
