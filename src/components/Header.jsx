import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect sticky="top" >
  <Container>
    <LinkContainer to='/'>
  <Navbar.Brand ><i class="fas fa-home"></i>Houserent</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <LinkContainer to='/mypage'>
        <Nav.Link>My page</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/login'>
      <Nav.Link ><i class="fas fa-user-plus"></i>Sign in</Nav.Link>
      </LinkContainer>
    </Nav>
    
  </Navbar.Collapse>
</Container>
</Navbar>
        </div>
    )
}

export default Header
