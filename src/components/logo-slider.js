import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class LogoSlider extends Component {

  loadLogos() {
    return this.props.logos.map((logo) => {
      console.log(logo[0])
      return (
        <Carousel.Item>
        <Row className = 'logo-holder'>
          <Col><Image className="logo" src={require('../assets/logos/'+logo[0])} rounded /></Col>
          <Col><Image className="logo" src={require('../assets/logos/'+logo[1])} rounded /></Col>
          <Col><Image className="logo" src={require('../assets/logos/'+logo[2])} rounded /></Col>
          <Col><Image className="logo" src={require('../assets/logos/'+logo[3])} rounded /></Col>
        </Row>
        </Carousel.Item>
      )
    }
    )
  }

  render() {
    return (
      <div>
      <Carousel indicators={false} pauseOnHover={false} controls={false}>
      {this.loadLogos()}
      </Carousel>
      </div>
    );
  }
}

export default LogoSlider;
