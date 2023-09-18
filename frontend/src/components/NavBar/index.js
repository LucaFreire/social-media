
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './style.css';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <>
            <header class='line-header'/>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Social Media</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Profile</Nav.Link>
                        <Nav.Link href="#pricing">Configs</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <></>
        </>
    );
}

export default NavBar;