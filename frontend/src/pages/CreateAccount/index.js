import './style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import axios from 'axios'
import Crypto from 'crypto-js';


function CreateAccount() {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const [isEmptyInput, setIsEmptyInput] = useState(false);
    const [isCreated, setIsCreated] = useState(false);

    const handleRegister = useCallback(async () => {
        if (!name || !email || !password || !birthdate) {
            setIsEmptyInput(true);
            return;
        }

        const newUser = {
            name: name,
            email: email,
            birthdate: birthdate,
            password: password
        };

        const encryptData = Crypto.AES.encrypt(JSON.stringify(newUser), process.env.REACT_APP_ENCRYPT_JSON).toString();

        try {
            const res = await axios.post(process.env.REACT_APP_BACK_SERVER + "auth/register", { encryptData: encryptData });
            setIsCreated(true);
            console.log(res)
        } catch (error) {
            console.log(error)
            setIsCreated(false);
        }
    });

    return (
        <div className="main-create-account">
            <header class='line-header' />

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
                <p>{isEmptyInput ? "Empty inputs" : ""}</p>
                <Button onClick={() => handleRegister()} variant="outline-" id='login-button'>Register</Button>
            </div>
        </div>
    );
}

export default CreateAccount;