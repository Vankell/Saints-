// ProductCard.tsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    brand: string;
    price: number;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>{product.brand}</Card.Subtitle>
        <Card.Text>
          <strong>Price:</strong> ${product.price}
        </Card.Text>
        <Button variant='dark'>Buy Now</Button>
      </Card.Body>
    </Card>
  );
};
