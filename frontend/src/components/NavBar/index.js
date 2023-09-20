
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './style.css';
import Navbar from 'react-bootstrap/Navbar';
import CreatePost from '../CreatePost';
import { Outlet } from 'react-router-dom';

function NavBar() {

    return (
        <>

                <header class='line-header' />
                <Navbar id='main-nav-bar' bg="light" data-bs-theme="light">
                    <Container>
                        <Navbar.Brand href="#home">Social Media</Navbar.Brand>
                        <Nav className="me-auto">
                            <CreatePost />
                        </Nav>
                    </Container>
                </Navbar>
                <Outlet></Outlet>
                <></>
            </>
            );
}

            export default NavBar;


