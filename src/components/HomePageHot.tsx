import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import card_image from '../assets/card_placeholder.png';

export default function HomePageHot() {
  return (
    <>
      <Container className='d-flex flex-column flex-lg-row align-items-center justify-content-between'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Img variant='top' src={card_image} />
            <Card.Title>Product Name</Card.Title>
            <Card.Text>Price : 50$</Card.Text>
            <Button variant='dark' className='mx-auto'>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Img variant='top' src={card_image} />
            <Card.Title>Product Name</Card.Title>
            <Card.Text>Price : 50$</Card.Text>
            <Button variant='dark' className='mx-auto'>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Img variant='top' src={card_image} />
            <Card.Title>Product Name</Card.Title>
            <Card.Text>Price : 50$</Card.Text>
            <Button variant='dark' className='mx-auto'>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Img variant='top' src={card_image} />
            <Card.Title>Product Name</Card.Title>
            <Card.Text>Price : 50$</Card.Text>
            <Button variant='dark' className='mx-auto'>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
