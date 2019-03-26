import React, { Component } from 'react';

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        watching: false,
    }
    this.moreInfo = this.moreInfo.bind(this)
}
  moreInfo(){
    this.setState({
      watching: true
    })
  }
  render() {
    if(!this.state.watching){
    return (
      <div>
      <h1>{this.props.data.name}</h1>
      <img src={require('../assets/images/' + this.props.data.image)}/>
      <button onClick={this.moreInfo}>más información</button>
      </div>
    );
  }
  else{
    return(
      <div>
      <embed src={require("../assets/pdfs/test.pdf")} type="application/pdf" width="100%" height="600px" />
      <video width="1000" height = "400" autoPlay loop>
      <source src={require('../assets/videos/' + this.props.data.video)}/>
      </video>
      </div>
    );
  }
  }
}

export default ProfileComponent;
