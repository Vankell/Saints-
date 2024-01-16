import React from 'react';
import { AuthProvider } from '../components/auth/AuthContext';
import PageNavbar from '../components/PageNavbar';
import WishlistComponent from '../components/WishlistComponent';

function WishlistPage() {
  return (
    <AuthProvider>
      <PageNavbar />
      <WishlistComponent />
    </AuthProvider>
  );
}

export default WishlistPage;
