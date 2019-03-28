import React, { Component } from 'react';
import CompanyComponent from "../components/company";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

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
            <Col md={3}>
            <CompanyComponent key={company.name} company={company}/>
            </Col>
            <p className="space">
            </p>
          </div>))
      } else {
      return(
        columns.push(
          <div>
          <Col md={3}>
          <CompanyComponent key={company.name} company={company}/>
          </Col>
          </div>
        ))
    }})
    return columns;
  }

  render() {
    return (
      <>
    <Button className='home-button' href='/'>Home</Button>
      <div className="space">
      <Row>
      {this.createComponents()}
      </Row>
      </div>
      </>
    );
  }
}

export default CompaniesContainer;
