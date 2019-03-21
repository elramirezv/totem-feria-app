import React, { Component } from 'react';
import CategoryComponent from "../components/category";


class CompaniesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        category: props.category,
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

export default CompaniesContainer;
