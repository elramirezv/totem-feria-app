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
<<<<<<< HEAD
        <img width= {"100px"}src={this.props.category.icon}/>
=======
        <i className={this.props.category.icon}></i>
>>>>>>> 3b5eb3fa09f952acbde5f110efe32511a2e393ba
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
