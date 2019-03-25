import React, { Component } from 'react';

class ProfileComponent extends Component {

  render() {
    return (
      <div>
      <h1>{this.props.data.name}</h1>
      <img src={require('../assets/images/' + this.props.data.image)}/>
      </div>
    );
  }
}

export default ProfileComponent;
