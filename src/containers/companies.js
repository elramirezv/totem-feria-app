import React, { Component } from 'react';
import CompanyComponent from "../components/company";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { history } from '../helpers/history';
import Fade from 'react-reveal/Fade';
import NavbarComponent from '../components/navbar';
import BottomButtons from '../components/menu-buttons';
import { Link } from "react-router-dom";

class CompaniesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        companies: props.data.companies,
        isLoading: false,
        category: props.category
    }
}

  createComponents(){
    let columns=[];
    var counter = -1;
    this.state.companies.map((company) => {
      counter+=1;
      console.log(company);
      if ((counter%3)===0){
        return (
          columns.push(
            <div>
            <Col>
            <Link style={{"textDecoration": "none"}} to={'/companies/' + company.name + '&0'}>
            <img src={require('../assets/logos/'+company.logo)} style = {{'max-width':'200px'}}/>
            </Link>
            </Col>

            <p className="space">
            </p>
          </div>))
      } else {
      return(
        columns.push(
          <div>
          <Col>
          <Link style={{"textDecoration": "none"}} to={'/companies/' + company.name + '&0'}>
          <img src={require('../assets/logos/'+company.logo)} style = {{'max-width':'200px'}}/>
          </Link>
          </Col>
          </div>
        ))
    }})
    return columns;
  }

  render() {
    return (
      <>
    <NavbarComponent title={this.state.category}/>
      <div className='big-container'>
      <Fade>
      <div className="space">
      <Row style={{paddingLeft: "3%"}}>
      {this.createComponents()}
      </Row>
      </div>
      </Fade>
      </div>
      <BottomButtons disabled={false} previousPage={"/"}/>
      </>
    );
  }
}

export default CompaniesContainer;
