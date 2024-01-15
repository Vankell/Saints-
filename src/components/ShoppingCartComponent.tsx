import React from 'react';
import { Container, ListGroup, Row } from 'react-bootstrap';

function ShoppingCartComponent() {
  return (
    <Container>
      <Row>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  );
}

export default ShoppingCartComponent;
