import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import '../assets/css/navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import { history } from '../helpers/history';

class NavbarComponent extends Component {

  render() {
    return (
      <Navbar>
<<<<<<< HEAD
      <h1 style={{"color":"white", "margin-left":"30px","font-size":"40px" ,"text-transform":"uppercase"}}>{this.props.title}</h1>
=======
      <Navbar.Brand className="navbar-brand-centered">
      <Image height={'85px'} width={'120.738px'} src={require('../assets/logos/logo-filce.png')} rounded />
      </Navbar.Brand>
>>>>>>> 3b5eb3fa09f952acbde5f110efe32511a2e393ba
      </Navbar>
    );
  }
}

export default NavbarComponent;
