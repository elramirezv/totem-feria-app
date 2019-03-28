import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/profile.css';


class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
}
handleClose() {
  this.setState({ show: false });
}

handleShow() {
  this.setState({ show: true });
}
  render() {
    return (
      <>
      <h1>{this.props.data.name}</h1>
      <img className = 'map-image' src={require('../assets/images/' + this.props.data.image)}/>
        <Button variant="primary" onClick={this.handleShow}>
          Ver Video
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} dialogClassName="custom-dialog">
          <Modal.Body>

            <video className = 'video-player' autoPlay loop>
            <source src={require('../assets/videos/' + this.props.data.video)}/>
            </video>
          </Modal.Body>
        </Modal>
      </>
    );
    // return(
    //   <div>
    //   </div>
    // );
  }
}

export default ProfileComponent;
