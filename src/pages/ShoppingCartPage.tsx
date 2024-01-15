import PageNavbar from '../components/PageNavbar';
import { AuthProvider } from '../components/auth/AuthContext';
import { Container } from 'react-bootstrap';
import ShoppingCartComponent from '../components/ShoppingCartComponent';

function ShoppingCartPage() {
  return (
    <>
      <AuthProvider>
        <PageNavbar />
        <Container>
          <ShoppingCartComponent />
        </Container>
      </AuthProvider>
    </>
  );
}

export default ShoppingCartPage;
