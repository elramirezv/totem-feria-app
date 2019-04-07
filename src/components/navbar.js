import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import '../assets/css/navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import { history } from '../helpers/history';

class NavbarComponent extends Component {

  render() {
    return (
      <Navbar>
      <Navbar.Brand className="navbar-brand-centered">
      <Image height={'50px'} width={'180px'} src={require('../assets/logos/logo-filce.png')} rounded />
      </Navbar.Brand>
      </Navbar>
    );
  }
}

export default NavbarComponent;
