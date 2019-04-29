import React, { Component } from 'react';
import CategoryComponent from "../components/category";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import NavbarComponent from '../components/navbar';


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
            <Col>
            <CategoryComponent key={category.name} category={category}/>
            </Col>
            <p className="space">
            </p>
          </div>))
      } else {
      return(
        columns.push(
          <div>
          <Col>
          <CategoryComponent key={category.name} category={category}/>
          </Col>
          </div>
        ))
    }})
    return columns;
  }


  render() {
    return (
      <>
      <NavbarComponent title={"Categorías"}/>
      <Link to= '/search/'>BUSCAR</Link>
      <div className="space">
      </div>
      <Fade>
      <div className="space">
      <Row style={{paddingLeft: "3%"}}>
      {this.createComponents()}
      </Row>
      </div>
      </Fade>
      </>
    );
  }
}

export default CategoriesContainer;
