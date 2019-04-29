import React, { Component } from 'react';
import '../assets/css/navbar.css';
import Navbar from 'react-bootstrap/Navbar';

class NavbarComponent extends Component {

  render() {
    return (
      <Navbar>
      <h1 style={{"color":"white", "marginLeft":"30px","fontSize":"40px" ,"textTransform":"uppercase"}}>{this.props.title}</h1>
      </Navbar>
    );
  }
}

export default NavbarComponent;
