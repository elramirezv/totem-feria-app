import React, { Component } from 'react';
import CategoryComponent from "../components/category";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


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
            <Col md={3}>
            <CategoryComponent key={category.name} category={category}/>
            </Col>
            <p className="space">
            </p>
          </div>))
      } else {
      return(
        columns.push(
          <div>
          <Col md={3}>
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
      <Container>
      <Row>
      {this.createComponents()}
      </Row>
      </Container>
      </div>
    );
  }
}

export default CategoriesContainer;
