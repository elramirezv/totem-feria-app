import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../assets/css/profile.css';
import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import VideoComponent from './video';


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
      <div style={{"textAlign": "center"}}>
      <Button variant="light-outline" onClick={this.handleShowVid}>
        <h2 style={{"color": "white", paddingTop: "50px"}}>
        <Image style={{"min-height":"60px", "max-height":"60px"}} src={require("../assets/images/play.png")} rounded />
        </h2>
      </Button>
      </div>

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
      <div style={{"textAlign": "center"}}>
      <Button variant="light-outline" onClick={this.handleShowPage}>
        <h2 style={{"color": "white", paddingTop: "50px"}}>
        <Image style={{"min-height":"70px", "max-height":"70px"}} src={require("../assets/images/web.png")} rounded />
        </h2>
      </Button>
      </div>
      <Modal show={this.state.showPage} onHide={this.handleClosePage} dialogClassName="custom-dialog">
        <Modal.Body>
        <img src={require('../assets/QR/' + this.props.data.name + '_qr.png')} />
        </Modal.Body>
      </Modal>
    </>

    )

  }
}
  render() {
    return (
      <>
<Fade>
<div className="container-test">
  <Row style={{alignItems:"center"}}>
    <div style={{height:"340px", width: "100%", backgroundImage: `url(${require("../assets/images/"+this.props.data.image)})`}}>
      <div style={{alignItems:"center", marginTop: "28.6%", width: "100%", height:"100px", "background-color":"rgba(0,0,0,0.8)"}}>
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
    <div style={{width: "370px", height:"180px", backgroundSize: "100% 100%", backgroundImage: `url(${require("../assets/images/"+this.props.data.tinylogo1)})`}}>
      <div style={{width: "100%", height:"100%", "background-color":"rgba(0,0,0,0.7)"}}>
        {this.getVideo()}
      </div>
    </div>
    </Col>
    </div>
    <div style={{padding: "5px"}}>
    <Col>
    <div style={{width: "370px", height:"180px", backgroundSize: "100% 100%", backgroundImage: `url(${require("../assets/images/"+this.props.data.tinylogo2)})`}}>
      <div style={{width: "100%", height:"100%", "background-color":"rgba(0,0,0,0.7)"}}>
        {this.getWebPage()}
      </div>
    </div>
    </Col>
    </div>
    </div>
  </div>
  </div>
  </Row>
  <div style={{paddingTop: "20px"}}>
  <Row style={{alignItems:"center"}}>
  <Col>
      <Image style={{"min-height":"500px", "max-height":"500px", "width": "825px"}} src={require("../assets/mapas/"+this.props.data.mapa)} rounded />
    </Col>
  </Row>
  </div>
  </div>
 </Fade>
 </>
    )
  }
}

export default ProfileComponent;
