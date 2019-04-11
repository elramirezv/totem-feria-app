import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import '../assets/css/navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import { history } from '../helpers/history';

class NavbarComponent extends Component {

  render() {
    return (
      <Navbar>
      <h1 style={{"color":"white", "margin-left":"30px","font-size":"40px" ,"text-transform":"uppercase"}}>{this.props.title}</h1>
      </Navbar>
    );
  }
}

export default NavbarComponent;
