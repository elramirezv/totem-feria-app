import React, { Component } from 'react';
import CompanyComponent from "../components/company";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { history } from '../helpers/history';

class CompaniesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        companies: props.data.companies,
        isLoading: false,
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
      <div className="space">
      <Row>
      {this.createComponents()}
      </Row>
      </div>
      <div className="back-button">
      <Button style = {{width: "100%", height: "100%", borderRadius: "50%"}} variant={"light"} onClick={history.goBack}>
        <h1><i class="fas fa-chevron-left"></i></h1>
      </Button>
      </div>
      </div>
    );
  }
}

export default CompaniesContainer;
