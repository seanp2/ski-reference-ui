import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';
// import Card from 'react-bootstrap/Card';
// import DropdownButton from 'react-bootstrap/DropdownButton'

class ResultRow extends React.Component {
  render() {
    if(this.props.speedRace===true)   {
        return (
            <tr>
                <td>{this.props.rank}</td>
                <td>{this.props.result.competitorID}</td>
                <td>{this.props.result.lastfirstName}</td>
                <td>{this.props.result.nation}</td>
                <td>{this.props.result.birthyear}</td>
                <td>{this.props.result.result.combined}</td>
                <td>{this.props.result.result.previousPoints}</td>
                <td>{this.props.result.result.score}</td>
            </tr>
    

        );
    } else { 
        return(
            <tr>
                <td>{this.props.rank}</td>
                <td>{this.props.result.competitorID}</td>
                <td>{this.props.result.lastfirstName}</td>
                <td>{this.props.result.nation}</td>
                <td>{this.props.result.birthyear}</td>
                <td>{this.props.result.result.firstRun}</td>
                <td>{this.props.result.result.secondRun}</td>
                <td>{this.props.result.result.combined}</td>
                <td>{this.props.result.result.previousPoints}</td>
                <td>{this.props.result.result.score}</td>
            </tr>
        );
    
    }
  }
}

export default ResultRow;
