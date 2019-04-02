import React, { Component } from 'react';
import { Link } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


class SearchBar extends Component {

  render() {
    return (
      <InputGroup size="lg">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg"><i class="fas fa-search"></i></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
    );
  }
}

export default SearchBar;
