
import React from 'react';
import {Image,Carousel,Grid,Row,Col} from 'react-bootstrap';
import web1 from '../image/bg _web.png';
import sc1 from '../image/screen1.png';
import sc2 from '../image/screen2.png';
import sc3 from '../image/screen3.png';
import './style/homestyle.css'

const carouselInstance = (

      <Carousel>
        <Carousel.Item>
          <img className="img" alt="900x500" src={web1}/>
          <Carousel.Caption>
            <h3>Everything in your hands.</h3>
            <p className="paragraph">Farming will not be boring anymore if you choose Farm Passion.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" alt="900x500" src={web1}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" alt="900x500" src={web1}/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

);

class HomeComponent extends React.Component {
  render() {
    return (

        <Grid>
          <Row className="show-grid">
            <Col sm={12} lg={12}>{carouselInstance}</Col>
          </Row>
          <Row><br/></Row>
          <Row className="img" >
            <Col md={4}> <Image width={291} height={278} src={sc1} rounded /> </Col>
            <Col md={4}> <Image width={291} height={278} src={sc2} rounded /> </Col>
            <Col md={4}> <Image width={291} height={278} src={sc3} rounded /> </Col>
          </Row>

        </Grid>
    );
  }
}


export default HomeComponent;
