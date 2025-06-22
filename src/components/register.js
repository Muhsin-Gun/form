
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:4001/register', data)
      .then(() => {
        toast.success('Registration successful');
      })
      .catch(() => {
        toast.error('Registration failed');
      });
  };

  return (
    <div className="register-container">
        <h2>Register</h2>
      <Form onSubmit={handleSubmit}> <Form.Group className="mb-3">
          <Form.Control name="username" type="text"placeholder="Enter username" 
            onChange={handleChange} required
           />
        </Form.Group>
       
        <Form.Group className="mb-3">
          <Form.Control  name="email"  type="text"placeholder="Enter email"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control   name="password" type="text"   placeholder="Enter password"
            onChange={handleChange}
            required
          />
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

export default Register;

