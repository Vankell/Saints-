import React from 'react';
import { AuthProvider } from '../components/auth/AuthContext';
import PageNavbar from '../components/PageNavbar';
import AccountComponent from '../components/AccountComponent';

export default function AccountPage() {
  return (
    <>
      <AuthProvider>
        <PageNavbar />
        <AccountComponent />
      </AuthProvider>
    </>
  );
}
