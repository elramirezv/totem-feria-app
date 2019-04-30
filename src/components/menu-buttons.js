import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../assets/css/home.css';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import { history } from '../helpers/history';

class BottomButtons extends Component {

    constructor(props) {
      super(props);
      this.state = {
          showMap: false
      };
      this.handleShowMap = this.handleShowMap.bind(this);
    }

  handleShowMap(){
    this.setState({ showMap: true });
  }

  render() {
    return (
      <>

      <Modal show={true} dialogClassName="custom-dialog">
        <Modal.Body>
        <Image className="logo" src={require('../assets/images/mapa.png')} rounded />
        </Modal.Body>
      </Modal>
      <Container className="buttons-container" align="center">
      <Row>
      <Col>
      <Button variant={"outline-light"} onClick={history.goBack}>
        <Card style={{padding: "15px"}}>
        <img style={{"width": "40px", "height": "40px"}}src="https://img.icons8.com/ios/50/000000/back-filled.png"/>
        </Card>
      </Button>
      </Col>
      <Col>
      <Button variant={"outline-light"} onClick={() =>history.push("/")}>
        <Card style={{padding: "15px"}}>
        <img style={{"width": "40px", "height": "40px"}} src="https://img.icons8.com/windows/64/000000/home.png"/>
        </Card>
      </Button>
      </Col>
      <Col>
      <Button variant={"outline-light"}>
        <Card style={{padding: "15px"}}>
        <img style={{"width": "40px", "height": "40px"}} src="https://img.icons8.com/ios/100/000000/map-marker.png"/>
        </Card>
      </Button>
      </Col>
      </Row>
      </Container>
      </>
    );
  }
}

export default BottomButtons;
