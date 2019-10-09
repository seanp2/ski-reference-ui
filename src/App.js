import React from 'react';
import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <Header view='home'/>
      </div>
    );
  }
}

export default App;
