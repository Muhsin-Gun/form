import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddStudent = () => {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    gender: '', // included gender
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const saveStudent = (e) => {
    e.preventDefault();

    axios.post('http://localhost:4000/api/addstudent', data)
      .then(() => {
        toast.success('Registration successful');
      })
      .catch((error) => {
        console.error('Registration failed:', error.response?.data || error.message);
        toast.error('Registration failed');
      });
  };

  return (
    <div className="register-container">
      <h2>Add Student</h2>
      <Form onSubmit={saveStudent}>
        <Form.Group className="mb-3">
          <Form.Control
            name="firstname"
            type="text"
            placeholder="Enter firstname"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="lastname"
            type="text"
            placeholder="Enter lastname"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Select
            name="gender"
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
