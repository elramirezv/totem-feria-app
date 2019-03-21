import React, { Component } from 'react';
import CategoryComponent from "../components/category";


class CategoriesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        categories: props.data,
        isLoading: false,
    }
}

  createComponents(){
    console.log(this.state.categories);

    return this.state.categories.map((category) => {
      return(
        <CategoryComponent key={category.name} category={category}/>
      )
    })
  }


  render() {
    return (
      <div>
      {this.createComponents()}
      </div>
    );
  }
}

export default CategoriesContainer;
