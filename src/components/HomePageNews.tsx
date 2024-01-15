import Carousel from 'react-bootstrap/Carousel';
import news_image from '../assets/placeholdernews.png';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import news_banner from '../assets/newsbanner.png';

const HomePageNews = () => {
  return (
    <Container>
      <Row className='d-flex align-content-center justify-content-center'>
        <Col className=''>
          <Image src={news_banner} rounded fluid className='w-100' />
        </Col>
        <Col className='d-flex justify-content-center' md='8'>
          <Carousel controls={true}>
            <Carousel.Item>
              <Image src={news_image} rounded fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={news_image} rounded fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={news_image} rounded fluid />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePageNews;
