import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../assets/css/profile.css';
import { Link } from "react-router-dom";
import { history } from '../helpers/history';
import Row from 'react-bootstrap/Row';


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
<>
<div className='container'>
<div>
<img className='profile-logo' src = {require('../assets/logos/' + this.props.data.logo)} width='150px'/>
</div>
<div className='name-tag'>
<h1>{this.props.data.name}</h1>
</div>
</div>
<img className = 'map-image' src={require('../assets/images/' + this.props.data.image)}/>
<h5 className='company-description'> {this.props.data.description}</h5>
{this.getVideo()}
{this.getPdf()}
{this.getWebPage()}
<div className="back-button">
<Button style = {{ width: "100%", height: "100%", borderRadius: "50%"}} variant={"light"} onClick={history.goBack}>
  <h1><i class="fas fa-chevron-left"></i></h1>
</Button>
</div>
</>
    );
  }
}

export default ProfileComponent;
