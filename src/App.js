import React, { Component } from 'react';
import CategoriesContainer from './containers/categories';
import CompaniesContainer from './containers/companies';
import './assets/css/index.css';
import data from "./data.json"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  Category({ match }){
    var companies = {};
    data.forEach((category) => {
      if(category.name === match.params.name){
        companies = category;
    }
    })

    return <CompaniesContainer data={companies}/>
  }
  
  Categories(){
    return <CategoriesContainer data={data}/>
  }

  render() {
    return (
      <div>
      <Router>
        <div>
          <Route exact path = "/" component = {this.Categories}/>
          <Route path = "/:name" component = {this.Category}/>
        </div>
      </Router>
    </div>
    );
  }
}

export default App;
