import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const NavbarCom = () => {
    const item = useSelector((state) => state.cart)
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav><Link className='nav-link active' to='/'>Home</Link></Nav>
                        <Nav><Link className='nav-link active' to='/cart'>Cart</Link></Nav>

                    </Nav>
                    <Nav>
                        <span style={{ color: '#fff', fontWeight: 'bold' }}>Cart Itsam {item.length}</span>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarCom