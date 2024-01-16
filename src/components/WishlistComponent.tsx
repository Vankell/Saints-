import React from 'react';
import { Button, Container, Row, ListGroup } from 'react-bootstrap';
import { AuthProvider } from './auth/AuthContext';

function WishlistComponent() {
  return (
    <>
      <AuthProvider>
        <Container>
          <Row>
            <ListGroup>
              <ListGroup.Item></ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Row>
        </Container>
        <Button>get data</Button>
      </AuthProvider>
    </>
  );
}

export default WishlistComponent;
