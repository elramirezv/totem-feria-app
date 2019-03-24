import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CompanyComponent extends Component {

  render() {

    return (
      <div>
      <button>
      <Link to={'/companies/' + this.props.company.name}>{this.props.company.name}</Link>
      </button>
      </div>
    );
  }
}

export default CompanyComponent;
