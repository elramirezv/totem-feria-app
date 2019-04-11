import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../assets/css/scroll.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class ScrollCompanies extends Component {

  constructor(props) {
    super(props);
    this.state = {
        companies: props.data,
        isLoading: false,
    }
}

createAlphaArray(){
  let letters = Array.apply(null, {length: 26}).map((x, i) => String.fromCharCode(65 + i));
  return letters.map((letter) => {
    return <p style={{fontWeight: "bold", padding: 0, margin: 5, border: 0}}>
          {letter}
          </p>
    })
}

displayCompanies(){
  return this.state.companies.map((company) => {
    return <ListGroup.Item>{company.name}</ListGroup.Item>
    })

}

  render() {
    return(
      <Container>
      <Row>
      <Col>
      <ListGroup variant="flush">
        {this.displayCompanies()}
      </ListGroup>
      </Col>
      <Col align="right">
      {this.createAlphaArray()}
      </Col>
      </Row>
      </Container>
)
  }
}

export default ScrollCompanies;
