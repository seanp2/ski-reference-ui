import React from 'react';
import './App.css';

import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import DropdownButton from 'react-bootstrap/DropdownButton'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state  = {
        view:props.view
    }
  }

  render() {
    return (
      <div>
         <Button onClick={() => {this.props.changeView({name:'result-home'})}}>Results</Button>
      </div>
    );
  }
}

export default Home;
