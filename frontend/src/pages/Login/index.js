import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';


function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notFound, setNotFound] = useState(false);

    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

    useEffect(() => {
        setIsEmailEmpty(false);
        setIsPasswordEmpty(false);

    }, [email, password])


    const handleLogin = useCallback(async () => {
        if (!email)
            setIsEmailEmpty = true;

        if (!password)
            setIsPasswordEmpty = true;

        if (!isPasswordEmpty || !isEmailEmpty)
            return;

        try {
            const res = await axios.post(process.env.loginRoute, { email: email, password: password }); // TODO: fix the .env
            sessionStorage.setItem('token', res.data.token);
            setNotFound(false);
            navigate('home')
        } catch (error) {
            setNotFound(true);
        }
    });

    return (
        <div className="main-login">
            <header class='line-header'/>
            <div className='card-login'>
                <h4>Social Media</h4>
                <Form className='forms-login'>
                    <Form.Group className="mb-3 inputs-login" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="inputs-login">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Type your password" />
                    </Form.Group>
                </Form>
                <p>{notFound ? "User not found" : <></>}</p>
                <p>{isEmailEmpty ? "Empty email" : <></>}</p>
                <p>{isPasswordEmpty ? "Empty password" : <></>}</p>
                <Button onClick={() => handleLogin()} variant="outline-" id='login-button'>Login</Button>
                <button onClick={() => navigate('createAccount')} className='text-btn'>create a new account</button>
            </div>
        </div>
    );
}

export default Login;