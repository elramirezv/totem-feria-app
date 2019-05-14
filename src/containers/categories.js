import React, { Component } from 'react';
import CategoryComponent from "../components/category";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import NavbarComponent from '../components/navbar';
import BottomButtons from '../components/menu-buttons';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';


class CategoriesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        categories: props.data,
        isLoading: false,
        showBath: false,
        showFood: false
}
        this.handleShowBaths = this.handleShowBaths.bind(this);
        this.handleCloseBaths = this.handleCloseBaths.bind(this);
        this.handleShowFood = this.handleShowFood.bind(this);
        this.handleCloseFood = this.handleCloseFood.bind(this);
      }

    handleShowBaths(){
      this.setState({ showBath: true });
    }

    handleCloseBaths(){
      this.setState({ showBath: false});
    }

    handleShowFood(){
      this.setState({ showFood: true});
    }

    handleCloseFood(){
      this.setState({ showFood: false});
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
    columns.push(
      <div>
      <Col>
      <button className="card-button" onClick={this.handleShowFood}>
        <Link style={{"textDecoration": "none"}}>
        <Card>
        <Card.Body>
        <h1 className="black-text">
        <Image style={{"min-height":"100px", "max-height":"100px"}} src={require("../assets/images/dish.png")} rounded />
        </h1>
        </Card.Body>
        </Card>
        <div className="white-text">
        <h4>Comida</h4>
        </div>
        </Link>
      </button>
      </Col>
      </div>
    )
    columns.push(
      <button className="card-button" onClick={this.handleShowBaths}>
        <Link style={{"textDecoration": "none"}}>
        <Card>
        <Card.Body>
        <h1 className="black-text">
        <Image style={{"min-height":"100px", "max-height":"100px"}} src={require("../assets/images/toilet.png")} rounded />
        </h1>
        </Card.Body>
        </Card>
        <div className="white-text">
        <h4>Baños</h4>
        </div>
        </Link>
      </button>
    )
    return columns;
  }


  render() {
    return (
      <>

      <Modal show={this.state.showBath} onHide={this.handleCloseBaths} dialogClassName="custom-dialog">
        <Modal.Body>
        <div className='modal-container'>
        <Image  className='modal-image' src={require('../assets/mapas/49.png')} rounded />
        </div>
        </Modal.Body>
      </Modal>

      <Modal show={this.state.showFood} onHide={this.handleCloseFood} dialogClassName="custom-dialog">
        <Modal.Body>
        <div className='modal-container'>
        <Image  className='modal-image' src={require('../assets/mapas/PRIMERO.png')} rounded />
        </div>
        </Modal.Body>
      </Modal>
      <NavbarComponent title={"Categorías"}/>
      <div className = 'big-container'>
      <Fade>
      <div className="space">
      <Row style={{paddingLeft: "3%"}}>
      {this.createComponents()}
      </Row>
      </div>
      </Fade>
      </div>
      <BottomButtons disabled={true} previousPage={"/"}/>
      </>
    );
  }
}

export default CategoriesContainer;
