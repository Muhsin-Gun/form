import { useState } from 'react';
import { Link, useHistory  } from 'react-router-dom'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
    const [data, setData] = useState({ firstname: '', lastname: '' });
    const history = useHistory(); 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:4001/login', data)
            .then(() => {
                toast.success('Logged in successfully', {
                    position: 'top-right',
                    autoClose: 2000,
                });
                setTimeout(() => {
                  history.push('/dashboard'); 
                }, 2000);
            })
            .catch(() => {
                toast.error('Login failed', {
                    position: 'top-right',
                    autoClose: 3000,
                });
            });
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control name="firstname" type="text" onChange={handleChange} placeholder="Enter Firstname" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control name="lastname" type="text" onChange={handleChange} placeholder="Enter Lastname" required />
              </Form.Group>

              <Button variant="primary" type="submit">Login</Button>
            </Form>

            <p className="mt-3">
                Not a user? <Link to="/AddStudent">AddStudent</Link>
            </p>
            <ToastContainer />
        </div>
    );
};

export default Login;

