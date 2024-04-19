import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation, Outlet } from "react-router-dom";
import drawerImage from './assets/drawer.png';
import React from "react";

function Layout(props) {
    const location = useLocation();

    const getTitle = (pathname) => {
        switch (pathname) {
            case "/":
                return "Purrfessor";
            case "/mythBusters":
                return "Myth Busters";
            case "/recipeClub":
                return "Recipe Club";
            default:
                return "Select an option";
        }
    }

    return (
        <>
        <Navbar bg="light" expand="lg" className="justify-content-start" fixed="top">
            <Container fluid className="d-flex justify-content-between">
                <Nav className="flex-row">
                    <NavDropdown title={<img src={drawerImage} alt="Dropdown" className="drawer-icon"/>} id="function-change-icon">
                        <NavDropdown.Item as={Link} to="/">AI Agents</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/mythBusters">Myth Busters</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/recipeClub">Recipe Club</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Navbar.Brand className="mx-auto">{getTitle(location.pathname)}</Navbar.Brand>
                <Nav className="flex-row">
                    <Nav.Link as={Link} to="/account">A</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Outlet />
        </>
    );
}

export default Layout;