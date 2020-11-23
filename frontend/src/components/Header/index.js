import React from 'react';
import { Navbar, Nav, FormControl, Button, Form, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header () {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <h1>ALLBERTINHO</h1>
        </LinkContainer>
        <Nav>
          <LinkContainer to="/admin">
            <Nav.Link>Painel Admin</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cadastro">
            <Nav.Link>Cadastro cliente</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/voce">
            <Nav.Link>Painel Cliente</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/voce-quer/isso">
            <Nav.Link>Detalhes Produto</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/aisdhaoidsh">
            <Nav.Link>404</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header;
