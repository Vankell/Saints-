import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from '../components/PageNavbar';
import HomePageNews from '../components/HomePageNews';
import { AuthProvider } from '../components/auth/AuthContext';
import HomePageHot from '../components/HomePageHot';

function HomePage() {
  return (
    <>
      <AuthProvider>
        <PageNavbar />
        <HomePageNews />
        <HomePageHot />
      </AuthProvider>
    </>
  );
}

export default HomePage;
