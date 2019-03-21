import React, { Component } from 'react';
import CategoriesContainer from './containers/categories';
import './assets/css/index.css';
import data from "./data.json"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  Category({ match }){
    data.forEach((category) => {
      if(category.name === match.params.name)
      console.log(category)
      //return <CompaniesContainer data= category.companies/>
    })
  }
  Categories(){
    return <CategoriesContainer data={data}/>
  }

  render() {
    return (
      <div className="container-fluid">

      <Router>
      <div>
      <Route exact path = "/" component = {this.Categories}/>
      <Route exact path = "/categories" component = {this.Categories}/>
      <Route path = "/categories/:name" component = {this.Category}/>
      </div>
      </Router>
    </div>
    );
  }
}

export default App;
