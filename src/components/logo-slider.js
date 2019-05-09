import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { withRouter } from 'react-router-dom';

class LogoSlider extends Component {

  loadLogos() {
    return this.props.logos.map((logo) => {
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
    const { location } = this.props;
    if (location.pathname.match("/companies/")){
      return null;
    }
    return (
      <div>
      <Carousel indicators={false} pauseOnHover={false} controls={false} interval={3000}>
      {this.loadLogos()}
      </Carousel>
      </div>
    );

  }
}

const HiddableLogoSlider = withRouter(LogoSlider);
export default HiddableLogoSlider;
