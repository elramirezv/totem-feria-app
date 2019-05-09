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
          showMap: false,
          image: 'mapa.png'
      };
      this.handleShowMap = this.handleShowMap.bind(this);
      this.handleCloseMap = this.handleCloseMap.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
    }

  handleShowMap(){
    this.setState({ showMap: true });
  }

  handleCloseMap(){
    this.setState({ showMap: false});
  }

  handleImageChange(){
    if (this.state.image === 'mapa.png'){
      this.setState({image: 'mapa2.png'})
    }
    else this.setState({image:'mapa.png'})
  }

  render() {
    return (
      <>
      <Modal show={this.state.showMap} onHide={this.handleCloseMap} dialogClassName="custom-dialog">
        <Modal.Body>
        <div className='modal-container'>
        <Image  className='modal-image' src={require('../assets/mapas/' + this.state.image)} rounded />
        </div>
        <Button onClick={this.handleImageChange}>Cambiar Piso</Button>
        </Modal.Body>
      </Modal>
      <Container className="buttons-container" align="center">
      <Row>
      <Col>
      <Button disabled={this.props.disabled} variant={"outline-light"} onClick={() => history.push(this.props.previousPage)}>
        <Card style={{padding: "15px"}}>
        <img style={{"width": "40px", "height": "40px"}}src="https://img.icons8.com/ios/50/000000/back-filled.png"/>
        </Card>
      </Button>
      </Col>
      <Col>
      <Button disabled={this.props.disabled} variant={"outline-light"} onClick={() =>history.push("/")}>
        <Card style={{padding: "15px"}}>
        <img style={{"width": "40px", "height": "40px"}} src="https://img.icons8.com/windows/64/000000/home.png"/>
        </Card>
      </Button>
      </Col>
      <Col>
      <Button variant={"outline-light"} onClick={this.handleShowMap}>
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
