import React, { Component } from 'react';
import CategoriesContainer from './containers/categories';
import './assets/css/index.css';
import data from "./data.json"

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="row">
          <div className="col-2">
          <CategoriesContainer categories={data}/>
          </div>
          <div className="col-8">
          </div>
        </div>
    </div>
    );
  }
}

export default App;
