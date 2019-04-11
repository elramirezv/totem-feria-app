import React, { Component } from 'react';
import CategoryComponent from "../components/category";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from '../components/searchbar';
import Fade from 'react-reveal/Fade';
<<<<<<< HEAD
import NavbarComponent from '../components/navbar';
=======
>>>>>>> 3b5eb3fa09f952acbde5f110efe32511a2e393ba


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
<<<<<<< HEAD
      <NavbarComponent title={"Categorías"}/>
      <div className="space">
=======
      <div className="space">
      <SearchBar/>
>>>>>>> 3b5eb3fa09f952acbde5f110efe32511a2e393ba
      </div>
      <Fade>
      <div className="space">
      <Row>
      {this.createComponents()}
      </Row>
      </div>
      </Fade>
      </>
    );
  }
}

export default CategoriesContainer;
