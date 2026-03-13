import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <strong>Employee Management System</strong>
                    </Navbar.Brand>
                    
                    {/* Navbar Toggler for small screens */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard" className="nav-link">Employees</Nav.Link>
                            <Nav.Link as={Link} to="/employee" className="nav-link">New Employee</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;