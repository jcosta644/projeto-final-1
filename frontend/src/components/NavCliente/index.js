import React from 'react';
import { Navbar, Nav, FormControl, Button, Form, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavCliente (props) {
  const emojiList = ['💣','✨','🍄','🦆','🥑','🌵','🌑','🌙','🐥','🐣','🦄','👽','🐛','🐌','🦑','🐋','🐨','🍡','🍭','🍩','🦏','🐢','🐍','🐉','🐳','🎈','🔮','🥨'];
  const randomIndex = Math.floor(Math.random()*emojiList.length);
  console.log(emojiList.length, randomIndex, emojiList[randomIndex])
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <h2>Oi, { props.name }! <span>{emojiList[randomIndex]}</span></h2>
        <Nav>
          <LinkContainer to="/voce/tem">
            <Nav.Link>Suas compras</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/voce/tem/:id">
            <Nav.Link>Detalhes de produto comprado</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavCliente;
