import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CategoryComponent extends Component {

  render() {
    return (
      <div>
      <button>
        <Link to={this.props.category.name}>{this.props.category.name}</Link>
      </button>
      </div>
    );
  }
}

export default CategoryComponent;
