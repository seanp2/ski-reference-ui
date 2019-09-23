import React from 'react';
import ResultTable from './ResultTable';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// import Card from 'react-bootstrap/Card';
// import DropdownButton from 'react-bootstrap/DropdownButton'

class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result:[],
    }
    
   
  
  }
  async componentDidMount() {
    const results = await this.getResults();
    this.setState({
      result:results
    })
    return;
  }

  async getResults() {
    let data = null;
    await fetch("http://localhost:8181/results/" + this.props.raceID)
    .then(response => response.json())
    .then(jsonData => data =  jsonData )
    console.log(data);
    return data;
  }
  render() {
    return (
      <div className="Results">
        <ResultTable result={this.state.result}/>
      </div>
    );
  }
}

export default Results;
