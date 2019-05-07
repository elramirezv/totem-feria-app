import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

class CategoryComponent extends Component {

  render() {
    return (
      <div>
      <button className="card-button">
        <Link style={{"textDecoration": "none"}} to={'/categories/' + this.props.category.name}>
        <Card>
        <Card.Body>
        <h1 className="black-text">
        <Image style={{"min-height":"100px", "max-height":"100px"}} src={require("../assets/images/"+this.props.category.icon)} rounded />
        </h1>
        </Card.Body>
        </Card>
        <div className="white-text">
        <h4>{this.props.category.name}</h4>
        </div>
        </Link>
      </button>
      </div>
    );
  }
}

export default CategoryComponent;
