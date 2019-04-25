import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../assets/css/profile.css';
import { Link } from "react-router-dom";
import { history } from '../helpers/history';
import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showVid: false,
        showPdf: false,
        showPage: false
    };
    this.handleShowVid = this.handleShowVid.bind(this);
    this.handleCloseVid = this.handleCloseVid.bind(this);
    this.handleClosePdf = this.handleClosePdf.bind(this)
    this.handleShowPdf = this.handleShowPdf.bind(this);
    this.handleClosePage = this.handleClosePage.bind(this);
    this.handleShowPage = this.handleShowPage.bind(this);
}
handleCloseVid() {
  this.setState({ showVid: false });
}

handleShowVid() {
  this.setState({ showVid: true });
}

handleClosePdf(){
  this.setState({showPdf: false})
}

handleShowPdf(){
  this.setState({showPdf: true})
}

handleClosePage(){
  this.setState({showPage: false})
}

handleShowPage(){
  this.setState({showPage: true})
}

getVideo(){
  if(this.props.data.video){
    return(
      <>
      <Button variant="primary" className = 'nice-button' onClick={this.handleShowVid}>
        Ver Video
      </Button>

      <Modal show={this.state.showVid} onHide={this.handleCloseVid} dialogClassName="custom-dialog">
        <Modal.Body>

          <video className = 'video-player' autoPlay loop>
          <source src={require('../assets/videos/' + this.props.data.video)}/>
          </video>
        </Modal.Body>
      </Modal>
    </>

    )
  }
}
getPdf(){
  if(this.props.data.pdf){
    return(
      <>
      <Button variant="primary" className = 'nice-button' onClick={this.handleShowPdf}>
        Más Información
      </Button>

      <Modal show={this.state.showPdf} onHide={this.handleClosePdf} dialogClassName="custom-dialog">
        <Modal.Body>
        <embed src={require("../assets/pdfs/" + this.props.data.pdf)+ '#toolbar=0&=0&navpane=0&statusbar=1'}  type="application/pdf" width="100%" height="500px" />
        </Modal.Body>
      </Modal>
    </>

    )

  }
}
getWebPage(){
  if(this.props.data.webpage){
    return(
      <>
      <Button variant="primary" className = 'nice-button' onClick={this.handleShowPage}>
        Ver Página Web
      </Button>
      <Modal show={this.state.showPage} onHide={this.handleClosePage} dialogClassName="custom-dialog">
        <Modal.Body>
        <iframe src={"https://" + this.props.data.webpage} name ="iframe_a" width="100%" height="500px" />
        </Modal.Body>
      </Modal>
    </>

    )

  }
}
  render() {
    return (
<Fade>
<Container>
  <Row style={{alignItems:"center"}}>
    <div style={{height:"310px", width: "720px", backgroundImage: `url(${require("../assets/images/"+this.props.data.image1)})`}}>
      <div style={{alignItems:"center", marginTop: "30%", width: "100%", height:"100px", "background-color":"rgba(0,0,0,0.8)"}}>
        <div style={{paddingLeft: "20px"}}>
        <h1 style={{"color": "white", paddingTop: "5px"}}>
          {this.props.data.name}
        </h1>
        <h3 style={{"color": "white", paddingBottom: "8px"}}>
          Santiago, CL
        </h3>
        </div>
      </div>
    </div>
  </Row>
  <Row>
  <div style={{paddingTop: "20px"}}>
  <div style={{backgroundColor: "rgb(208,208,208)", padding: "20px"}}>
    <h3 style={{padding: "5px"}}>
          Nosotros
    </h3>
    <div style={{display:"flex"}}>
    <div style={{padding: "5px"}}> 
    <Col>
      <Image style={{maxWidth: "330px", maxHeight:"350px"}} src={require("../assets/images/"+this.props.data.image1)} rounded />
    </Col>
    </div>
    <div style={{padding: "5px"}}>
    <Col>
      <Image style={{maxWidth: "330px", maxHeight:"350px"}} src={require("../assets/images/"+this.props.data.image1)} rounded />
    </Col>
    </div>
    </div>
  </div>
  </div>
  </Row>
  <div style={{paddingTop: "20px", paddingBottom: "30px"}}>
  <Row style={{alignItems:"center"}}>
  <Col>
      <Image style={{width: "720px", maxHeight:"400px"}} src={require("../assets/images/"+this.props.data.image)} rounded />
    </Col>
  </Row>
  </div>
</Container>
 </Fade>
    )
  }
}

export default ProfileComponent;
