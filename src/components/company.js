import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class CompanyComponent extends Component {

  render() {

    return (
      <div>
      <button>
        <Link to={'/companies/' + this.props.company.name}>
        <Card style={{ width: '20rem', height: '15rem' }}>
        <Card.Body><h1 className="black-text">{this.props.company.name}</h1></Card.Body>
        </Card>
        </Link>
      </button>
      </div>
    );
  }
}

export default CompanyComponent;
