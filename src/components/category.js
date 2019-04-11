import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

class CategoryComponent extends Component {

  render() {
    return (
      <div>
      <button className="card-button">
        <Link style={{"textDecoration": "none"}} to={'/categories/' + this.props.category.name}>
        <Card>
        <Card.Body>
        <h1 className="black-text">
        <img width= {"100px"}src={this.props.category.icon}/>
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
