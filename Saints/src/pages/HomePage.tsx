import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from '../components/PageNavbar';
import HomePageNews from '../components/HomePageNews';
import { AuthProvider } from '../components/auth/AuthContext';
import HomePageHot from '../components/HomePageHot';
import { Container, Row } from 'react-bootstrap';

function HomePage() {
  return (
    <>
      <AuthProvider>
        <Container>
          <Row>
            <PageNavbar />
          </Row>
          <Row>
            <HomePageNews />
          </Row>
          <Row>
            <HomePageHot />
          </Row>
        </Container>
      </AuthProvider>
    </>
  );
}

export default HomePage;
