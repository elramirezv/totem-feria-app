import React, { Component } from 'react';

class CompanyComponent extends Component {

  render() {

    return (
      <div>
      <button >{this.props.company.name}</button>
      </div>
    );
  }
}

export default CompanyComponent;
