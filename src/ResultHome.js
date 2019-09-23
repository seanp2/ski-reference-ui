import React from 'react';
import './App.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Results from './Results';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import DropdownButton from 'react-bootstrap/DropdownButton'

class ResultHome extends React.Component {

  constructor(props) {
    super(props);
    this.state  = {
        view:props.view,
        showSearch:true,
        raceID:-1
    }
    this.handleChange = this.handleChange.bind(this);
    this.searchRace = this.searchRace.bind(this);
  }
  searchRace() {
    this.setState({
      showSearch:false
    })
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      raceID: e.target.value,
    })
  }

  render() {
    if(this.state.showSearch) {
      return (
        <div>
          <Form onSubmit={this.searchRace} className="result_search">
              <Form.Group controlId="searchRace">
                <Form.Label>Race URL</Form.Label>
                <Form.Control onChange={this.handleChange} placeholder="Enter Race URL" />
                <Button type='submit' >Submit</Button>
              </Form.Group>
          </Form>
        </div>
      );
    } else {
      return (
        <div>
          <Results raceID = {this.state.raceID} />
        </div>
      );
    }
  }
}

export default ResultHome;
