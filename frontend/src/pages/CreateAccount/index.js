import './style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function CreateAccount() {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');

    function handleRegister() {

    }

    return (
        <div className="main-create-account">

            <div className='card-login'>
                <button onClick={() => navigate('/')} className='text-btn' id='back-register-btn'>Back</button>
                <h4>Register</h4>
                <Form className='forms-login'>
                    <Form.Group className="mb-3 inputs-login">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Type your name" />
                    </Form.Group>
                    <Form.Group className="mb-3 inputs-login">
                        <Form.Label>BirthDate</Form.Label>
                        <Form.Control onChange={(e) => setBirthdate(e.target.value)} type="date" placeholder="Your birthdate" />
                    </Form.Group>
                    <Form.Group className="mb-3 inputs-login" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3 inputs-login">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Type your password" />
                    </Form.Group>
                </Form>
                <Button onClick={() => handleRegister()} variant="outline-" id='login-button'>Register</Button>
            </div>
        </div>
    );
}

export default CreateAccount;