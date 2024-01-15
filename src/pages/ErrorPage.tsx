import Image from 'react-bootstrap/Image';
import wrong_neighbourhood from '../assets/wrongneghiborhood.png';
import PageNavbar from '../components/PageNavbar';

const ErrorPage = () => {
  return (
    <>
      <PageNavbar />
      <Image src={wrong_neighbourhood} />
    </>
  );
};

export default ErrorPage;
