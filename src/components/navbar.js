import React, { Component } from 'react';
import '../assets/css/navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

class NavbarComponent extends Component {

  render() {
    if(this.props.profile === true)
    return(
      <div className="topnav" style={{"margin-top":"0px"}}>
      <div className="to-right">
        <h1>Stand {this.props.title}</h1>
      </div>
      </div>
    )
    else
    return (
      <div className="topnav">
      <h1 >{this.props.title}</h1>
      <Link style={{"textDecoration": "none", color: "white"}} to= '/search/'>
      <div className="lupita"><img src="https://img.icons8.com/color/96/000000/search.png"/></div>
      </Link>
</div>
    );
  }
}

export default NavbarComponent;
