import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../assets/css/scroll.css';
import ListGroup from 'react-bootstrap/ListGroup';

class ScrollCompanies extends Component {

  constructor(props) {
    super(props);
    this.state = {
        companies: props.data,
        isLoading: false,
    }
}

createAlphaArray(){
  let letters = Array.apply(null, {length: 26}).map((x, i) => String.fromCharCode(65 + i));
  return letters.map((letter) => {
    return <p>{letter}</p>
    })
}

displayCompanies(){
  return this.state.companies.map((company) => {
    return <ListGroup.Item>{company.name}</ListGroup.Item>
    })

}

  render() {
    return (
  <>
  <ListGroup variant="flush">
    {this.displayCompanies()}
  </ListGroup>;
    {this.createAlphaArray()}
  </>)
  }
}

export default ScrollCompanies;
