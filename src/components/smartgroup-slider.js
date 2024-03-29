import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { withRouter } from 'react-router-dom';

class SmartGroupSlider extends Component {

  loadSlider(frases) {
    return frases.map((frase) => {
      return (
        <Carousel.Item>
        <h2>{frase}</h2>
        </Carousel.Item>
      )
    }
    )
  }

  render() {
    const frases = [["Arriendo de Tótems interactivos en www.smartgroup.cl"],["Arriendo de Tótems interactivos en www.smartgroup.cl"]]
    return (
    <div className = "frase-holder">
      <Carousel indicators={false} pauseOnHover={false} controls={false} interval={5000}>
      {this.loadSlider(frases)}
      </Carousel>
      </div>
    );

  }
}
export default SmartGroupSlider;
