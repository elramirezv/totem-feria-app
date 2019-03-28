import React, { Component } from 'react';
import CategoryComponent from "../components/category";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


class CategoriesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        categories: props.data,
        isLoading: false,
    }
}

  createComponents(){
    let columns=[];
    var counter = -1;
    this.state.categories.map((category) => {
      counter+=1;
      if ((counter%3)===0){
        return (
          columns.push(
            <div>
            <Col md={3} sm={3} lg = {3}>
            <CategoryComponent key={category.name} category={category}/>
            </Col>
            <p className="space">
            </p>
          </div>))
      } else {
      return(
        columns.push(
          <div>
          <Col lg={3} md= {3} sm={3}>
          <CategoryComponent key={category.name} category={category}/>
          </Col>
          </div>
        ))
    }})
    return columns;
  }


  render() {
    return (
      <div className="space">
      <Row>
      {this.createComponents()}
      </Row>
      </div>
    );
  }
}

export default CategoriesContainer;
