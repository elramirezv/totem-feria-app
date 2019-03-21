import React, { Component } from 'react';

class CategoryComponent extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
      <button >{this.props.category.name}</button>
      </div>
    );
  }
}

export default CategoryComponent;
