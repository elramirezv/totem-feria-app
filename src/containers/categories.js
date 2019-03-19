import React, { Component } from 'react';
import CategorieComponent from "../components/categorie";


class CategoriesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        categories: props,
        isLoading: false,
    }
}
  render() {
    return (
      <div>
      <h1>Hola amiguitos</h1>
      </div>
    );
  }
}

export default CategoriesContainer;
