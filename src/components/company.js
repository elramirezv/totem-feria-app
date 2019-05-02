import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

class CompanyComponent extends Component {

  render() {

    return (
      <div>
      <button className="card-button">
        <Link style={{"textDecoration": "none"}} to={'/companies/' + this.props.company.name + '&0'}>
        <Card>
        <Card.Body><h4 style={{color: "black", "marginTop": "30%"}}>{this.props.company.name}</h4></Card.Body>
        </Card>
        </Link>
      </button>
      </div>
    );
  }
}

export default CompanyComponent;
