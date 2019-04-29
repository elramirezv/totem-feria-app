import React, { Component } from 'react';
import CompanyComponent from "../components/company";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { history } from '../helpers/history';
import Fade from 'react-reveal/Fade';
import NavbarComponent from '../components/navbar';

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
      if ((counter%3)===0){
        return (
          columns.push(
            <div>
            <Col>
            <CompanyComponent key={company.name} company={company}/>
            </Col>
            <p className="space">
            </p>
          </div>))
      } else {
      return(
        columns.push(
          <div>
          <Col>
          <CompanyComponent key={company.name} company={company}/>
          </Col>
          </div>
        ))
    }})
    return columns;
  }

  render() {
    return (
      <div>
    <NavbarComponent title={this.state.category}/>
      <Fade>
      <div className="space">
      <Row style={{paddingLeft: "3%"}}>
      {this.createComponents()}
      </Row>
      </div>
      </Fade>
      </div>
    );
  }
}

export default CompaniesContainer;
