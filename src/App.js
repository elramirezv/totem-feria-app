import React, { Component } from 'react';
import CategoriesContainer from './containers/categories';
import CompaniesContainer from './containers/companies';
import SearchCompanies from './containers/search-companies';
import ProfileComponent from './components/profile';
import HiddableLogoSlider from './components/logo-slider';
import IdleTimer from 'react-idle-timer';
import './assets/css/index.css';
import data from "./data.json"
import { Router, Route} from "react-router-dom";
import { history } from './helpers/history';
import BottomButtons from './components/menu-buttons';
import NavbarComponent from './components/navbar';
import SmartGroupSlider from './components/smartgroup-slider'

const categories = data.categories;
const companies = data.companies;
const logos = data.logos;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      category: null,
      loaded: false,
      changed: false,
    }
    this.idleTimer = null
    this.onIdle = this._onIdle.bind(this)
    this.Category = this.Category.bind(this)
    this.Company = this.Company.bind(this)
    this.Categories = this.Categories.bind(this)
    this.SearchCompanies = this.SearchCompanies.bind(this)
  }


  _onIdle(e) {
   if (document.window !== 'http://localhost:3000/') {
     history.push("/");
   }
  }

  Company({ match }){
    var result;
    var back;
    companies.forEach(( company ) => {
      if(company.name === match.params.name)
      result = company;
    })
    if(match.params.searched === '0'){
      back = "/categories/" + this.state.category
    }
    else{
      back = "/search"
    }
    return(
    <>
    <NavbarComponent profile={true} title={result.stand}/>
    <ProfileComponent data={result}/>
    <BottomButtons disabled={false} previousPage={back}/>
    </>)
  }

  Category({ match }){
    var result;
    categories.forEach((category) => {
      if(category.name === match.params.name)
        result = category;
    })
    if (!this.state.loaded)
    this.setState({category: match.params.name, loaded: true})

    return <CompaniesContainer data={result} category={match.params.name}/>
  }

  Categories(){
  if(this.state.loaded)
  this.setState({loaded: false})
    return (
      <div>
    <CategoriesContainer data={categories}/>
    </div>
  )
  }

  SearchCompanies(){
  if(this.state.loaded)
  this.setState({loaded: false})
    return <SearchCompanies data={companies}/>
  }

  render() {
    return (
      <div>
      <IdleTimer
          ref={ref => { this.idleTimer = ref }}
          element={document}
          onIdle={this.onIdle}
          timeout={1000 * 40} />
      <Router history={history}>
          <HiddableLogoSlider logos={logos}/>
          <Route exact path = "/" component = {this.Categories}/>
          <Route path = "/categories/:name" component = {this.Category}/>
          <Route path = "/companies/:name&&:searched" component = {this.Company}/>
          <Route path = "/search" component = {this.SearchCompanies}/>
          <SmartGroupSlider/>
      </Router>
      </div>
    );
  }
}

export default App;
