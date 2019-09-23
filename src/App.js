import React from 'react';
import './App.css';
import Results from './Results';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import DropdownButton from 'react-bootstrap/DropdownButton'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results:this.getResults(),
    }
  }
  getResults() {
    let data = null;
    fetch("http://localhost:8181/results/87524")
    .then(response => response.json())
    .then(jsonData => data =  jsonData )
    return data;
  }
  render() {
    return (
      <div>
        <Header view="Home"/>
      </div>
    );
  }
}

export default App;
