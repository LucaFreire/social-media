import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        
    }



    return (
        <div className="main-login">
            <div className='card-login'>
                <h4>Social Media</h4>
                <Form className='formsss'>
                    <Form.Group className="mb-3 inputs-login" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="inputs-login">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Type your password" />
                    </Form.Group>
                </Form>
                <Button onClick={() => handleLogin()} variant="outline-" id='login-button'>Login</Button>
                <button onClick={() => navigate('createAccount')} id='create-account-btn'>create a new account</button>
            </div>
        </div>
    );
}

export default Login;