import React, { Component } from 'react';
import CompanyComponent from "../components/category";

class CompaniesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        companies: props.data.companies,
        isLoading: false,
    }
}

  createComponents(){
    
    return this.state.companies.map((company) => {
      return(
        <CompanyComponent key={company.name} category={company}/>
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
