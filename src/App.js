import React, { Component } from 'react';
import CategoriesContainer from './containers/categories';
import CompaniesContainer from './containers/companies';
import ScrollCompanies from './containers/search-companies';
import ProfileComponent from './components/profile';
import LogoSlider from './components/logo-slider';
import IdleTimer from 'react-idle-timer';
import './assets/css/index.css';
import data from "./data.json"
import { MemoryRouter, Route, Link, Redirect, Switch} from "react-router-dom";
import { Router } from "react-router";
import { history } from './helpers/history';
import Button from 'react-bootstrap/Button';
import BottomButtons from './components/menu-buttons';
import NavbarComponent from './components/navbar';

const categories = data.categories;
const companies = data.companies;
const logos = data.logos;

class App extends Component {

  constructor(props) {
    super(props)
    this.idleTimer = null
    this.onIdle = this._onIdle.bind(this)
  }


  _onIdle(e) {
   if (document.window !== 'http://localhost:3000/') {
     history.push("/")
   }
 }

  Company({ match }){
    var result;
    companies.forEach(( company ) => {
      if(company.name === match.params.name)
      result = company;
    })

    return <ProfileComponent data={result}/>
  }

  Category({ match }){
    var result;
    categories.forEach((category) => {
      if(category.name === match.params.name)
        result = category;
    })

    return <CompaniesContainer data={result} category={match.params.name}/>
  }

  Categories(){
    return (
      <div>
    <CategoriesContainer data={categories}/>
    </div>
  )
  }

  SearchCompanies(){
    return <ScrollCompanies data={companies}/>
  }

  render() {
    return (
      <div>
      <IdleTimer
          ref={ref => { this.idleTimer = ref }}
          element={document}
          onIdle={this.onIdle}
          timeout={1000 * 20} />
      <LogoSlider logos={logos}/>
      <Router history={history}>
        <Switch>
          <Route exact path = "/" component = {this.Categories}/>
          <Route path = "/companies/" component = {this.SearchCompanies}/>
          <Route path = "/categories/:name" component = {this.Category}/>
          <Route path = "/companies/:name" component = {this.Company}/>
        </Switch>
      </Router>
      <BottomButtons history={history}/>
    </div>
    );
  }
}

export default App;
