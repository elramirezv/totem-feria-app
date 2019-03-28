import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class CategoryComponent extends Component {

  render() {
    return (
      <div>
      <button>
        <Link to={'/categories/' + this.props.category.name}>
        <Card style={{ width: '10.5rem', height: '9rem'}}>
        <Card.Body ><h4 className="black-text">{this.props.category.name}</h4></Card.Body>
        </Card>
        </Link>
      </button>
      </div>
    );
  }
}

export default CategoryComponent;
