import React, { Component } from 'react';
import '../assets/css/navbar.css';
import { Link } from "react-router-dom";
import Bounce from 'react-reveal/Bounce';

class NavbarComponent extends Component {

  render() {
    if(this.props.profile === true)
    return(
      <div className="topnav" style={{"margin-top":"0px"}}>
        <h1>Stand {this.props.title}</h1>
      </div>
    )
    else
    return (
      <div className="topnav">
      <h1 >{this.props.title}</h1>
      <Link style={{"textDecoration": "none", color: "white"}} to= '/search/'>
      <Bounce>
      <div className="lupita"><img src={require("../assets/images/search.png")} style={{"max-width":"75px"}}/></div>
      </Bounce>
      </Link>
</div>
    );
  }
}

export default NavbarComponent;
