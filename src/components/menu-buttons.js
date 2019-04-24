import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../assets/css/home.css';
import { history } from '../helpers/history';



class BottomButtons extends Component {

  render() {
    return (
      <Container align="center">
      <Row>
      <Col>
      <Button onClick={history.goBack} style={{"textDecoration": "none", "outline":"none"}} className="card-button">
        <Card style={{padding: "15px"}}>
        <img style={{"width": "40px", "height": "40px"}}src="https://img.icons8.com/ios/50/000000/back-filled.png"/>
        </Card>
      </Button>
      </Col>
      <Col>
      <Button onClick={<Link to="/" replace />} style={{"textDecoration": "none", "outline":"none"}} className="card-button">
        <Card style={{padding: "15px"}}>
        <img style={{"width": "40px", "height": "40px"}} src="https://img.icons8.com/windows/64/000000/home.png"/>
        </Card>
      </Button>
      </Col>
      <Col>
      <button style={{"textDecoration": "none", "outline":"none"}} className="card-button">
        <Card style={{padding: "15px"}}>
        <img style={{"width": "40px", "height": "40px"}} src="https://img.icons8.com/ios/100/000000/map-marker.png"/>
        </Card>
      </button>
      </Col>
      </Row>
      </Container>
    );
  }
}

export default BottomButtons;
