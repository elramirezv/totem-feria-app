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
        <Card style={{ width: '10.5rem', height: '9rem' }}>
        <Card.Body><h4 className="black-text">{this.props.company.name}</h4></Card.Body>
        </Card>
        </Link>
      </button>
      </div>
    );
  }
}

export default CompanyComponent;
