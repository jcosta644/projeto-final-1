import React from 'react';
import { Navbar, Nav, FormControl, Button, Form, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavAdmin (props) {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <h2>Oi, Herbert! <span>🐸</span></h2>
        <Nav>
          <LinkContainer to="/admin/novo-produto">
            <Nav.Link>Cadastrar produto</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin/ativos">
            <Nav.Link>Anúncios ativos</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin/vendas">
            <Nav.Link>Histórico de vendas</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin/pendentes">
            <Nav.Link>Anúncios pendentes</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavAdmin;
