import React, { Component } from 'react';

class CategoryComponent extends Component {

  render() {
    return (
      <div>
      <h1>{this.props.name}</h1>
      <h1>{this.props.description}</h1>
      <h1>{this.props.location}</h1>
      <h1>{this.props.logo}</h1>
      </div>
    );
  }
}

export default CategoryComponent;
