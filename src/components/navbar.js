import React, { Component } from 'react';
import '../assets/css/navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

class NavbarComponent extends Component {

  render() {
    if(this.props.profile === true)
    return(
      <Navbar className="profile-navbar">
      <div className="to-right">
        <h1 style={{"color":"white","fontSize":"40px"}}>Stand {this.props.title}</h1>
      </div>
      </Navbar>
    )
    else
    return (
      <Navbar>
        <h1 style={{"color":"white","fontSize":"40px" ,"textTransform":"uppercase"}}>{this.props.title}</h1>
        <Link style={{"textDecoration": "none", color: "white"}} to= '/search/'>
        <h1><img src="https://img.icons8.com/color/96/000000/search.png"/></h1>
        </Link>
      </Navbar>
    );
  }
}

export default NavbarComponent;
