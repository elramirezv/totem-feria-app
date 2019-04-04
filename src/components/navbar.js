import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import '../assets/css/navbar.css';
import Navbar from 'react-bootstrap/Navbar';

class NavbarComponent extends Component {

  render() {
    return (
      <Navbar>
      <Navbar.Brand className="navbar-brand-centered" href="/">
      <Image height={'50px'} width={'180px'} src={require('../assets/logos/logo-filce.png')} rounded />
      </Navbar.Brand>
      </Navbar>
    );
  }
}

export default NavbarComponent;
