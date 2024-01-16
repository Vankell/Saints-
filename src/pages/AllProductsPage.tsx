import React from 'react';
import PageNavbar from '../components/PageNavbar';
import { AuthProvider } from '../components/auth/AuthContext';

const AllProductsPage: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <PageNavbar />
      </AuthProvider>
    </>
  );
};

export default AllProductsPage;
