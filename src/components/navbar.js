import React, { Component } from 'react';
import '../assets/css/navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

class NavbarComponent extends Component {

  render() {
    return (
      <Navbar>
        <h1 style={{"color":"white","fontSize":"40px" ,"textTransform":"uppercase"}}>{this.props.title}</h1>
        <Link style={{"textDecoration": "none", color: "white"}} to= '/search/'>
        <div style={{marginLeft: "350px", marginRight: "0px"}}>
        <h1><img src="https://img.icons8.com/color/96/000000/search.png"/></h1>
        </div>
        </Link>
      </Navbar>
    );
  }
}

export default NavbarComponent;
