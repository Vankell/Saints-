// ProductList.tsx
import React from 'react';
import { ProductCard } from './ProductCard';
import { Container } from 'react-bootstrap';

interface Product {
  id: number;
  name: string;
  brand: string;
  audience: string;
  type: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Container className='d-flex justify-content-between'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  );
};
